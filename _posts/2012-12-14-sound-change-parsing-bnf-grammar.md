---
layout: post
title: Parsing sound change rules with Parsec&#58; Part 1
excerpt: Establishing a BNF grammar for sound change descriptions
---

*This is the first post in a tutorial series on applying Parsec in
 historical linguistics. We'll begin by providing a more formal
 description of sound change rule grammars and end by building a
 full-fledged sound change applier.*

Historical linguists[^1] use a standard grammar to describe a language's
[sound change][1] over time ([diachronically][2]) or among different
speakers at the same time ([synchronically][3]). Each individual change
can be explained by a simple replacement rule, but often requires a
certain context to occur. An example *unconditioned* sound change rule
follows:

    r > l

This rule states that, in some language, the /r/ sound becomes /l/ no
matter the context of the /r/ sound. This rule alone can effectively
describe the change from a morph /fara/ to /fala/, or from /rata/ to
/lata/.

Most sound change in natural languages, however, are *conditional*: they
only occur in certain contexts. We can describe required contexts with
an additional clause in sound change rules:

    r > l / a_o

This rule states that /r/ changes to /l/ only when preceded by an /a/
and succeeded by an /o/. It describes a change from /taro/ to /talo/,
but not from /tar/ to /tal/ or /ero/ to /elo/.

We can describe this sound change rule format as a simple
[BNF grammar][4]:

    <rule>          ::= <context> ">" <replacement> ["/" <condition>]
    <condition>     ::= <context>_<context>
    <context>       ::= (<phoneme> | <phoneme-class>)+
    <phoneme>       ::= <lowercase-letter>
    <phoneme-class> ::= <uppercase-letter>

Close readers will notice that I included in the above grammar the
concept of a *phoneme class*. Sound change appliers often accept as
input along with sound change rules a list of phoneme class definitions.
These describe sets of phonemes which, when referenced within a context,
allow any of their members to appear in the specified position.

    V: aeiou

This line defines a phoneme class **V** (presumably the *vowel* class).
Whenever **V** appears in a sound change rule, any of /a/, /e/, /i/,
/o/, or /u/ should match.

Phoneme classes are extremely useful, since most sound changes
(synchronic and diachronic) only apply in certain phonological contexts
rather than standing as a universal fact. Let's amend our grammar so
that we can describe an entire sound change collection:

    <file>               ::= (<phoneme-class-defn> <EOL>)* <rule>+
    <phoneme-class-defn> ::= <phoneme-class> ":" <phoneme>+
    <rule>               ::= <context> ">" <replacement> ["/" <condition>]
    <condition>          ::= <context>_<context>
    <context>            ::= (<phoneme> | <phoneme-class>)+
    <phoneme>            ::= <lowercase-letter>
    <phoneme-class>      ::= <uppercase-letter>

In the next installment of this tutorial, we'll use this grammar to
build a Parsec parser that can digest sound change rules.

[1]: http://en.wikipedia.org/wiki/Sound_change
[2]: http://en.wikipedia.org/wiki/Diachronic_linguistics
[3]: http://en.wikipedia.org/wiki/Synchronic_linguistics
[4]: http://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form

[^1]: And conlangers!
