---
layout: default
published: false
---
Danny Hillis' seminal work [The Connection Machine][1] introduced, among many other things, the concept of "beta reduction" on vectors<sup>1</sup> (I dub this "Hillis beta reduction" so as not to confuse the term with traditional [beta reduction][2] in the lambda calculus). I found this particular idea fascinating and still applicable today, if only as a quick thought experiment.

Hillis asserted that the everyday [fold / reduce routines][3] that we have all come to know and love are merely a subset of a larger scheme of operations that can be performed on indexed data structures. The overarching process is named the "beta function," and accepts one function and two vectors as arguments. The result of this function is the combination of the two vectors into a map, using the first vector to form the map's values and the second vector to form the map's keys. When duplicate keys are found, the provided function is used to "combine" the corresponding values. It's an interesting process that's much easier to understand given an example:

```clojure
(beta + '(1 2 5) '(X Z Z))  ; => {X 1, Z 7}
```

Using the positions of each element to match keys and values of the map to be formed, the beta function pulls together data like a zip function. When the duplicate key `Z` is encountered twice, the two values are combined using the `+` function we provided, and the final value corresponding to the key `Z` in the map is `(+ 2 5)`, or `7`.

<hr/>

## Footnotes

1. For simplicity's sake, I deliberately ripped out Hillis' concept of beta reduction from its containing system of parallel processing with xectors. References to the s

<img src="http://www.assoc-amazon.com/e/ir?t=blog0cbb-20&l=as2&o=1&a=0262580977" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[1]: http://www.amazon.com/gp/product/0262580977/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0262580977&linkCode=as2&tag=blog0cbb-20
[2]: http://en.wikipedia.org/wiki/Lambda_calculus#Beta_reduction
[3]: http://en.wikipedia.org/wiki/Fold_(higher-order_function)