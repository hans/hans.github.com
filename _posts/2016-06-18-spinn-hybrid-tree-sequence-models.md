---
layout: post
title: Hybrid tree-sequence neural networks with SPINN
excerpt: An introduction to the SPINN model family described in our ACL 2016 paper. SPINN enables a novel hybrid tree-sequence (recursive-recurrent) neural network architecture.
date: 22 June 2016
---

We've finally published a neural network model which has been under development
for over a year at Stanford.  I'm proud to announce **SPINN**: the
**S**tack-augmented **P**arser-**I**nterpreter **N**eural **N**etwork. The
project fits into what has long been the Stanford research program, mixing deep
learning methods with principled approaches inspired by linguistics. It is the
result of a substantial collaborative effort also involving [Sam Bowman][1],
Abhinav Rastogi, Raghav Gupta, and our advisors [Christopher Manning][2] and
[Christopher Potts][3].

This post is a brief introduction to the SPINN project from a particular angle,
one which is likely of interest to researchers both inside and outside of the
NLP world. I'll focus here on the core SPINN theory and how it enables a
**hybrid tree-sequence architecture**.[^1] This architecture blends the otherwise
separate paradigms of [recursive][5] and [recurrent][7] neural networks into a
structure that is stronger than the sum of its parts.

## Motivation

Human language is complex. The sentences we speak contain nuanced recursive
interactions between individual words, which can be interpreted by listeners in
exponentially many different ways. Our task as researchers in natural language
processing is to construct practical, manageable models for understanding this
mess of meaning.

The SPINN project addresses the core task of **representation** in the language
understanding problem. Suppose we have some downstream task of interest which
requires to categorize an input sentence into one of several classes. We need
some system which will accept such a sentence and produce a class prediction. In
a standard discriminative probabilistic framework, that means we need to
calculate a quantity \\(p(y \mid \mathbf{x})\\) --- the probability that an
input sentence \\(\mathbf{x}\\) should be classified into class \\(y\\).

I think it's interesting to view the SPINN model --- and most discriminative
neural network models, for that matter --- as a function which converts a
complex input \\(\mathbf{x}\\) into a more manageable representation which can
be input into a [log-linear model][4]. In this sort of model our predictions are
calculated as follows:
{::nomarkdown}\begin{equation}
p(y \mid \mathbf{x}) \propto \exp(w_y^T \, f(\mathbf x)) \\
\end{equation}{:/}
Our prediction for any input sentence is related to the dot product of some
classifier weights \\(w_y\\) and our computed representation of the sentence
\\(f(\mathbf x)\\). The remaining task (the one that people have been working on
for decades) is how best to encode this representation. We want a compact,
sufficient[^2] value that can powerfully predict answers to questions we care
about. Since this is a deep learning project, \\f(\mathbf x)\\) is of course
parameterized by a neural network of some sort.

Voices from Stanford have been suggesting for a long time that basic linguistic
theory might help solve this problem. [Recursive neural networks][5], which
combine simple grammatical analysis with the power of [recurrent neural
networks][7], were strongly supported here by [Richard Socher][6], [Chris][2],
and colleagues. SPINN has been developed in this same spirit of merging basic
linguistic facts with powerful neural network tools.

## Model

Our model is based on an insight into representation. Recursive neural networks
are centered around tree structures (usually binary [constituency trees][9])
like the following:

{% include img.html url="/uploads/2016/tree.png" noborder="true" %}

In a standard recursive neural network implementation, we compute the
representation of a sentence (equivalently, the root node *S*) as a recursive
function of its two children, and so on down the tree. The recursive function is specified like this, for a parent representation \\(\vec p\\) with child representations \\(\vec c_1, \vec c_2\\):
\\[\vec p = \sigma(W [\vec c_1, \vec c_2])\\]
where \\(\sigma\\) is some nonlinearity such as the \\(\tanh\\) or sigmoid function. The obvious way to implement this recurrence is to visit each triple of a parent and two children, and compute the representations bottom-up. The graphic below demonstrates this computation order.

{% include img.html url="/uploads/2016/tree-recursive.gif" noborder="true" alt="The computation defined by a standard recursive neural network. We compute representations bottom-up, starting at the leaves and moving to nonterminals." %}

This is a nice idea, because it allows linguistic structure to **guide
computation**. We are using our prior knowledge of sentence structure to
simplify the work left to the deep learning model.

One substantial practical problem with this recursive neural network, however,
is that it can't easily be batched. Each input sentence has its own unique
computation defined by its parse tree. At any given point, then, each
example will want to compose triples in different memory locations. This is
what gives recurrent neural networks a serious speed advantage. At each
timestep, we merely feed a big batch of memories through a matrix
multiplication. This work can be easily farmed out on a GPU, leading to
order-of-magnitude speedups. Recursive neural networks unfortunately don't work
like this. We can't retrieve a single batch of contiguous data at each
timestep, since each example has different computation needs throughout the
process.[^3]

### Shift-reduce parsing

The fix comes from the change in representation foreshadowed earlier. To make
that change, I need to introduce a parsing formalism popular in natural
language processing, originally stolen from the compiler/PL crowd.

**Shift-reduce parsing** is a method for building parse structures from
sequence inputs in linear time. It works by exploiting an auxiliary *stack*
structure, which stores partially-parsed subtrees, and a *buffer*, which stores
input tokens which have yet to be parsed.

We use a shift-reduce parser to apply a sequence of *transitions*,
moving items from the buffer to the stack and combining multiple stack elements
into single elements. In the parser's initial state, the stack is empty and the
buffer contains the tokens of an input sentence. There are just two legal
transitions in the parser transition sequence.

- **Shift** pulls the next token from the buffer and pushes it onto the stack.
- **Reduce** combines the top two elements of the stack into a single element,
  producing a new subtree. The top two elements of the stack become the left
  and right children of this new subtree.

The animation below shows how these two transitions can be used to construct
the entire parse tree for our example sentence.[^4]

{% include img.html url="/uploads/2016/tree-shift-reduce-detailed.gif" noborder="true" alt="A shift-reduce parser produces the pictured constituency tree. Each timestep is visualized before and then after the transition is taken. The text at the top right shows the transition at each timestep, and yellow highlights indicate the data involved in the transition. The table at the right displays the stack contents before and after each transition." %}

Rather than running a standard bottom-up recursive computation, then, we can
execute this table-based method on transition sequences. Here's the transition
sequence we followed for the sentence above:

    S(The) S(man) R S(picked) S(the) S(vegetables) R R R

Every binary tree has a unique corresponding shift-reduce transition sequence.
For a sentence with \\(n\\) tokens, we can produce its parse with a
shift-reduce parser in exactly \\(2n - 1\\) transitions.

All we need to do is build a shift-reduce parser that combines **vector
representations** rather than subtrees. This system is a pretty simple
extension to the original shift-reduce setup:

- **Shift** pulls the next *word embedding* from the buffer and pushes it onto
  the stack.
- **Reduce** combines the top two elements of the stack \\(\vec c_1, \vec
  c_2\\) into a single element \\(\vec p\\) via the standard recursive
  neural network feedforward: \\(\vec p = \sigma(W [\vec c_1, \vec c_2])\\).

Now we have a shift-reduce parser, deep-learning style.

This is really cool for several reasons. The first is that this shift-reduce
recurrence **computes the exact same function** as the recursive neural network
we formulated above. Rather than making the awkward bottom-up tree-structured
computation, then, we can just run a recurrent neural network over these
shift-reduce transition sequences.[^5]

If we're back in recurrent neural network land, that means we can make use of
all the batching goodness that we were excited about earlier. It gains us quite
a bit of speed, as the figure below from our paper demonstrates.

{% include img.html url="/uploads/2016/spinn-speed.png" noborder="true" alt="Massive speed-ups over a competitive recursive neural network implementation (from <a href='http://www.cs.cornell.edu/~oirsoy/files/nips14drsv.pdf'>Irsoy and Cardie, 2014</a>). A baseline RNN implementation, which ignores parse information, is also shown. The <em>y</em>-axis shows feedforward speed on random input sequence data." %}

That's [up to a 25x improvement][10] over our comparison recursive neural
network implementation. We're between two to five times slower than a recurrent
neural network, and it's worth discussing why. Though we are able to batch
examples and run an efficient GPU implementation, this computation is
fundamentally divergent --- at any given timestep, some examples require a
"shift" operation, and other examples require a "reduce." When computing
results for all examples in bulk, we're fated to throw away at least half of
our work.

I'm excited about this big speedup. Recursive neural networks have often been
dissed as too slow and "not batchable," and this development proves both points
wrong. I hope it will make new research on this model class a practical
opportunity.

### Hybrid tree-sequence networks

I've been hinting throughout this post that our new shift-reduce feedforward is
really just a recurrent neural network computation. To be clear, here's the
"sequence" that the recurrent neural network traverses when it reads in our
example tree:

{% include img.html url="/uploads/2016/tree-shift-reduce.gif" noborder="true" alt="Visualization of the post-order tree traversal performed by a shift-reduce parser." %}

This is a [post-order][11] tree traversal, where for a given parent node we
recurse through the left subtree, then the right, and then finally visit the
parent.

We had a simple idea with a big consequence after looking at this diagram: why
not have a **recurrent** neural network follow along this path of arrows?

Concretely, that means that at every timestep, we update some RNN memory
regardless of the shift-reduce transition. We call this the **tracking
memory**. We can write out the algorithm mathematically for clarity. At any given timestep \\(t\\), we compute a new tracking value \\(h_t\\) by combining the top two elements of the stack \\(\vec c_1, \vec c_2\\), the top of the buffer \\(\vec b_1\\), and the previous tracking memory \\(\vec h_{t-1}\\):
{::nomarkdown}\begin{equation}
\vec h_t = \text{Track}(\vec h_{t-1}, \vec c_1, \vec c_2, \vec b_1) \\
\end{equation}{:/}
We can then pass this tracking memory onto the recursive composition function,
via a simple extension like this:
{::nomarkdown}\begin{equation}
\vec p = \sigma(W [\vec c_1; \vec c_2; \vec h_t]) \\
\end{equation}{:/}
What have we done? We've just interwoven a recurrent neural network into a
recursive neural network computation. The recurrent memories are used to
augment the recursive computation (\\(h_t\\) is passed to the recursive
composition function) and vice versa (the recurrent memories are a function of
the recursively computed values on the stack).

We show in [our paper][8] how these two paradigms turn out to have
**complementary** power on our test data. By combining the recurrent and
recursive models into a single feedforward, we get a model that is more
powerful than the sum of its parts.

This post managed to cover about one section of our full paper. If you're
interested in the gritty details and expanded or more formal coverage of what
we discussed here, [take a read][8].

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript">
MathJax.Hub.Config({TeX: { equationNumbers: { autoNumber: "AMS" } } });
</script>

[^1]: This is only a brief snapshot of the project focusing on modeling and algorithms. For details on the task / data, training, related work etc., check out [our full paper][8].
[^2]: I mean *sufficient* here in a formal sense --- i.e., powerful enough to answer questions of interest in isolation, without looking back at the original input value.
[^3]: A non-naïve approach might involve maintaining a queue of triples from an input batch and rapidly dequeuing them, batching together all of these dequeued values. This has already been pursued (of course) by colleagues at Stanford, and it shows some promising speed improvements on a CPU. I doubt, though, that the gains from this method will offset the losses on the GPU, since this method sacrifices all data locality that a *recurrent* neural network enjoys on the GPU.
[^4]: For a more formal and thorough definition of shift-reduce parsing, I'll refer the interested reader to [our paper][8].
[^5]: The catch is that the recurrent neural network must maintain the per-example stack data. This is simple to implement in principle.

[1]: https://www.nyu.edu/projects/bowman/
[2]: http://nlp.stanford.edu/manning/
[3]: http://web.stanford.edu/~cgpotts/
[4]: https://en.wikipedia.org/wiki/Log-linear_model
[5]: https://en.wikipedia.org/wiki/Recursive_neural_network
[6]: http://www.socher.org/
[7]: https://en.wikipedia.org/wiki/Recurrent_neural_network
[8]: http://www.foldl.me/uploads/papers/acl2016-spinn.pdf
[9]: https://en.wikipedia.org/wiki/Parse_tree#Constituency-based_parse_trees
[10]: https://docs.google.com/spreadsheets/d/17BRX32FQjP2Blk3zNSZyGpUWYAr4h0xhwec23dnQaCM/pubhtml
[11]: https://en.wikipedia.org/wiki/Tree_traversal#Post-order
