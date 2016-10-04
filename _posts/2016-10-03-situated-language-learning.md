---
layout: post
title: Situated language learning
excerpt: A paradigm for bringing about language acquisition in artificial agents
date: 3 October 2016
main: true
---

I've been really pleased with the response to my last post, [*On "solving
language."*][1] While I certainly wasn't saying anything revolutionary, it
does seem that I managed to capture some very common sentiment floating around
in the AI community today. I think the post has served as a clear checkpoint
for me and for people with similar interests: it's time to go interactive!

Since that time in mid-August, I've been working on a paradigm for simulating
situated language acquisition. This post will give a brief overview of the
motivating ideas, and I'll follow up shortly with more concrete details on some
experiments I've been doing recently.

<small>(Before I get started: this space is rapidly increasing in activity,
        which is certainly a good thing for science! Facebook Research just
        released their [Environment for Communication-based AI][2], and there
        have been murmurs of many similar environments around the Internets.)
</small>

## The paradigm

One of the key points of [*"Solving language"*][1] was that natural language
dialogue is necessarily situated in some grounded context. We use language (and
other tools) to accomplish real-world goals, which are often not themselves
linguistic. The reference-game example in that post gave one instance of
linguistic behavior that was strongly tied to nonlinguistic world knowledge —
something we can't solve as a language problem in isolation.

If we're interested in building language agents which can eventually cooperate
with us via language in similarly grounded contexts, then our tasks should
reflect this goal.

I've followed this idea through to design a general paradigm for situated
language acquisition. In this paradigm, cooperative agents teach or learn a
language in order to accomplish some nonlinguistic goal. Here are the details:

1. A *child* agent lives in some grounded world and has some goal which is
   **nonlinguistic** (e.g. reach a goal region, get food, etc.).
2. The child has only partial observations of its environment, and can take
   only a subset of the necessary actions to reach its goal.
3. A *parent* agent also exists in this world. The parent speaks some fixed
   language and wants to cooperate with the child (to help it reach its goal).
4. The parent has full observations from the environment, and can take actions
   which the child cannot take on its own.
5. The child and parent can communicate via a language channel.

The environment is designed such that the child cannot accomplish the goal on
its own; it must employ the help of its parent. The child acquires language
**as a side effect of accomplishing its grounded goal**: it is the most
efficient (or perhaps the only efficient) mechanism for reaching its main goal.

## Philosophizing

To clearly restate: a critical and distinguishing factor of this framework is
that the child acquires language only as a side effect of striving for some
grounded, nonlinguistic goal.

The environment is designed in particular to avoid **reifying** "language." I
think it is dangerous to see language as some sort of unitary *thing* to be
solved — as one of a few isolated tools in the toolbox of cognition that need
to be picked up on the way to general artificial intelligence.

[**Language is defined by its use.**][3] Language-enabled agents are not identified
their language model perplexity or their part-of-speech tag confusion matrix,
but by their ability to cooperate with other agents through language.

As I'll show in my next post, it's within our reach to design simple environments
that let us directly hill-climb on this objective of cooperation through language.
Stay tuned![^1]

[^1]: And please get in touch! I always enjoy hearing new ideas from my readers. (All four of you. ;) )

[1]: http://www.foldl.me/2016/solving-language/
[2]: https://github.com/facebookresearch/CommAI-env
[3]: https://en.wikipedia.org/wiki/Language-game_(philosophy)
