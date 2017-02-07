---
layout: post
main: false
title: Elements of language understanding&#58; compositionality
date: 2 February 2017
excerpt: What exactly do people mean when they say that they want their dialogue agents to have "compositionality?" How can we start working on concrete tests for this magical property?
---

It's a new year, and I'm still thinking about how to make actionable definitions for *language understanding*.
I've been drifting around thinking about philosophy over the past months, and I'm just now coming up to the surface to start formalizing and implementing some new ideas.

In that spirit, this post is the first in an (at least) two-part series on some formal definitions of *understanding*. Concretely, the mission here is:

1. **Theoretical definition**: What behavior should we look for in an arbitrary language user in order to say it *understands* language?
2. **Implementation**: How can we implement tasks which test for these sorts of behaviors?

Once we have some concrete, implementable metrics for language understanding, the only thing left is to start hill-climbing on those metrics!

<small>(I'll alternate a bit in this post for variation between phrases like "language users," "language agents," "dialogue agents," "language-learning agents," etc. These all mean the same thing to me in this context.)</small>

---

This first post is on the property of **compositionality**. I hear this word coming up pretty often in discussions on the important milestones for language-learning agents. In fact, I've heard it singled out several times as *the* defining factor of real language competence.[^3]

Frankly, I don't find compositionality very interesting as an ultimate requirement for understanding. Nevertheless, I think we should draw out exactly what we mean by the term. I'll use this first post to explain my understanding of compositionality, before preceding on to (what I think is) the more fun stuff.[^2]

When people claim that language agents ought to have "compositionality," I think they are referring to a mush of two distinct concepts:

1. **Syntactic compositionality** (probably better named as **syntactic productivity**). The average language user can take a finite set of words and combine them in an infinite amount of recursive syntactic structures. In theory, no matter the scale of this unbounded composition, a competent language user can still keep a hold on the rules of syntax.

  This is certainly a necessary capability for any robust language agent. Concretely, what this amounts to is having a precise understanding of the rules of syntax, and having the capacity to use them to produce brand-new combinations of words. An agent with this sort of syntactic productivity would produce utterances like *The flight is five minutes late* and *I don't understand*, and wouldn't produce utterances like *Understand I don't* and *The flight are five minutes late*.

2. **Semantic compositionality**. This latter sense of compositionality finds its roots in [Montague semantics][1], which (roughly speaking) observes that the semantic analysis of an utterance can often be guided by its syntactic structure. Simply put, we can say that the meaning of an utterance is a recursive function of its top-level syntactic constituents. The meaning of each of those constituents is a function of their respective children, and so on.

  As a concrete example, we can expect that a language user who has learned the words *red* and *ball* will be able to pick out something described as a *red ball*, even if they haven't heard that phrase before. If they do not know the word *old* and hear a phrase *old dog*, they should be able to learn the meaning of *old* and apply it to understand a new phrase *old cat*.

  This is a more demanding request than it might seem. As a simple extension to the previous example, suppose a learner knows the words *big* and *chair*. Should they be able to pick out the *big building*? The word *big* seems to have different meanings in these two contexts. In this way, a loose definition of compositionality can hide a lot of complexity. [TODO, I'm not sure what to do with this.]

Lots of people in NLP believe that #2 will effectively come for free once we nail down a proper model for #1. This was part of the motivating force for [my work last year with Sam and others][5], where our models were designed to let syntactic composition directly drive semantic composition.

[^2]: Grounding! Reference! Theory of mind! Conventionalized pragmatics!
[^3]: In standard parlance, *compositionality* is a property of language itself, not of language users. But I'll be sloppy here and attribute the same word to the things producing the language.

[1]: https://en.wikipedia.org/wiki/Montague_grammar
[2]: http://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(16)30122-X
[3]: http://www.foldl.me/2016/situated-language-learning/
[4]: https://nips.cc/Conferences/2016
[5]: http://www.foldl.me/2016/spinn-hybrid-tree-sequence-models/
