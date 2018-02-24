---
layout: post
title: LeCun&#58; Language is the next frontier for AI—or not
date: 23 February 2018
excerpt: A change of opinion hints at a change of fortune in the NLP community?
main: true
---

[Abi See][1] recently hosted a debate between Yann LeCun (Facebook/NYU) and
Chris Manning (Stanford) on the importance of linguistic structure and innate
priors in systems for natural language understanding. The video, along with a
nice write-up from Abi herself, are available [here][2].

I used to have strong opinions on the use of linguistic structure in NLP
systems.[^1] I'm no longer so passionate about that debate, but I still found
something interesting in this particular discussion. Yann made a striking
remark near the end of the debate (beginning in the video at [59:54][4]):

> Language is sort of an epiphenomenon [of human intelligence] &hellip; it's
> not that complicated &hellip; There is a lot to intelligence that has
> absolutely nothing to do with language, and that's where we should attack
> things first. &hellip; [Language] is number 300 in the list of 500 problems
> that we need to face.[^2]

Wow. Those words come from the man who regularly claimed a few years ago (circa
2014) that language was the "next frontier" of artificial intelligence.[^3]

Four years is quite a long time in the world of AI — enough to legitimately
change your mind in the light of evidence (or lack thereof). Recall that NLP in
2014 was awash in the first exciting results in neural machine translation.[^4]
LeCun rode the wave, too: in 2015 he and one of his students put up a rather
ambitiously titled preprint called ["Text Understanding from Scratch."][10]
(No, they didn't solve "text understanding.")

Yann seems to have had a change of heart since those brave words. I think the
natural language processing community as a whole has begun to brush off the
deep learning hype, too.

One can hope.

<!--Chris actually took part in a similar debate in 2014 with Andrew Ng, back when
he was still around at Stanford. In that (private) discussion Andrew used the
success of end-to-end ASR systems to argue that the notion of "phonemes" was no
longer relevant to-->

[^1]: Heck, it was a central motivation for [my research][3] at that time. I suppose that was a natural consequence of being directly advised by Chris. :)
[^2]: The "we" in this quote is ambiguous. I'd guess from context that he was referring to Facebook AI, but he could have also meant to refer to the larger AI research community.
[^3]: I recall this distinctive phrasing from several public talks, but we also have some text records. Source 1, [Yann's response to a 2014 AMA][5]: "The next frontier [sic] for deep learning are language understanding, video, and control/planning." Source 2, quoted in a [2015 article from Cade Metz][6]: "Yann LeCun &hellip; calls natural language processing 'the next frontier.'"
[^4]: See e.g. [Kalchbrenner & Blunsom (2013)][7]; [Sutskever, Vinyals, & Le (2014)][8]; and [Bahdanau, Cho, & Bengio (2014)][9].

[1]: http://www.abigailsee.com/
[2]: http://www.abigailsee.com/2018/02/21/deep-learning-structure-and-innate-priors.html
[3]: /2016/spinn-hybrid-tree-sequence-models
[4]: https://youtu.be/fKk9KhGRBdI?t=59m54s
[5]: https://www.reddit.com/r/MachineLearning/comments/25lnbt/ama_yann_lecun/chif3ys/
[6]: https://www.wired.com/2015/06/ais-next-frontier-machines-understand-language/
[7]: https://www.semanticscholar.org/paper/Recurrent-Continuous-Translation-Models-Kalchbrenner-Blunsom/4b9b7eed30feee37db3452b74503d0db9f163074
[8]: https://arxiv.org/abs/1409.3215
[9]: https://arxiv.org/abs/1409.0473
[10]: https://arxiv.org/abs/1502.01710
