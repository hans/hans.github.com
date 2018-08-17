---
layout: post
title: Motivating the rules of the game for adversarial example research
excerpt:
date: 17 August 2018
mathjax: true
main: true
---

[*Motivating the Rules of the Game for Adversarial Example Research*][1] is one of the most level-headed things I've read on AI safety/security in a while. It's 25 pages, which is long for a machine learning paper — but it's worth it. My brief take-away from the paper, which I totally support:

> Adversarial example research has been framed in two ways:
>
> 1. an experimental method for pure research which helps us better understand neural network architectures and their learned representations
> 2. a practical method for securing machine learning models against attacks from adversaries in the wild.
>
> Adversarial examples are the least of our problems in the latter practical framing. We ought to either (1) re-cast adversarial example work as a pure research problem, or (2) build better "rules of the game" which actually motivate popular adversarial defense methods as sufficient security solutions.

Here are some more extracts that I think summarize the push of the paper (emphasis mine):

> We argue that adversarial example defense papers have, to date, mostly considered abstract, toy games that do not relate to any specific security concern (1).
>
> Much of the adversarial perturbation research arose based on observations that even small perturbations can cause significant mistakes in deep learning models, *with no security motivation attached*. &hellip; Goodfellow et al. intended $l_p$ adversarial examples to be a toy problem where evaluation would be easy, with the hope that the solution to this toy problem would generalize to other problems. &hellip; Because solutions to this metric have not generalized to other settings, it is important to now find other, better more realistic ways of evaluating classifiers in the adversarial [security] setting (20).
>
> Exploring robustness to a whitebox adversary [i.e. $l_p$-norm attacks] should not come at the cost of ignoring defenses against high-likelihood, simplistic attacks such as applying random transformations or supplying the most difficult test cases. &hellip; Work primarily motivated by security should first build a better understanding of the attacker action space (23).
>
> An appealing alternative for the machine learning community would be to recenter defenses against restricted adversarial perturbations *as machine learning contributions and not security contributions* (25).
>
> To have the largest impact, we should both recast future adversarial example research as a contribution to core machine learning functionality and develop new abstractions that capture realistic thread models (25).

Some other notes:

1. The authors correctly point out that "content-preserving" perturbations are difficult to identify. $l_p$-norm is just a proxy (and a poor one at that!) this criterion. If we try to formalize this briefly, it seems like a content-preserving perturbation $\delta_{O,T}(x)$ on an input $x$ for some task $T$ is one which does not push $x$ out of some perceptual equivalence class according to a *system-external observer* $O$ who knows $T$.

   If that's right, then concretely defining $\delta$ for any domain requires that we construct the relevant perceptual equivalence classes for $O$ on $T$. Is this any easier than reverse-engineering the representations that $O$ uses to solve $T$ in the first place? If not, then posing the "correct" perturbation mechanism is just as difficult as learning the "correct" predictive model in the first place.

2. I think the definition of "adversarial example" begins to fall apart as we expand its scope. See e.g. this quote:

   > for many problem settings, the existence of non-zero test error implies the existence of adversarial examples for sufficiently powerful attacker models (17).

   This is true for a maximally broad notion of "adversarial example," which just means "an example that the system gets wrong." If we expand the definition that way, the line between a robust system (in the security sense) and a well-generalizing model begins to get fuzzy.

[1]: https://arxiv.org/abs/1807.06732
