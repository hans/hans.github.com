---
layout: post
main: false
title: Building artificial intelligence without humans
date: 9 February 2018
excerpt: TODO
---

An aggressive and ambitious take on the current state of artificial
intelligence holds that we are effectively *done* from a technical standpoint.
Recent success across subfields of artificial intelligence has demonstrated
that we have converged on the correct mathematical framework --- namely, deep
learning --- which allows us to efficiently explore the space of possible
functions linking inputs and outputs for any given task. What's blocking us
from AGI under this view is only a queue of soluble engineering problems:
designing a digital representation of decimal numbers which is friendlier to
large-scale stochastic optimization algorithms, fine-tuning parallel hardware
architectures for batch matrix computations, and so on. On this account, all
that's left for us to reach AGI is to

1. design sufficiently complex virtual environments, mimicking the typical
   world of a human child, and
2. deploy the software and hardware (presumably available within 10 years)
   to support efficient learning in this sort of environment.

What learning objective should we combine with such an environment in order to
produce human-like intelligence? One idea --- [not a novel one][1], but
perhaps novel within the AI echo-chamber --- is that some coarse constraint of
"survival" should be sufficient to induce what we want. At a high level, the
plan would be to toss a bunch of virtual agents into this virtual environment
and let them self-propagate for several millennia.

-----

I think there are a whole lot of things that are wrong with this view. While
the specific evolutionary-simulation proposal may be a bit of a straw man,
there are certainly reasons to doubt the more general claims made at the
beginning of this post as well. In the following paragraphs, I'll draw out my
initial discomfort with the program sketched above.

[1]: https://en.wikipedia.org/wiki/Teleology_in_biology
