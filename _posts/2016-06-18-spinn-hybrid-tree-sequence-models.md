---
layout: post
title: Hybrid tree-sequence neural networks with SPINN
excerpt: An introduction to the SPINN model family described in our ACL 2016 paper. SPINN enables a novel hybrid tree-sequence (recursive-recurrent) neural network architecture.
date: 18 June 2016
main: true
published: false
---

I'm proud to finally announce the publication of a neural network model which
we've been developing for over year at Stanford. It's called **SPINN**:
the **S**tack-augmented **P**arser-**I**nterpreter **N**eural **N**etwork. The
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
\\[ p(y \mid \mathbf{x}) \propto \exp(w_y^T \, f(\mathbf x)) \\]
Our prediction for any input sentence is related to the dot product of some
classifier weights \\(w_y\\) and our computed representation of the sentence
\\(f(\mathbf x)\\). The remaining task (the one that people have been working on
for decades) is how best to encode this representation. We want a compact,
sufficient[^2] value that can powerfully predict answers to questions we care
about.

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

{% include img.html url="/uploads/2016/tree-shift-reduce.gif" noborder="true" %}

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript">
MathJax.Hub.Config({TeX: { equationNumbers: { autoNumber: "AMS" } } });
</script>

[^1]: This is only a brief snapshot of the project focusing on modeling and algorithms. For details on the task / data, training, related work etc., check out [our full paper][8].
[^2]: I mean *sufficient* here in a formal sense --- i.e., powerful enough to answer questions of interest in isolation, without looking back at the original input value.

[1]: https://www.nyu.edu/projects/bowman/
[2]: http://nlp.stanford.edu/manning/
[3]: http://web.stanford.edu/~cgpotts/
[4]: https://en.wikipedia.org/wiki/Log-linear_model
[5]: https://en.wikipedia.org/wiki/Recursive_neural_network
[6]: http://www.socher.org/
[7]: https://en.wikipedia.org/wiki/Recurrent_neural_network
[8]: http://www.foldl.me/uploads/papers/acl2016-spinn.pdf
[9]: https://en.wikipedia.org/wiki/Parse_tree#Constituency-based_parse_trees
