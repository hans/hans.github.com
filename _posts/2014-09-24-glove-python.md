---
layout: post
title: A GloVe implementation in Python
excerpt: More adventures in the land of word embeddings
main: true
---

[GloVe (**Glo**bal **Ve**ctors for Word Representation)][1] is a tool recently
released by Stanford NLP Group researchers [Jeffrey Pennington][2],
[Richard Socher][3], and [Chris Manning][4] for learning continuous-space vector
representations of words.

<p style="text-align:center;font-size:88%">(jump to: <a
href="#theory">theory</a>, <a href="#implementation">implementation</a>)</p>

## Introduction

These real-valued word vectors have proven to be useful for all sorts of natural
language processing tasks, including parsing,[^1] named entity recognition,[^2]
and (very recently!) machine translation.[^3][^4]

It's been shown (and widely shared by this point) that these word
vectors exhibit interesting **semantic and syntactic regularities**. For
example, we find that claims like the following hold for the associated
word vectors:

{::nomarkdown}\[\begin{align*}\text{king} - \text{man} + \text{woman} &\approx \text{queen} \\ \text{brought} - \text{bring} + \text{seek} &\approx \text{sought}\end{align*}\]{:/}

There's quite a bit of buzz around the tools which build these word
vectors at the moment, so I figured it would be worth it to provide a
down-to-earth coverage of GloVe, one of the newest methods.

The GloVe authors [present some results][11] which suggest that their
tool is competitive with Google's popular [`word2vec`][8] package. In
order to better understand how GloVe works and to make available a nice
learning resource, I decided to port the open-source (yay!) but somewhat
difficult-to-read (no!) [GloVe source code][12] from C to Python.

In this post I'll give an explanation by intuition of how the GloVe method
works[^5] and then provide a quick overview of the implementation in Python. You
can find the complete Python code (just 187 SLOC, including command-line
argument processing, IO, etc.) in [the `glove.py` GitHub repo][13].

A quick disclaimer before we begin: I wrote this code for tutorial purposes. It
is nowhere near production-ready in terms of efficiency. If you would like to
parallelize and optimize it as an exercise, be my guest --- just be sure to
share the results!

## Theory

The GloVe model learns word vectors by examining *word co-occurrences* within a
text corpus. Before we train the actual model, we need to construct a
*co-occurrence matrix* \\(X\\), where a cell \\(X_{ij}\\) is a "strength" which
represents how often the word \\(i\\) appears in the context of the word
\\(j\\). We run through our corpus just once to build the matrix \\(X\\), and
from then on use this co-occurrence data in place of the actual corpus. We will
construct our model based only on the values collected in \\(X\\).

Once we've prepared \\(X\\), our task is to decide vector values in continuous
space for each word we observe in the corpus. We will produce vectors with a
soft constraint that for each word pair of word \\(i\\) and word \\(j\\),[^6]

{::nomarkdown}\[\begin{equation}\vec{w}_i^T \vec{w}_j + b_i + b_j = \log X_{ij}.\end{equation}\]{:/}

where \\(b_i\\) and \\(b_j\\) are scalar bias terms associated with words
\\(i\\) and \\(j\\), respectively. Intuitively speaking, we want to build word
vectors that retain some useful information about how every pair of words
\\(i\\) and \\(j\\) co-occur.

We'll do this by minimizing an objective function \\(J\\), which evaluates the
sum of all squared errors based on the above equation, weighted with a function
\\(f\\):

{::nomarkdown}\[\begin{equation}J = \sum_{i=1}^V \sum_{j=1}^V \; f\left(X_{ij}\right) \left( \vec{w}_i^T \vec{w}_j + b_i + b_j - \log X_{ij} \right)^2 \end{equation}\]{:/}

We choose an \\(f\\) that helps prevents common word pairs (i.e., those with
large \\(X_{ij}\\) values) from skewing our objective too much:

{::nomarkdown}\[\begin{equation}f\left(X_{ij}\right) = \left\{ \begin{array}{cl}\left(\frac{X_{ij}}{x_{\text{max}}}\right)^\alpha & \text{if } X_{ij} < x_{\text{max}} \\ 1 & \text{otherwise.} \end{array}\right. \end{equation} \]{:/}

When we encounter extremely common word pairs (where {::nomarkdown}\(X_{ij} >
x_{\text{max}}\){:/}) this function will cut off its normal output and simply
return \\(1\\). For all other word pairs, we return some weight in the range
\\((0, 1)\\), where the distribution of weights in this range is decided by
\\(\alpha\\).

## Implementation

Now for the code! I'll skip the boring parts which do things like model saving
and argument parsing, and focus on the three most meaty functions in the code:

1. `build_cooccur` accepts a corpus and yields a list of
   co-occurrence blobs (the \\(X_{ij}\\) values). It calculates
   co-occurrences by moving a *sliding n-gram window* over each
   sentence in the corpus.
2. `train_glove`, which prepares the parameters of the model and manages
   training at a high level, and
3. `run_iter`, which runs a single parameter update step.

First, our `build_cooccur` function accepts a vocabulary (mapping words to
integer word IDs), a corpus (a simple iterator over sentences), and some
optional parameters: a context window size and a minimum count (used to
drop rare word co-occurrence pairs). We'll start by building a sparse
matrix for collecting cooccurrences \\(X_{ij}\\) and some simple helper
data.

{% highlight python %}
def build_cooccur(vocab, corpus, window_size=10, min_count=None):
    vocab_size = len(vocab)
    id2word = dict((i, word) for word, (i, _) in vocab.iteritems())

    # Collect cooccurrences internally as a sparse matrix for
    # passable indexing speed; we'll convert into a list later
    cooccurrences = sparse.lil_matrix((vocab_size, vocab_size),
                                      dtype=np.float64)
{% endhighlight %}

For each line in the corpus, we'll conjure up a sequence of word IDs:

{% highlight python %}
# -- continued --
    for i, line in enumerate(corpus):
        tokens = line.strip().split()
        token_ids = [vocab[word][0] for word in tokens]
{% endhighlight %}

Now for each word ID \\(i\\) in the sentence, we'll extract a window of context
words to the left of the word.

{% highlight python %}
# -- continued --
        for center_i, center_id in enumerate(token_ids):
            # Collect all word IDs in left window of center word
            context_ids = token_ids[max(0, center_i - window_size)
                                    : center_i]
            contexts_len = len(context_ids)
{% endhighlight %}

For each word ID \\(j\\) in the context, we'll add on weight to the
cell {::nomarkdown}\(X_{ij}\){:/}. The increment for the word pair
is inversely related to the distance between the two words in
question. This means word instances which appear next to each other
see higher {::nomarkdown}\(X_{ij}\){:/} increments than word
instances which appear with many words in between.

One last technical point: we build this matrix \\(X_{ij}\\)
*symmetrically*. This means that we treat word co-occurrences where the
context word is to the left of the main word exactly the same as
co-occurrences where the context word is to the right of the main word.

{% highlight python %}
# -- continued --
            for left_i, left_id in enumerate(context_ids):
                # Distance from center word
                distance = contexts_len - left_i

                # Weight by inverse of distance between words
                increment = 1.0 / float(distance)

                # Build co-occurrence matrix symmetrically (pretend
                # we are calculating right contexts as well)
                cooccurrences[center_id, left_id] += increment
                cooccurrences[left_id, center_id] += increment
{% endhighlight %}

That's about it --- `build_cooccur` finishes with
[a bit more code to yield co-occurrence pairs from this sparse matrix][15], but
I won't bother to show it here.

Next, `train_glove` initializes the model parameters given the fully
constructed co-occurrence data. We expect the same `vocab` object as
before as a first parameter. The second parameter, `cooccurrences`,
is a co-occurrence iterator produced in `build_cooccur`, which
yields co-occurrence tuples of the form `(main_word_id,
context_word_id, x_ij)`, where `x_ij` is an \\(X_{ij}\\)
co-occurrence value as introduced above.

{% highlight python %}
def train_glove(vocab, cooccurrences, vector_size=100,
                iterations=25, **kwargs):
{% endhighlight %}

We next prepare the primary model parameters: the word vector matrix \\(W\\) and
a collection of bias scalars. Note that our word matrix has twice as many rows
as the number of words in the corpus. We will find out why later in describing
the `run_iter` function.

{% highlight python %}
# -- continued --
    vocab_size = len(vocab)

    # Word vector matrix. This matrix is (2V) * d, where N is the
    # size of the corpus vocabulary and d is the dimensionality of
    # the word vectors. All elements are initialized randomly in the
    # range (-0.5, 0.5]. We build two word vectors for each word:
    # one for the word as the main (center) word and one for the
    # word as a context word.
    #
    # It is up to the client to decide what to do with the resulting
    # two vectors. Pennington et al. (2014) suggest adding or
    # averaging the two for each word, or discarding the context
    # vectors.
    W = ((np.random.rand(vocab_size * 2, vector_size) - 0.5)
         / float(vector_size + 1))

    # Bias terms, each associated with a single vector. An array of
    # size $2V$, initialized randomly in the range (-0.5, 0.5].
    biases = ((np.random.rand(vocab_size * 2) - 0.5)
              / float(vector_size + 1))
{% endhighlight %}

We will be training using adaptive gradient descent (AdaGrad),[^7] and so we'll
also need to initialize helper matrices for \\(W\\) and the bias vector which
track gradient histories. Note that these all are initialized as blocks of ones.
By starting with every gradient history equal to one, our first training step in
AdaGrad will simply use the global learning rate for each example. (See footnote
7[^7] to work this out from the AdaGrad definition.)

{% highlight python %}
# -- continued --
    # Training is done via adaptive gradient descent (AdaGrad). To
    # make this work we need to store the sum of squares of all
    # previous gradients.
    #
    # Like `W`, this matrix is (2V) * d.
    #
    # Initialize all squared gradient sums to 1 so that our initial
    # adaptive learning rate is simply the global learning rate.
    gradient_squared = np.ones((vocab_size * 2, vector_size),
                               dtype=np.float64)

    # Sum of squared gradients for the bias terms.
    gradient_squared_biases = np.ones(vocab_size * 2,
                                      dtype=np.float64)
{% endhighlight %}

Next, we begin training by iteratively calling the `run_iter` function.

{% highlight python %}
# -- continued --
    for i in range(iterations):
        cost = run_iter(vocab, data, **kwargs)
{% endhighlight %}

`run_iter` accepts this pre-fetched data and begins by shuffling it and
establishing a global cost for the iteration:

{% highlight python %}
# -- continued --
    global_cost = 0

    # Iterate over data in random order
    shuffle(data)
{% endhighlight %}

Now for every co-occurrence data tuple, we compute the weighted cost as
described in the above theory section. Each tuple has the following elements:

1. `v_main`: the word vector for the main word in the co-occurrence
2. `v_context`: the word vector for the context word in the co-occurrence
3. `b_main`: bias scalar for main word
4. `b_context`: bias scalar for context word
5. `gradsq_W_main`: a vector storing the squared gradient history for the main
   word vector (for use in the AdaGrad update)
6. `gradsq_W_context`: a vector gradient history for the context word vector
7. `gradsq_b_main`: a scalar gradient history for the main word bias
8. `gradsq_b_context`: a scalar gradient history for the context word bias
9. `cooccurrence`: the \\(X_{ij}\\) value for the co-occurrence pair, described
   at length above

We retain an intermediate "inner" cost (not squared or weighted) for
use in calculating the gradient in the next section.

{% highlight python %}
# -- continued --
    for (v_main, v_context, b_main, b_context, gradsq_W_main,
         gradsq_W_context, gradsq_b_main, gradsq_b_context,
         cooccurrence) in data:

        # Calculate weight function $f(X_{ij})$
        weight = ((cooccurrence / x_max) ** alpha
                  if cooccurrence < x_max else 1)

        # Compute inner component of cost function, which is used in
        # both overall cost calculation and in gradient calculation
        #
        #   $$ J' = w_i^Tw_j + b_i + b_j - log(X_{ij}) $$
        cost_inner = (v_main.dot(v_context)
                      + b_main[0] + b_context[0]
                      - log(cooccurrence))

        # Compute cost
        #
        #   $$ J = f(X_{ij}) (J')^2 $$
        cost = weight * (cost_inner ** 2)

        # Add weighted cost to the global cost tracker
        global_cost += cost
{% endhighlight %}

With the cost calculated, we now need to compute gradients. From our
original cost function \\(J\\) we derive gradients with respect to the
relevant parameters \\(\vec w_i\\), \\(\vec w_j\\), \\(b_i\\), and \\(b_j\\).
(Note that since \\(f(X_{ij})\\) doesn't depend on any of these
parameters, the derivations are quite simple.) Below we use the operator
\\(\odot\\) to denote elementwise vector multiplication.

{::nomarkdown}\[\begin{align*}J &= \sum_{i=1}^V \sum_{j=1}^V \; f\left(X_{ij}\right) \left( \vec{w}_i^T \vec{w}_j + b_i + b_j - \log X_{ij} \right)^2 \\ \nabla_{\vec{w}_i} J &= \sum_{j=1}^V f\left(X_{ij}\right) \vec{w}_j \odot \left( \vec{w}_i^T \vec{w}_j + b_i + b_j - \log X_{ij}\right) \\ \frac{\partial J}{\partial b_i} &= \sum_{j=1}^V f\left(X_{ij}\right) \left(\vec w_i^T \vec w_j + b_i + b_j - \log X_{ij}\right) \end{align*} \]{:/}

Now let's put that in code! We use the earlier-calculated intermediate
value `cost_inner`, which stores the value being squared and weighted in
the full cost function.

{% highlight python %}
# -- continued --
        # Compute gradients for word vector terms.
        #
        # NB: `v_main` is only a view into `W` (not a copy), so our
        # modifications here will affect the global weight matrix;
        # likewise for v_context, biases, etc.
        grad_main = weight * cost_inner * v_context
        grad_context = weight * cost_inner * v_main

        # Compute gradients for bias terms
        grad_bias_main = weight * cost_inner
        grad_bias_context = weight * cost_inner
{% endhighlight %}

Finally, we update weights with AdaGrad[^7] and add the calculated
gradients to the gradient history variables.

{% highlight python %}
# -- continued --
        # Now perform adaptive updates
        v_main -= (learning_rate * grad_main
                   / np.sqrt(gradsq_W_main))
        v_context -= (learning_rate * grad_context
                      / np.sqrt(gradsq_W_context))

        b_main -= (learning_rate * grad_bias_main
                   / np.sqrt(gradsq_b_main))
        b_context -= (learning_rate * grad_bias_context
                      / np.sqrt(gradsq_b_context))

        # Update squared gradient sums
        gradsq_W_main += np.square(grad_main)
        gradsq_W_context += np.square(grad_context)
        gradsq_b_main += grad_bias_main ** 2
        gradsq_b_context += grad_bias_context ** 2
{% endhighlight %}

After we've processed all data for the iteration, we return the global cost and relax for a while.

{% highlight python %}
# -- continued --
    return global_cost
{% endhighlight %}

---

That's it for code! If you'd like to see word vectors produced by this Python
code in action, check out [this IPython notebook][16].

If you found this all fascinating, I highly recommend digging into the
[official GloVe documentation][1], especially the [original paper][11], which is
due to be published at [this year's EMNLP conference][17]. A quality general
coverage of word representations and their uses is Peter Turney and Patrick
Pantel's paper,
["From frequency to meaning: Vector space models of semantics."][18]

Distributed word representations such as those which GloVe produces are really
revolutionizing natural language processing. I'm excited to see what happens as
more and more tools of this sort are disseminated outside of academia and put to
real-world use.

If you're making use of GloVe or similar tools in your own projects, let me
know. Until next time, happy coding!

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript">
MathJax.Hub.Config({TeX: { equationNumbers: { autoNumber: "AMS" } } });
</script>

[^1]: Richard Socher et al., ["Parsing with Compositional Vector Grammars,"][5] in *Proceedings of the 51st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)* (Sofia, Bulgaria: Association for Computational Linguistics, 2013), 455--65.
[^2]: Joseph Turian, Lev Ratinov, and Yoshua Bengio, ["Word Representations: A Simple and General Method for Semi-Supervised Learning,"][6] in *Proceedings of the 48th Annual Meeting of the Association for Computational Linguistics* (Association for Computational Linguistics, 2010), 384--94.
[^3]: Dzmitry Bahdanau, Kyunghyun Cho, and Yoshua Bengio, ["Neural Machine Translation by Jointly Learning to Align and Translate,"][7] *arXiv:1409.0473 [cs, Stat]*, September 1, 2014.<br/><br/>This is what I'm working on right now---if this sounds interesting to you, get in touch!
[^4]: There is still quite a bit of debate, however, over the best way to construct these vectors. The popular tool [`word2vec`][8], which has seen wide use and wide success in the past year, builds so-called *neural* word embeddings, whereas GloVe and others construct word vectors based on *counts*. I won't get into the controversy in this post, but feel free to read up and pick a side.<br/><br/>See e.g. Marco Baroni, Georgiana Dinu, and Germán Kruszewski, ["Don't Count, Predict! A Systematic Comparison of Context-Counting vs. Context-Predicting Semantic Vectors,"][9] in *Proceedings of the 52nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)* (Baltimore, Maryland: Association for Computational Linguistics, 2014), 238--47; Omer Levy and Yoav Goldberg, ["Linguistic Regularities in Sparse and Explicit Word Representations,"][10] in *Proceedings of the Eighteenth Conference on Computational Natural Language Learning* (Ann Arbor, Michigan: Association for Computational Linguistics, 2014), 171--80.
[^5]: I hope this post is a useful supplement to the [original paper][11]. If you have the time, read the original too --- it has a lot of useful and well-stated insights about the task of word representations in general.
[^6]: I am skipping over a lot of interesting / beautiful details here --- please read the paper if you are interested in more than the implementation!
[^7]: AdaGrad is a modified form of stochastic gradient descent which attempts to guide learning in the proper direction by weighting rarely occurring features more often than those that always fire. Briefly, for a gradient component \\(g_{t,i}\\) at training step \\(t\\), AdaGrad defines the gradient descent update to be {::nomarkdown}\[x_{t+1, i} = x_{t, i} - \dfrac{\eta}{\sqrt{\sum_{t'=1}^{t-1} g_{t', i}^2}} g_{t, i}.\]{:/} For a more thorough coverage see [this AdaGrad tutorial][14].

[1]: http://www-nlp.stanford.edu/projects/glove/
[2]: http://stanford.edu/~jpennin/
[3]: http://www.socher.org
[4]: http://nlp.stanford.edu/manning/
[5]: http://www.aclweb.org/anthology/P13-1045
[6]: http://www.aclweb.org/anthology/P10-1040
[7]: http://arxiv.org/abs/1409.0473.
[8]: https://code.google.com/p/word2vec/
[9]: http://www.aclweb.org/anthology/P14-1023
[10]: http://www.aclweb.org/anthology/W14-1618
[11]: http://www-nlp.stanford.edu/projects/glove/glove.pdf
[12]: http://www-nlp.stanford.edu/software/glove.tar.gz
[13]: http://github.com/hans/glove.py
[14]: http://www.ark.cs.cmu.edu/cdyer/adagrad.pdf
[15]: https://github.com/hans/glove.py/blob/582549ddeeeb445cc676615f64e318aba1f46295/glove.py#L171-182
[16]: http://nbviewer.ipython.org/github/hans/glove.py/blob/master/demo/glove.py%20exploration.ipynb
[17]: http://emnlp2014.org
[18]: http://www.aaai.org/Papers/JAIR/Vol37/JAIR-3705.pdf
