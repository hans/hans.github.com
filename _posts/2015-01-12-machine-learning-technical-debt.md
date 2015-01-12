---
layout: post
title: Machine learning and technical debt
excerpt: <em>Machine Learning&#58; The High Interest Credit Card of Technical Debt</em> is a great non-technical paper from this past NIPS conference. The paper claims that because machine learning systems are fundamentally different from traditional software, there are unique problems in incorporating them in otherwise maintainable, robust architectures. This analysis is useful for both the researcher and the practitioner.
main: true
---

[*Machine Learning: The High Interest Credit Card of Technical Debt*][1] is a
great non-technical paper from this past NIPS conference that is being passed
around online and off among people in my network. For me, the paper centers
around the claim that machine learning systems are fundamentally different from
traditional software in how they are developed and used:

> Arguably the most important reason for using a machine learning system is
> precisely that *the desired behavior cannot be effectively implemented in
> software logic without dependency on external data.* (p. 2, italics theirs)

Machine learning models are useful because they can encode complex world
knowledge that would be near-impossible to handle in a deterministic, rule-based
setting. But this precise distinction is what makes them enormously brittle in
the face of change. Repeated throughout the paper is the principle of "Changing
Anything Changes Everything" (CACE):

> To make this concrete, imagine we have a system that uses features
> <em>x<sub>1</sub>, &hellip; x<sub>n</sub></em> in a model. If we change the
> input distribution of values in <em>x<sub>1</sub></em>, the importance,
> weights, or use of the remaining <em>n - 1</em> features may all change
> &hellip; **No inputs are ever really independent.** (p. 2)

CACE can be a problem for all sorts of reasons, and if you've gotten this far in
my post I strongly suggest you read [the full paper][1] to understand the
implications of building and depending on software which can often be
fundamentally opaque and unstable by design.

This is useful to me as a researcher in helping me to understand the divide
between research and practice, and to recognize which elements of my methods
might be incompatible with those of a practitioner.

[1]: http://research.google.com/pubs/archive/43146.pdf
