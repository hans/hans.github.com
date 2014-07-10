---
layout: post
title: Where does ice cream come from?
excerpt: The challenge of world knowledge in artificial intelligence
main: true
---

Since I was first introduced to the field of natural language understanding
[this spring][1], I've had an extra voice stuck in my head. It monitors
conversations closely, watching for syntactic, semantic, and [pragmatic][2]
oddities. Its utterance is always some variation on the same theme, always
blurted out after I hear a particularly interesting construction:

> How the heck did I just understand what was said?

It's a bit mind-boggling at times to examine what I hear and say, and to
acknowledge that this small brain of mine somehow processes these things
properly.

A point in case: I was eating with friends at a Stanford dining hall recently.
Aforementioned blurting voice had been quiet all night. A friend returned with
an empty ice cream cone in hand and said the following:

> Well, I got a cone, but no ice cream came out.

My companions nodded in sympathy. But the voice in my head distracted me,
exploding: *World knowledge! World knowledge!*

The above is an example of an utterance which requires *world knowledge* to
understand correctly. To see this, try to make a literal reading of the quote:
my friend seems to suggest that she expected ice cream to magically emerge from
the cone she was holding, and that she was disappointed when this didn't happen.
We know this interpretation isn't correct, because there is a much more
plausible one: my friend fetched an ice cream cone but found that the ice cream
dispenser failed to dispense.

Of course, my friend did not mention anything about an ice cream dispenser. The
others who heard this statement all used their own knowledge --- accrued over
years of ice cream consumption --- to infer the crucial details of the story.

How can we expect an artificial intelligence to do the same? To interpret this
particular statement and feel sympathy (as it should!), an agent needs to
understand the following relatively obscure facts:

1. ice cream is often served in cones,
2. dispensers are sometimes available to fill these cones, and
3. it is unfortunate when no ice cream comes out of such a dispenser.

This is the minimal world knowledge to get the gist of a *single* casual
statement. Sure, Siri may be able to get you directions to the airport, but we
are far from **complete** natural language understanding.

Writing about this topic reminds me of Hector Levesque's wonderful IJCAI paper
on natural language understanding and artificial intelligence,
[*On our best behavior*][3]. Do give it a read if you are interested in the
current state of AI. This paper merits some more discussion in a separate post!

[1]: http://cs224u.stanford.edu
[2]: http://en.wikipedia.org/wiki/Pragmatics
[3]: http://ijcai13.org/files/summary/hlevesque.pdf
