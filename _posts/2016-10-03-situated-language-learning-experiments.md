---
layout: post
title: First experiments in situated language learning
excerpt: Preliminary results in the situated language learning paradigm
date: 3 October 2016
---

A work in progress.

## A simple first instance

The first environment I developed this summer was a simple extension of a grid
world setup. I'll give a simple list of the important features here; you can
check out [the code][1] if you're interested.

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

I wrote this environment in [rllab][2] and trained an agent with vanilla [trust
region policy optimization][3], a popular policy gradient learning algorithm
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

[1]: https://github.com/hans/praglang/blob/master/praglang/scripts/grid_world.py
[2]: https://github.com/openai/rllab
[3]: https://arxiv.org/abs/1502.05477