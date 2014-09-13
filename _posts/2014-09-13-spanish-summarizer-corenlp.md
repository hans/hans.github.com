---
layout: post
title: Summarizing Spanish with Stanford CoreNLP
excerpt: A quick and dirty summarization algorithm for Spanish text
main: true
---

After a summer replete with feature-engineering and corpus processing, the
Stanford NLP Group has just released [CoreNLP 3.4.1][1], which includes support
for Spanish-language text. In this post I'll show how to make use of these tools
to make a dead-simple document summarizer.[^1]

Our end goal will be to take a news article of significant length and reduce it
to its two or three most important points. We'll run through each sentence and
assign it a score based on two factors:

1. **tf--idf weights.** The [tf--idf metric][2] is a formula which explains how
   important a particular word is in the context of its containing document.
   We'll calculate the sum of tf--idf scores for all nouns in each sentence, and
   consider those sentences with the greatest sums to be the most important.

   The tf--idf metric is the product of two factors:

   $$\text{tf–idf}_{t, d} = tf_{t, d} \; idf_t$$

   The first is a *term frequency* factor, which tracks how often the word
   appears in its containing document. It is some scaled version of the number
   of times the word appears in the given document. We'll use a logarithm form
   here:

   $$\text{tf}_{t, d} = \log(1 + \text{count of $t$ in $d$})$$

   The second is an *inverse document frequency* (IDF) factor. This measures the
   informativeness of the word based on how often it appears in total across an
   entire corpus. The inverse document frequency factor is a logarithm as well:

   $$\text{idf}_{t} = \log\left( \frac{\text{count of total documents}}{\text{count of documents containing $t$}} \right)$$

   Note that IDF values will be exactly 0 for common words like "the," as they
   are likely to appear in every document in the corpus. Meaningful and less
   common words like "transmogrify" and "incinerate" will yield higher IDF
   values.

2. **Positional weight.** For news articles, another easy measure of the
   importance of a sentence is its position in the document: important sentences
   tend to appear before less crucial ones. We can model this by scaling our
   original tf--idf score by the index of the sentence within the document.

With theory over, let's get to the code. I'm going to walk through a Java class
`Summarizer`, the full source code of which is available in a [GitHub repo][3].
Our only dependency here is [Stanford CoreNLP 3.4.1][1]. We begin by
instantiating the CoreNLP pipeline statically.

{% highlight java %}
Properties props = new Properties();

// We need part-of-speech annotations (and tokenization /
// sentence-splitting, which are required for POS tagging)
props.setProperty("annotators", "tokenize,ssplit,pos");

// Tokenize using Spanish settings
props.setProperty("tokenize.language", "es");

// Load the Spanish POS tagger model (rather than the
// default English model)
props.setProperty("pos.model",
    "edu/stanford/nlp/models/pos-tagger/spanish/spanish-distsim.tagger");

pipeline = new StanfordCoreNLP(props);
{% endhighlight %}

As we discussed earlier, the summarizer depends upon document frequency data,
which must be precalculated from a corpus of Spanish text. In the constructor of
the `Summarizer`, we receive a prebuilt `dfCounter` and determine the total
number of documents in the training corpus.[^2]

{% highlight java %}
public Summarizer(Counter<String> dfCounter) {
  this.dfCounter = dfCounter;
  this.numDocuments = (int) dfCounter.getCount("__all__");
}
{% endhighlight %}

Our main routine, `summarize`, accepts a document string and a number of
sentences to return.

{% highlight java %}
public String summarize(String document, int numSentences) {
  // Process the document with the constructed pipeline; get
  // a list of tokenized sentences
  Annotation annotation = pipeline.process(document);
  List<CoreMap> sentences = annotation.get(
    CoreAnnotations.SentencesAnnotation.class);

  // Collect raw term frequencies from this document (method
  // not shown here)
  Counter<String> tfs = getTermFrequencies(sentences);

  // Rank sentences of the document by descending importance
  sentences = rankSentences(sentences, tfs);

  // Build a single string with our results
  StringBuilder ret = new StringBuilder();
  for (int i = 0; i < numSentences; i++) {
    ret.append(sentences.get(i));
    ret.append(" ");
  }

  return ret.toString();
}
{% endhighlight %}

The method `rankSentences` sorts the provided sentence collection using a custom
comparator `SentenceComparator`, which contains the bulk of our actual logic for
sentence importance. Here's the framework:

{% highlight java %}
private List<CoreMap> rankSentences(List<CoreMap> sentences,
                                    Counter<String> tfs) {
  Collections.sort(sentences, new SentenceComparator(tfs));
  return sentences;
}

private class SentenceComparator implements Comparator<CoreMap> {
  private final Counter<String> termFrequencies;

  public SentenceComparator(Counter<String> termFrequencies) {
    this.termFrequencies = termFrequencies;
  }

  @Override
  public int compare(CoreMap o1, CoreMap o2) {
    return (int) Math.round(score(o2) - score(o1));
  }

  /**
   * Compute sentence score (higher is better).
   */
  private double score(CoreMap sentence) {
    // ...
  }

  // ...
}
{% endhighlight %}

`score` and the following methods are the meat of the entire code. `score`
accepts a sentence and returns a floating-point value indicating the sentence's
importance.

{% highlight java %}
private double score(CoreMap sentence) {
  // Get the sum of tf-idf weights for the nouns in this
  // sentence
  double tfIdf = tfIDFWeights(sentence);

  // Scale weight based on the position of this sentence in
  // its containing document
  int index = sentence.get(CoreAnnotations.SentenceIndexAnnotation.class);
  double indexWeight = 5.0 / index;

  // Return a scaled tf-idf weight. Note that we multiply all scores
  // by 100 to avoid the case where two sentences with 0 < |score| < 1
  // being marked as "equal" by the comparator function
  return indexWeight * tfIdf * 100;
}
{% endhighlight %}

`score` calls a method `tfIDFWeights`, which determines the total tf--idf scores
for all the nouns in the given sentence:

{% highlight java %}
private double tfIDFWeights(CoreMap sentence) {
  double total = 0;
  List<CoreLabel> tokens = sentence.get(CoreAnnotations.TokensAnnotation.class);

  for (CoreLabel cl : tokens) {
    String pos = cl.get(CoreAnnotations.PartOfSpeechAnnotation.class);

    // Nouns in the Spanish POS tagset begin with the letter
    // "n."
    boolean isNoun = pos.startsWith("n");

    if (isNoun) {
      String text = cl.get(CoreAnnotations.TextAnnotation.class)

      // Calculate the tf-idf weight for this particular
      // word, and add it to the sentence total
      total += tfIDFWeight(text);
    }
  }

  return total;
}

/**
 * Calculate the tf-idf weight for a single word.
 */
private double tfIDFWeight(String word) {
  // Skip unknown words
  if (dfCounter.getCount(word) == 0)
    return 0;

  // Scale the raw term frequency (stored in an instance
  // variable of the comparator)
  double tf = 1 + Math.log(termFrequencies.getCount(word));

  // Scale the document frequency (pre-built with a Spanish
  // corpus)
  double idf = Math.log(numDocuments /
      (1 + dfCounter.getCount(word)));

  return tf * idf;
}
{% endhighlight %}

That's it for the code. You can see the entire class in
[this public GitHub repo][5].

I'll end with a quick unscientific test of the code. I built document-frequency
counts (using a helper [`DocumentFrequencyCounter` class][4]) from the
[Spanish Gigaword][6], which contains about 1.5 billion words of Spanish. It
took several days (running on an 8-core machine) to POS-tag each sentence and
collect the nouns in a global counter.[^3]

I next tested with a few recent Spanish news articles, requesting a two-sentence
summary of each. Here's the output summary of
[an article on the Laniakea supercluster][7]:

> Las galaxias no están distribuidas al azar en todo el universo, sino que se
> encuentran en grupos, al igual que nuestro propio Grupo Local, que contiene
> docenas de galaxias, y en cúmulos masivos, que poseen cientos de galaxias,
> todas interconectadas en una red de filamentos en la que se ensartan como
> perlas. Estos expertos han bautizado al supercúmulo con el nombre de
> 'Laniakea', que significa "cielo inmenso" en hawaiano, como informan en un
> artículo de la edición de este jueves de Nature. Una galaxia entre dos
> estructuras de este tipo puede quedar atrapada en un tira y afloja
> gravitacional en el que el equilibrio de las fuerzas gravitacionales que
> rodean las estructuras a gran escala determina el movimiento de la galaxia.

And [another on Argentinian debt][8]:

> La inclusión de la capital de Francia como nueva jurisdicción para hacer
> efectivos los desembolsos a los acreedores ha sido una iniciativa del bloque
> 'cristinista' para ganar los votos de algunos legisladores opositores. Por
> ejemplo, los legisladores del Frente Renovador, también peronista pero no
> 'cristinista', según la prensa, acordarían con la inclusión de París, por
> considerar que allí los pagos estarían a salvo de los fondos especulativos o
> 'buitre'. Con esta iniciativa el gobierno de la presidenta Cristina Fernández,
> viuda de Kirchner, pretende esquivar a la justicia de los Estados Unidos y a
> los fondos especulativos o 'buitre' que ganaron a Argentina un juicio y
> colocaron al país en 'default' parcial.

I hope this code serves as a useful example for using basic CoreNLP tools in
Spanish. Feel free to follow up below in the comments or by email!

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

[^1]: I won't claim this will always give fantastic summarizations, but it's definitely a quick and easy-to-grasp algorithm.
[^2]: If you are interested in how this helper data is constructed, see the [`DocumentFrequencyCounter` class][4] in the GitHub repo.
[^3]: This probably could have been optimized quite a bit down to the level of hours -- but when you've got the time...

[1]: http://nlp.stanford.edu/software/corenlp.shtml
[2]: http://en.wikipedia.org/wiki/Tf%E2%80%93idf
[3]: https://github.com/hans/corenlp-summarizer
[4]: https://github.com/hans/corenlp-summarizer/blob/master/src/me/foldl/corenlp_summarizer/IDFCounter.java
[5]: https://github.com/hans/corenlp-summarizer/blob/master/src/me/foldl/corenlp_summarizer/Summarizer.java
[6]: https://catalog.ldc.upenn.edu/LDC2011T12
[7]: http://www.rtve.es/noticias/20140903/equipo-cientificos-definen-supercumulo-galaxias-esta-via-lactea/1005222.shtml
[8]: http://www.elmundo.es/economia/2014/09/03/54074ed5268e3ec7168b4595.html
