---
title: Why study the mind–machine mapping?
date: 7 March 2019

---

In the past half-decade or so, we've seen exciting breakthroughs showing that state-of-the-art neural networks trained on general-purpose vision and language tasks are surprisingly *human-like*. They make judgments on the grammaticality of sentences, for example, which are quite similar to those of humans. They exceed human-level performance in image classification, and accomplish the feat by deploying representations that look similar to the image representations we see in animal brains.

This is all really exciting to me. If you haven't heard of these results, you should certainly stop reading and check out hte links above.

Here's a common response I hear from colleagues outside of cognitive science, in both AI and linguistics:

> But why should we care? Why should we care how recurrent neural networks (RNNs) respond to well-formed or badly-formed sentences? Why should we care whether convolutional neural network (CNN) activations look anything like those of the brain? RNNs are not built to judge the grammaticality of sentences, and CNNs are not designed to pattern the same way animal brains do.

Indeed, what's special about RNNs as objects of comparison? As a straw-man alternative, we might also ask how *rocks* or *7-Up drinkers* respond to well-formed or badly-formed sentences, or how a [dead fish](http://blogs.discovermagazine.com/neuroskeptic/2009/09/16/fmri-gets-slap-in-the-face-with-a-dead-fish/) responds to ImageNet images. In short—what's interesting or important about the mind–machine mapping?

I'll present the best argument I know for this sort of mind–machine comparison in this post. You might walk away convinced, in which case you should support this sort of research. You might also walk away with a bad taste in your mouth — in which case this research program needs some rethinking. Let me know. 

## Argument from rational analysis

I think there's a clear argument that investigating the mind–machine should pay off, both for artificial intelligence and for cognitive science. I'll call it the **argument from rational analysis.** I'll sketch the argument in the first section of this post, beginning with a few important premises:

- **Assumption 1 (Tasks).** Human experience patterns into a set of discrete *tasks*: visual scene understanding, language understanding, motor planning, memory storage and retrieval, etc.
- **Assumption 2 (Optimality).** Faculties of human intelligence exist to *optimally solve* each of these tasks, modulo some well-specified constraints (physical constraints like the speed of light, hardware constraints like the number of neurons and amount of energy available in the human brain, etc.)

These axioms offer inroads to replicating and understanding human behavior. They allow us to convert what was a messy psychological problem into what is largely an *engineering* problem. Since its conception in the late 1980s, work following this program, known as **rational analysis**, has led us to look for answers in the mind by studying features of the *task* and its environment.

Concretely, for a particular task — say, object recognition — we ask what representations and algorithms an optimal solution to this task *ought* to deploy. We know the rough outline of the answer to this question: for example, the solution involves the repeated application of [spatially invariant filters](https://en.wikipedia.org/wiki/Convolutional_neural_network), which are sensitive in earlier passes to [edges and contours in the input](https://doi.org/10.1038/381607a0).

But we're not there yet. These assumptions don't bring us to a point where we can link mind and machine. Suppose we design two cameras — one digital camera, one film camera — for the purpose of capturing pictures of a birthday party. We take the same pictures with each camera and see that their prints are exactly the same: they are both *optimal* birthday pictures. We don't conclude from these results that the two cameras are deploying the same *mechanism* to optimally solve the task. We need to take on an extra assumption to make that conclusion — the most weighty assumption of them all, I think:

- **Assumption 3 (Near-uniqueness).** There are *very few optimal solutions* to the tasks central to human intelligence.[^1]

Near-uniqueness allows us to take similarity in *behavior* to and deduce similarity in the *representations and algorithms* guiding that behavior.

## Modern mind–machine mappings

Here's where neural networks come in. Neural networks learn representational functions in order to optimally perform some concretely specified *task* or *objective*. As such, they're currently our best shot—from tasks in domains like vision [TODO] and language [TODO]—for capturing broad swaths of human behavior in computational models. They are the closest thing we have as concrete specifications of human-like and optimal behavior in a task.

Given these results, we next ask: are these models the ones *actually* realized in the human mind/brain? We can answer that question at several different levels.

1. Can they actually replicate fine-grained *behavioral* patterns? For example, do they behave just like humans do in working through complex sentences or perceiving occluded objects? Do they have the same patterns of success? Do they make the same errors?
2. If we're taking the correspondence between models and humans seriously, we need to test how deep it goes. Can the models also replicate human *neural* activity? Are the representations present in a neural network the same[^2] as those present in the human brain?

If the answers to the above questions are *yes* (or even *possibly yes*) then we're in luck: we have discovered model systems of human intelligence. Unlike human brains, these models can be infinitely probed and experimented on without ethical qualms. We can probe neural networks to find the neural machinery underlying visual processing or syntactic computations, for example, and use the results to generate theories and experiments of the same faculties of human intelligence.

If the answer to either of the questions is *no*, then this should matter for artificial intelligence: we've learned that our optimal solution is not the one deployed in the mind/brain. This might be due to an incorrect picture of the task being solved, or incorrect ideas about the ideal algorithms we should deploy to solve the task. In any case, such a result would be a strong signal that we are far from true general artificial intelligence.[^3]

---

This is the best argument I know for pursuing the mind–machine mapping. It certainly involves some weighty assumptions. But by taking on those assumptions, we open up a whole new discipline of possible research: one which promises to help us better develop both in cognitive science and in artificial intelligence.

[^1]: This is certainly false in a strong sense: we know, for example, that any computational solution to a task might be implemented with any number of algorithms in any number of Turing-complete computational devices. This is also certainly true in a radically weak sense: if computational solutions are considered the same so long as they are implemented in physical hardware, then there is just one solution for any task. In general, adequately spelling out this assumption would take a lot of ink that I'd rather not spill at this point (but which I should certainly spill in the future). I'll hand-wave and say for now that solutions must share some substantial *structural similarity* — language models must exploit word representations describing both the syntactic and semantic features of words; vision models must involve the convolution of spatially invariant feature maps which pick out oriented edges, etc.
[^2]: More hedging is necessary here: we have no idea what representations are *actually* present in the human brain. Hell, we don't even know whether we're tracking all the physical states and events involved in computation within the brain. But today we can still get a coarse picture of major physical states in the brain — enough to very roughly reconstruct a person's perceptual experience [TODO cite] and mental state [TODO cite], for example. Neural network representations might be judged the "same" as brain representations, then, if they can be reliably used to predict these physical states.
[^3]: A possible objection: "We only produced viable aircraft after we stopped trying to make them look like birds. In the same way, we don't need to focus so closely on humans if all we want to do is reproduce  intelligent behavior." I think this is a fair argument for reproducing *specific* intelligent behavior: if all you want to do is detect spam emails, then looking at human behavior is a waste of time. In general, when the constraints on the solution are well-specified in advance (*detect spam*, *generate lift*, etc.) we need not look too hard at humans in designing our solution. But I don't think that's the case for general intelligence: I think we're just totally in the dark about the high-level constraints for the emergence of general intelligence. I'll end this footnote here and promise another blog post in the near future (see a draft here [TODO link]).