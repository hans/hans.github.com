---
layout: post
title: Parsing sound change rules with Parsec: Part 1
excerpt: Establishing a BNF grammar for sound change descriptions
published: false
---

*This is the first post in a tutorial series on applying Parsec in
 historical linguistics.*

Historical linguists[^1] use a standard grammar to describe a language's
sound change over time (diachronically) or among different speakers at
the same time (synchronically). Each individual change can be explained
by a simple replacement rule, but often requires a certain context to
occur. An example *unconditioned* sound change rule follows:

    r > l

This rule states that, in some language, the /r/ sound becomes /l/ no
matter the context of the /r/ sound. This rule alone can effectively
describe the change from a morph /fara/ to /fala/, or from /rata/ to
/lata/.

Most sound change in natural languages, however, are *conditional*: they
only occur in certain contexts. We can describe required contexts with
an additional clause in sound change rules:

    r > l / a_o

This rule states that /r/ changes MORE MORE

We can describe this sound change rule format as a very simple BNF
grammar:

{% highlight %}
<rule>          ::= <context> ">" <replacement> ["/" <condition>]
<condition>     ::= <context>_<context>
<context>       ::= (<phoneme> | <phoneme-class>)+
<phoneme>       ::= <lowercase-letter>
<phoneme-class> ::= <uppercase-letter>
{% endhighlight %}

Sound change appliers often accept as input along with sound change
rules a list of *phoneme class definitions*. These describe which
phoneme classes are available for use and what phonemes each class
represents. A traditional syntax for these declarations follows:

    V: aeiou

This line defines a phoneme class **V** (presumably the *vowel* class).
Whenever **V** appears in a sound change rule, any of /a/, /e/, /i/,
/o/, or /u/ should match.

Phoneme classes are extremely useful, since most sound changes
(synchronic and diachronic) only apply in certain phonological contexts
rather than standing as a universal fact. Let's amend our grammar so
that we can describe an entire sound change collection:

{% highlight %}
<file>                     ::= <phoneme-class-definition>* <EOL> <rule>+
<phoneme-class-definition> ::= <phoneme-class> ":" <phoneme>+
<rule>                     ::= <context> ">" <replacement> ["/" <condition>]
<condition>                ::= <context>_<context>
<context>                  ::= (<phoneme> | <phoneme-class>)+
<phoneme>                  ::= <lowercase-letter>
<phoneme-class>            ::= <uppercase-letter>
{% endhighlight %}

In the next installment of this tutorial, we'll use this grammar to
build Parsec rules.

[^1]: And conlangers!
