---
layout: post
title: Parsing sound change rules with Parsec&#58; Part 2
excerpt: Parsing phoneme class definitions and modifying user state
main: true
---

*This is the second post in a tutorial series on applying Parsec in
 historical linguistics. We've begun by providing a more formal
 description of sound change rule grammars and will end by building a
 full-fledged sound change applier.*

In my [last post][1] we established a BNF grammar for files which
describe sound change rules:

    <file>               ::= (<phoneme-class-defn> <EOL>)* (<rule> <EOL>)+
    <phoneme-class-defn> ::= <phoneme-class> ":" <phoneme>+
    <rule>               ::= <context> ">" <replacement> ["/" <condition>]
    <condition>          ::= <context>_<context>
    <context>            ::= (<phoneme> | <phoneme-class>)+
    <phoneme>            ::= <lowercase-letter>
    <phoneme-class>      ::= <uppercase-letter>

Before we begin parsing, let's set up some basic datatypes which can be
used to store the parse results.

{% highlight haskell %}
import Data.Map (Map)

-- A single phoneme.
type Phoneme = Char

-- Phoneme class storage, mapping from a single character ('V', 'A',
-- 'F', etc.) to a collection of phonemes.
type PhonemeClassMap = Map Char [Phoneme]

-- A string of phonemes used to match a given context.
type Context = [Phoneme]

-- A complete sound change rule.
data Rule = Rule { replacement   :: [Phoneme],
                   beforeContext :: Context,
                   inContext     :: Context,
                   afterContext  :: Context }

instance Show Rule where
    show (Rule r b i a) = show i ++ " > " ++ show r ++ " / " ++ show b
                          ++ "_" ++ show a
{% endhighlight %}

Referencing the BNF grammar, we can use these types to build the returns
for our parsers. Let's start with the simplest Parsec rules,
`anyPhoneme` and `anyPhonemeClass`. Any uppercase character in sound
change rules should be interpreted as a phoneme class reference, and any
lowercase character must be a phoneme.

{% highlight haskell %}
import Text.Parsec

anyPhoneme :: Parsec String () Phoneme
anyPhoneme = lower

anyPhonemeClass :: Parsec String () Char
anyPhonemeClass = upper
{% endhighlight %}

As evidenced by the given type annotations, our parsers (for the moment)
will have a stream type of `String`, a user state type of `()`, and a
return type that varies based on their purpose.

## Our first lift

We need to next build the parser for phoneme class definitions. As a
first try, we could have our parser return a pair of type `(Char,
[Phoneme])`, matching with the type of a `PhonemeClassMap`. Let's start:

{% highlight haskell %}
phonemeClassDefinition :: Parsec String () (Char, [Phoneme])
phonemeClassDefinition = (,) (anyPhonemeClass) (many1 anyPhoneme)
{% endhighlight %}

This doesn't work! What gives?

Let's look at the type of `(,)`, a tuple constructor:

{% highlight haskell %}
(,) :: a -> b -> (a, b)
{% endhighlight %}

And check the type of `anyPhonemeClass` and `many1 anyPhoneme`:

{% highlight haskell %}
anyPhonemeClass  :: ParsecT String () Identity Char
many1 anyPhoneme :: ParsecT String () Identity [Phoneme]
{% endhighlight %}

These have the right types `Char` and `[Phoneme]`, except they're
contained within a `ParsecT` type.

Good news: `ParsecT s u m` is a functor! This means that we can "lift"
functions into the context defined by the type. Check the type of `fmap`
and `fmap (,)`:

{% highlight haskell %}
fmap     :: Functor f => (a -> b) -> f a -> f b
fmap (,) :: Functor f => f a -> f (b -> (a, b))
{% endhighlight %}

You can check that the type of `(,)` corresponds with the type of `fmap
(,)`. (In `fmap`'s type signature, `b` corresponds to `b -> (a, b)` from
`(,)`'s type.)

Let's provide `fmap (,)` with that first argument `f a`, where `f` is
`ParsecT String () Identity` and `a` is `Char`. (This looks like the
type of `anyPhonemeClass`!)

{% highlight haskell %}
fmap (,) anyPhonemeClass :: ParsecT String () Identity (b -> (Char, b))
{% endhighlight %}

Great - just as `fmap`'s signature described, `(,)` was lifted into the
`ParsecT String () Identity` context and `a` was clarified to be a
`Char`. We can make our expression look a bit nicer by using an infix
alias for `fmap` from `Control.Applicative`, `<$>`:

{% highlight haskell %}
(,) <$> anyPhonemeClass :: ParsecT String () Identity (b -> (Char, b))
{% endhighlight %}

## Applying within a context

Looking at the types, we're almost there: we want our final parser to
have a return type of `(Char, [Phoneme])` and the current parser has a
return type of `b -> (Char, b)`. How can we supply a type `b`?

The answer comes from the fact that `ParsecT s u m` is not only a
functor but an *applicative* functor. This means that we can apply
functions already within the context (like `b -> (Char, b)`!) to values
within the context (like `anyPhoneme`!).

This contextual application is invoked by `Control.Applicative`'s `<*>`.
Compare its type with the type of `$`: the only difference is that `<*>`
operates within a context `f`.

{% highlight haskell %}
(<*>) :: Applicative f => f (a -> b) -> f a -> f b
($)   ::                    (a -> b) ->   a ->   b
{% endhighlight %}

Let's apply the lifted and partially applied function from the last
section to `anyPhoneme`:

{% highlight haskell %}
anyPhoneme :: ParsecT String () Identity Phoneme
(,) <$> anyPhonemeClass :: ParsecT String () Identity (b -> (Char, b))
(,) <$> anyPhonemeClass <*> anyPhoneme
    :: ParsecT String () Identity (Char, Phoneme)
{% endhighlight %}

Close: our return type is `(Char, Phoneme)`. Let's apply with a `many1
anyPhoneme` instead, which will produce a parser that accepts one or
more phonemes.

{% highlight haskell %}
(,) <$> anyPhonemeClass <*> many1 anyPhoneme
    :: ParsecT String () Identity (Char, [Phoneme])
{% endhighlight %}

Great! Our parser returns the proper type. Let's write the actual
implementation of our phoneme class definition rule before continuing:

{% highlight haskell %}
import Control.Applicative ((<$>), (<*>))

phonemeClassDefinition :: ParsecT String () Identity (Char, [Phoneme])
phonemeClassDefinition = (,) <$> anyPhonemeClass <*> many1 anyPhoneme
{% endhighlight %}

We must do a bit of bookkeeping. In the original BNF, we stated that a
phoneme class definition was of the form

    <phoneme-class-defn> ::= <phoneme-class> ":" <phoneme>+

We need to account for the "useless" colon in this expression. It's
useless in that it contributes nothing to the parse result. Using the
`*>` function from `Control.Applicative`, we can consume a `':'`
character and discard its result:

{% highlight haskell %}
import Control.Applicative ((<$>), (<*>), (*>))

phonemeClassDefinition :: ParsecT String () Identity (Char, [Phoneme])
phonemeClassDefinition :: (,) <$> anyPhonemeClass
                          <*> (char ':' *> many1 anyPhoneme)
{% endhighlight %}

## Modifying user state

There's one significant problem left with this parser. True, it eats up
strings without a problem:

{% highlight haskell %}
> parse phonemeClassDefinition "" "V:aeiou"
Right ('V', "aeiou")
{% endhighlight %}

Our problem is that we need to reference these definitions in another
parser, specifically the *context parser*:

    <context> ::= (<phoneme> | <phoneme-class>)+

Since Parsec has no idea of what a phoneme class is, when we build this
parser we'll need to identify exactly what we should look for in test
words given that we saw "V" or "A" in a rule. How can we have the
phoneme class definitions "carry over?"

It's simple using Parsec's built-in "user state" feature. (It shows up
in the `u` in `ParsecT s u m a`.) Rather than using `()` as our user
state type, let's carry along a `PhonemeClassMap` as state. Each rule's
type needs to now be redefined (but the implementation for those not
using the state data need not change):

{% highlight haskell %}
anyPhoneme :: ParsecT String PhonemeClassMap Identity Phoneme
anyPhonemeClass :: ParsecT String PhonemeClassMap Identity Char
phonemeClassDefinition
    :: ParsecT String PhonemeClassMap Identity (Char, [Phoneme])
{% endhighlight %}

In `phonemeClassDefinition` we'll need to use Parsec's `modifyState`
function:

{% highlight haskell %}
modifyState :: Monad m => (u -> u) -> ParsecT s u m ()
{% endhighlight %}

This type annotation does a great job of helping us understand what
exactly happens within the function. Given some user state modifier
(i.e., a function which takes an old user state of type `u` and creates
a new one), a new parser is yielded which has a user state of type `u`
and returns nothing.

Now `phonemeClassDefinition` will return nothing and instead modify the
parser's state (i.e., add entries to the phoneme class map).

{% highlight haskell %}
phonemeClassDefinition :: ParsecT String PhonemeClassMap Identity ()
{% endhighlight %}

We want to modify this map by `insert`ing an entry whose contents will
be equal . We run into a familiar problem, however, since `insert` was
not built explicitly for use with the `ParsecT s u m` context:

{% highlight haskell %}
insert :: a -> b -> Map a b -> Map a b
{% endhighlight %}

Let's lift `insert` into the `ParsecT s u m` functor:

{% highlight haskell %}
(<$>) insert :: (Functor f, Ord a) => f a -> f (a1 -> Map a a1
                                                   -> Map a a1)
insert <$> anyPhonemeClass
    :: ParsecT String PhonemeClassMap Identity (a -> Map Char a
                                                  -> Map Char a)
{% endhighlight %}

Close, like before: we can now provide `fmap insert` with a first
argument in the `ParsecT s u m` context, but the `a1` in the type
annotation has no concept of context. Using `<*>` once more, we can fix
the problem:

{% highlight haskell %}
insert <$> anyPhonemeClass <*> (char ':' *> many1 anyPhoneme)
    :: ParsecT String PhonemeClassMap Identity
       (Map Char [Phoneme] -> Map Char [Phoneme])
{% endhighlight %}

Before continuing, let's give a name to the parser created in this
section.

{% highlight haskell %}
modifier :: ParsecT String PhonemeClassMap Identity
            (Map Char [Phoneme] -> Map Char [Phoneme])
modifier = insert <$> anyPhonemeClass <*> many1 anyPhoneme
{% endhighlight %}

Notice that `Map Char [Phoneme]` is equivalent to `PhonemeClassMap`, or
our parser's user state `u`. We just did all this work to lift and apply
`insert` within a context, but now, upon revisiting `modifyState`'s
type, we see we'll need to head in the other direction:

{% highlight haskell %}
phonemeClassDefinition :: ParsecT String u Identity ()
modifier               :: ParsecT String u Identity (u -> u)
modifyState            :: Monad m => (u -> u) -> ParsecT s u m ()
{% endhighlight %}

## Binding

If we simplify the types here, the next step should be obvious. (This is
pseudo-Haskell.)

{% highlight haskell %}
u :: PhonemeClassMap
f :: ParsecT String u Identity
a :: u -> u
b :: ()

modifier    :: f a
modifyState :: Monad m => a -> m b
{% endhighlight %}

We need some function that, with an `f a` and `a -> f b`, derive an
`f b`. This sounds just like `>>=`, the monadic bind operation!

{% highlight haskell %}
(>>=)                    :: Monad m => m a -> (a -> m b) -> m b
modifier >>= modifyState :: ParsecT s PhonemeClassMap m ()
{% endhighlight %}

That's it -- we've found our definition for `phonemeClassDefinition`!
With some reformatting:

{% highlight haskell %}
phonemeClassDefinition :: ParsecT String PhonemeClassMap Identity ()
phonemeClassDefinition = modifier >>= modifyState
                         where modifier = insert <$> anyPhonemeClass
                                          <*> defn
                               defn     = char ':' >> many1 anyPhoneme
{% endhighlight %}

We've finished with the hardest parser of the set. In the next post,
we'll tackle the remaining parsers, most of which are simple
combinations of those constructed today.

[1]: /2012/sound-change-parsing-bnf-grammar
[2]: http://www.haskell.org/hoogle/?hoogle=%3E%3E
