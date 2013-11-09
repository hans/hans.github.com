---
layout: note
title: Book notes&#58; Kestrels, Quirky Birds and Hopeless Egocentricity
date: 11/10/2012 19:51
from_org: true
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">Kestrels</a>
<ul>
<li><a href="#sec-1-1">The enchaining kestrel</a>
<ul>
<li><a href="#sec-1-1-1">Avoid weird <code>Array#uniq!</code> returns</a></li>
</ul>
</li>
<li><a href="#sec-1-2">The obdurate kestrel</a></li>
</ul>
</li>
<li><a href="#sec-2">Thrushes</a></li>
<li><a href="#sec-3">Cardinals</a>
<ul>
<li><a href="#sec-3-1">A <code>maybe</code> combinator</a></li>
</ul>
</li>
<li><a href="#sec-4">Quirky birds and meta-syntactic programming</a>
<ul>
<li><a href="#sec-4-1">Quirky bird</a></li>
</ul>
</li>
<li><a href="#sec-5">Aspect-oriented programming in Ruby using combinator birds</a>
<ul>
<li><a href="#sec-5-1">Giving methods advice</a></li>
</ul>
</li>
<li><a href="#sec-6">Mockingbirds</a>
<ul>
<li><a href="#sec-6-1">Duplicative combinators</a></li>
<li><a href="#sec-6-2">Recursive lambdas</a></li>
<li><a href="#sec-6-3">Recursive combinators in idiomatic Ruby</a></li>
</ul>
</li>
<li><a href="#sec-7">Finding joy in combinators</a></li>
</ul>
</div>
</div>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Kestrels</h2>
<div class="outline-text-2" id="text-1">
<dl class="org-dl">
<dt> K-combinator </dt><dd>Manufactures constant functions. \((K x)\) is the function
which returns \(x\) for any argument. Can be used for causing
side effects.
</dd>
</dl>

<div class="org-src-container">

<pre class="src src-ruby"># for *any* x,
kestrel.call(:foo).call(x) # =&gt; :foo
</pre>
</div>

<div class="org-src-container">

<pre class="src src-ruby"># Inject logging (side effect) without affecting chaining. Here x is the result
# of `Person.find`, and `y` is the block initiating the side effect. x is passed
# to `.address` in the chain and the result of `y` is discarded.
Person.find(...).tap { |p| logger.log "person #{p} found" }.address
</pre>
</div>
</div>

<div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> The enchaining kestrel</h3>
<div class="outline-text-3" id="text-1-1">
<dl class="org-dl">
<dt> <code>tap</code> </dt><dd>Ruby 1.9 method which passes the receiver to a block argument,
then returns the receiver no matter what the block contains
</dd>
</dl>

<p>
The use of a kestrel combinator allows for method chaining, so that the
following code:
</p>

<div class="org-src-container">

<pre class="src src-ruby">hd = HardDrive.new
hd.capacity = 150
hd.external = true
hd.speed = 7200
</pre>
</div>

<p>
can be written instead as:
</p>

<div class="org-src-container">

<pre class="src src-ruby">hd = HardDrive.new.capacity(150).external.speed(7200)
</pre>
</div>

<p>
or, alternatively as
</p>

<div class="org-src-container">

<pre class="src src-ruby">hd = HardDrive.new do
  @capacity = 150
  @external = true
  @speed = 7200
end
</pre>
</div>

<blockquote>
<p>
What do you do when handed a class that was not designed with method
chaining in mind?
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-ruby">arr.pop
arr.map! { |n| n * 2 }
</pre>
</div>

<p>
becomes
</p>

<div class="org-src-container">

<pre class="src src-ruby">arr = [1, 2, 3]
arr.tap(&amp;:pop).map! { |n| n * 2 }
</pre>
</div>
</div>

<div id="outline-container-sec-1-1-1" class="outline-4">
<h4 id="sec-1-1-1"><span class="section-number-4">1.1.1</span> Avoid weird <code>Array#uniq!</code> returns</h4>
<div class="outline-text-4" id="text-1-1-1">
<p>
Usually:
</p>

<div class="org-src-container">

<pre class="src src-ruby">[1,2,3,3,4,5].uniq!
</pre>
</div>

<p>
but
</p>

<div class="org-src-container">

<pre class="src src-ruby">[1,2,3,4].uniq!
</pre>
</div>

<pre class="example">
nil
</pre>

<p>
Avoid with a K-combinator (<code>tap</code>):
</p>

<div class="org-src-container">

<pre class="src src-ruby">[1,2,3,4,5].tap(&amp;:uniq!).sort!
</pre>
</div>
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="right" />

<col  class="right" />

<col  class="right" />

<col  class="right" />

<col  class="right" />
</colgroup>
<tbody>
<tr>
<td class="right">1</td>
<td class="right">2</td>
<td class="right">3</td>
<td class="right">4</td>
<td class="right">5</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> The obdurate kestrel</h3>
<div class="outline-text-3" id="text-1-2">
<p>
In <code>andand</code> library, named <code>dont</code>. Doesn't execute its argument.
</p>

<p>
<i>Seems unnecessary..</i>
</p>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Thrushes</h2>
<div class="outline-text-2" id="text-2">
<dl class="org-dl">
<dt> thrush </dt><dd>extremely simple <b>permuting combinator</b>. Reverses the normal order
of evaluation.

<p>
Formally: \(Txy = yx\).
</p>

<p>
In Ruby:
</p>
<div class="org-src-container">

<pre class="src src-ruby">thrush.call(a_value).call(a_proc) # ~&gt; a_proc.call(a_value)
</pre>
</div>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Cardinals</h2>
<div class="outline-text-2" id="text-3">
<dl class="org-dl">
<dt> cardinal </dt><dd>permuting combinator which reverses and parenthesizes the normal
order of evaluation.

<p>
Formally: \(Cxyz = xzy\).
</p>

<p>
In Ruby:
</p>

<div class="org-src-container">

<pre class="src src-ruby">cardinal.call(proc_over_proc).call(a_value).call(a_proc)
  # ~&gt; proc_over_proc.call(a_proc).call(a_value)
</pre>
</div>

<p>
A thrush is a special form of a cardinal, with an identity
function as its first higher-order <code>proc</code>:
</p>

<div class="org-src-container">

<pre class="src src-ruby">thrush = cardinal.call(lambda { |x| x })
</pre>
</div>
</dd>
</dl>
</div>

<div id="outline-container-sec-3-1" class="outline-3">
<h3 id="sec-3-1"><span class="section-number-3">3.1</span> A <code>maybe</code> combinator</h3>
<div class="outline-text-3" id="text-3-1">
<p>
Like the <code>Maybe</code> monad!
</p>

<div class="org-src-container">

<pre class="src src-ruby">def maybe(a_value, &amp;a_proc)
  a_proc.call(a_value) unless a_value.nil?
end
</pre>
</div>

<p>
Now:
</p>

<div class="org-src-container">

<pre class="src src-ruby">maybe(1) { |x| x + 1 }
</pre>
</div>

<pre class="example">
2
</pre>

<div class="org-src-container">

<pre class="src src-ruby">maybe(nil) { |x| x + 1 }
</pre>
</div>

<pre class="example">
nil
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> Quirky birds and meta-syntactic programming</h2>
<div class="outline-text-2" id="text-4">
<dl class="org-dl">
<dt> queer birds </dt><dd>family of combinators which both parenthesize and permute
</dd>
</dl>
</div>

<div id="outline-container-sec-4-1" class="outline-3">
<h3 id="sec-4-1"><span class="section-number-3">4.1</span> Quirky bird</h3>
<div class="outline-text-3" id="text-4-1">
<dl class="org-dl">
<dt> quirky bird </dt><dd>formally: \(Q_{3}xyz = z(xy)\).

<p>
In Ruby:
</p>

<div class="org-src-container">

<pre class="src src-ruby">quirky.call(value_proc).call(a_value).call(a_proc)
  # ~&gt; a_proc.call(value_proc.call(a_value))
</pre>
</div>

<p>
While cardinals modify some function before passing it a
value, quirky birds modify some value before passing it to a
function.
</p>
</dd>
</dl>

<div class="org-src-container">

<pre class="src src-ruby"># x = square function, y = value, z = final function
def square_first(a_value, &amp;a_proc)
  a_proc.call(a_value * a_value)
end
</pre>
</div>

<div class="org-src-container">

<pre class="src src-ruby">square_first(1) { |n| n + 1 }
</pre>
</div>

<pre class="example">
2
</pre>

<div class="org-src-container">

<pre class="src src-ruby">square_first(2) { |n| n + 1 }
</pre>
</div>

<pre class="example">
5
</pre>

<p>
The quirky bird would not be useful for forming a <code>maybe</code> combinator (in that
case, we want to modify the function being called, not the value passed to
it).
</p>
</div>
</div>
</div>
<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> Aspect-oriented programming in Ruby using combinator birds</h2>
<div class="outline-text-2" id="text-5">
<dl class="org-dl">
<dt> bluebird </dt><dd>composes two other combinators.

<p>
Formally: \(Bxyz = x(yz)\).
</p>

<p>
In Ruby:
</p>

<div class="org-src-container">

<pre class="src src-ruby">bluebird.call(proc1).call(proc2).call(value)
  # ~&gt; proc1.call(proc2.call(value))
</pre>
</div>
</dd>
</dl>
</div>

<div id="outline-container-sec-5-1" class="outline-3">
<h3 id="sec-5-1"><span class="section-number-3">5.1</span> Giving methods advice</h3>
<div class="outline-text-3" id="text-5-1">
<dl class="org-dl">
<dt> advice </dt><dd>in aspect-oriented programming, a collection of functions which
are designated to run <b>before</b> or <b>after</b> a given function.
</dd>
<dt> queer bird </dt><dd>composes methods in an order opposite that of the bluebird.

<p>
Formally: \(Qxyz = y(xz)\).
</p>
</dd>
</dl>
</div>
</div>
</div>
<div id="outline-container-sec-6" class="outline-2">
<h2 id="sec-6"><span class="section-number-2">6</span> Mockingbirds</h2>
<div class="outline-text-2" id="text-6">
<p>
Some combinators can duplicate their arguments to achieve recursion.
(recursive combinators)
</p>
</div>

<div id="outline-container-sec-6-1" class="outline-3">
<h3 id="sec-6-1"><span class="section-number-3">6.1</span> Duplicative combinators</h3>
<div class="outline-text-3" id="text-6-1">
<p>
Some combinators (like the Bluebird) "conserve" their arguments (i.e., return
them all, just with different ordering or grouping). Kestrels are an
exception.
</p>

<dl class="org-dl">
<dt> mockingbird </dt><dd>duplicates its argument.

<p>
Formally: \(Mx = xx\).
</p>

<p>
In Ruby:
</p>

<div class="org-src-container">

<pre class="src src-ruby">mockingbird.call(x)
  # ~&gt; x.call(x)
</pre>
</div>
</dd>
</dl>

<p>
Other recursive combinators: Starling (\(Sxyz = xz(yz)\)), Turing Bird (\(Uxy =
   y(xxy)\)).
</p>

<p>
Recursive combinators introduce recursion "without names, scopes, bindings,
and other things that clutter things up."
</p>
</div>
</div>
<div id="outline-container-sec-6-2" class="outline-3">
<h3 id="sec-6-2"><span class="section-number-3">6.2</span> Recursive lambdas</h3>
<div class="outline-text-3" id="text-6-2">
<p>
Sum the numbers of a nested list.
</p>

<p>
This is the gross normal recursive way:
</p>

<div class="org-src-container">

<pre class="src src-ruby">sum_of_nested_list = lambda { |arg|
  if arg.kind_of?(Numeric)
    arg
  else
    arg.map { |item| sum_of_nested_list.call(item) }.inject(&amp;:+)
  end
}

sum_of_nested_list [1,[1,1,[1]],1]
</pre>
</div>

<p>
We want to be able to make anonymous recursive lambdas, so that we don't need
to refer to <code>sum_of_nested_list</code> inside itself, for example.
</p>

<blockquote>
<p>
The combinator way around this is to find a way to pass a function to itself
as a parameter.
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-ruby">sum_of_nested_list = lambda do |myself, arg|
  arg.kind_of?(Numeric) ? arg : arg.map { |item| myself.call(myself, item) }.inject(&amp;:+)
end
</pre>
</div>

<blockquote>
<p>
Let's start by <i>currying</i> [the function] into a function that takes one
argument, itself, and returns a function that takes an item:
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-ruby">sum_of_nested_list = lambda do |myself|
  lambda do |arg|
    arg.kind_of?(Numeric) ? arg : arg.map { |item| myself.call(myself).call(item) }.inject(&amp;:+)
  end
end

sum_of_nested_list.call(sum_of_nested_list).call([1, [[2, 3], [[[4]]]]])
</pre>
</div>

<pre class="example">
10
</pre>

<p>
But this is even more gross. Let's extract <code>myself.call(myself).call(item)</code>,
first of all.
</p>

<div class="org-src-container">

<pre class="src src-ruby">sum_of_nested_list = lambda do |myself|
  lambda do |arg|
    lambda do |arg, recurse|
      arg.kind_of?(Numeric) ? arg : arg.map { |item| recurse.call(item) }.inject(&amp;:+)
    end.call(arg, myself.call(myself))
  end
end

sum_of_nested_list.call(sum_of_nested_list).call([1, [[2, 3], [[[4]]]]])
</pre>
</div>

<pre class="example">
10
</pre>

<p>
Now "hoist our code out of the middle and make it a parameter"
</p>

<div class="org-src-container">

<pre class="src src-ruby"># Recursive combinator
sum_of_nested_list = lambda do |fn|
  me = lambda do |myself|
    lambda do |arg|
      fn.call(arg, myself.call(myself))
    end
  end

  lambda { |x| x.call(x) }.call(me)
end.call(
  # Lambda we wish to make recursive
  lambda do |arg, recurse|
    arg.kind_of?(Numeric) ? arg : arg.map { |item| recurse.call(item) }.inject(&amp;:+)
  end
)

sum_of_nested_list.call([1, [[2, 3], [[[4]]]]])
</pre>
</div>

<pre class="example">
10
</pre>
</div>
</div>
<div id="outline-container-sec-6-3" class="outline-3">
<h3 id="sec-6-3"><span class="section-number-3">6.3</span> Recursive combinators in idiomatic Ruby</h3>
<div class="outline-text-3" id="text-6-3">
<p>
[Something idiomatic.. yes, please!]
</p>

<div class="org-src-container">

<pre class="src src-ruby">def lambda_with_recursive_callback
  lambda { |x| x.call(x) }.call(
    lambda do |myself|
      lambda do |arg|
        yield(arg, myself.call(myself))
      end
    end
  )
end

sum_of_nested_list = lambda_with_recursive_callback do |arg, recurse|
  arg.kind_of?(Numeric) ? arg : arg.map { |item| recurse.call(item) }.inject(&amp;:+)
end

sum_of_nested_list.call([1, [[2, 3], [[[4]]]]])
</pre>
</div>

<pre class="example">
10
</pre>

<p>
[MIND BLOWING]
</p>

<p>
Simplifying:
</p>

<div class="org-src-container">

<pre class="src src-ruby">def mockingbird &amp;x
  x.call(x)
end

def lambda_with_recursive_callback
  mockingbird do |myself|
    lambda do |arg|
      yield(arg, mockingbird(&amp;myself))
    end
  end
end

sum_of_nested_list = lambda_with_recursive_callback do |arg, recurse|
  arg.kind_of?(Numeric) ? arg : arg.map { |item| recurse.call(item) }.inject(&amp;:+)
end

sum_of_nested_list.call([1, [[2, 3], [[[4]]]]])
</pre>
</div>

<pre class="example">
10
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-7" class="outline-2">
<h2 id="sec-7"><span class="section-number-2">7</span> Finding joy in combinators</h2>
<div class="outline-text-2" id="text-7">
<p>
Glad to hear the author say this, after suffering through this cruddy Ruby
syntax:
</p>

<blockquote>
<p>
We can learn a lot from combinatorial logic to help our Ruby programming, but
Ruby is a terrible language for actually learning about combinatorial logic.
</p>
</blockquote>
</div>
</div>
