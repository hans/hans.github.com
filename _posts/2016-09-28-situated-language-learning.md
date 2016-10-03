---
layout: post
title: Situated language learning
excerpt: A paradigm for bringing about language acquisition in artificial agents
date: 28 September 2016
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

## A simple first instance

The first environment I developed this summer was a simple extension of a grid
world setup. I'll give a simple list of the important features here; you can
check out [the code][3] if you're interested.

1. A **child** agent spawns in a grid-world surrounded by walls. It must move
   to reach a goal which lies in one of four cardinal directions.
2. The child can only see one block in each direction. This means it
   cannot determine the goal location from its observations: all it sees are
   walls.
3. The **parent** agent knows the location of the goal. The parent can also
   modify the map when the child requests.

This is a concrete instantiation of the above paradigm: the child wishes to
reach a goal, and that objective is impossible to accomplish unless the child
learns to communicate with the parent.

Here the language is rather simple. The child must learn two different
communication acts:

1. Ask the parent where the goal is, and use the parent's response to inform
   future actions.
2. Ask the parent to remove the wall in the direction of the goal.

The parent is a hard-coded list of Python rules, mapping from possible legal
child messages to environment actions and responses. The parent rewards the
child and sends a response when the child's query is valid (i.e., syntactically
valid and also relevant to the current environment).

I wrote this environment in [rllab][4] and trained an agent with vanilla [trust
region policy optimization][5], a popular policy gradient learning algorithm
implemented in the toolkit. All the work here was in developing and tweaking
the environment, not in modeling or algorithms.

After several attempts at designing the environment with different
parameterizations and different reward functions, I was able to train policies
which converged to good communication strategies. I found that there were two
different classes of policies that converged to a high mean reward in this
environment:

1. The child agent in the first communication policy did exactly what was 
   desired: it first queried the parent for the goal location, then asked
   for the wall in that direction to be destroyed, and then finally moved in
   that direction.
   TODO excerpts
2. The child agent in the second communication policy "cheated" not by asking
   the direction of the goal, but rather by asking the parent to destroy the
   wall in each direction until it received a response. (The parent only 
   responded to wall-destruction queries when they were appropriate given the
   map.)
   TODO excerpts
   Note that the child proceeds with the same fixed order of directions in
   each trial. This yields some high reward in expectation!
   
The first policy was actually rare in a set of hyperparameter sweeps. Only one
training run out of around twenty converged to this policy, whereas around ten
converged to the second policy.

The sub-task that policy #1 solves but policy #2 does not is the initial act of
querying for the goal location. This conjunction of actions proved to be the
most difficult to learn:

1. Utter a query token.
2. Send the query to the parent.
3. Receive a message from the parent.
4. **Condition your next action** on the message from the parent.

TODO conclude

## A simple second instance



[1]: TODO
[2]: https://github.com/facebookresearch/CommAI-env
[3]: https://github.com/hans/praglang/blob/master/praglang/scripts/grid_world.py
[4]: https://github.com/openai/rllab
[5]: https://arxiv.org/abs/1502.05477