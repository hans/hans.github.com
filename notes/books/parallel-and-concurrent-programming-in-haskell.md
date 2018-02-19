---
layout: notes
title: Book notes &#58; Parallel and Concurrent Programming in Haskell
date: January 2014
from_org: true
---

-   Useful advice for any parallel functional programming, not just
    Haskell

Basic parallelism: the `Eval` monad
===================================

Lazy evaluation and weak head normal form
-----------------------------------------

Remember that Haskell is a *lazy* language -- expressions are not
evaluated until their values are absolutely needed. This has an impact
on the style of our parallel programs: just because we offer an
expression does not mean that it will be immediately run in parallel
with other processes.

Expressions are stored as thunks until their values are required.
(Thunks may be called *unevaluated expressions* in Haskell.)

normal form
:   An expression is in normal form when it is fully evaluated.

weak head normal form

:   an expression is in weak head normal form when it is evaluated as
    far as its first constructor. `seq :: a -> b -> b`, for example,
    evaluates its first argument to weak head normal form and returns
    its second argument:

    ``` {.haskell}
    import Data.Tuple

    let x = 1 + 2
    let z = swap (x, x + 1)
    seq z ()

    :sprint z       -- z = (_, _)
    ```

    The tuple constructor is evaluated, but the thunks its references
    are not. The expression `z = (_, _)` is in weak head normal form.

The `Eval` monad, `rpar`, and `rseq`
------------------------------------

`Control.Parallel.Strategies` provides basic functionality for
parallelism:

``` {.haskell}
data Eval a
instance Monad Eval

runEval :: Eval a -> a

rpar :: a -> Eval a
rseq :: a -> Eval a
```

`rpar` **creates** parallelism; its use declares that its first argument
can be evaluated in parallel. `rseq` is used to force sequential
evaluation; it evaluates its argument and waits for the result. In both
cases, "evaluation" is to weak head normal form. Of course, the argument
to `rpar` should be an unevaluated computation -- otherwise, there is no
work to parallelize.

`runEval` performs the `Eval` computation and returns its result. Notice
that it's completely pure -- no `IO` monad here!

Suppose we have a function `f` and two arguments which we want to apply
to it separately and in parallel, `x` and `y`. Using `rpar` for both
evaluations:

``` {.haskell}
runEval $ do
    a <- rpar (f x)
    b <- rpar (f y)
    return (a, b)
```

Remember that the expression `(a, b)` is immediately evaluated only to
WHNF! So the program can continue to run with the result as `(_, _)`
while `f x` and `f y` are calculated in parallel. Now with an `rseq`:

``` {.haskell}
runEval $ do
    a <- rpar (f x)
    b <- rseq (f y)
    return (a, b)
```

Now `runEval` does not finish until `f y` finishes evaluating. The tuple
`(_,
   b)` may well return before `f x` finishes, however. The last style
involves `rseq` with both computations:

``` {.haskell}
runEval $ do
    a <- rpar (f x)
    b <- rseq (f y)
    rseq a
    return (a, b)
```

`runEval` will not finish until both `f x` and `f y` finish. How do we
choose between the three styles?

-   `rpar` / `rseq` is not useful unless we know that one computation
    will take a significantly longer time than the other. (We would
    parallelize the long computation, of course.)
-   It makes sense to use `rpar` / `rpar` unless
    -   we have reached a limit of parallelism, in which case extra
        parallel computation brings nothing but overhead, or
    -   subsequent computations need the result of this expression in
        normal form

Example: parallelizing a sudoku solver
--------------------------------------

Lessons:

-   Be certain that operations like `map` that you wish to parallelize
    are actually forced into normal form rather than WHNF. Use `force`
    to do this.

    ``` {.haskell}
    runEval $ do
        xs <- rpar (force (map ...))
        ys <- rpar (force (map ...))
        return (xs, ys)
    ```

-   Avoid partitioning work into a small, fixed number of chunks.

    -   In practice, chunks rarely contain an equal amount of work.

    -   The parallelism we can achieve is limited to the number of
        chunks we pick. (Not portable!)

    -   static partitioning :: the separation of a set of problems into
        fixed-size chunks

    -   dynamic partitioning :: the distribution of small units of work
        among processors at runtime

The argument to `rpar` is called a *spark*. The runtime collects sparks
in a pool and distributes these among free cores, using a technique
called *work stealing*. Sparks are very cheap to create.

Relevant: [Amdahl's
law](http://en.wikipedia.org/wiki/Amdahl_s_law#Parallelization). Most
programs have a theoretical amount of maximum parallelism.

Deepseq
-------

`force` from earlier has the type `NFData a => a -> a`. The `NFData`
class applies to any value with no unevaluated subexpressions. `NFData`
has just one method:

``` {.haskell}
class NFData a where
    rnf :: a -> ()
    rnf a = a `seq` ()
```

`rnf` stands for "rdeuce to normal form." The default implementation
will work for any values which do not contain subexpressions. `rnf` has
to be reimplemented for tuples, for example -- if we call
`seq (a, b) ()`, `a` and `b` need not be evaluated, since `seq` only
brings the value to WHNF.

You may need to create instances of `NFData` for your own types.

`force` comes from `Control.DeepSeq`, which also defines a `deepseq`
function. This function brings values to normal form:

``` {.haskell}
deepseq :: NFData a => a -> b -> b
deepseq a b = rnf a `seq` b
```

`force` is defined simply in terms of `deepseq`:

``` {.haskell}
force :: NFData a => a -> a
force x = x `deepseq` x
```

Be aware that `deepseq` and by derivation `force` traverse their data
structure argument entirely -- this is \$O(n)\$! Avoid repeated uses of
the functions on the same data.

Evaluation strategies
=====================

Evaluation strategies attempt to separate the *algorithm* within
parallel code from the actual *parallelism*.

A `Strategy` is actuall a function in the `Eval` monad:

``` {.haskell}
type Strategy a = a -> Eval a
```

Notice this signature matches the type of `rpar`.

Strategies might take a data structure as input, traverse the structure
while creating parallelism (with `rpar` and `rseq`), and return the
original value. We can create a strategy for pairs as an example:

``` {.haskell}
parPair :: Strategy (a, b)
parPair (a, b) = do
    a' <- rpar a
    b' <- rpar b
    return (a', b')
```

Now to evaluate a tuple in parallel, for example:

``` {.haskell}
runEval (parPair (fib 35, fib 36))
```

To fully separate the "parallelism" from the algorithm, we can use a
helper function:

``` {.haskell}
using :: a -> Strategy a -> a
x `using` s = runEval (s x)

(fib 35, fib 36) `using` parPair
```

Other helper functions which will be useful (from
`Control.Parallel.Strategies`):

``` {.haskell}
rparWith :: Strategy a -> Strategy a
```

Evaluating a list in parallel
-----------------------------

How can we define `map` using the `Strategy` method?

``` {.haskell}
parMap :: (a -> b) -> [a] -> [b]
parMap f xs = map f xs `using` parList rseq
```

We can write a parameterizable function `evalList`

``` {.haskell}
evalList :: Strategy a -> Strategy [a]
evalList :: (a -> Eval a) -> [a] -> Eval [a]
evalList strat []     = return []
evalList strat (x:xs) = do
    x' <- strat x
    xs' <- evalList strat xs
    return (x':xs')
```

Now parallel evaluation of a list is simple:

``` {.haskell}
parList :: Strategy a -> Strategy [a]
parList :: Strategy a -> [a] -> Eval [a]
parList strat = evalList (rparWith strat)
```

`parList` can be used to build any `Strategy` in the family of
strategies which evaluate list items in parallel.

Example: the k-means problem
----------------------------

Implementing Lloyd's algorithm in parallel Haskell. We can first define
simple primitives:

``` {.haskell}
data Point = Point !Double !Double

zeroPoint :: Point
zeroPoint = Point 0 0

sqDistance :: Point -> Point -> Double
sqDistance (Point x1 y1) (Point x2 y2) = ((x1-x2)^2) + ((y1-y2)^2)

data Cluster = Cluster {clId :: Int, clCent :: Point}

-- A type that will help us accumulate / average point values (we can run in
-- constant space this way)
data PointSum = PointSum !Int !Double !Double

addToPointSum :: PointSum -> Point -> PointSum
addToPointSum (PointSum count xs ys) (Point x y)
    = PointSum (count+1) (xs+x) (ys+1)

-- A cluster / centroid is just the average of a point set
pointSumToCluster :: Int -> PointSum -> Cluster
pointSumToCluster i (PointSum count xs ys) =
    Cluster { clId = i
            , clCent = Point (xs / fromIntegral count) (ys / fromIntegral count)
            }
```

The algorithm repeats a few steps until convergence:

1.  Divide the points into new sets by finding the `Cluster` to which
    each point is closest. Build up a `PointSum` for each cluster. The
    step outputs a `Vector PointSum`.
2.  Make a cluster from each `PointSum` from step 1, yielding
    `[Cluster]`.
3.  Step 2's result is fed back into step 1 until convergence.

`assign` below implements step 1:

``` {.haskell}
assign :: Int -> [Cluster] -> [Point] -> Vector PointSum
assign k clusters points = Vector.create $ do
    vec <- MVector.replicate k (PointSum 0 0 0)
    let
        addpoint p = do
            let c = nearest p; cid = clId c
                ps <- MVector.read vec cid
                MVector.write vec cid $ addToPointSum ps p

    mapM_ addpoint points
    return vec

 where
     nearest p = fst $ minimumBy (compare `on` snd)
                                 [(c, sqDistance (clCent c) p) | c <- clusters]
```

`makeNewClusters` implements step 2:

``` {.haskell}
makeNewClusters :: Vector PointSum -> [Cluster]
makeNewClusters vec =
    [ pointSumToCluster i ps
    | (i, ps@(PointSum count _ _)) <- zip [0..] (Vector.toList vec)
    , count > 0
    ]
```

`step` implements one complete iteration step:

``` {.haskell}
step :: Int -> [Cluster] -> [Point] -> [Cluster]
step = makeNewClusters . assign
```

We'll make a parent function which handles the convergence watching:

``` {.haskell}
kmeans_seq :: Int -> [Point] -> [Cluster] -> IO [Cluster]
kmeans_seq k points clusters =
    let
        tooMany = 80

        loop :: Int -> [Cluster] -> IO [Cluster]
        loop n clusters | n > tooMany = do
            putStrLn "giving up."
            return clusters

        loop n clusters = do
            printf "iteration %d\n" n
            putStr (unlines (map show clusters))

            let clusters' = step k clusters points
            if clusters' == clusters
                then return clusters
                else loop (n+1) clusters'
    in
    loop 0 clusters

```

### Parallelizing k-means

The `assign` function is definitely the best target for parallelization
-- it is essentially just a `map` over the points! We can't just use
`parMap` or the like, because the overhead of launching such a great
amount of parallelism would outweight any benefits of parallelizing. We
need to increase the chunk size instead.

We can divide the list of points into chunks and process those chunks in
parallel. \[Weren't we just saying how this was bad?\]

``` {.haskell}
split :: Int -> [a] -> [[a]]
split numChunks xs = chunk (length xs `quot` numChunks) xs

chunk :: Int -> [a] -> [[a]]
chunk n [] = []
chunk n xs = as : chunk n bs
    where (as, bs) = splitAt n xs
```

Once we get results from two parallel operations of step 1, we need to
combine them:

``` {.haskell}
addPointSums :: PointSum -> PointSum -> PointSum
addPointSums (PointSum c1 x1 y1) (PointSum c2 x2 y2)
    = PointSum (c1 + c2) (x1 + x2) (y1 + y2)

combine :: Vector PointSum -> Vector PointSum -> Vector PointSum
combine = Vector.zipWith addPointSums
```

Now `step` can be parallelized:

``` {.haskell}
parSteps_strat :: Int -> [Cluster] -> [[Point]] -> [Cluster]
parSteps_strat k clusters pointss
    = makeNewClusters $ foldr1 combine $ (map (assign k clusters) pointss
                                          `using` parList rseq)
```

Now a parallel version of `kmeans_seq`, `kmeans_strat`:

``` {.haskell}
kmeans_strat :: Int -> Int -> [Point] -> [Cluster] -> IO [Cluster]
kmeans_strat numChunks k points clusters =
    let
        chunks = split numChunks points
        tooMany = 80

        loop :: Int -> [Cluster] -> IO [Cluster]
        loop n clusters | n > tooMany = do
            printf "giving up."
            return clusters

        loop n clusters = do
            printf "iteration %d\n" n
            putStr $ unlines (map show clusters)

            let clusters' = parSteps_strat k clusters chunks
            if clusters' == clusters
                then return clusters
                else loop (n+1) clusters'
    in
    loop 0 clusters
```

### Performance and analysis

Parallelizing lazy streams with `parBuffer`
-------------------------------------------

Haskell programs often follow the pattern of lazily consuming a lazy
stream. Programs with such patterns can run in constant space.

Whereas `parList` will create a spark for every single element of a
list, `parBuffer` in `Control.Parallel.Strategies` will create $N$
sparks only for the first $N$ elements of the list, then creating more
sparks as the result list is consumed.

``` {.haskell}
parBuffer :: Int -> Strategy a -> Strategy [a]
```

Chunking strategies
-------------------

We chunked the data manually in the K-means example, but
`Control.Parallel.Strategies` actually provides a default implementation
of this same approach:

``` {.haskell}
parListChunk :: Int -> Strategy a -> Strategy [a]
```

This is useful when:

1.  You have a list with too many elements to allocate a spark for every
    one
2.  You have a list where processing per element is too cheap to merit a
    spark for each element

A good symptom of either of the first case is **overflowed** sparks. The
spark pool has a fixed size, and when too many sparks are allocated, the
newest "overflow." If sparks are overflowing, you should chunk your data
rather than allocating a unique spark per element. (Simply replace a
`parList` with a `parListChunk`!)

There's still good reason to chunk manually occasionally. Take the
K-means example -- if we were to use `parListChunk`, the data would be
chunked on every iteration! Better to chunk once manually in that case,
and use the chunked data in repeated iterations.

Dataflow parallelism: the `Par` monad
=====================================

Parallelism with the `Eval` monad and Strategies has some advantages:

-   Algorithms can remain decoupled from parallelism
-   Parallel evaluation strategies are composable

But the framework around which this approach builds is not always
convenient. We don't always want to involve laziness, which often can
complicate things more in a parallel environment than it helps.

The `Par` monad has different trade-offs. It aims to avoid reliance on
lazy evaluation without sacrificing the determinism that we always
require.

``` {.haskell}
runPar :: Par a -> a
fork :: Par () -> Par ()
```

Data can be passed between parallel computations with `IVar` instances,
which are similar to futures or promises.

``` {.haskell}
new :: Par (IVar a)
put :: NFData a => IVar a -> a -> Par ()
get :: IVar a -> Par a
```

`IVar` instances begin empty. `put` stores values in the var, and `get`
will block until it can retrieve a value from the var.

Computing the sum two Fibonacci numbers in parallel:

``` {.haskell}
runPar $ do
    -- Create two new IVars to hold the results
    i <- new
    j <- new

    -- Make two independent parallel computations
    fork (put i (fib n))
    fork (put j (fib m))

    -- Block until the IVars (futures!) are evaluated
    a <- get i
    b <- get j

    return (a+b)
```

We're effectively creating a *datatflow graph* when building
computations like this:

-   Each `fork` creates a node
-   Each `new` creates an edge
-   Each `get` and `put` connect the edges to the nodes

A simple abstraction for a parallel computation that returns a result:

``` {.haskell}
spawn :: NFData a => Par a -> Par (IVar a)
spawn p = do
  i <- new
  fork (do x <- p; put i x)
  return i
```
