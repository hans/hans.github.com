---
layout: post
published: true
title: Review&#58; ZeroMQ&#58; Messaging for Many Applications by Pieter Hintjens
excerpt: A valuable reference for the increasingly popular technology.
---

ZeroMQ is one of those technologies today that have sizeable shares of
breathless adherents. I had been aware of the hubbub over the open-source
messaging library for quite some time when I heard that the popular online
tutorial -- known simply as ["The Guide"][1], written by Pieter Hintjens, an
author of ZeroMQ -- would be made available in print and ebook. I snagged my
chance to get a nice Kindle edition of the [O'Reilly release][2]. Apart from
some serious formatting problems with the ebook (read on), I was extremely
satisfied with the breadth and depth of this guide.

Hintjens abandons all pretense at the very beginning of Chapter 1, acknowledging
the fervor of the community:

> How to explain ØMQ? Some of us start by saying all the wonderful things it
> does. *It's sockets on steroids. It's like mailboxes with routing. It's fast!*
> Others try to share their moment of enlightenment, that zap-pow-kaboom satori
> paradigm-shift moment when it all became obvious. *Things just become simpler.
> Complexity goes away. It opens the mind.* Others try to explain by comparison.
> *It's smaller, simpler, but still looks familiar.*

Yes--the whole book is like that. Our author has a wonderfully lucid and
light-hearted writing style[^1] that keeps you focused during the long stretches
of code.

And is there code! The majority of the book offers a tour through a dizzying
array of ØMQ network patterns, each accompanied by a cute name and often a
diagram. See, for example, the "Majordomo Pattern."

![The Majordomo Pattern][majordomo]

What follows this reasonably simple diagram is no less than 500 lines of C code.
**Inline.** I appreciate this in some amount -- there's nothing more practical
than a real implementation -- but was blown away (rather, smothered by) the
piles of code in this book. The density of the code hindered my reading
experience, especially in the Kindle edition, where there were no bookmarks
within sub-chapter sections to help me easily jump around between the massive
code blocks. Many of the most important sections of the book that offered real,
usable patterns were difficult to scan and reference later on given the lack of
navigation aids.[^2]

This publishing error, however serious, is my only major gripe with the book. I
learned quite a lot about the core of ZeroMQ, and am now interested in exploring
the bindings written for my everyday languages.[^3] I'm excited to see how I can
integrate the library at the core of horizontally scalable systems in the near
future.

  [^1]: This is likely something of a rarity, I'd assume, when it comes to guides on message-passing libraries.
  [^2]: To be fair, this would be much less of an issue with a physical book (or in the online guide, where much of the code is held externally and simply referenced by hyperlink). I am still disappointed by O'Reilly's apparent lack of concern for the usability of this work's ebook format.
  [^3]: The book does make reference to the large amount of language bindings available, but keeps all code in C.

  [1]: http://zguide.zeromq.org/
  [2]: http://www.amazon.com/gp/product/1449334067/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1449334067&linkCode=as2&tag=blog0cbb-20
  [majordomo]: https://github.com/imatix/zguide/raw/master/images/fig50.png

<img src="http://ir-na.amazon-adsystem.com/e/ir?t=blog0cbb-20&l=as2&o=1&a=1449334067" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
