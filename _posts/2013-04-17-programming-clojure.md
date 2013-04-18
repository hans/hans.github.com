---
layout: post
published: true
title: Review&#58; Clojure Programming by Chas Emerick et al.
excerpt: A wonderful introduction to my long-time favorite language.
---

I often run into what you might call *closet functional programmers* -- people
who seem to have a genuine interest in acquainting themselves with a new
paradigm, but just can't manage to find the time to do it. Some of those who do
invest the time often end up on something like the [Typeclassopedia][1][^1],
where the combined force of jargon and type signatures kill whatever interest
they began with.

Thanks to [*Clojure Programming*][2], though, I'm happy to report that this will
no longer be a problem. This book gives hope to those who have championed Lisp
and / or functional programming in vain. Emerick et al. provide not only a
thorough tour of the language, but also demonstrate the beauty and conciseness
of its solutions to common problems. The book dedicates an entire section
("Practicum") to describing how Clojure is idiomatically used in different
application domains.

I was particularly pleased by the stellar coverage of some of Clojure's most
compelling features:

1. Concurrency primitives (`ref`, `atom`, `agent`, `future`, and friends)
2. The power of the JVM and easy Java interop
3. Lisp syntax (which makes for easy and *powerful* metaprogramming)
4. The sequence abstraction

These features are all explained in a bottom-up style (fitting for a Lisp!) --
the authors build up a sizeable example by providing an implementation in small
increments, explaining along the way. This style is a nice parallel to the
nature of traditional Lisp programming.

This book would fit best any of these three groups:

- **Java refugees.** Give me the JVM, hold the
    [`AbstractSingletonProxyFactoryBean`][3]. *Clojure Programming* shows you
    how to take advantage of the vast Java ecosystem while avoiding some of the
    pitfalls of having static typing and OOP forced upon you. The authors make a
    good case for interactive programming with the Clojure REPL, which gives you
    a direct line to the JVM not usually available in Java-land.
- **Beginning functional programmers.** For those already acquainted with a
    scripting language like Python, Ruby, etc., your first Clojure programs will
    be a breeze. The book spends a chapter first easing you into Clojure syntax
    before presenting the basics of functional programming in all of their
    greatness. You'll come to love the paradigm and appreciate how Clojure
    facilitates its use so effectively.
- **Lispers.** While Clojure is by no means a mainstream language, it provides a
    compelling case of a successful Lisp dialect. The later chapters, which
    provide examples of Clojure applications in all sorts of distinct domains,
    will definitely be of interest.

Beginners, intermediate users and masters alike will find something of use in
*Clojure Programming*. It'll be one of the first books I recommend from now on
to anyone curious about Lisp or functional programming.

(Disclosure: I received an electronic copy of this book in exchange for writing
a review.)

[^1]: I've absolutely nothing against this document -- it's a fascinating and wonderfully helpful piece of work -- but when the first few paragraphs include the words "category theory," "monoid," etc., etc., beginners will tend to get spooked!

[1]: http://www.haskell.org/haskellwiki/Typeclassopedia
[2]: http://www.amazon.com/gp/product/1449394701/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1449394701&linkCode=as2&tag=blog0cbb-20
[3]: http://static.springsource.org/spring/docs/2.5.x/api/org/springframework/aop/framework/AbstractSingletonProxyFactoryBean.html

<img src="http://www.assoc-amazon.com/e/ir?t=blog0cbb-20&l=as2&o=1&a=1449394701" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
