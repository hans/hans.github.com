---
layout: post
title: "Solving language"
excerpt: Stop telling me language is about to be "solved"&#58; We haven't even found the right tasks yet.
date: 16 August 2016
---

Some of my more ambitious machine-learning colleagues often have a tendency to
get misty-eyed and talk about language as the "next frontier" of artificial
intelligence. I can completely agree at a high level: building practical
language-enabled agents which can use real language with real people will be a
huge breakthrough for our field.

But too frequently people seem to see language as a mere box to be checked
along the way to general artificial intelligence. As soon as we break through
some perplexity floor on our language models, apparently, we'll have dialogue
agents that can communicate just like we do.

I've been exposed to this exhausting view often enough[^1] that I've decided to
start working to actively counter it.

## What does it mean to "solve language?"

Frankly, I'm not even sure what people are trying to say when they talk about
"solving language." It's as vague and underspecified as the quest to "solve
vision."[^2] We already have [systems that read the news to build investment
strategies][1], [chatbots so realistic that people are falling in love with
them][2], and [automated psychologists which aid the clinically depressed][3].
Are we done?

It depends on your measure of done-ness, I suppose. I'm partial to a
utilitarian stopping criterion here. That is, we've "solved language" --- we've
built an agent which "understands language" --- when the agent can embed itself
into any **real-world** environment and interact with us humans via language to
make us more productive.[^3]

On that measure we've actually made some good progress, as shown by the linked
examples above.[^4] But there's plenty of room for improvement which will
likely amount to decades of collaborative work, if not more.

If you can show me how your favorite NLP/NLU task connects directly to this
measure of progress, then that's great. I unfortunately don't think this is the
case for a large amount of current work, including quite a few of the tasks
popular in deep learning for NLP.

## Situated language use

If I believe in the definition of "solving language" given above, I'm basically
forced to focus on experiments of **situated language use**: cases where agents
are influencing or being influenced by real humans through language. I know: on
a map of artificial intelligence research, this sort of thing would be labeled
with a big "THERE BE DRAGONS." I frankly think we spar too seldom with dragons
at present in this field. Hill-climbing is unfortunately highly rewarded even
in cases where the marginal return has long gone to near zero. (See MNIST.)

Besides, this setting seems extremely fertile for new language problems that we
haven't really seriously considered yet. I'll end this post with a simple
thought experiment demonstrating how far behind we are on real situated tasks
--- or rather, how much exciting work there still is to be done!

## Generalization in reference games

Here's a simple example of situated learning that should reveal the great
complexity of language we have yet really to start solving.

Consider a [Wittgensteinian reference game][4] with two agents, *Alexa* and
*Bill*. Alexa is using words that Bill doesn't know to pick out referents in
their environment. It's a cooperative game: Alexa tries to use words that will
make Bill most successful, Bill knows that Alexa is cooperating, Alexa knows
that Bill knows that she is cooperating, and so on.

### Round 1

Alexa selects some object in the environment and speaks a word to Bill, say,
*BLOOP*. Here's what Bill has observed in this first round of the game:

<!-- TODO XKCD-style pic: "ALEXA SAID: 'BLOOP'"; POSSIBLE REFERENTS: drawing of cup, pen -->

Now Bill has to select the object he thinks Alexa was referring to. The
dialogue is a "success" if Alexa and Bill pick the same object.

Suppose Bill has to predict some distribution over the objects given Alexa's
utterance \(\pi(o_i \mid u_t)\). Since Bill doesn't know any of Alexa's words
in the first round, we would expect his distribution then to be roughly
uniform:[^5]

{% include img.html url="/uploads/2016/reference-game/round1-policy.png" noborder="true" %}

Let's say he randomly chooses the cup, and the two are informed that they have
succeeded. That means Alexa used *BLOOP* to refer to the cup. Both internalize
that information and proceed to the next round.

### Round 2

Now suppose we begin round 2 with different objects. Alexa, still trying to
maximize the chance that Bill understands what she is referring to, makes
**the same utterance**: *BLOOP*.

<!-- TODO XKCD-style pic: "ALEXA SAID: 'BLOOP'"; POSSIBLE REFERENTS: drawing of mug, ruler -->

Think about what you would do in Bill's place before reading the next paragraph.

I would argue that, despite the fact that **both objects are novel** (at least
at a perceptual level), Bill's probabilities would look something like this:

{% include img.html url="/uploads/2016/reference-game/round2-policy.png" noborder="true" %}

What happened? Bill learned something about Alexa's language in round 1: that
her word *BLOOP* can refer to a cup. In round 2, he was forced to
**generalize** that information and use it to pick the most cup-like object
among the referents.

### What just happened?

How do we model this? There's a lot going on. Here are the three most important
properties I can recognize.

1. As is often the case in reference game examples, Bill had to reason
   **pragmatically** in round 2 in order to understand what Alexa might mean.
2. This pragmatic reasoning relied on a **model of the world**. Bill had to
   reason that the mug was similar to the cup, not because they look alike but
   because they are both used for drinking.[^6]
3. Bill learned **from a single example**, mostly exploiting his model of the
   world in order to generalize as opposed to an enormous dataset of examples.

These are three basic properties of Bill the language agent. These are three
properties that we haven't come anywhere close to solving in a general way.
<!-- TODO: honorable mention for Goodman/Frank pragmatics work, one-shot
concept learning -->

## Conclusion

That rather long example was my first stab at picking out **situated** learning
problems, where language is a mean rather than an end in itself. A minimal
amount of thought about the experimental setting yields oodles of tests like
this. I think it's important to focus on these sorts of tasks, where we can
demonstrate the language capabilities our agents learn actually have a real
influence on the world.

Keep posted for updates on experiments like this --- I'm working hard every day
on this stuff at [OpenAI][5]. If you're interested in collaborating or sharing
experiences, feel free to get in touch via the comments below or via email.

#### Acknowledgements

<small>
I've been mulling these ideas over for most of the summer, and a whole lot of
people from several institutions have helped me to sharpen my thinking: Gabor
Angeli, Phil Blunsom, Sam Bowman, Arun Chaganty, Kevin Clark, Prafulla
Dhariwal, Chris Dyer, Jonathan Ho, Nal Kalchbrenner, Alireza Makhzani,
Christopher Manning, Igor Mordatch, Alec Radford, Zain Shah, Ilya
Sutskever, Sida Wang, and Keenon Werling.

Special thanks to Gabor Angeli, ........... for reviewing early drafts of this
post.
</small>

<!--
Reviewers (TODO contact):
Sam Bowman
Nal Kalchbrenner
Oriol Vinyals
-->

[1]: TODO
[2]: http://www.nytimes.com/2015/08/04/science/for-sympathetic-ear-more-chinese-turn-to-smartphone-program.html
[3]: https://x2.ai/
[4]: https://en.wikipedia.org/wiki/Language-game_(philosophy)
[5]: https://openai.com
[6]: https://lilt.com/

[^1]: It's a view that's quite hard to escape in Silicon Valley for sure. I actually wasn't able to find the clarity to write this post until now, after a week of travel and late-night conference discussions in Europe.
[^2]: I am just as grumpy about this catchphrase, by the way. This one has happily already been heavily scorned by the rest of the community, so I don't need to elaborate here.
[^3]: I'm aware this is not only a utilitarian aim but also an *anthropocentric* one. I'm not sure it's totally right, and am open to belief updates for sure.
[^4]: A less flashy but really valuable utilitarian result worth mentioning is [Lilt][6], a translation system in which a machine aids a human translator to do fast, high-quality collaborative work.
[^5]: Interestingly, if both Alexa and Bill have English as a native language, I would guess that phonaesthetic effects would lead Bill to prefer the round object over the long, pointy one. That's how I would behave, anyway. Don't ask me how to model that.
[^6]: Importantly, this is more than a linguistic model. The facts which Bill exploits are nonlinguistic properties learned from embodied experience.
