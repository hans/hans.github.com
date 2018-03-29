---
layout: post
title: Do brains represent words?
---

Jack Gallant's group published [a Nature paper](https://www.nature.com/articles/nature17637) several years back which caused quite a buzz. It presented interactive "semantic maps" spanning the human cortex, mapping out how words of different semantic categories were represented in different places. From the abstract:

> Our results suggest that most areas[^1] within the [brain's] semantic system represent information about specific semantic domains, or groups of related concepts, and our atlas [an interactive web application] shows which domains are represented in each area. This study demonstrates that data-driven methods – commonplace in studies of human neuroanatomy and functional connectivity – provide a powerful and efficient means for mapping functional representations in the brain.

The paper is worth a read, but is unfortunately behind a paywall. The group also produced the video below, which gives a brief introduction to the methods and results.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k61nJkx5aDQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

In extremely abbreviated form, here's what happened: the authors of the paper put people in a [functional magnetic resonance imaging][1] machine and took snapshots of their brain activity while they listened to podcasts. They tracked the exact moments at which each subject heard each word in a podcast recording, yielding a large dataset mapping individual words to the brain responses of subjects who heard those words.

They combined this dataset with several fancy computational models to produce maps of *semantic selectivity*, charting which parts of the brain respond especially strongly to which sorts of words. You can see the video for examples, or try out their online [3D brain viewer][2] yourself.

This paper even made a splash in AI circles, as the paper seemed to promise a comprehensive account of actual neural word representations.[^2] There has since been plenty of criticism of the paper on multiple levels – in technical execution, in scientific value, and so forth. In this post, I'll raise a simple philosophical issue with the claims of the paper. That issue has to do with the central concept of "representation." This is, I think, one of the most important concepts in the philosophy of cognitive science and neuroscience. Unfortunately, it's also one of the most difficult to communicate. I'll do my best.

---

The authors repeatedly allude to "(functional) representations" of words in the brain. This term is often bandied about in systems neuroscience, but it is much more philosophically troubling than you might think at first glance. Let's spell out the high-level logic of the paper:

1. We play subjects some podcasts and make sure they pay attention.
2. At the same time, we record physical traces of their brain activity.[^3]
3. After we have collected our dataset matching words spoken in the podcasts to brain activity, we build a mathematical model relating the two. We find that we can predict the brain activity of a subject (in particular regions) based on the words that they heard at that moment.[^4]
4. When we can predict the brain activity of a region with reasonable accuracy based on the identity of the word being heard alone, we can say that the region serves to *represent* that word.
5. Our derived semantic map shows how the brain represents different semantic domains in different areas.

## Things bumping around

What we *actually* observe in this setup are different physical events. First, a word is played through a pair of headphones, vibrating the air around the ears of the subject in particular way. Next, we see some neurons firing in the brain, spewing out neurotransmitters and demanding extra nutrients to replenish their strength.[^5] We find that there is some regular relationship between the way the air vibrates (that is, the particular words a subject hears) and the way particular populations of neurons respond.

Let's make an even higher-level gloss of the core logic in this spirit:

1. We make some atoms bump around in pattern $A$ near the subject's ears.
2. We watch how some atoms (and electrons) bump around at the same time in a nearby area (the subject's brain). Call this pattern $B(A)$, a function of the first pattern $A$.
3. We build a mathematical model relating how the ear-bumping $A$ relates to the brain-bumping $B(A)$.
4. When our model accurately predicts the bumping $B(A)$ given the bumping $A$, we say that $B(A)$ *represents* some aspect of $A$.

[1]: https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging
[2]: http://gallantlab.org/huth2016/

[^1]: Here "area" means a particular region of the cortex of the human brain.
[^2]: This is absolutely not the first paper on how words are represented neurally, but it may be unique (as of 2016, when it was published) in its breadth and its spread into the AI community. The first author of the paper presented this work, for example, at the NIPS conference in the winter of 2016.
[^3]: In this particular case, those traces consist of changes in blood flow to different regions of the brain, detected by a machine with an enormous magnet surrounding the person's head. For more, check out the [Wikipedia article on functional magnetic resonance imaging (fMRI)][1].
[^4]: Technical note: "at that moment" is not exactly correct, since fMRI data only tracks the pooled responses of samples of neurons over the span of several seconds.
[^5]: Another hedge: what we *actually* observe is the flow of oxygenated and deoxygenated blood around the brain. I'll stop making these technical hedges now; the neuroscientists can grant me a bit of loose language, and the non-neuroscientists nerdy enough to read these footnotes are hopefully motivated by this point to go [read about the details of fMRI][1].