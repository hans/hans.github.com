---
layout: post
title: Do brains represent words?
excerpt: An introduction to the problem of neural representation.
date: 16 April 2018
main: true
---

Jack Gallant's group published [a Nature paper][4] several years back which caused quite a buzz. It presented interactive "semantic maps" spanning the human cortex, mapping out how words of different semantic categories were represented in different places. From the abstract:

> Our results suggest that most areas[^1] within the [brain's] semantic system represent information about specific semantic domains, or groups of related concepts, and our atlas [an interactive web application] shows which domains are represented in each area. This study demonstrates that data-driven methods – commonplace in studies of human neuroanatomy and functional connectivity – provide a powerful and efficient means for mapping functional representations in the brain.

The paper is worth a read, but is unfortunately behind a paywall. The group also produced the video below, which gives a brief introduction to the methods and results.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k61nJkx5aDQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="display: block; margin: 0 auto;"></iframe>

In extremely abbreviated form, here's what happened: the authors of the paper put people in a [functional magnetic resonance imaging][1] machine and took snapshots of their brain activity while they listened to podcasts. They tracked the exact moments at which each subject heard each word in a podcast recording, yielding a large dataset mapping individual words to the brain responses of subjects who heard those words.

They combined this dataset with several fancy computational models to produce maps of *semantic selectivity*, charting which parts of the brain respond especially strongly to which sorts of words. You can see the video for examples, or try out their online [3D brain viewer][2] yourself.

This systems neuroscience paper managed to reach people all the way out in the AI community, as it seemed to promise a comprehensive account of actual neural word representations.[^2] There has since been plenty of criticism of the paper on multiple levels – in experimental design, in modeling choices, in scientific value, and so forth. In this post, I'll raise a simple philosophical issue with the claims of the paper. That issue has to do with the central concept of "representation." This paper's claims to representation bring us to what I think is one of the most important open questions in the philosophy of cognitive science and neuroscience.

<small>This post is intended to serve as a non-philosopher-friendly introduction to the problem of neural representation. Rather than advancing any new theory in this post, I'll just chart out the problem and end with some links to further reading.</small>

<!--Unfortunately, while representation is such an important topic, it's also one of the most difficult to communicate. I'll do my best, grounding the discussion in the claims of this particular paper.-->

## The essential argument

The authors repeatedly allude to "(functional) representations" of words in the brain. This term is often bandied about in systems neuroscience, but it is much more philosophically troubling than you might think at first glance. Let's spell out the high-level logic of the paper:

1. We play subjects some podcasts and make sure they pay attention.
2. At the same time, we record physical traces of their brain activity.[^3]
3. After we have collected our dataset matching words spoken in the podcasts to brain activity, we build a mathematical model relating the two. We find that we can predict the brain activity of a subject (in particular regions) based on the words that they heard at that moment.[^4]
4. When we can predict the brain activity of a region with reasonable accuracy based on the identity of the word being heard alone, we can say that the region serves to *represent* that word.
5. Our derived semantic map shows how the brain represents words from different semantic domains in different areas.

Let's step back and put on our philosopher-hats here.

## Things bumping around

What we *actually* observe in this experiment are two different types of physical events. First, a word is played through a pair of headphones, vibrating the air around the ears of the subject in particular way. Next, we see some neurons firing in the brain, spewing out neurotransmitters and demanding extra nutrients to replenish their strength.[^5] We find that there is some regular relationship between the way the air vibrates (that is, the particular words a subject hears) and the way particular populations of neurons respond.

Let's make an even higher-level gloss of the core logic in this spirit:

1. We make some atoms bump around in pattern \\( A \\) near the subject's ears.
2. We watch how some atoms bump around at the same time in a nearby area (the subject's brain). Call this pattern \\( B(A) \\). Note that \\( B \\) is a function of \\( A \\) – we group the atom-bumps in the brain according to the particular patterns \\( A \\) presented to the subject.
3. We build a mathematical model relating how the ear-atom-bumping \\( A \\) relates to the brain-atom-bumping \\( B(A) \\)_.
4. When our model accurately predicts the bumping \\( B(A) \\) given the bumping \\( A \\), we say that \\( B(A) \\) *represents* some aspect of \\( A \\).
5. The brain activity pattern \\( B(A) \\) represents the ear-bumping pattern \\( A \\).

At this level of abstraction—a level which might sound a little silly, but which preserves the essential moves of the argument—we might be able to draw out a strange logical leap. Point #4 takes a correlation between different bumping-patterns \\( A \\) and \\( B(A) \\) and concludes that \\( B(A) \\) *represents* \\( A \\).

## Correlation as representation

That notion of representation captures the relevant relation in the paper. But it also captures quite a bit more – namely, any pair of physical events \\( A \\), \\( B(A) \\) for which some aspect of \\( B(A) \\) correlates with some aspect of \\( A \\). Here's a random list of pairs of physical events or states which satisfy this requirement:

- The length of a tree's shadow (\\( B(A) \\)) and the time of day (\\( A \\))
- My car's engine temperature (\\( B(A) \\)) and the position of the key in my car's ignition (\\( A \\))
- The volume of a crowd in a restaurant (\\( B(A) \\)) and the number of eggs broken in the last hour of that restaurant's kitchen (\\( A \\))

In none of the above cases would we say that the atom/molecule/photon-bumps \\( B(A) \\) *represent* an aspect of \\( A \\). So why do we make the claim so confidently when it comes to brains? Our model of the brain as an information-processor needs this notion of representation to be rather strong – to not also include random physical relationships between shadows and time, or volumes and egg-cracking.[^6]

## The quest

We could just declare by fiat, of course, that the relationships between the brain and the outside world are the ones we are interested in explaining. But as scientists we are interested in developing explanations that are maximally *observer-independent*. The facts we discover – that region \\( X \\) of the brain exhibiting a pattern \\( B(A) \\) represents some aspect \\( A \\) of the outside world – ought to be true whether or not any scientist cares to investigate it. Our desired notion of representation should emerge *naturally* from a description how \\B(A)\\) and \\(A\\) relate, without selecting the silly cases from above. For this reason, people generally think of this theoretical program as a quest for **naturalistic** representation.

{%include img.html alt="M.C. Escher &mdash; Hand with Reflecting Sphere." url="/uploads/2018/escher.jpg" %}

---

**A first response:** Sure, the details of \\( B(A) \\) can be used to infer the details of \\( A \\) in all of these cases, including the case of the Nature paper. The difference between the Nature paper and the silly examples given above is that the correlation between \\( B(A) \\) and \\( A \\) is *relevant* or important in some sense. We're capturing some actual mechanistic relationship in the case of the brain, whereas the other examples simply pick on chance correlations.

**A counter:** I don't see a principled difference between your "mechanistic relationships" and your "chance correlations." There are certainly [mechanistic explanations which link the length of a tree's shadow and the time of day][5], or any of the other pairs given above. Why privilege the neural relationship with the label of "mechanism?"

Our answer to that question can't fall back on claims about the brain being a more "interesting" or "relevant" system of study in any respect. We need to find a naturalistic account of why the brain as a data-processor is any different than those (admittedly silly) examples above.

---

This, then, is the critical problem of representation in the brain: we need to find some way to assert that the brain is doing something substantial in responding to its inputs, over and above the way a tree or a car engine "respond" to their "inputs." (Why do we need scare-quotes in the second case, but not in the first?)

Future posts on this blog will characterize some of the most popular responses
to this conceptual issue. In particular, I'll explore notions of representation
which require an account of how content is *used* or *consumed*. For now, though, I'll
link to some relevant writing:

- **From neuroscientists:** [deCharms & Zador (2000)][7], [Parker & Newsome (1998)][8] – more sophisticated operational definitions of neural representation.
- **From philosophers:**
  - [Ramsey (2003)][6] – difficult, but very exciting, attack on the idea of neural representation.
  - [Egan (2013)][9], see also [video here][10] – argues that talk of representational content is simply a useful "gloss" on actual theories. (Directed at mental representation, but applies just as well to neural representation.)

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

[1]: https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging
[2]: http://gallantlab.org/huth2016/
[3]: https://doi.org/10.1146/annurev.psych.57.102904.190143
[4]: http://doi.org/10.1038/nature17637
[5]: https://en.wikipedia.org/wiki/Trigonometry
[6]: https://doi.org/10.1080/0952813021000055630
[7]: https://doi.org/10.1146/annurev.neuro.23.1.613
[8]: https://doi.org/10.1146/annurev.neuro.21.1.227
[9]: https://doi.org/10.1007/s11098-013-0172-0
[10]: https://vimeo.com/groups/neuphi/videos/60800468

[^1]: Here "area" means a particular region of the cortex of the human brain.
[^2]: This is absolutely not the first paper on how words are represented neurally – see e.g. [Martin (2007)][3]. It may be unique as of 2016, though, in its breadth and its spread into the AI community. The first author of the paper presented this work, for example, at the NIPS conference in the winter of 2016.
[^3]: In this particular case, those traces consist of changes in blood flow to different regions of the brain, detected by a machine with an enormous magnet surrounding the person's head. For more, check out the [Wikipedia article on functional magnetic resonance imaging (fMRI)][1].
[^4]: Technical note: "at that moment" is not exactly correct, since fMRI data only tracks the pooled responses of samples of neurons over the span of several seconds.
[^5]: Another hedge: what we *actually* observe is the flow of oxygenated and deoxygenated blood around the brain. I'll stop making these technical hedges now; the neuroscientists can grant me a bit of loose language, and the non-neuroscientists nerdy enough to read these footnotes are hopefully motivated by this point to go [read about the details of fMRI][1].
[^6]: M.H. points out that this naïve notion of neural representation also fails to pick out cases we would call proper representation. Consider entertaining an arbitrary thought, which (presumably) activates neural populations in such a way that we'd say those activations *represent* the thought. It's not possible in this case to point out any stimulus or action correlated with that neural activity, since the actual represented content of the thought is unobservable to the scientist.
