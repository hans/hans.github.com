---
layout: post
title: Hillis β-reduction in Haskell
excerpt: Man, I just will <em>not</em> let this go!
---

I decided to rewrite my [Hillis β-reduction routine][1] in Haskell. I was very pleased to find that the rewrite yielded code much more concise and less "hacky" than the original Clojure algorithm.[^1]

{% highlight haskell %}
module Beta (beta)
where

import Data.Map (Map, alter, empty)

-- Used to insert or merge map values. Partially apply
-- this function with a merge function and an initial
-- value, then use it in `Data.Map.alter`.
alterer :: (a -> a -> a) -> a -> Maybe a -> Maybe a
alterer _ v Nothing = Just v
alterer f v (Just x) = Just (f v x)

-- beta-reduce a list of keys and values with a given
-- merge function.
beta :: Ord k => (a -> a -> a) -> [k] -> [a]
                 -> (Map k a)
beta f keys vals = beta' empty f keys vals

-- Internal recursive function.
beta' :: Ord k => (Map k a) -> (a -> a -> a) -> [k]
                  -> [a] -> (Map k a)
beta' map _ [] _ = map
beta' map _ _ [] = map
beta' map f (k:ks) (v:vs) = let map' = alter
                                          (alterer f v)
                                          k map
                         in beta' map' f ks vs
{% endhighlight %}

[^1]: [`Data.Map`][2] turned out to be a lifesaver!

[1]: /2012/hillis-beta-reduction-in-clojure
[2]: http://www.haskell.org/ghc/docs/latest/html/libraries/containers/Data-Map.html
