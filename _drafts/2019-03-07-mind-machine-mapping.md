---
title: 
date: 7 March 2019

---

INTRO

But why should we care how RNNs respond to well-formed or badly-formed sentences? Why should we care whether the activations in a convolutional neural network map accurately onto human brain representations?

What's special about RNNs as objects of comparison? As a straw-man alternative, we might also ask how *rocks* or *7-Up drinkers* respond to well-formed or badly-formed sentences, or how a [dead fish](http://blogs.discovermagazine.com/neuroskeptic/2009/09/16/fmri-gets-slap-in-the-face-with-a-dead-fish/) responds to ImageNet images. Why is it *interesting* to learn that neural networks behave, or neurally activate (TODO WC), like humans do?

TRANSITION

## Rational analysis

Much of modern cognitive science operates under the assumption that human behavior is optimal with respect to some well-specified *task* (memory storage and retrieval, visual scene understanding, language processing, etc.). This axiom, best known by the name **rational analysis**, is what paves the road to studying cognition via formal computational models in the first place.

Let's spell that out. To start, the brain is a messy place. I have no idea what sorts of things are floating around in a person's mind which are responsible for their intelligent behavior. (TODO USE THE PHRASE "non-starter" HERE) TRANSITION

But let's assume this picture of human behavior: humans are presented with particular *tasks*, and produce behavior via models *optimally* conditioned to solve such tasks. (EXAMPLE) Given this axiom, our non-starter turns into an actionable program. Rather than being boggled by a messy picture of the human mind, we can move our attention to the tasks solved by humans. Given a particular task (say, object recognition), we have two questions two answer:

1. an **engineering** question: what *should* an optimal solution to this task look like? What representations and algorithms are necessary for solving the task?
   This is largely the realm of artificial intelligence: what types of models can bring about human-like behavior, broadly construed?
2. a **science** question: which sort of optimal solution is actually realized in the human mind/brain?
   If the rational analysis axiom holds, then we should find a reliable map between *some* task-optimal model and humans, at many different levels. For example, we should find a solution which (ideally) exactly predicts human behavior, and is also clearly realized in the human mind.

This framework draws inspiration from *engineered solutions* to ecological tasks in order to begin exploring the human mind.

## To neural networks

Here's where neural networks come in. Neural networks learn representational functions in order to optimally perform some concretely specified *task* or *objective*. As such, they're currently our best shot—from tasks in domains like vision [TODO] and language [TODO]—for capturing broad swaths of human behavior in a computational model. These models thus address #1 from the quest we specified above.

We next proceed to part #2: are these models the ones *actually* realized in the human mind/brain?

We can answer that question at several different levels:

- Can they actually replicate *fine-grained* human behavior? For example, do they behave just like humans do in working through complex sentences or perceiving occluded objects? Do they have the same patterns of success? Do they make the same errors?
- If we're taking the correspondence between models and humans seriously, we need to test how deep it goes. Can the models also replicate human *neural* activity? Are the representations present in a neural network the same[^1] as those present in the human brain?

If the answers to the above questions are *yes*, then we're in luck: we have discovered model systems of human intelligence. Such systems can be infinitely probed, TODO

If the answer to either of the questions is *no*, then this should matter for artificial intelligence: we've learned that our optimal solution is not the one deployed in the mind/brain. This might be due to an incorrect picture of the task being solved, or incorrect ideas about the ideal algorithms we should deploy to solve the task. TODO look to humans?

[^1]: TODO hedge on "same," something about isomorphism