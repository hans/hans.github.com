# Conceptual confusions in AI safety: Our blindness to paradigmatic gaps

I'm back from a brief workshop on technical issues in AI safety, organized by the [Open Philanthropy Project][13]. The workshop brought together the [new class of AI Fellows][12] with researchers from industry labs, nonprofits, and academia to discuss actionable issues in AI safety.

Discussions at the workshop have changed and augmented my views on AI safety in fundamental ways. Most importantly, they have revealed to me several critical conceptual issues at the foundation of safety research, involving work with both medium time horizons (e.g. adversarial attacks, interpretability) and much longer horizons (e.g. value alignment). I believe that these are blocking issues for safety research: I don't know how to value the various sorts of safety work until I arrive at satisfying answers to these questions.

This post addresses the first critical of these critical conceptual issues. This issue is the least technical – and possibly the least deep-cutting – of those which I want to raise. Because it touches on one of the most common safety topics, though, I thought it'd be best to publish this one first.

Some of the most well-known recent work in AI safety has a flavor which I'll label *mid-term*. Problems addressed by such work include [scalably specifying][16] and [supervising reward-based learning][14], [preventing unwanted side effects][15], [safely generalizing][14] [out-of-domain][15], and [ensuring that systems remain under our control][17]. Such problems are more general than the most immediately practical safety issues[^1] but more actionable than the longer-term issues.[^2] In contrast with shorter-term issues, much mid-term research is carried out with an eye to the long term. [Leike et al. (2017)][18] state, for example:

> While these [proposed grid-world safety environments] are highly abstract and not always intuitive, their simplicity has two advantages: it makes the learning problem very simple and it limits confounding factors in experiments. Such simple environments could also be considered as minimal safety checks: an algorithm that fails to behave safely in such simple environments is also unlikely to behave safely in real-world, safety-critical environments where it is much more complicated to test. Despite the simplicity of the environments, **we have selected these challenges with the safety of very powerful artificial agents (such as artificial general intelligence) in mind.**

This post questions this assumption that technical solutions developed now will be relevant solutions to the long-horizon problems of AI safety. I'll make an argument by analogy, and circle back to AI safety at the end of this post.

---

At the end of the 19th century, some of the largest cities in the world relied on horses as a central mode of transportation. A city horse was tasked with driving everything from the [hansom][2] (a Sherlock Holmes favorite) to the double-decker [horsebus][3].

![A double-decker horsebus in Sydney, 1895.](https://c2.staticflickr.com/8/7362/9472641326_2ef9976ccc_z.jpg)

New York City housed hundreds of thousands of horses on any given day. While this massive transportation industry helped to continue an era of explosive city growth, it also posed some serious novel logistical problems. Many of those horses were housed directly in urban stables (including, for example, the [Washington Mews][5] in Greenwich Village), taking up valuable city space. Granaries established to support these stables quickly attracted rats and other city rodents. But New York and similar cities faced a more threatening problem posed by this transportation industry: [**horse waste**][1]. The massive horse population produced a similarly massive daily output of excrement and urine. Because the average city horse survived [fewer than three years of work][4], the streets were also littered with carcasses. Ann Norton Greene explains the issue of horse waste in [*Horses at Work: Harnessing Power in Industrial America:*][6][^3]

> With 131,000 horses in New York City by 1900, the result was 1,300-3,300 tons of horse manure daily in the city as a whole, or 5-12 tons per square mile given a horse density of 486. The carcasses of horses that died in the streets often lay for several days before being removed by street or sanitation departments or by jobbers contracted to the city. New York had 15,000 carcasses per year in the 1880s.

Such waste was bound to cause a health crisis. On dry days, horse poop left in the streets would turn to dust and pollute the air. Rainstorms and melting snow precipitated floods of horse poop, flowing into the especially unlucky residents of ground-floor apartments. In all climates, flies sought out the waste and helped to spread typhoid fever.[^4]

Enterprising Americans were quick to respond to the problem—or, rather, to the business opportunities posed by the problem. ["Crossing sweepers"][8] paved the way through the muck for the classiest of street-crossers. Urban factories cropped up to [process horse carcasses][9], producing glue, gelatin, and fertilizer. Services carted as much horse poop as possible away to designated "manure blocks," keeping at least part of the city presentable.

In short, horse waste posed something near an existential risk for the modern city by the end of the 19th century. Urban planners struggled to conceive of a sustainable solution to the problem. An 1898 meeting scheduled to last a week and a half [after three days][10]. There were two clear roads forward here:

1. **Reduce the horse population.** With cities around the world booming in population, banning or restricting horse-based transportation would stall a city's growth.
2. **Eliminate the waste.** New technical solutions would need to be future-proof, robust even in the face of a continuously growing horse population. While the technical solutions of the day only mitigated some of the worst effects of the waste, this seems like the only promising solution to pursue.

I certainly would have voted for #2 as a technologist in the 1890s. But neither of these solutions ended up saving New York City, London, and friends from their smelly 19th-century fates. What saved them? **The automobile**, of course.

![An ad for the Ford Model A, the first car produced by the Ford Motor Company.](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ford1903.jpg/640px-Ford1903.jpg)

Urban horses were replaced somewhat slowly, only as market pressures forced service providers to abandon them. By the final decade of the 19th century, most major cities switched from horse-pulled streetcars to electrified trolleys. Over the following decades, increasingly economical internal combustion engines replaced horses in buses, cabs, and personal vehicles.

The introduction of the automobile dealt a final blow to the previous transportation paradigm, and *rendered irrelevant* the safety issues it had imposed on modern cities. Automobiles introduced entirely new safety issues, no doubt: car exhaust pollutes our atmosphere, and drunk car drivers do far more damage to pedestrians than a drunk hansom driver ever could. It's critical to note for our purposes that technologists of the horse-era *could not have foreseen* such safety problems, let alone develop solutions to them.

---

The argument I am suggesting here is different from the standard "technical gap" argument.[^5] I am instead pointing out a **paradigmatic gap:** the technical solutions we develop now to long-term safety problems may be completely irrelevant in the future, given that the paradigm supporting AGI may look vastly different from that of the present.

What sort of paradigmatic changes might we expect? Any answer is bound to look silly in a decade, but here are a few potential concepts currently central to machine learning and safety research, all of which I have heard questioned in personal communication. I don't think any of these concepts are set in stone — in fact, different papers have questioned or subverted most of these ideas in some way.

1. the train/test regime — the notion that a system is "trained" offline and then "deployed" to the real world
2. gradient-based learning / local parameter search
3. parametric models
4. the notion of discrete "tasks" or "objectives" which systems optimize
5. (heresy!) probabilistic inference as a framework for thinking about learning

You may not agree that all of the above concepts are about to leave any time soon. If you do agree that any foundational axiom $A$ has the chance of disappearing, though, it is imperative that your safety solutions apply both in a world where $A$ holds and $\neg A$ holds.

---

Urban planners in the 1890s saw a looming public health problem in the transportation industry — one which was certainly not going to get any better — and hoped for technical solutions designed within the "horse paradigm" to save them. We hear similar calls today for technical frameworks which align the values of artificial superintelligences with our own. It is likewise difficult for us to see how this alignment problem is going to go away, and it seems critical that we begin designing technical solutions *now* rather than later.

There's room to disagree on this question of a **paradigmatic gap**. But it certainly needs to be part of the AI safety discussion: our bets on the importance of present-day technical safety work ought to incorporate our beliefs over the strength of the current paradigm.

[^1]: For example: [data poisoning](https://arxiv.org/abs/1706.03691) and [training set inference](https://arxiv.org/abs/1802.08232). I prefer to separate these practical issues under the name "machine learning security," which has a more down-to-earth ring compared to "AI safety."
[^2]: For example: [value alignment](https://intelligence.org/stanford-talk/) and [safe amplification](https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616?gi=cfd4dacacaad).
[^3]: Cited in [this Quora answer][7].
[^4]: I couldn't find reliable sources measuring the actual health impact of all this open-air horse waste. Let's just say that there's little debate on whether we'd want a city with or without this "horse waste" feature.
[^5]: AI safety skeptic: "We're decades or centuries away from developing superintelligent machines. Why work on safety now?" AI safety non-skeptic: "We have no idea how to solve this issue, and it's likely to take decades before we arrive at anything near robust. Thus we need to start now."



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