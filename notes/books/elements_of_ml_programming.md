---
layout: note
title: Book notes&#58; Elements of ML Programming
date: 26/10/2012
from_org: true
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">Getting started in ML</a>
<ul>
<li><a href="#sec-1-1">Expressions</a>
<ul>
<li><a href="#sec-1-1-1">Constants</a></li>
<li><a href="#sec-1-1-2">String operators</a></li>
<li><a href="#sec-1-1-3">Comparison operators</a></li>
<li><a href="#sec-1-1-4">Combining logical values</a></li>
<li><a href="#sec-1-1-5">If-then-else expressions</a></li>
</ul>
</li>
<li><a href="#sec-1-2">Type consistency</a>
<ul>
<li><a href="#sec-1-2-1">Coercion between integers and reals</a></li>
<li><a href="#sec-1-2-2">Coercion between characters and integers</a></li>
<li><a href="#sec-1-2-3">Coercion between strings and characters</a></li>
</ul>
</li>
<li><a href="#sec-1-3">Tuples and lists</a>
<ul>
<li><a href="#sec-1-3-1">Tuples</a></li>
<li><a href="#sec-1-3-2">Lists</a></li>
<li><a href="#sec-1-3-3">Converting between character strings and lists</a></li>
<li><a href="#sec-1-3-4">Introduction to the ML type system</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-2">Defining functions</a>
<ul>
<li><a href="#sec-2-1">It's easy; it's <code>fun</code></a></li>
<li><a href="#sec-2-2">Function types</a>
<ul>
<li><a href="#sec-2-2-1">Functions that reference external variables</a></li>
</ul>
</li>
<li><a href="#sec-2-3">Recursive functions</a>
<ul>
<li><a href="#sec-2-3-1">Nonlinear recursion</a></li>
<li><a href="#sec-2-3-2">How ML deduces types</a></li>
</ul>
</li>
<li><a href="#sec-2-4">Patterns in function definitions</a>
<ul>
<li><a href="#sec-2-4-1">Patterns as function parameters</a></li>
</ul>
</li>
<li><a href="#sec-2-5">Local environments using <code>let</code></a></li>
<li><a href="#sec-2-6">Case study: polynomial multiplication</a>
<ul>
<li><a href="#sec-2-6-1">Representing polynomials by lists</a></li>
<li><a href="#sec-2-6-2">A simple polynomial multiplication algorithm</a></li>
<li><a href="#sec-2-6-3">Auxiliary functions for a faster multiplication</a></li>
<li><a href="#sec-2-6-4">The Karatsuba-Ofman algorithm</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-3">Input and output</a>
<ul>
<li><a href="#sec-3-1">Simple output</a>
<ul>
<li><a href="#sec-3-1-1">Printing nonstring values</a></li>
<li><a href="#sec-3-1-2">"Statement" list</a></li>
</ul>
</li>
<li><a href="#sec-3-2">Reading input from a file</a>
<ul>
<li><a href="#sec-3-2-1">Instreams</a></li>
<li><a href="#sec-3-2-2">Reading characters from a file</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-4">More about functions</a>
<ul>
<li><a href="#sec-4-1">Matches</a>
<ul>
<li><a href="#sec-4-1-1">Using matches to define functions</a></li>
<li><a href="#sec-4-1-2">Case expressions</a></li>
</ul>
</li>
<li><a href="#sec-4-2">Exceptions</a>
<ul>
<li><a href="#sec-4-2-1">User-defined exceptions</a></li>
<li><a href="#sec-4-2-2">Exceptions with parameters</a></li>
<li><a href="#sec-4-2-3">Local exceptions</a></li>
</ul>
</li>
<li><a href="#sec-4-3">Polymorphic functions</a>
<ul>
<li><a href="#sec-4-3-1">A limitation on the use of polymorphic functions</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-5">Defining your own types</a>
<ul>
<li><a href="#sec-5-1">Datatypes</a>
<ul>
<li><a href="#sec-5-1-1">Recursively defined datatypes</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-6">More about ML data structures</a>
<ul>
<li><a href="#sec-6-1">Record structures</a>
<ul>
<li><a href="#sec-6-1-1">Records and their types</a></li>
</ul>
</li>
<li><a href="#sec-6-2">Arrays</a></li>
</ul>
</li>
<li><a href="#sec-7">Encapsulation and the ML module system</a></li>
</ul>
</div>
</div>
<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Getting started in ML</h2>
<div class="outline-text-2" id="text-1">
</div><div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Expressions</h3>
<div class="outline-text-3" id="text-1-1">
</div><div id="outline-container-sec-1-1-1" class="outline-4">
<h4 id="sec-1-1-1"><span class="section-number-4">1.1.1</span> Constants</h4>
<div class="outline-text-4" id="text-1-1-1">
<p>
Negative numbers are prefixed by the unary minus sign (<code>~</code>) rather than by a
<code>-</code>.
</p>
</div>
</div>
<div id="outline-container-sec-1-1-2" class="outline-4">
<h4 id="sec-1-1-2"><span class="section-number-4">1.1.2</span> String operators</h4>
<div class="outline-text-4" id="text-1-1-2">
<p>
<code>^</code> is the string concatenation operator (infix).
</p>
</div>
</div>
<div id="outline-container-sec-1-1-3" class="outline-4">
<h4 id="sec-1-1-3"><span class="section-number-4">1.1.3</span> Comparison operators</h4>
<div class="outline-text-4" id="text-1-1-3">
<p>
<code>&lt;&gt;</code> is the inequality relation.
</p>

<p>
Reals can't be tested for equality or inequality.
</p>
</div>
</div>
<div id="outline-container-sec-1-1-4" class="outline-4">
<h4 id="sec-1-1-4"><span class="section-number-4">1.1.4</span> Combining logical values</h4>
<div class="outline-text-4" id="text-1-1-4">
<dl class="org-dl">
<dt> <code>andalso</code> </dt><dd>logical AND operator
</dd>
<dt> <code>orelse</code> </dt><dd>logical OR operator
</dd>
</dl>

<p>
Short-circuit evaluation is used.
</p>
</div>
</div>
<div id="outline-container-sec-1-1-5" class="outline-4">
<h4 id="sec-1-1-5"><span class="section-number-4">1.1.5</span> If-then-else expressions</h4>
<div class="outline-text-4" id="text-1-1-5">
<p>
<code>if E then F else G</code>. There is no <code>if ... then</code> statement alone, because if
the predicate were false there would be no value.
</p>

<p>
-&gt; this is not a control flow statement but an expression in itself.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> Type consistency</h3>
<div class="outline-text-3" id="text-1-2">
</div><div id="outline-container-sec-1-2-1" class="outline-4">
<h4 id="sec-1-2-1"><span class="section-number-4">1.2.1</span> Coercion between integers and reals</h4>
<div class="outline-text-4" id="text-1-2-1">
<dl class="org-dl">
<dt> <code>real</code> </dt><dd><code>int -&gt; real</code>
</dd>
</dl>

<p>
<code>floor</code>, <code>ceil</code>, <code>round</code>, <code>trunc</code> (truncate) provide for the <code>real -&gt; int</code>
direction.
</p>
</div>
</div>
<div id="outline-container-sec-1-2-2" class="outline-4">
<h4 id="sec-1-2-2"><span class="section-number-4">1.2.2</span> Coercion between characters and integers</h4>
<div class="outline-text-4" id="text-1-2-2">
<dl class="org-dl">
<dt> <code>ord</code> </dt><dd><code>char -&gt; int</code> by ASCII
</dd>
<dt> <code>chr</code> </dt><dd><code>int -&gt; char</code> by ASCII
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-1-2-3" class="outline-4">
<h4 id="sec-1-2-3"><span class="section-number-4">1.2.3</span> Coercion between strings and characters</h4>
<div class="outline-text-4" id="text-1-2-3">
<dl class="org-dl">
<dt> <code>str</code> </dt><dd><code>char -&gt; string</code>
</dd>
</dl>
</div>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> Tuples and lists</h3>
<div class="outline-text-3" id="text-1-3">
</div><div id="outline-container-sec-1-3-1" class="outline-4">
<h4 id="sec-1-3-1"><span class="section-number-4">1.3.1</span> Tuples</h4>
<div class="outline-text-4" id="text-1-3-1">
<p>
Tuples are surrounded by parentheses and their elements are separated by
commas. A tuple <code>(1, "a", 3.0)</code> is of the <i>product type</i> <code>int * string *
   real*</code>.
</p>

<p>
Access tuple components with the <code>#</code> character, followed by an index and
then by the tuple itself.
</p>

<div class="org-src-container">

<pre class="src src-sml">val t = (4, 5.0, "six");

#1(t);
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-1-3-2" class="outline-4">
<h4 id="sec-1-3-2"><span class="section-number-4">1.3.2</span> Lists</h4>
<div class="outline-text-4" id="text-1-3-2">
<p>
Traditional ML lists must have elements of the same type.
</p>

<div class="org-src-container">

<pre class="src src-sml">val it = [1, 2, 3] : int list;
</pre>
</div>

<p>
"\(T\) list" is a list whose elements are of type \(T\).
</p>

<p>
ML uses the <code>head</code> / <code>tail</code> pattern for lists. (<code>hd</code>, <code>tl</code>)
</p>

<dl class="org-dl">
<dt> <code>@</code> </dt><dd>concatenation operator for lists
</dd>
<dt> <code>::</code> </dt><dd><code>cons</code> operator
</dd>
<dt> <code>nil</code> </dt><dd>empty list (of type \(T\) <code>list</code>)
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-1-3-3" class="outline-4">
<h4 id="sec-1-3-3"><span class="section-number-4">1.3.3</span> Converting between character strings and lists</h4>
<div class="outline-text-4" id="text-1-3-3">
<dl class="org-dl">
<dt> <code>explode</code> </dt><dd><code>string -&gt; char list</code>
</dd>
<dt> <code>implode</code> </dt><dd><code>char list -&gt; string</code>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-1-3-4" class="outline-4">
<h4 id="sec-1-3-4"><span class="section-number-4">1.3.4</span> Introduction to the ML type system</h4>
<div class="outline-text-4" id="text-1-3-4">
<blockquote>
<p>
The type system of ML is constructed from a <i>basis</i> of elementary types by
applying certain <i>type constructors</i> recursively.
</p>
</blockquote>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Defining functions</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> It's easy; it's <code>fun</code></h3>
<div class="outline-text-3" id="text-2-1">
<dl class="org-dl">
<dt> <code>fun</code> </dt><dd>declares a function

<blockquote>
<p>
<code>fun</code> &lt;identifier&gt; (&lt;parameter list&gt;) = <code>&lt;expression&gt;;</code>
</p>
</blockquote>
</dd>
</dl>

<div class="org-src-container">

<pre class="src src-sml">fun upper(c) = chr(ord(c) - 32);
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">upper #"a";
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> Function types</h3>
<div class="outline-text-3" id="text-2-2">
<blockquote>
<p>
<code>fn :</code> &lt;domain type&gt; <code>-&gt;</code> &lt;range type&gt;
</p>
</blockquote>

<p>
Parameter types are optionally declared .. anywhere.
</p>

<div class="org-src-container">

<pre class="src src-sml">fun square x = x * x;
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">fun square (x:real) = x * x;
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">fun square x = (x:real) * x;
</pre>
</div>
</div>

<div id="outline-container-sec-2-2-1" class="outline-4">
<h4 id="sec-2-2-1"><span class="section-number-4">2.2.1</span> Functions that reference external variables</h4>
<div class="outline-text-4" id="text-2-2-1">
<p>
ML functions form closures over global values.
</p>

<div class="org-src-container">

<pre class="src src-sml">val x = 3;
fun addx a = a + x;
val x = 10;
addx 2;
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> Recursive functions</h3>
<div class="outline-text-3" id="text-2-3">
<div class="org-src-container">

<pre class="src src-sml">fun reverse xs =
    if xs = nil then nil
    else reverse (tl xs) @ [hd xs];
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">reverse [1,2,3];
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">reverse [#"a", #"b", #"c"];
</pre>
</div>
</div>

<div id="outline-container-sec-2-3-1" class="outline-4">
<h4 id="sec-2-3-1"><span class="section-number-4">2.3.1</span> Nonlinear recursion</h4>
<div class="outline-text-4" id="text-2-3-1">
<div class="org-src-container">

<pre class="src src-sml">fun comb (n, m) = (* assumes 0 &lt;= m &lt;= n *)
    if m = 0 orelse m = n then 1
    else comb(n - 1, m) + comb(n - 1, m - 1);
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">comb (4, 2);
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-3-2" class="outline-4">
<h4 id="sec-2-3-2"><span class="section-number-4">2.3.2</span> How ML deduces types</h4>
<div class="outline-text-4" id="text-2-3-2">
<p>
[Nothing interesting.. I thought they would talk about Hindley-Milner. Oh
well.. maybe further on.]
</p>
</div>
</div>
</div>
<div id="outline-container-sec-2-4" class="outline-3">
<h3 id="sec-2-4"><span class="section-number-3">2.4</span> Patterns in function definitions</h3>
<div class="outline-text-3" id="text-2-4">
</div><div id="outline-container-sec-2-4-1" class="outline-4">
<h4 id="sec-2-4-1"><span class="section-number-4">2.4.1</span> Patterns as function parameters</h4>
<div class="outline-text-4" id="text-2-4-1">
<div class="org-src-container">

<pre class="src src-sml">fun reverse nil     = nil
|   reverse (x::xs) = (reverse xs) @ [x];
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">fun flipAlt nil        = nil
  | flipAlt (x::[])    = [x]
  | flipAlt (x::y::xs) = y::x::(flipAlt xs);

flipAlt [1, 2, 3, 4, 5, 6, 7];
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-2-5" class="outline-3">
<h3 id="sec-2-5"><span class="section-number-3">2.5</span> Local environments using <code>let</code></h3>
<div class="outline-text-3" id="text-2-5">
<p>
<code>let (val &lt;x&gt; = &lt;y&gt;;)+ in &lt;expr&gt; end</code>
</p>
</div>
</div>
<div id="outline-container-sec-2-6" class="outline-3">
<h3 id="sec-2-6"><span class="section-number-3">2.6</span> Case study: polynomial multiplication</h3>
<div class="outline-text-3" id="text-2-6">
</div><div id="outline-container-sec-2-6-1" class="outline-4">
<h4 id="sec-2-6-1"><span class="section-number-4">2.6.1</span> Representing polynomials by lists</h4>
<div class="outline-text-4" id="text-2-6-1">
<p>
Lists of real coefficients, ordered by increasing corresponding degree. For
example, \(x^3 + 4x - 5\) is modeled by <code>[~5.0, 4.0, 1.0]</code>.
</p>

<p>
If <code>L</code> is a list representing polynomial \(P\), <code>L</code> is of the form <code>a ::
    M</code>, and <code>M</code> represents the polynomial \(Q\), then \(P = a + Qx\).
</p>
</div>
</div>
<div id="outline-container-sec-2-6-2" class="outline-4">
<h4 id="sec-2-6-2"><span class="section-number-4">2.6.2</span> A simple polynomial multiplication algorithm</h4>
<div class="outline-text-4" id="text-2-6-2">
<div class="org-src-container">

<pre class="src src-sml">(* Add two polynomial representations. *)
fun padd P nil                = P
  | padd nil Q                = Q
  | padd ((a:real)::P) (b::Q) = (a + b) :: (padd P Q);

(* Multiply a polynomial P by a scalar q. *)
fun smult nil q           = nil
  | smult ((p:real)::P) q = (p * q) :: (smult P q);
</pre>
</div>

<p>
For two polynomials \(P\) and \(Q = q + Sx\), \(PQ = Pq + PSx\). \(Pq\) is a scalar
multiplication and \(PSx\) is a recursive polynomial multiplication.
</p>

<div class="org-src-container">

<pre class="src src-sml">fun pmult P nil    = nil
  | pmult P (q::Q) = padd (smult P q) (0.0::(pmult P Q));
</pre>
</div>

<p>
The cons of <code>0.0</code> "shifts" Q to the right by one degree of \(x\).
</p>

<p>
The time-complexity of <code>pmult</code> is \(O(n^2)\) (<code>padd</code> is \(O(n)\) and <code>smult</code> is
also \(O(n)\)).
</p>
</div>
</div>
<div id="outline-container-sec-2-6-3" class="outline-4">
<h4 id="sec-2-6-3"><span class="section-number-4">2.6.3</span> Auxiliary functions for a faster multiplication</h4>
<div class="outline-text-4" id="text-2-6-3">
<dl class="org-dl">
<dt> Karatsuba-Ofman algorithm </dt><dd>multiplies polynomials in time proportional
to \(n^{1.59}\), where \(n\) is the degree of the longest polynomial.
</dd>
</dl>

<div class="org-src-container">

<pre class="src src-sml">fun psub P Q = padd P (smult Q ~1.0);
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">(* bestSplit(n, m) computes an appropriate size for the
   low-order "half" of polynomials of length n and m.
   It is the smaller of n and m should one be less than
   half the other. If they are approximately the
   same size, then it is half the larger. *)

fun bestSplit n m = if 2 * n &lt;= m then n
                    else if 2 * m &lt;= n then m
                    else if n &lt;= m then m div 2
                    else (* n / 2 &lt; m &lt; n *) n div 2;
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">(* shift(P, n) computes P * x^n for a polynomial P(x) *)
fun shift P 0 = P
  | shift P n = 0.0 :: (shift P (n - 1));
</pre>
</div>

<p>
Carve breaks a polynomial \(P\) into two parts. \(P = Q + x^n \times R\).
</p>

<div class="org-src-container">

<pre class="src src-sml">(* carve(P, n) returns a pair of polynomials. The first is
   the low-order n terms of P and the second is what remains
   of P, divided by x^n *)

fun carve P 0       = (nil, P)
  | carve (p::ps) n = let val (qs, rs) = carve ps (n - 1)
                      in (p::qs, rs) end;
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-6-4" class="outline-4">
<h4 id="sec-2-6-4"><span class="section-number-4">2.6.4</span> The Karatsuba-Ofman algorithm</h4>
<div class="outline-text-4" id="text-2-6-4">
<p>
Think of each polynomial \(P\) and \(Q\) as two half-sized polynomials.
</p>

\begin{eqnarray*}
P &=& T + x^s U \\
Q &=& V + x^s W
\end{eqnarray*}

<p>
Then
</p>

<p>
$$PQ = TV + T x^s W + V x^s U + x^2s UW = TV + x^s(TW + UV) + x^2s UW$$
</p>

<p>
To make this faster, we can skimp on some of the multiplication:
</p>

<p>
$$TW + UV = (T + U)(V + W) - TV - UW$$
</p>

<p>
We already have \(TV\) and \(UW\), so there's only one extra multiplication of
\((T + U)(V + W)\).
</p>

<p>
So
</p>

<p>
$$PQ = TV + x^s((T + U)(V + W) - TV - UW) + x^2s UW$$.
</p>

<div class="org-src-container">

<pre class="src src-sml">(* komult(P, Q) computes the product of polynomials PQ using
   the Karatsuba-Ofman method that only calls itself three
   times rather than four on half-sized polynomials. *)

fun komult P nil = nil
  | komult nil Q = nil
  | komult P [q] = smult P q
  | komult [p] Q = smult Q p
  | komult P Q   =
        let val n      = length P;
            val m      = length Q;
            val s      = bestSplit n m;
            val (T, U) = carve P s;
            val (V, W) = carve Q s;
            val TV     = komult T V;
            val UW     = komult U W;
            val TUVW   = komult (padd T U) (padd V W);
            val middle = psub (psub TUVW TV) UW;
        in
            padd (padd TV (shift middle s)) (shift UW (2 * s))
        end;
</pre>
</div>

<div class="org-src-container">

<pre class="src src-sml">(* multiply 4x + 3 by 9x + 2 *)
komult [3.0, 4.0] [2.0, 9.0];
</pre>
</div>

<pre class="example">
val it = [6.0,35.0,36.0] : real list
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Input and output</h2>
<div class="outline-text-2" id="text-3">
</div><div id="outline-container-sec-3-1" class="outline-3">
<h3 id="sec-3-1"><span class="section-number-3">3.1</span> Simple output</h3>
<div class="outline-text-3" id="text-3-1">
<p>
<code>print</code> prints to <code>stdout</code> without any bounding newlines.
</p>

<dl class="org-dl">
<dt> <code>unit</code> </dt><dd>type similar to C's <code>void</code>.

<p>
Has exactly one value: <code>()</code>.
</p>

<div class="org-src-container">

<pre class="src src-sml">();
</pre>
</div>

<pre class="example">
val it = () : unit
</pre>
</dd>
</dl>
</div>

<div id="outline-container-sec-3-1-1" class="outline-4">
<h4 id="sec-3-1-1"><span class="section-number-4">3.1.1</span> Printing nonstring values</h4>
<div class="outline-text-4" id="text-3-1-1">
<p>
Print <code>real</code> values, for example, with the <code>Real</code> structure:
</p>

<div class="org-src-container">

<pre class="src src-sml">print (Real.toString 5.0);
</pre>
</div>

<pre class="example">
5.0val it = () : unit
</pre>
</div>
</div>
<div id="outline-container-sec-3-1-2" class="outline-4">
<h4 id="sec-3-1-2"><span class="section-number-4">3.1.2</span> "Statement" list</h4>
<div class="outline-text-4" id="text-3-1-2">
<p>
ML doesn't really have statements (technically, <code>print x</code> is an expression).
But we can chain together side-effect expressions like so: <code>(</code> &lt;first
expression&gt;=;= &#x2026;=;= &lt;second expression&gt;=)=
</p>
</div>
</div>
</div>
<div id="outline-container-sec-3-2" class="outline-3">
<h3 id="sec-3-2"><span class="section-number-3">3.2</span> Reading input from a file</h3>
<div class="outline-text-3" id="text-3-2">
</div><div id="outline-container-sec-3-2-1" class="outline-4">
<h4 id="sec-3-2-1"><span class="section-number-4">3.2.1</span> Instreams</h4>
<div class="outline-text-4" id="text-3-2-1">
<p>
<code>instream</code> (type) represents open file handle in a way.
</p>

<div class="org-src-container">

<pre class="src src-sml">val x = TextIO.openIn "/tmp";
</pre>
</div>

<pre class="example">
val x = - : TextIO.instream
</pre>
</div>
</div>
<div id="outline-container-sec-3-2-2" class="outline-4">
<h4 id="sec-3-2-2"><span class="section-number-4">3.2.2</span> Reading characters from a file</h4>
<div class="outline-text-4" id="text-3-2-2">
<dl class="org-dl">
<dt> <code>endOfStream</code> </dt><dd><code>instream -&gt; bool</code>. EOF predicate.
</dd>
<dt> <code>inputN</code> </dt><dd><code>instream -&gt; int -&gt; string</code>. Read \(n\) characters to a result
string.
</dd>
<dt> <code>inputLine</code> </dt><dd><code>instream -&gt; string</code>. Read next line to a string.
</dd>
<dt> <code>input</code> </dt><dd><code>instream -&gt; string</code>. Read all remaining content to a string.
</dd>
<dt> <code>input1</code> </dt><dd><code>instream -&gt; char option</code>. Read one character and returns
                  <code>SOME c</code> or <code>NONE</code> (like Haskell's <code>Maybe c</code>, <code>Nothing</code>).
</dd>
</dl>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> More about functions</h2>
<div class="outline-text-2" id="text-4">
</div><div id="outline-container-sec-4-1" class="outline-3">
<h3 id="sec-4-1"><span class="section-number-3">4.1</span> Matches</h3>
<div class="outline-text-3" id="text-4-1">
<p>
Match expressions consist of one or more rules and are of the overall form
&lt;pattern1&gt; <code>=&gt;</code> &lt;expression1&gt; | &lt;pattern2&gt; <code>=&gt;</code> &lt;expression2&gt;
</p>
</div>

<div id="outline-container-sec-4-1-1" class="outline-4">
<h4 id="sec-4-1-1"><span class="section-number-4">4.1.1</span> Using matches to define functions</h4>
<div class="outline-text-4" id="text-4-1-1">
<div class="org-src-container">

<pre class="src src-sml">val rec reverse = fn
    nil =&gt; nil |
    x::xs =&gt; (reverse xs) @ [x];
</pre>
</div>

<pre class="example">
= val reverse = fn : 'a list -&gt; 'a list
</pre>

<p>
<code>rec</code> signals a <b>recursive</b> function. Not otherwise needed.
</p>

<p>
This notation can be used to make anonymous functions.
</p>

<div class="org-src-container">

<pre class="src src-sml">(fn x =&gt; x + 1) 3;
</pre>
</div>

<pre class="example">
val it = 4 : int
</pre>
</div>
</div>
<div id="outline-container-sec-4-1-2" class="outline-4">
<h4 id="sec-4-1-2"><span class="section-number-4">4.1.2</span> Case expressions</h4>
<div class="outline-text-4" id="text-4-1-2">
<p>
Just like Haskell. <code>case &lt;expression&gt; of &lt;match&gt;</code>, where <code>match</code> is just
like in the previous section.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-4-2" class="outline-3">
<h3 id="sec-4-2"><span class="section-number-3">4.2</span> Exceptions</h3>
<div class="outline-text-3" id="text-4-2">
<p>
Partial functions throw exceptions when given arguments for which they have
no response.
</p>

<div class="org-src-container">

<pre class="src src-sml">5 div 0;
</pre>
</div>

<pre class="example">
uncaught exception Div [divide by zero]
  raised at: stdIn:99.3-99.6
</pre>

<div class="org-src-container">

<pre class="src src-sml">Div;
</pre>
</div>

<pre class="example">
val it = Div(-) : exn
</pre>

<p>
<code>hd</code> and <code>tl</code> on a <code>nil</code> throw the <code>Empty</code> exception.
</p>
</div>

<div id="outline-container-sec-4-2-1" class="outline-4">
<h4 id="sec-4-2-1"><span class="section-number-4">4.2.1</span> User-defined exceptions</h4>
<div class="outline-text-4" id="text-4-2-1">
<div class="org-src-container">

<pre class="src src-sml">exception Foo;
</pre>
</div>

<pre class="example">
exception Foo
</pre>

<div class="org-src-container">

<pre class="src src-sml">raise Foo;
</pre>
</div>

<pre class="example">
stdIn:104.1-104.10 Warning: type vars not generalized because of
   value restriction are instantiated to dummy types (X1,X2,...)

uncaught exception Foo
  raised at: stdIn:104.7-104.10
</pre>
</div>
</div>
<div id="outline-container-sec-4-2-2" class="outline-4">
<h4 id="sec-4-2-2"><span class="section-number-4">4.2.2</span> Exceptions with parameters</h4>
<div class="outline-text-4" id="text-4-2-2">
<div class="org-src-container">

<pre class="src src-sml">exception Bar of string;
</pre>
</div>

<pre class="example">
exception Bar of string
</pre>

<div class="org-src-container">

<pre class="src src-sml">raise Bar "hi";
</pre>
</div>

<pre class="example">
stdIn:107.1-107.15 Warning: type vars not generalized because of
   value restriction are instantiated to dummy types (X1,X2,...)

uncaught exception Bar
  raised at: stdIn:107.7-107.15
</pre>
</div>
</div>
<div id="outline-container-sec-4-2-3" class="outline-4">
<h4 id="sec-4-2-3"><span class="section-number-4">4.2.3</span> Local exceptions</h4>
<div class="outline-text-4" id="text-4-2-3">
<p>
Exceptions may be declared locally in let-expressions.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-4-3" class="outline-3">
<h3 id="sec-4-3"><span class="section-number-3">4.3</span> Polymorphic functions</h3>
<div class="outline-text-3" id="text-4-3">
<p>
Same.
</p>

<blockquote>
<p>
The algorithm whereby ML deduces the types of variables is complex and
beyond the scope of this book.
</p>
</blockquote>

<p>
:(
</p>
</div>

<div id="outline-container-sec-4-3-1" class="outline-4">
<h4 id="sec-4-3-1"><span class="section-number-4">4.3.1</span> A limitation on the use of polymorphic functions</h4>
<div class="outline-text-4" id="text-4-3-1">
<dl class="org-dl">
<dt> nonexpansive expression </dt><dd>Nonexpansive expressions may have attached
types. Expansive expressions may not have type annotations.

<div class="org-src-container">

<pre class="src src-sml">fun identity(x) = x;
</pre>
</div>

<pre class="example">
val identity = fn : 'a -&gt; 'a
</pre>

<ol class="org-ol">
<li>A constant or variable is nonexpansive.
</li>
<li>A function definition is nonexpansive.
</li>
<li>A tuple (or more generally a record structure) of nonexpansive
expressions is nonexpansive.
</li>
<li>A nonexpansive expression may be preceded by a "constructor" that is
either an exception constructor or a data constructor belonging to a
datatype.
</li>
</ol>
</dd>
</dl>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> Defining your own types</h2>
<div class="outline-text-2" id="text-5">
<dl class="org-dl">
<dt> <code>type</code> </dt><dd>defines type synonyms, just like Haskell.

<div class="org-src-container">

<pre class="src src-sml">type signal = real list;
</pre>
</div>
</dd>
</dl>


<p>
Parameterized type constructors, again just like Haskell:
</p>

<div class="org-src-container">

<pre class="src src-sml">(* Maps from values of type 'd to values of type 'r *)
type ('d, 'r) mapping = ('d * 'r) list;
</pre>
</div>
</div>

<div id="outline-container-sec-5-1" class="outline-3">
<h3 id="sec-5-1"><span class="section-number-3">5.1</span> Datatypes</h3>
<div class="outline-text-3" id="text-5-1">
<p>
Just like Haskell.. again.
</p>

<div class="org-src-container">

<pre class="src src-sml">datatype fruit = Apple | Pear | Grape;
Apple;
</pre>
</div>
</div>

<div id="outline-container-sec-5-1-1" class="outline-4">
<h4 id="sec-5-1-1"><span class="section-number-4">5.1.1</span> Recursively defined datatypes</h4>
<div class="outline-text-4" id="text-5-1-1">
<p>
Same as Haskell, except it seems that type constructors can only take a
tuple.
</p>

<div class="org-src-container">

<pre class="src src-sml">datatype 'a tree = Node of 'a * 'a tree * 'a tree | Leaf;
</pre>
</div>

<pre class="example">
datatype 'a tree = Leaf | Node of 'a * 'a tree * 'a tree
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-6" class="outline-2">
<h2 id="sec-6"><span class="section-number-2">6</span> More about ML data structures</h2>
<div class="outline-text-2" id="text-6">
</div><div id="outline-container-sec-6-1" class="outline-3">
<h3 id="sec-6-1"><span class="section-number-3">6.1</span> Record structures</h3>
<div class="outline-text-3" id="text-6-1">
<p>
Tuples are a specific case of the record structure.
</p>
</div>

<div id="outline-container-sec-6-1-1" class="outline-4">
<h4 id="sec-6-1-1"><span class="section-number-4">6.1.1</span> Records and their types</h4>
<div class="outline-text-4" id="text-6-1-1">
<blockquote>
<p>
{ ( &lt;label&gt; = &lt;value&gt;, )* }
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-sml">val someRecord = {foo=1, bar=["ABC", "XYZ"]};
</pre>
</div>

<pre class="example">
val someRecord = {bar=["ABC","XYZ"],foo=1} : {bar:string list, foo:int}
</pre>

<p>
Order of fields not guaranteed.
</p>

<p>
Extracting fields:
</p>

<div class="org-src-container">

<pre class="src src-sml">#bar(someRecord);
</pre>
</div>

<pre class="example">
val it = ["ABC","XYZ"] : string list
</pre>

<p>
You can pattern-match on records.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-6-2" class="outline-3">
<h3 id="sec-6-2"><span class="section-number-3">6.2</span> Arrays</h3>
<div class="outline-text-3" id="text-6-2">
<p>
Random-access as compared to ML lists.
</p>

<div class="org-src-container">

<pre class="src src-sml">(* n = # elements in array *)
val n = 5;

(* v = default value for each element *)
val v = 15;

val A = Array.array(n, v);
</pre>
</div>

<pre class="example">
- [autoloading]
[autoloading done]
val A = [|15,15,15,15,15|] : int array
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-7" class="outline-2">
<h2 id="sec-7"><span class="section-number-2">7</span> Encapsulation and the ML module system</h2>
</div>
