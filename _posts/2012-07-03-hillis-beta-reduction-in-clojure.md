---
layout: post
published: true
title: Hillis beta reduction in Clojure
---
Danny Hillis' seminal work [The Connection Machine][1] introduced, among many other things, the concept of "beta reduction" on vectors[^1] (I dub this "Hillis beta reduction" so as not to confuse the term with traditional [beta reduction][2] in the lambda calculus). I found this particular idea fascinating and still applicable today, if only as a quick thought experiment.

Hillis asserted that the everyday [fold / reduce routines][3] that we have all come to know and love are merely a subset of a larger scheme of operations that can be performed on ordered data structures. The overarching process is named the "beta function," and accepts one function and two vectors as arguments. The result of this function is the combination of the two vectors into a map, using the first vector to form the map's values and the second vector to form the map's keys. When duplicate keys are found, the provided function is used to "combine" the corresponding values. It's an interesting process that's much easier to understand given an example:

{% highlight clojure %}
(beta + '(1 2 5) '(X Z Z))  ; => {X 1, Z 7}
{% endhighlight %}

Using the positions of each element to match keys and values of the map to be formed, the beta function pulls together data like a zip function. When the duplicate key `Z` is encountered twice, the two values are combined using the `+` function we provided, and the final value corresponding to the key `Z` in the map is `(+ 2 5)`, or `7`.

What is traditional list folding, then? Why, it's just beta reduction with a certain constant second argument:

{% highlight clojure %}
(beta + '(1 2 5) (repeat 1))  ; => {1 8}
{% endhighlight %}

When we provide the beta function with the same key for every value (`1`, in this case), all values are combined to the same key using the provided function. This is reduction in a different form![^2]

Below is an implementation of Hillis' beta function in Clojure. I included a shorthand form of the function in which a two-argument call will give the same result as a call to `reduce`:

{% highlight clojure %}
(beta + '(1 2 5))  ; => 8
{% endhighlight %}

Feel free to play around!

{% highlight clojure %}
(defn beta
  ([f c1]
     (get (beta f c1 (repeat 1)) 1))
  ([f c1 c2]
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
                  (first c2) (rest c2)))))))
{% endhighlight %}

[^1]: For simplicity's sake, I deliberately ripped out Hillis' concept of beta reduction from its containing system of parallel processing with xectors. References to this particular domain have been shamelessly replaced with Clojure-specific terms.
[^2]: You may notice that this alternate fold returns `{1 8}` rather than a simple `8`. This is due to my somewhat-haphazard readaptation of Hillis' concept for Clojure: the `{1 8}` that is returned is technically correct within Hillis' system of xectors, but is not convenient for those of us living in a von Neumann world. I experimented in using a xector monad as a sort of shim to better integrate beta-reduction into Clojure, but did not develop it far enough to make it merit more than a mention in a footnote.

<img src="http://www.assoc-amazon.com/e/ir?t=blog0cbb-20&l=as2&o=1&a=0262580977" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[1]: http://www.amazon.com/gp/product/0262580977/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0262580977&linkCode=as2&tag=blog0cbb-20
[2]: http://en.wikipedia.org/wiki/Lambda_calculus#Beta_reduction
[3]: http://en.wikipedia.org/wiki/Fold_(higher-order_function)
