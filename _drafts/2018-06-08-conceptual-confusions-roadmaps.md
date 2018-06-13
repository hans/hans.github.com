# Conceptual confusions in AI safety: Our blindness to paradigmatic gaps

<small>*tl;dr:* I question this assumption that technical solutions to mid-term safety problems will be relevant to the long-horizon problems of AI safety. This assumption fails to account for a high-probability *paradigmatic change in technology* between now and the date at which these long-horizon problems will become pressing. I present a historical example of paradigmatic change and suggest that the same is possible for AI. Safety discussions based on AI timelines ought to incorporate this idea of paradigmatic change when determining the value of current mid-term safety work.</small>

I'm back from a brief workshop on technical issues in AI safety, organized by the [Open Philanthropy Project][13]. The workshop brought together the [new class of AI Fellows][12] with researchers from industry labs, nonprofits, and academia to discuss actionable issues in AI safety.

Discussions at the workshop have changed and augmented my views on AI safety in fundamental ways. Most importantly, they have revealed to me several critical conceptual issues at the foundation of safety research, involving work with both medium time horizons (e.g. adversarial attacks, interpretability) and much longer horizons (e.g. value alignment). I believe that these are blocking issues for safety research: I don't know how to value the various sorts of safety work until I arrive at satisfying answers to these questions. Over the next months, I'll formalize these questions in separate single-authored and co-authored blog posts.

This post addresses the first critical of these critical conceptual issues. This issue is the least technical – and possibly the least deep-cutting – of those which I want to raise. Because it touches on one of the most common safety arguments, though, I thought it'd be best to publish this one first.

---

Some of the most well-known recent work in AI safety has a flavor which I'll label *mid-term*. Problems addressed by such work include scalably specifying and supervising reward-based learning, preventing unwanted side effects, safely generalizing out-of-domain, and ensuring that systems remain under our control.[^1] Such problems are more general than the most immediately practical safety issues[^2] but more actionable than the longer-term issues.[^3] Many mid-term researchers who work under the label of "AI safety" assume that such mid-term work is well aligned with solving longer-horizon safety risks — that is, that solutions to isolated mid-term problems will also help us make progress on the most concerning long-horizon risk scenarios. This assumption is used to justify technical experiments in small-scale scenarios which realize these mid-term concerns. [Leike et al. (2017)][18], who propose minimal environments for validating the safety of a learning system, make the argument as follows:

> While these [proposed grid-world safety environments] are highly abstract and not always intuitive, their simplicity has two advantages: it makes the learning problem very simple and it limits confounding factors in experiments. Such simple environments could also be considered as minimal safety checks: an algorithm that fails to behave safely in such simple environments is also unlikely to behave safely in real-world, safety-critical environments where it is much more complicated to test. Despite the simplicity of the environments, **we have selected these challenges with the safety of very powerful artificial agents (such as artificial general intelligence) in mind.**

This post questions this assumption that technical solutions to mid-term problems will be relevant to the long-horizon problems of AI safety. I claim that this assumption fails to account for a high-probability *paradigmatic change* in our engineered AI systems between now and the date at which these long-horizon problems become pressing.

I'll make the argument by historical analogy, and circle back to AI safety at the end of this post.

## Paradigmatic change: an example

At the end of the 19th century, some of the largest cities in the world relied on horses as a central mode of transportation. A city horse was tasked with driving everything from the private [hansom cab][2] (a Sherlock Holmes favorite) to the double-decker [horsebus][3], which could tow dozens of passengers.

![A double-decker horsebus in Sydney, 1895.](https://c2.staticflickr.com/8/7362/9472641326_2ef9976ccc_z.jpg)

1890s New York City, for example, housed over a hundred thousand horses for transporting freight and humans. While this massive transportation industry helped to continue an era of explosive city growth, it also posed some serious novel logistical problems. Many of those horses were housed directly in urban stables, taking up valuable city space. Rats and other city rodents flocked to the urban granaries established to support these stables.

But the most threatening problem posed by this industry by far was the [**waste**][1]. The massive horse population produced a similarly massive daily output of excrement and urine. Because the average city horse survived [fewer than three years of work][4], horse carcasses could commonly be found abandoned in the streets.[^4]

This sort of waste had the potential to doom New York and similar cities to an eventual crisis of public health. On dry days, piles of horse excrement left in the streets would turn to dust and pollute the air. Rainstorms and melting snow would precipitate floods of horse poop, meeting the especially unlucky residents of ground-floor apartments. In all climates, flies flocked to the waste and helped to spread typhoid fever.[^5]

Enterprising Americans were quick to respond to the problem—or, rather, to the business opportunities posed by the problem. ["Crossing sweepers"][8] paved the way through the muck for the classiest of street-crossers. Urban factories cropped up to [process horse carcasses][9], producing glue, gelatin, and fertilizer. Services carted away as much horse poop as possible to pre-designated "manure blocks," in order to keep at least part of the city presentable.

In short, horse waste posed something near an existential risk for the modern city by the end of the 19th century. Urban planners struggled to conceive of a sustainable solution to the problem. An 1898 meeting on the issue was scheduled to last a week and a half, but the delegates abandoned their task [after just three days][10].

There were two clear roads forward here:

1. **Reduce the horse population.** With cities around the world booming in population, banning or restricting horse-based transportation would stall a city's growth. Not a viable option, then.
2. **Eliminate the waste.** New technical solutions would need to be future-proof, robust even in the face of a continuously growing horse population. While the technical solutions of the day only mitigated some of the worst effects of the waste, this would have seemed like the only viable technical solution to pursue.

I certainly would have voted for #2 as an 1890s technologist or urban planner. But neither of these solutions ended up saving New York City, London, and friends from their smelly 19th-century fates. What saved them?

**The automobile**, of course.

![An ad for the Ford Model A, the first car produced by the Ford Motor Company.](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ford1903.jpg/640px-Ford1903.jpg)

Urban horses were replaced somewhat slowly, only as market pressures forced horse owners to close up shop. By the final decade of the 19th century, most major cities had switched from horse-pulled streetcars to electrified trolleys. Over the following decades, increasingly economical internal combustion engines replaced horses in buses, cabs, and personal vehicles.

The introduction of the automobile dealt a final blow to the previous transportation paradigm, and *rendered irrelevant* the safety issues it had imposed on modern cities: automobiles did not leave excrement, urine, or horse carcasses in the streets. Automobiles introduced entirely new safety issues, no doubt, which affect us today: car exhaust pollutes our atmosphere, and drunk car drivers do far more damage to pedestrians than a drunk hansom driver ever could. But it's critical to note for our purposes that technologists of the horse-era *could not have foreseen* such safety problems, let alone develop solutions to them.

## Consequences of paradigmatic change

The argument I am suggesting here is different from the standard "technical gap" argument.[^6] I am instead pointing out a **paradigmatic gap:** the technical solutions we develop now may be fatally attached to the current paradigm. Here are two consequences of granting this as a possibility:

1. Our current technological paradigm **may mislead us to consider safety problems which won't be at all relevant** at Singularity-time, due to paradigmatic change. (Excrement evacuation seemed like a pressing issue in the late 19th century; the problem is entirely irrelevant in the present-day automobile paradigm. We instead deal with an entirely different set of modern automobile safety issues.)
2. **Technical solutions developed now may be irrelevant** at Singularity-time. Even if the pressing safety issues overlap with the pressing safety issues at Singularity-time (i.e., #1 above doesn't hold), it's possible that our technical solutions will still be fatally tied to elements of the current paradigm.

## Potential paradigmatic changes in AI

What sort of paradigmatic changes might we expect? Any answer is bound to look silly in a decade, but here are a few potential concepts currently central to machine learning and safety research, all of which I have at least heard questioned in conversations with reasonable machine learning researchers. Many of these assumptions have already been questioned/subverted in published papers. In short, I don't think any of these concepts are set in stone.

1. the train/test regime — the notion that a system is "trained" offline and then "deployed" to the real world
2. gradient-based learning / local parameter search
3. parametric models
4. the notion of discrete "tasks" or "objectives" which systems optimize
5. (heresy!) probabilistic inference as a framework for learning and inference

You may not agree that all of the above concepts are about to leave any time soon. If you do agree that any foundational axiom $A$ has the chance of disappearing, though, it is imperative that your 1) your safety questions are relevant, and 2) your technical solutions are successful both in a world where $A$ holds and $\neg A$ holds.



Urban planners in the 1890s saw a looming public health problem in the transportation industry — one which was certainly not going to get any better — and would have hoped for technical solutions designed within the "horse paradigm" to save them. We hear similar calls today for technical frameworks which align the values of artificial superintelligences with our own. Like the planners and technologists of the 19th century, it is difficult for us to see how this alignment problem is going to go away or become any easier.

I think it's a live question whether our current paradigm directs us toward the safety issues that will actually be relevant at Singularity-time, and whether our technical solutions developed today will actually be relevant at Singularity-time.

There's room to disagree on this question of a **paradigmatic gap**. But it certainly needs to be part of the AI safety discussion: our bets on the importance of present-day technical safety work ought to incorporate our beliefs over the strength of the current paradigm.



## Follow-ups

Here I'll respond to various comments from reviewers which I couldn't fit nicely into the above narrative.

- [**Aditi**][19] suggested that AI safety work might be what actually brings about the paradigmatic change I'm talking about. I think that's possible for some sorts of AI safety research — for example, the quest to build systems which are robust to open-ended / real-world adversarial attacks ([stop sign graffiti][20]) might end up motivating substantial paradigm changes. This is a possibility worth considering. My current belief is that many of these sorts of safety research could be just as well branded as "doing machine learning better." In other words, the "safety" framing adds nothing new. I'm tempted to drop ideas which add unnecessary complexity to our machine learning roadmap, and so wouldn't want to stand behind "safety" as the future of ML research for this case. This is a very compressed argument, and I'll expand it in a future post in this series.



<small>Thanks to X, Y, and Z for comments on earlier drafts of this post.</small>


[^1]: See e.g. [Amodei et al. (2016)][14], [Christiano et al. (2016)][16], [Hadfield-Menell et al. (2017)][17], [Leike et al. (2017)][15].
[^2]: For example: [data poisoning](https://arxiv.org/abs/1706.03691) and [training set inference](https://arxiv.org/abs/1802.08232). I prefer to separate these practical issues under the name "machine learning security," which has a more down-to-earth ring compared to "AI safety."
[^3]: For example: [value alignment](https://intelligence.org/stanford-talk/) and [safe amplification](https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616?gi=cfd4dacacaad).
[^4]: From [Greene (2008)][6], cited in [this Quora answer][7].
[^5]: I couldn't find reliable sources measuring the actual health impact of all this open-air horse waste. Let's just say that there's little debate on whether we'd want a city with or without this "horse waste" feature.
[^6]: AI safety skeptic: "We're decades or centuries away from developing superintelligent machines. Why work on safety now?" AI safety non-skeptic: "We have no idea how to solve this issue, and it's likely to take decades before we arrive at anything near robust. Thus we need to start now."



[1]: https://cityroom.blogs.nytimes.com/2008/06/09/when-horses-posed-a-public-health-hazard/
[2]: https://en.wikipedia.org/wiki/Hansom_cab
[3]: https://en.wikipedia.org/wiki/Horsebus
[4]: https://web.archive.org/web/20080509133928/https://www.fathom.com/feature/121636/
[5]: https://en.wikipedia.org/wiki/Washington_Mews
[6]: http://www.hup.harvard.edu/catalog.php?isbn=9780674031296
[7]: https://www.quora.com/Were-city-streets-filled-with-horse-manure-peoples-shoes-caked-with-horse-manure-before-the-car-was-invented/answer/Kingshuk-Bandyopadhyay
[8]: https://enviroliteracy.org/environment-society/transportation/the-horse-the-urban-environment/
[9]: https://www.nytimes.com/1865/09/09/archives/the-boneboiling-nuisance.html
[10]: https://www.newyorker.com/magazine/2009/11/16/hosed
[11]: https://www.detroitnews.com/story/news/local/michigan-history/2015/04/26/auto-traffic-history-detroit/26312107/
[12]: https://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/announcing-2018-ai-fellows
[13]: https://www.openphilanthropy.org/blog/potential-risks-advanced-artificial-intelligence-philanthropic-opportunity
[14]: https://arxiv.org/abs/1606.06565
[15]: https://deepmind.com/blog/specifying-ai-safety-problems/
[16]: https://blog.openai.com/deep-reinforcement-learning-from-human-preferences/
[17]: https://arxiv.org/abs/1611.08219
[18]: https://arxiv.org/abs/1711.09883
[19]: https://stanford.edu/~aditir/
[20]: https://arxiv.org/abs/1707.08945