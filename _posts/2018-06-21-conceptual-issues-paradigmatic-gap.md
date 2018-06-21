---
layout: post
title: Conceptual issues in AI safety: the paradigmatic gap
excerpt: I question the assumption that technical solutions to mid-term safety problems will be relevant to the long-horizon problems of AI safety. This assumption fails to account for a potential paradigmatic change in technology between now and the date at which these long-horizon problems will become pressing. I present a historical example of paradigmatic change and suggest that the same is possible for AI, and argue that our bets on the importance of present-day safety work ought to incorporate our beliefs over the strength of the current paradigm.
date: 21 June 2018
---

<small>*tl;dr*: I question the assumption that technical solutions to mid-term safety problems will be relevant to the long-horizon problems of AI safety. This assumption fails to account for a potential paradigmatic change in technology between now and the date at which these long-horizon problems will become pressing. I present a historical example of paradigmatic change and suggest that the same is possible for AI, and argue that our bets on the importance of present-day safety work ought to incorporate our beliefs over the strength of the current paradigm.</small>

I'm back from a brief workshop on technical issues in AI safety, organized by the [Open Philanthropy Project][1]. The workshop brought together the [new class of AI Fellows][2] with researchers from industry labs, nonprofits, and academia to discuss actionable issues in AI safety.

Discussions at the workshop have changed and augmented my views on AI safety in fundamental ways. Most importantly, they have revealed to me several critical conceptual issues at the foundation of AI safety research, involving work with both medium time horizons (e.g. adversarial attacks, interpretability) and much longer horizons (e.g. aligning the incentives of superintelligent AIs to match our own values). I believe that these are blocking issues for safety research: I don't know how to value the various sorts of safety work until I arrive at satisfying answers to these questions. Over the next months, I'll formalize these questions in separate single-authored and co-authored blog posts.

This post addresses the first critical of these critical conceptual issues. This issue is the least technical – and possibly the least deep-cutting – of those which I want to raise. Because it touches on one of the most common safety arguments, though, I thought it'd be best to publish this one first.

## Introduction

AI safety is a very diverse field, encompassing work targeted at vastly different time horizons. I identify three in this post:

- **Short-term:** This work involves immediately practical safety risks in deploying machine learning systems. These include [data poisoning][3], [training set inference][4], [lack of model interpretability][5], and [undesirable model bias][6].[^1]
- **Mid-term:** This work targets potential safety risks of future AI systems that are more powerful and more broadly deployed than those used today. Relevant problems in this space include [scalably specifying][irving2018ai] and [supervising reward-based learning][christiano2017deep], [preventing unwanted side effects][amodei2016concrete], [safely generalizing out of domain][7], and [ensuring that systems remain under our control][hadfield2016off].
- **Long-term:** This theoretical work addresses the risks posed by artificially engineered (super)intelligences. It asks, for example, how we might ensure that a system is [aligned with our values][8], and [proposes procedures for conserving this alignment][9] while supporting recursive self-improvement.

This post is mainly concerned with the value of mid-term work.

## Mid-term AI safety

Many mid-term researchers assume that their work is well aligned with solving longer-horizon safety risks — that is, that technical solutions to mid-term problems will also help us make progress on the most concerning long-horizon risk scenarios. [Paul Christiano][10] has made statements about the likely alignment of mid-term and long-term issues — see, for example, [his 2016 article on prosaic AI][christiano2016prosaic]:

> It now seems possible that we could build "prosaic" AGI, which can replicate human behavior but doesn’t involve qualitatively new ideas about "how intelligence works" …
> If we build prosaic superhuman AGI, **it seems most likely that it will be trained by reinforcement learning** … But **we don’t have any shovel-ready approach to training an RL system to autonomously pursue our values.**
>
> To illustrate how this can go wrong, imagine using RL to implement a decentralized autonomous organization (DAO) which maximizes its profit. If we had very powerful RL systems, such a DAO might be able to outcompete human organizations at a wide range of tasks — producing and selling cheaper widgets, but also influencing government policy, extorting/manipulating other actors, and so on.

This sort of argument is used to motivate mid-term technical work on controlling AI systems, aligning their values with our own, and so on. In particular, this argument is used to motivate technical work in small-scale synthetic scenarios which connect to these long-term concerns. [Leike et al. (2017)][leike2017ai] propose minimal environments for checking the safety of reinforcement learning agents, for example, and justify the work as follows:

> While these [proposed grid-world safety environments] are highly abstract and not always intuitive, their simplicity has two advantages: it makes the learning problem very simple and it limits confounding factors in experiments. Such simple environments could also be considered as minimal safety checks: an algorithm that fails to behave safely in such simple environments is also unlikely to behave safely in real-world, safety-critical environments where it is much more complicated to test. Despite the simplicity of the environments, **we have selected these challenges with the safety of very powerful artificial agents (such as artificial general intelligence) in mind.**

These arguments gesture at the successes of modern machine learning technology—especially reinforcement learning—and recognize (correctly!) that we don’t yet have good procedures for ensuring that these systems behave the way that we want them to when they are deployed in the wild. We need to have safety procedures in place, they claim, far before more powerful longer-horizon systems arrive that can do much more harm in the real world. This argument rests on the assumption that our technical solutions to mid-term problems will be relevant at the long-horizon date when such systems arrive.

This post questions that assumption. I claim that this assumption fails to account for a potential *paradigmatic change* in our engineered AI systems between now and the date at which these long-horizon problems become pressing.[^2] A substantial paradigmatic change — which could entail a major change in the way we engineer AI systems, or the way AI is used and deployed by corporations and end users — may make irrelevant any mid-term work done now which aims to solve those long-horizon problems.

I'll make the argument by historical analogy, and circle back to the issue of AI safety at the end of this post.

## Paradigmatic change: an example

At the end of the 19th century, some of the largest cities in the world relied on horses as a central mode of transportation. A city horse was tasked with driving everything from the private [hansom cab][12] (a Sherlock Holmes favorite) to the [double-decker horsebus][13], which could tow dozens of passengers.

![A double-decker horsebus in Sydney, 1895.](https://c2.staticflickr.com/8/7362/9472641326_2ef9976ccc_z.jpg)

1890s New York City, for example, housed over a hundred thousand horses for transporting freight and humans. While this massive transportation industry helped to continue an era of explosive city growth, it also posed some serious novel logistical problems. Many of those horses were housed directly in urban stables, taking up valuable city space. Rats and other city rodents flocked to the urban granaries established to support these stables.

But the most threatening problem posed by this industry by far was the [**waste**][14]. The massive horse population produced a similarly massive daily output of excrement and urine. Because the average city horse survived [fewer than three years of work][15], horse carcasses would commonly be found abandoned in the streets.[^3]

This sort of waste had the potential to doom New York and similar cities to an eventual crisis of public health. On dry days, piles of horse excrement left in the streets would turn to dust and pollute the air. Rainstorms and melting snow would precipitate floods of horse poop, meeting the especially unlucky residents of ground-floor apartments. In all climates, flies flocked to the waste and helped to spread typhoid fever.

Enterprising Americans were quick to respond to the problem—or, rather, to the business opportunities posed by the problem. ["Crossing sweepers"][16] paved the way through the muck for the classiest of street-crossers. Urban factories cropped up to [process horse carcasses][17], producing glue, gelatin, and fertilizer. Services carted away as much horse poop as possible to pre-designated "manure blocks," in order to keep at least part of the city presentable.

Horse waste posed a major looming public health risk for the 19th-century city. I assume there were two clear roads forward here:

1. **Reduce the horse population.** With cities around the world booming in population, banning or restricting horse-based transportation would stall a city's growth. Not a viable option, then.
2. **Eliminate the waste.** New technical solutions would need to be future-proof, robust even in the face of a continuously growing horse population. While the technical solutions of the day only mitigated some of the worst effects of the waste, this would have seemed like the only viable technical solution to pursue.

I certainly would have voted for #2 as an 1890s technologist or urban planner. But neither of these solutions ended up saving New York City, London, and friends from their smelly 19th-century fates. What saved them?

![An ad for the Ford Model A, the first car produced by the Ford Motor Company.](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ford1903.jpg/640px-Ford1903.jpg)

**The automobile**, of course. The internal combustion engine offered a fast, efficient, and increasingly cheap alternative to the horse. Urban horses were replaced somewhat slowly, only as market pressures forced horse owners to close up shop. By the final decade of the 19th century, most major cities had switched from horse-pulled streetcars to electrified trolleys. Over the following decades, increasingly economical engines replaced horses in buses, cabs, and personal vehicles. Automobiles introduced a novel technological paradigm, leading to entirely new [manufacturing methods][18], service jobs, and — most importantly — safety issues.

The introduction of the automobile dealt a final blow to the previous transportation paradigm, and *rendered irrelevant* the safety issues it had imposed on modern cities: automobiles did not leave excrement, urine, or horse carcasses in the streets. Automobiles introduced entirely new safety issues, no doubt, which still trouble us today: car exhaust pollutes our atmosphere, and drunk car drivers do far more damage to pedestrians than a drunk hansom driver ever could. But it's critical to note for our purposes that technologists of the horse-era *could not have foreseen* such safety problems, let alone develop solutions to them.

## Potential paradigmatic changes in AI

Modern machine learning and AI are likewise built within a relatively fixed paradigm, which specifies how systems are constructed and used. I want to suggest that substantial changes to the present paradigm might invalidate the assumed alignment between mid-term AI safety work and the longer-term goals. But first, I’ll identify the relevant features of the paradigm that contains modern ML work.

What are some assumptions of the assumed paradigm which might change in the future? Any answer is bound to look silly in hindsight. In any case, here are a few candidate concepts which are currently central to machine learning, and to AI safety by association. I’ve heard all of these concepts questioned in conversations with reasonable machine learning researchers. Many of these assumptions have even been questioned/subverted in published papers. In short, I don't think any of these concepts are set in stone.

1. the train/test regime — the notion that a system is "trained" offline and then "deployed" to the real world[^5]
2. reinforcement learning; (discrete-time) [MDPs][19]
3. [stationarity][20] as a default assumption; [IID][21] data sampling as a default assumption
4. RL agents with discrete action spaces
5. RL agents with actions whose effects are pre-specified by the system’s designer
6. [gradient-based learning][22] / local parameter search[^6]
7. parametric models[^7]
8. the notion of discrete "tasks" or "objectives" that systems optimize
9. (heresy!) probabilistic inference as a framework for learning and inference

I believe that, while many of the above axiomatic elements of modern machine learning seem foundational and unshakable, **most** are likely to be obsolete within decades. Before you disagree with that last sentence, think of what futures a horse-drawn cab driver or an 1890s urban planner would have predicted. Consider also what sort of futures that [expert systems][23] developers and [Lisp machine engineers][24] from past decades of AI research would have sketched. (Would they have mentioned MDPs?)[^8]

You may not agree that *all* or *most* of the above concepts are about to be subverted any time soon. If you do agree that *any* foundational axiom A has the chance of disappearing, though, it is imperative that 1) your safety questions are still relevant, and 2) your technical solutions are successful both in a world where $A$ holds and $\neg A$ holds.

## Consequences of paradigmatic change

The argument I am suggesting here is different from the standard "technical gap" argument.[^9] I am instead pointing out a **paradigmatic gap**: the technical solutions we develop now may be fatally attached to the current technological paradigm. Let $T_S$ be the future time at which long-horizon AI safety risks – say, prosaic AGI or superintelligence – become a reality. Here are two consequences of granting this as a possibility:

1. Our current technological paradigm may **mislead us to consider safety problems that won't be at all relevant** at $T_S$, due to paradigmatic change.
   Excrement evacuation seemed like a pressing issue in the late 19th century; the problem is entirely irrelevant in the present-day automobile paradigm. We instead deal with an entirely different set of modern automobile safety issues.
   The task of [scalable reward specification][hadfield2017inverse] likewise appears critically important to the mid-term and long-term AI safety crowds. Such a problem is only relevant, however, if many of the paradigmatic axioms from the previous section hold (at least #2–5).
2. **Technical solutions developed now may be irrelevant** at $T_S$. Even if the pressing safety issues overlap with the pressing safety issues at $T_S$ (i.e., #1 above doesn't hold), it's possible that our technical solutions will still be fatally tied to elements of the current paradigm.
   Pedestrians and riders alike faced collision risks in the horse era — [runaway horses][25] might kick and run over people in their way. But the technical solutions to horse collision look nothing like those which save lives today (for example, airbags and stop lights).

There's room to disagree on this question of a **paradigmatic gap**. But it certainly needs to be part of the AI safety discussion: our bets on the importance of present-day technical safety work ought to incorporate our beliefs over the strength of the current paradigm. Here are some concrete questions worth debating once we’ve granted the possibility of paradigmatic change:

- How much are different risks and research directions actually tied to the current paradigm?[^10] (How can we get  more specific about this "fatal attachment?")
- Do our current paradigm-bets look good, or should we be looking to diversify across possible paradigm changes or weaken the connection to the current paradigm?
  + What does "diversify" mean here? Would it entail doing more or less work under the framing of AI safety?
  + We need to arrive at a consensus on the pessimistic meta-induction argument here (see footnote #8). Are we justified in assuming the current paradigm (or *any candidate future paradigm*) is the right one in which to do mid-term safety work? Can empirical evidence help here? How can we get more concrete, in any case, about our uncertainty about the strength of a technological paradigm?
- Are there ways to do research that’s likely to survive a paradigm shift?[^11] (What are the safety problems which are likely to survive a paradigm shift?)

Future posts will address some of the above questions in detail. For now, I look forward to the community’s response!

## Follow-ups

Here I'll respond to various comments from reviewers which I couldn't fit nicely into the above narrative.

- [**Aditi**][26] and [**Alex**][27] suggested that AI safety work might be what actually brings about the paradigmatic change I'm talking about. Under this view, the safety objective motivates novel work which otherwise would have come more slowly (or not at all). I think that's possible for some sorts of AI safety research — for example, the quest to build systems which are robust to open-ended / real-world adversarial attacks ([stop sign graffiti][eykholt2017robust]) might end up motivating substantial paradigm changes. This is a possibility worth considering. My current belief is that many of these sorts of safety research could be just as well branded as "doing machine learning better" or "better specifying the task."
   In other words, the "safety" framing adds nothing new. At best, it’s distracting; at worst, it gives AI safety an undeserved poor reputation. (As [**Michael**][29] suggested: I’d rather say "I’m working on X because it makes AI more robust / ethical / fair" than "I’m working on X because it will help stave off an existential threat to the human race.") This is a very compressed argument, and I'll expand it in a future post in this series.
- [**Michael**][29], [**Jacob**][30], [**Max**][31], and [**Paul**][10] suggested that mid- and long-term AI safety research might transfer across paradigm shifts. This is certainly true for the most philosophical parts of AI safety research. I am not convinced it applies in more [mid-term][leike2017ai] [work][hadfield2016off]. I’m not certain about the answer here, but I am certain that this is a live question and ought to play an important role in debates over AI timelines.
- [**Jacob**][30], [**Tomer**][32], and [**Daniel**][33] pointed out the possible link to [Kuhnian paradigm shifts][11]. See footnote #2 for a response. In a future post, I intend to address the separate danger of failing to acknowledge dependence on the current scientific paradigm (i.e., on our present notion of "what intelligence is").

This post benefited from many discussions at the Open Philanthropy AI safety workshop, as well as from reviews from colleagues across the world. Thanks to Paul Christiano, Daniel Dewey, Roger Levy, Alex Lew, Jessy Lin, João Loula, Chris Maddison, Maxinder Kanwal, Michael Littman, Thomas Schatz, Amir Soltani, Jacob Steinhardt, Tomer Ullman, and all of the [AI Fellows][33] for enlightening discussions and feedback on earlier drafts of this post.

[^1]: I prefer to separate these practical issues under the name "machine learning security," which has a more down-to-earth ring compared to "AI safety."
[^2]: I don’t intend to refer to [Kuhnian paradigm shifts][11] by using this term. Kuhn makes the strong claim that shifts between *scientific* paradigms (which establish standards of measurement, theory evaluation, common concepts, etc.) render theories incommensurable. I am referring to a much simpler sort of *technological* paradigm (the toolsets and procedures we use to reach our engineering targets). This post is only concerned with the latter sort of paradigmatic change.
[^3]: From [Greene (2008)][green2008horses], cited in [this Quora answer](https://www.quora.com/Were-city-streets-filled-with-horse-manure-peoples-shoes-caked-with-horse-manure-before-the-car-was-invented/answer/Kingshuk-Bandyopadhyay).
[^4]: I couldn't find reliable sources measuring the actual health impact of all this open-air horse waste. Let's just say that there's little debate on whether we'd want a city with or without this "horse waste" feature.
[^5]: see e.g. online learning / lifelong learning
[^6]: see e.g. [neuroevolution](https://eng.uber.com/deep-neuroevolution/)
[^7]: see e.g. nonparametric models :)
[^8]: This belief is at present no more than an intuition from my experience as a computer scientist / member of the ML/NLP community / reading on the history of science and technology. I hope future posts and discussion can make these beliefs more concrete — though the only way to prove that the future will be radically different is to go ahead and make that future a reality! Arguments for and against [pessimistic meta-induction](https://plato.stanford.edu/entries/scientific-realism/#PessIndu) in the philosophy of science might be a good place to start for developing both the positive and negative views here. (Thanks to [João](http://joaoloula.github.io/) for the suggestion.)
[^9]: AI safety skeptic: "We're decades or centuries away from developing superintelligent machines. Why work on safety now?" AI safety non-skeptic: "We have no idea how to solve this issue, and it's likely to take decades before we arrive at anything near robust. Thus we need to start now."
[^10]: I’ve found it difficult to quantify the probability of a paradigm shift. Given the way that I’ve presented paradigm-shift, indeed, these are extremely difficult to imagine and develop by definition. I’d very much like to figure out how to be more concrete about these ideas.
[^11]: See [Daniel Dewey’s evaluation of the MIRI HRAD approach](http://effective-altruism.com/ea/1ca/my_current_thoughts_on_miris_highly_reliable/#s4) for an example answer to this question.

[1]: https://www.openphilanthropy.org/blog/potential-risks-advanced-artificial-intelligence-philanthropic-opportunity
[2]: https://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/announcing-2018-ai-fellows
[3]: https://arxiv.org/abs/1706.03691
[4]: https://arxiv.org/abs/1802.08232
[5]: https://arxiv.org/abs/1606.03490
[6]: https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing
[7]: https://deepmind.com/blog/specifying-ai-safety-problems/
[8]: https://intelligence.org/stanford-talk/
[9]: https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616
[10]: https://paulfchristiano.com/
[11]: https://plato.stanford.edu/entries/thomas-kuhn/#3
[12]: https://en.wikipedia.org/wiki/Hansom_cab
[13]: https://en.wikipedia.org/wiki/Horsebus
[14]: https://cityroom.blogs.nytimes.com/2008/06/09/when-horses-posed-a-public-health-hazard/
[15]: https://web.archive.org/web/20080509133928/https://www.fathom.com/feature/121636/
[16]: https://enviroliteracy.org/environment-society/transportation/the-horse-the-urban-environment/
[17]: https://www.nytimes.com/1865/09/09/archives/the-boneboiling-nuisance.html
[18]: https://en.wikipedia.org/wiki/Assembly_line
[19]: https://en.wikipedia.org/wiki/Markov_decision_process
[20]: https://en.wikipedia.org/wiki/Stationary_process
[21]: https://en.wikipedia.org/wiki/Independent_and_identically_distributed_random_variables
[22]: https://en.wikipedia.org/wiki/Gradient_descent
[23]: https://ieeexplore.ieee.org/document/110446/?arnumber=110446
[24]: https://en.wikipedia.org/wiki/Connection_Machine
[25]: https://trove.nla.gov.au/newspaper/article/8428803
[26]: https://stanford.edu/~aditir/
[27]: http://alexlew.net/
[29]: https://cs.brown.edu/people/mlittman/
[30]: https://cs.stanford.edu/~jsteinhardt/
[31]: https://scholar.google.com/citations?user=o1qFlsgAAAAJ&hl=en
[32]: http://www.mit.edu/~tomeru/
[33]: http://www.danieldewey.net/

[irving2018ai]: https://arxiv.org/abs/1805.00899
[christiano2017deep]: https://blog.openai.com/deep-reinforcement-learning-from-human-preferences/
[hadfield2016off]: https://arxiv.org/abs/1611.08219
[amodei2016concrete]: https://arxiv.org/abs/1606.06565
[christiano2016prosaic]: https://ai-alignment.com/prosaic-ai-control-b959644d79c2
[leike2017ai]: https://arxiv.org/abs/1711.09883
[green2008horses]: http://www.hup.harvard.edu/catalog.php?isbn=9780674031296
[hadfield2017inverse]: https://arxiv.org/abs/1711.02827
[eykholt2017robust]: https://arxiv.org/abs/1707.08945
