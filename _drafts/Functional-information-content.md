---
title: Functional information content and the policy gradient
layout: post
---

<!--A [new advance paper from Nick Shea, Rosa Cao, and Peter Godfrey-Smith][1] in the British Journal for the Philosophy of Science presents a novel notion of *functional information content*. This paper is part of a larger program to build a naturalistic account of what gives signals — words, neuron spikes, TODO ... — their meaning.

[TODO something about physical events here — draw out why this is a problem]-->

What gives us the right to say that particular physical events have underlying *meanings* or *intents?* In what sense can some arbitrary event *represent* something else in the world? At a first glance, these might seem like obscure or bizarre questions to worry about. That's certainly how I first saw them. But these metaphors are a central piece of the puzzle in understanding how the human mind works. The way we talk about all sorts of signaling systems – from neural networks to human language – relies on the notion of certain physical events having meanings. So we'd better get that notion of *meaning* right in the first place.

These questions are unfortunately as difficult to communicate as they are important. In this short post, I'll do my best to clearly introduce and motivate a philosophical study of representation.

---

On a first encounter, these might seem obscure or bizarre questions to worry about. That's certainly how I first saw them. But take another look at some of the most fascinating open problems in our study of the human condition, and you'll see that they rely critically on these ideas.

[TODO figure out a better framing for each of the points here, as minimally philosophical as possible]

1. How do our brains *represent* the external world?
2. How do we learn about the thoughts and beliefs of others via language? (Before we answer this, we have to characterize how it is that language carries such content in the first place.)

Let's first note that the processes involved in both of the above points are just series of physical events. In the first case, photons colliding with cells in our retina trigger a rapid chain of chemical and electrical events inside our skulls, eventually producing some first-person visual experience. In the second case, we might hear a pattern of rapid vibrations in the air — *Can you give me some water?* — which leads us to behave differently than we might have otherwise.

[figure: Gabor wavelets or edge detectors]

In both cases, too, we say that intermediate steps in these processes serve to *represent* external content. In the first case, neuroscientists will confidently claim that cells in early visual cortex, for example, represent edges and contours in the image of the world projected onto our retinas. In the second case, little segments of that whole vibration-event — we usually call them "words" — are taken to have meanings and reference in the real world. We say that the word "water," for example, picks out something in the real world that the speaker wants.

The trouble here comes in the jump from the simple first fact — that these things are just physical events — to the second claim that these events have representational content. Things get sticky when we try to justify that jump. What are the general conditions under which we should say physical events of this sort can have meaning or reference to other things in the world?

We can certainly *assert* that particular physical events have this representational power. But our typical aim in studying the mind is to show that these representational properties are intrinsic to cognition: that the brain has, does, and always will really represent aspects of the outside world, whether or not humans care to study that fact.

[think of an analogy?]

## An informational account

I'll end by providing a straw-man account of content and suggesting why it might fail horribly. (The term "straw-man" is a bit too strong, perhaps: many serious philosophers have taken stances similar to the one I will present, though of course in much more detail than I care to report here.)

We might view content simply as informational *correlation.* We can say that a particular neuron $N$ in early visual cortex represents or detects a particular sort of edge $E$ because $N$ fires when $E$ appears, and $N$ does not fire when $E$ does not appear. The case of word meaning is similar: the word "water" picks out water glasses and waterbottles because it reliably co-occurs with water glasses and waterbottles (or reliably causes us to act on water glasses and waterbottles).

There are two immediate major problems with this account:

1. Like most first attempts at a general definition, **this definition overgenerates**: it picks out lots of things we don't want to call representational.

   Correlations between physical events are everywhere in daily life. After I press a button in my car, a spark plug fires and the engine starts. The engine-start event is reliably correlated with the spark plug firing. It makes no sense, though, to say that the engine's ignition has "content," or that its content refers to the spark plug firing.[^1]

2. Like most first attempts at a general definition, **this definition also undergenerates**: it misses obvious cases of representation. Ruth Millikan (TODO) points out that many signals have meaning even when they are only unreliably correlated with their content.

   Consider a little family of birds which lets out high-pitched warning calls to signal to each other when a predator is near. Suppose that predators are actually present only 10% of the time when one of the birds makes a warning call. There's no reliable correlation to speak of here, and yet we would still say that the warning call has representational content. (The birds use the warning call to signal nearby predators.)

[TODO transition]

This post has hopefully established that there is something worth worrying about when it comes to our concept of representation. We need to find some **naturalistic** account of content: one which shows that certain events have content, whether or not human observers care to make that attribution.

In (hopefully forthcoming) future posts, I'll show more concretely how these issues play out in actual communication systems, and sketch some more recent attempts to pick out the natural content in these systems.

[1]: https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging

[^1]: Here "area" means a particular region of the cortex of the human brain.
[^2]: This follows a classic example from TODO. I've taken the liberty to modernize it with push-button ignition technology. 