---
layout: note
title: Book notes&#58; The Connection Machine
date: 14/09/2012
from_org: true
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">Requirements</a></li>
<li><a href="#sec-2">Machine architecture</a>
<ul>
<li><a href="#sec-2-1">Issues in building a parallel machine</a>
<ul>
<li><a href="#sec-2-1-1">Fixed vs. general communication</a></li>
<li><a href="#sec-2-1-2">Coarse- vs. fine-grained</a></li>
<li><a href="#sec-2-1-3">Single- vs. multiple-instruction streams</a></li>
</ul>
</li>
<li><a href="#sec-2-2">Comparison with other architectures</a>
<ul>
<li><a href="#sec-2-2-1">Fast von Neumann machines</a></li>
<li><a href="#sec-2-2-2">Networks of conventional machines</a></li>
<li><a href="#sec-2-2-3">Machines with fixed topologies</a></li>
<li><a href="#sec-2-2-4">The rest</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-3">Programming a connection machine</a>
<ul>
<li><a href="#sec-3-1">Connection Machine Lisp</a>
<ul>
<li><a href="#sec-3-1-1">Xectors</a></li>
</ul>
</li>
<li><a href="#sec-3-2">Path-length algorithm</a></li>
<li><a href="#sec-3-3">More beta</a></li>
<li><a href="#sec-3-4">"CmLisp defines the Connection Machine"</a></li>
</ul>
</li>
<li><a href="#sec-4">Design considerations</a></li>
<li><a href="#sec-5">The prototype</a></li>
<li><a href="#sec-6">Data structures for the Connection Machine</a>
<ul>
<li><a href="#sec-6-1">Sets</a>
<ul>
<li><a href="#sec-6-1-1">"Bit" representation</a></li>
<li><a href="#sec-6-1-2">"Tag" representation</a></li>
<li><a href="#sec-6-1-3">"Pointer" representation</a></li>
</ul>
</li>
<li><a href="#sec-6-2">Strings</a></li>
</ul>
</li>
<li><a href="#sec-7">"New Computer Architectures and Their Relationship to Physics; or, Why Computer Science is No Good</a></li>
</ul>
</div>
</div>
<p>
Von Neumann architectures are not fit for many applications.
</p>

<p>
We've made it so that a large portion of the silicon in a computer is dedicated
to memory: a resource which is only very rarely used to its full advantage. Why
not dedicate more silicon to the processors?
</p>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Requirements</h2>
<div class="outline-text-2" id="text-1">
<ul class="org-ul">
<li>Many processors: there must be a processing element associated with each
vertex. Each element has a very small amount of memory associated with it.
</li>
<li>Programmable connections: we need a system where the processors can be
designated as arbitrary nodes with arbitrary connections in a graph. We
can't rely on a fixed hardware&lt;-&gt;conceptual mapping. Thus every processor
must be able to connect to every other processor.
</li>
<li>Easy routing: each processor must have an attached "router" that can
communicate with the four other router-processor units that surround it. By
sending a message like "2 up, 3 left" from a router in a grid up to the
next router, the message can be decremented "1 up, 3 left" and sent along
in this way. Once a router sees "0 up, 0 left" it can send the instructions
to its connected processor.
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Machine architecture</h2>
<div class="outline-text-2" id="text-2">
<dl class="org-dl">
<dt> active data structures </dt><dd>a structure of connected processing cells that
represent some conceptual structure and do the processing on it
</dd>
<dt> host </dt><dd>conventional computer that stores structures on the Connection
Machine
</dd>
</dl>

<p>
"Unlike a conventional memory, though, the Connection Machines have no
processor/memory bottleneck. The memory cells themselves do the
processing. More precisely, the computation takes place through the
coordinated interaction of the cells in the data structure."
</p>
</div>

<div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> Issues in building a parallel machine</h3>
<div class="outline-text-3" id="text-2-1">
</div><div id="outline-container-sec-2-1-1" class="outline-4">
<h4 id="sec-2-1-1"><span class="section-number-4">2.1.1</span> Fixed vs. general communication</h4>
<div class="outline-text-4" id="text-2-1-1">
<dl class="org-dl">
<dt> fixed topology </dt><dd>any processor can only communicate with a few of its
neighbors. Simple and easy to apply when the pattern of
units matches the pattern of the concept (e.g., using a
grid of units for image processing)
</dd>
<dt> general topology </dt><dd>any processor can communicate with any other
processor in the machine. Easier to program when the problem could not
be represented as a fixed topology. Can change dynamically to optimize
for some data or to bypass broken components.
</dd>
<dt> para-computer </dt><dd>"extreme" example in which every processor has access to
the same shared memory. cf. Schwartz 1980
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-2-1-2" class="outline-4">
<h4 id="sec-2-1-2"><span class="section-number-4">2.1.2</span> Coarse- vs. fine-grained</h4>
<div class="outline-text-4" id="text-2-1-2">
<dl class="org-dl">
<dt> coarse-grained </dt><dd>tens or hundreds of large processors. Big + few. Most
code is written in a "coarse-grained" fashion -
designed to split the work for maybe only a few
processors.
</dd>
<dt> fine-grained </dt><dd>hundreds or thousands of tiny processors. Small +
many. More parallelism here, but that does not
necessarily imply speed!
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-2-1-3" class="outline-4">
<h4 id="sec-2-1-3"><span class="section-number-4">2.1.3</span> Single- vs. multiple-instruction streams</h4>
<div class="outline-text-4" id="text-2-1-3">
<dl class="org-dl">
<dt> Multiple Instruction Multiple Data (MIMD) </dt><dd>collection of connected
autonomous computers. Has some way to synchronize data among computing
units.
</dd>
<dt> Single Instruction Multiple Data (SIMD) </dt><dd>processors controlled from a
single instruction stream which is broadcast to all processors
simultaneously. Processors can independently choose to ignore
broadcast intsructions or execute them. Use one set of control
hardware for all processors (cheap). Synchronous operations (:().
</dd>
</dl>
</div>
</div>
</div>
<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> Comparison with other architectures</h3>
<div class="outline-text-3" id="text-2-2">
<p>
Connection Machine is unique in its combination of fine granularity and
general communication.
</p>
</div>

<div id="outline-container-sec-2-2-1" class="outline-4">
<h4 id="sec-2-2-1"><span class="section-number-4">2.2.1</span> Fast von Neumann machines</h4>
<div class="outline-text-4" id="text-2-2-1">
<p>
"When performing simple computations on large amounts of data, von Neumann
computers are limited by the bandwidth between memory and processor. This
is a fundamental flaw in the von Neumann design; it cannot be eliminated by
clever engineering."
</p>
</div>
</div>
<div id="outline-container-sec-2-2-2" class="outline-4">
<h4 id="sec-2-2-2"><span class="section-number-4">2.2.2</span> Networks of conventional machines</h4>
<div class="outline-text-4" id="text-2-2-2">
<p>
Lower ratio of processing power to memory size than has the CM.
</p>
</div>
</div>
<div id="outline-container-sec-2-2-3" class="outline-4">
<h4 id="sec-2-2-3"><span class="section-number-4">2.2.3</span> Machines with fixed topologies</h4>
<div class="outline-text-4" id="text-2-2-3">
<p>
e.g. 2D grid, torus
</p>

<p>
Cannot have their structures reconfigured to match a certain problem's
pattern (see fixed vs. general topologies in "Issues").
</p>
</div>
</div>
<div id="outline-container-sec-2-2-4" class="outline-4">
<h4 id="sec-2-2-4"><span class="section-number-4">2.2.4</span> The rest</h4>
<div class="outline-text-4" id="text-2-2-4">
<p>
[Nothing new or interesting.]
</p>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Programming a connection machine</h2>
<div class="outline-text-2" id="text-3">
</div><div id="outline-container-sec-3-1" class="outline-3">
<h3 id="sec-3-1"><span class="section-number-3">3.1</span> Connection Machine Lisp</h3>
<div class="outline-text-3" id="text-3-1">
<p>
Extension of Lisp designed for CM.
</p>
</div>

<div id="outline-container-sec-3-1-1" class="outline-4">
<h4 id="sec-3-1-1"><span class="section-number-4">3.1.1</span> Xectors</h4>
<div class="outline-text-4" id="text-3-1-1">
<p>
Simple data structure which represents a set of processors with a value
stored in each processor. All of its elements can be operated on
simultaneously, since they are distributed across multiple units.
</p>

<p>
Xectors are essentially functions: they have associated domains, ranges, and
mappings.
</p>

<dl class="org-dl">
<dt> index </dt><dd>object in domain of xector
</dd>
<dt> value </dt><dd>object in range of xector
</dd>
<dt> element </dt><dd>pair of index/value of xector
</dd>
</dl>

<p>
"Each element of the xector is stored in a separate processor and the index
is the name of te processor, an address in memory of the host machine."
</p>

<p>
Xectors are normal Lisp objects. They have special notations that can be
read / printed by CmLisp.
</p>

<p>
General xector:
{Sky-&gt;Blue Grass-&gt;Green Apple-&gt;Red}
</p>

<p>
Xector representing a set:
{A-&gt;A 1-&gt;1 2-&gt;2} = {A 1 2}
</p>

<p>
Xector representing a vector / array:
{0-&gt;A 1-&gt;B 2-&gt;C 3-&gt;D} = [A B C D]
</p>

<p>
Constant xector (every index maps to a constant value):
{-&gt;3}
</p>

<p>
Xectors do not necessarily maintain the element order as you provide it: a
canonical ordering is used (differs across implementations).
</p>

<ul class="org-ul">
<li>Alpha notation
</li>
<li>Beta reduction
</li>
</ul>
</div>
</div>
</div>
<div id="outline-container-sec-3-2" class="outline-3">
<h3 id="sec-3-2"><span class="section-number-3">3.2</span> Path-length algorithm</h3>
<div class="outline-text-3" id="text-3-2">
<ol class="org-ol">
<li>Label all vertices with \(+\infty\).
</li>
<li>Label vertex A with 0.
</li>
<li>Label every vertex, except A, with 1 plus the minimum of its neighbor's
labels. Repeat this step until the label of vertex B is finite.
</li>
<li>Terminate. The label of B is the answer.
</li>
</ol>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(defun path-length (a b g)
  alpha(setf (label *g) +inf)
  (setf (label a) 0)
  (loop until (&lt; (label b) +inf)
        do alpha(setf (label *(remove a g))
                      (1+ (beta min alpha(label *(neighbors *g)))))))
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-3-3" class="outline-3">
<h3 id="sec-3-3"><span class="section-number-3">3.3</span> More beta</h3>
<div class="outline-text-3" id="text-3-3">
<p>
Beta reduction is really just a special case of a larger use of beta. The
beta function by nature takes a function and <b>two</b> xectors. The result is the
combining of the xectors, using one xector's values for the indices of the
new xector and the other xector's values as the values of the new xector. The
function (assumed to have a variable arity, at least 2-arity) is used to
combine the new values which have duplicate keys.
</p>

<p>
Beta reduction is a special case in that the second list is unspecified and
assumed to be a constant xector; all values are combined to the same key,
then, using the provided function.
</p>

<p>
To finish it off, an awesome combination of both uses of the beta
reduction. Calculates the maximum number of occurrences of any single value
within a xector:
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(defun arity (x)
  (beta max (beta+ alpha1 x)))
</pre>
</div>

<p>
\(\alpha1\) produces a constant xector and x is combined with `+` as the
combining function. Any duplicate values - now the new indices - of x cause
values - now the new values - of the constant xector to be combined with
`+`. Thus we get a xector of frequencies, which we then reduce using
single-argument beta reduction with `max` as the function.
</p>
</div>
</div>
<div id="outline-container-sec-3-4" class="outline-3">
<h3 id="sec-3-4"><span class="section-number-3">3.4</span> "CmLisp defines the Connection Machine"</h3>
<div class="outline-text-3" id="text-3-4">
<p>
"A Connection Machine is the direct hardware embodiment of the alpha and beta
operators. Processors are alpha, routers are beta. The contents of the memory
cells are xectors."
</p>
</div>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> Design considerations</h2>
<div class="outline-text-2" id="text-4">
<p>
[Skimmed without taking notes. Not that interested in the hardware
implementation of the machine.]
</p>
</div>
</div>
<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> The prototype</h2>
<div class="outline-text-2" id="text-5">
<p>
[Skimmed as well.]
</p>
</div>
</div>
<div id="outline-container-sec-6" class="outline-2">
<h2 id="sec-6"><span class="section-number-2">6</span> Data structures for the Connection Machine</h2>
<div class="outline-text-2" id="text-6">
<p>
See "active data structures."
</p>

<p>
"The host controls the Connection Machine not by operating upon the data, but
by telling the data what to do."
</p>
</div>

<div id="outline-container-sec-6-1" class="outline-3">
<h3 id="sec-6-1"><span class="section-number-3">6.1</span> Sets</h3>
<div class="outline-text-3" id="text-6-1">
<p>
"Set operations like union and intersection are just as easy on the
Connection Machine as the traditional unit-time operations of addition and
subtraction are on a conventional computer."
</p>
</div>

<div id="outline-container-sec-6-1-1" class="outline-4">
<h4 id="sec-6-1-1"><span class="section-number-4">6.1.1</span> "Bit" representation</h4>
<div class="outline-text-4" id="text-6-1-1">
<p>
Allocate one bit in every cell to indicate whether that cell is a member of
the set.
</p>

<p>
"Assume that each member cell of set \(A\) is marked by a \(1\) in the \(i\)-th
bit of the cell's memory, and that membership in set \(B\) is similarly
indicated by the \(j\)-th bit. Then, we may form \(C = A \cap B\) by having each
cell store into the bit corresponding to \(C\) the logical AND of the \(i\)-th
and \(j\)-th bit."
</p>

<p>
These operations take place in constant time (!).
</p>

<p>
Disadvantage: this means every cell in the machine needs to reserve some
number of bits whether it is a member of any cell or not.
</p>
</div>
</div>
<div id="outline-container-sec-6-1-2" class="outline-4">
<h4 id="sec-6-1-2"><span class="section-number-4">6.1.2</span> "Tag" representation</h4>
<div class="outline-text-4" id="text-6-1-2">
<p>
If the multiple sets are known to be disjoint (e.g., containing different
data types) a less memory-intensive system can be used. \(log_2(k + 1)\) bits
for \(k\) sets: represent each set numerically. (1 extra number must be used
to signify that a cell is a member of no set.)
</p>
</div>
</div>
<div id="outline-container-sec-6-1-3" class="outline-4">
<h4 id="sec-6-1-3"><span class="section-number-4">6.1.3</span> "Pointer" representation</h4>
<div class="outline-text-4" id="text-6-1-3">
<p>
Neither bit nor tag repr. work for small sets, since every single unit has
to be updated just when worrying about these tiny sets. For small sets one
may connect one cell to all others using pointers. Something like a tree
representation - hopefully but not necessarily balanced.
</p>

<p>
Advantage: the set can now be "pointed to" and, for example, stored as a
substructure in another piece of data. (Just point to the root cell of the
tree.)
</p>

<p>
Set operations require conversion to bit representation (this can be done in
logarithmic time).
</p>
</div>
</div>
</div>
<div id="outline-container-sec-6-2" class="outline-3">
<h3 id="sec-6-2"><span class="section-number-3">6.2</span> Strings</h3>
<div class="outline-text-3" id="text-6-2">
<p>
Nothing surprising or particularly interesting. Still a cool idea.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-7" class="outline-2">
<h2 id="sec-7"><span class="section-number-2">7</span> "New Computer Architectures and Their Relationship to Physics; or, Why Computer Science is No Good</h2>
</div>
