---
layout: post
title: Situated language learning
excerpt: A paradigm for bringing about language acquisition in artificial agents
date: 3 October 2016
main: true
---

I've been really pleased with the response to my last post, [*On "solving
language"*][1]. While I certainly wasn't saying anything revolutionary, it
does seem that I managed to capture some very common sentiment floating around
in the AI community today. Indeed, the post was partly inspired by a workshop
panel at ACL this summer, where several panelists proclaimed that situated and
interactive language tasks were the way forward. I think the post has served as
a clear checkpoint for me and for people with similar interests.

Since that time in mid-August, I've been working on a paradigm for simulating
situated language acquisition. This post will give a brief overview of the
motivating ideas, and I'll follow up shortly with more details on some concrete
experiments I've been doing recently.

<small>(Before I get started: this space is rapidly increasing in activity,
        which I think is a good thing for science! Facebook Research just
        released their [Environment for Communication-based AI][2], and there
        have been murmurs of many similar environments around the Internets.)
</small>

## The paradigm

One of the key points of [*"Solving language"*][1] was that dialogue is
necessarily situated in some grounded context. Our language agents need to be
likewise situated in order to reproduce human linguistic behavior. The
reference-game example in that post gave one instance of linguistic behavior
that was strongly tied to nonlinguistic world knowledge --- something we can't
solve as a language problem in isolation.

I've followed this idea through to design a general paradigm for situated
language acquisition. In a sentence: in this paradigm, cooperative agents teach
or learn a language in order to accomplish some nonlinguistic goal. Here are
the details:

1. A *child* agent lives in some grounded world and has some goal which is
   **nonlinguistic** (e.g. reach a goal, get food, etc.).
2. The child has only partial observations of its environment, and can take
   a subset of the necessary actions to reach its goal.
3. A *parent* agent also exists in this world. The parent speaks some fixed
   language and wants to cooperate with the child (to help it reach its goal).
4. The parent has full observations from the environment, and can take actions
   which the child cannot take on its own.
5. The child and parent can communicate via a language channel.

The environment is designed such that the child cannot accomplish the goal on
its own; it must employ the help of its parent. The child acquires language
**as a side effect of accomplishing its grounded goal**: it is the most
efficient (or perhaps the only efficient) mechanism for doing so.

To clearly restate: a critical and distinguishing factor of this framework is
that the child acquires language only as a side effect of striving for some
grounded, nonlinguistic goal.[^1] Indeed, without this distinction, the above
paradigm would accommodate tasks like (next-word prediction) language modeling.

[^1]: We too often make the dangerous mistake of reifying "language" as some sort of unitary *thing* to be solved. I suppose this is what I was addressing in my last post as well, though I didn't spell it out so clearly there.



[1]: TODO
[2]: https://github.com/facebookresearch/CommAI-env