---
layout: post
title: Hillis beta reduction improvements
excerpt: Resolving some caveats in the &beta;-reduction implementation.
---

[Last week][1] I introduced the concept of Hillis beta reduction and provided an example implementation in Clojure. There were a few caveats to this implementation, however, mostly stemming from the fact that I &beta;-reduced with sequences and vectors rather than the native "xectors" of Hillis' system. With the risk of adding even more complexity to the demonstration, I'd like to attempt to rectify some of these problems using a few extra tools to transform our data.

## Xectors

I won't provide much detail at all on the xector data type, as I will inevitably botch the majority of the facts. If you're at all interested in parallel computing, I recommend checking out Hillis' book, [The Connection Machine][2].

For our purposes, we can consider a xector to be equivalent to a Clojure map[^1]. We can easily redesign our Hillis &beta;-reduction function to take maps as input, but who would want to convert a sequence to a map whenever using the function?

### The Xector monad

For this issue we can design a small [monad][3] which deliberately breaks the monad laws (cowboy monad?) for demonstration purposes[^2]. The monad will convert provided seqs into an internal map (xector) representation for use in the &beta;-function and (here's the law-breaking part) leave them as maps when returning results. We could be proper and return the same seq type that was provided, but that would essentially destroy the purpose of the &beta;-reduction in the first place!

Without further ado:

{% highlight clojure %}
(use 'clojure.algo.monads)
(defmonad xector-m
  [;; Xector a -> a
   m-result (fn m-result-xector [xector]
              (if (= 1 (count xector))
                (first (vals xector))
                xector))

   ;; a -> (Xector b -> Xector c) -> Xector c
   m-bind (fn m-bind-xector [v f]
            (let [xec (if (sequential? v)
                        (into {} (map-indexed vector v))
                        v)]
              (f xector)))])
{% endhighlight %}

Notice the cheating in `m-result`: we return constant values as expected, but non-constant values (i.e., maps made from seqs) are kept as maps.

In `m-bind`, we convert any type of seq into a map, and keep any other constant value (in our case, we'll use numbers) unmodified[^3].

## &beta;-reduction-redux

We define a new multimethod `xvals` which dispatches on the result of `map?`[^4]. This aligns with the result of the monad bind we defined earlier: for any `a` of `Xector a`, `a` will be either a map or a constant.

{% highlight clojure %}
(defmulti xvals map?)
(defmethod xvals true [xec] (vals xec))
(defmethod xvals false [const] (repeat const))

(defn beta
  ;; (a -> b) -> Xector c -> Xector d
  ([f x1]
     (beta f x1 1))
  ;; (a -> b) -> Xector c -> Xector d -> Xector e
  ([f x1 x2]
     (let [c1 (xvals x1)
           c2 (xvals x2)]
       (loop [acc {}
              e1 (first c1) c1 (rest c1)
              e2 (first c2) c2 (rest c2)]
         (if (or (nil? e1) (nil? e2))
           acc
           (let [new-val (if (contains? acc e2)
                           (f (get acc e2) e1)
                           e1)]
             (recur (assoc acc e2 new-val)
                    (first c1) (rest c1)
                    (first c2) (rest c2))))))))
{% endhighlight %}

Now we can perform &beta;-reduction on seqs by binding them inside our `xector-m`:

{% highlight clojure %}
(domonad xector-m
         [a '(1 2 5)
          b '(X Z Z)]
         (beta + a b))  ; => {X 1, Z 7}
{% endhighlight %}

Traditional folds can now return the expected values without a wrapping map:

{% highlight clojure %}
(domonad xector-m
         [a '(1 2 5)
          b 1]
         (beta + a b))  ; => 8
{% endhighlight %}

### Hillis' arity function

Now that we have a better-ported version of the beta function, I can present a fascinating application also imagined by Hillis later in his paper. It uses both the one- and two-argument forms of the beta function: it simultaneously folds multiple maps into a single map, and then folds that single map to a single value. As always, the code speaks more clearly than I can:

{% highlight clojure %}

;; Return the highest arity of the sequence (i.e., the number of times
;; the most often occurring element appears).
(defn arity [seq]
  (domonad xector-m
           [a 1
            b seq]
           (beta max (beta + a b))))
{% endhighlight %}

In the inner &beta;-reduce, we reduce a set of keys to the same constant value of 1. When duplicate keys (duplicate occurrences of a value in the provided seq) are found, the value 1 is combined with another value 1 using the function `+`, forming a count of 2! This process repeats until the entire provided seq has been digested. Here's a look at the inner &beta;-reduction by itself (notice that its output matches that of `frequencies`!):

{% highlight clojure %}
(domonad xector-m
         [a 1
          b '(2 3 8 2 2 5 8 2)]
         (beta + a b))  ; => {2 4, 3 1, 5 1, 8 2}
{% endhighlight %}

### Where from here?

To be frank: not a clue! I am having trouble thinking of names for the process, let alone applications. It will most likely remain nothing more than a "thought experiment," as I said in my previous post. Let me know in the comments below if you have any thoughts!

[^1]: Ignoring all the parallel-processing fun that comes along with xectors, yes.
[^2]: I still don't fully understand monads, so I may actually be breaking more laws than I intend.
[^3]: I experimented with a `ConstantXector` type and a `:constant` metadata key, but both of these methods proved much less elegant than simply leaving the value alone.
[^4]: Dispatches on "mappiness?"

[1]: /2012/hillis-beta-reduction-in-clojure/
[2]: http://www.amazon.com/gp/product/0262580977/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0262580977&linkCode=as2&tag=blog0cbb-20
[3]: http://en.wikipedia.org/wiki/Monad_(functional_programming)

<img src="http://www.assoc-amazon.com/e/ir?t=blog0cbb-20&l=as2&o=1&a=0262580977" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
