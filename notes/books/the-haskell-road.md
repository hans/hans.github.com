---
layout: note
title: Book notes&#58; The Haskell Road
date: 21/10/2012
from_org: true
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">Getting started</a></li>
<li><a href="#sec-2">Talking about mathematical objects</a>
<ul>
<li><a href="#sec-2-1">Logical connectives and their meanings</a>
<ul>
<li><a href="#sec-2-1-1">Connectives</a></li>
<li><a href="#sec-2-1-2">Logical validities</a></li>
</ul>
</li>
<li><a href="#sec-2-2">Lambda abstraction</a></li>
<li><a href="#sec-2-3">Abstract formulas and concrete structures</a></li>
<li><a href="#sec-2-4">Logical handling of the quantifiers</a></li>
</ul>
</li>
<li><a href="#sec-3">The use of logic: proof</a>
<ul>
<li><a href="#sec-3-1">Proof style</a></li>
<li><a href="#sec-3-2">Proof recipes</a>
<ul>
<li><a href="#sec-3-2-1">Rules for the connectives</a></li>
<li><a href="#sec-3-2-2">Rules for the quantifiers</a></li>
<li><a href="#sec-3-2-3">Strategic guidelines</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-4">Sets, types and lists</a>
<ul>
<li><a href="#sec-4-1">Let's talk about sets</a>
<ul>
<li><a href="#sec-4-1-1">Subsets</a></li>
<li><a href="#sec-4-1-2">Paradoxes, types and type classes</a></li>
<li><a href="#sec-4-1-3">Algebra of sets</a></li>
<li><a href="#sec-4-1-4">Ordered pairs and products</a></li>
<li><a href="#sec-4-1-5">A data type for sets</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-5">Relations</a>
<ul>
<li><a href="#sec-5-1">Relations as sets of ordered pairs</a></li>
<li><a href="#sec-5-2">Properties of relations</a></li>
<li><a href="#sec-5-3">Implementing relations as sets of pairs</a></li>
<li><a href="#sec-5-4">Implementing relations as functions</a></li>
<li><a href="#sec-5-5">Equivalence relations</a></li>
<li><a href="#sec-5-6">Equivalence classes and partitions</a></li>
</ul>
</li>
<li><a href="#sec-6">Functions</a>
<ul>
<li><a href="#sec-6-1">Basic notions</a></li>
<li><a href="#sec-6-2">Surjections, injections and bijections</a></li>
</ul>
</li>
<li><a href="#sec-7">Induction and recursion</a>
<ul>
<li><a href="#sec-7-1">Mathematical induction</a></li>
<li><a href="#sec-7-2">Recursion over the natural numbers</a></li>
<li><a href="#sec-7-3">The nature of recursive definitions</a></li>
<li><a href="#sec-7-4">Induction and recursion over trees</a></li>
<li><a href="#sec-7-5">Induction and recursion over lists</a></li>
</ul>
</li>
<li><a href="#sec-8">Working with numbers</a>
<ul>
<li><a href="#sec-8-1">Complex numbers</a></li>
</ul>
</li>
<li><a href="#sec-9">Polynomials</a>
<ul>
<li><a href="#sec-9-1">Difference analysis of polynomial sequences</a></li>
<li><a href="#sec-9-2">Gaussian elimination</a></li>
</ul>
</li>
<li><a href="#sec-10">Corecursion</a>
<ul>
<li><a href="#sec-10-1">Corecursive definitions</a></li>
<li><a href="#sec-10-2">Processes and labeled transition systems</a></li>
</ul>
</li>
<li><a href="#sec-11">Finite and infinite sets</a>
<ul>
<li><a href="#sec-11-1">Equipollence</a></li>
</ul>
</li>
</ul>
</div>
</div>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Getting started</h2>
<div class="outline-text-2" id="text-1">
<dl class="org-dl">
<dt> <code>Integral</code> </dt><dd>type class containing <code>Int</code> and <code>Integer</code> types
</dd>
<dt> <code>Int</code> </dt><dd>fixed-precision integer
</dd>
<dt> <code>Integer</code> </dt><dd>arbitrary-precision integer
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Talking about mathematical objects</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> Logical connectives and their meanings</h3>
<div class="outline-text-3" id="text-2-1">
<p>
Every statement that makes mathematical sense is either true or false.
</p>

<dl class="org-dl">
<dt> Platonism </dt><dd>belief in an independent world of mathematical fact
</dd>
<dt> Intuitionism </dt><dd>belief that mathematical reality has no independent
existence, but is created by the working mathematician
</dd>
</dl>
</div>

<div id="outline-container-sec-2-1-1" class="outline-4">
<h4 id="sec-2-1-1"><span class="section-number-4">2.1.1</span> Connectives</h4>
<div class="outline-text-4" id="text-2-1-1">
<dl class="org-dl">
<dt> conjunction </dt><dd>and
</dd>
<dt> disjunction </dt><dd>or
</dd>
<dt> negation </dt><dd>not
</dd>
<dt> implication </dt><dd>if/then (not the same as "thus" or "so")
</dd>
<dt> equivalence </dt><dd>if and only if (iff)
</dd>
<dt> truth values </dt><dd>the set {<code>True</code>, <code>False</code>}
</dd>
</dl>

<p>
Booleans in Haskell:
</p>

<div class="org-src-container">

<pre class="src src-haskell">data Bool = False | True
</pre>
</div>

<p>
Mathematical definitions of connectives: see notes for Mathematical
Structures for Computer Science.
</p>

<div class="org-src-container">

<pre class="src src-haskell">(&amp;&amp;) :: Bool -&gt; Bool -&gt; Bool
False &amp;&amp; x = False
True &amp;&amp; x = x
</pre>
</div>

<p>
Disjunctions have two types:
</p>

<dl class="org-dl">
<dt> inclusive </dt><dd>"A or B" is true even if A and B are both true
</dd>
<dt> exclusive </dt><dd>"A or B" is true if A or B is true, but false if both are
true
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-2-1-2" class="outline-4">
<h4 id="sec-2-1-2"><span class="section-number-4">2.1.2</span> Logical validities</h4>
<div class="outline-text-4" id="text-2-1-2">
<dl class="org-dl">
<dt> logical validity </dt><dd>tautology. Can be established by checking that the
truth table for the expression contains only true values.
</dd>
</dl>

<p>
Triple-bar equality signifies that two logical statements are equivalent
(that is, for any combination of variables in each statement, the truth
tables are the same).
</p>
</div>
</div>
</div>
<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> Lambda abstraction</h3>
<div class="outline-text-3" id="text-2-2">
<p>
The function that sends \(x\) to \(x^2\): \(\lambda x.x^2\).
</p>
</div>
</div>
<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> Abstract formulas and concrete structures</h3>
<div class="outline-text-3" id="text-2-3">
<dl class="org-dl">
<dt> structure </dt><dd>domain of quantification and the meaning of the presented
symbols
</dd>
<dt> open formula </dt><dd>formula which contains free variables
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-2-4" class="outline-3">
<h3 id="sec-2-4"><span class="section-number-3">2.4</span> Logical handling of the quantifiers</h3>
<div class="outline-text-3" id="text-2-4">
<p>
A logical formula is <b>logically valid</b> if it is true in <b>every</b> structure.
</p>

<p>
Two formulas are logically equivalent if they obtain the same truth value in
<b>every</b> structure.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> The use of logic: proof</h2>
<div class="outline-text-2" id="text-3">
</div><div id="outline-container-sec-3-1" class="outline-3">
<h3 id="sec-3-1"><span class="section-number-3">3.1</span> Proof style</h3>
<div class="outline-text-3" id="text-3-1">
<ul class="org-ul">
<li>Write correct English; try to express yourself clearly.
</li>
<li>Make sure the reader knows exactly what you are up to.
</li>
<li>Say what you mean when introducing a variable.
</li>
<li>Don't start a sentence with symbols don't write formulas only.
</li>
<li>Use words or phrases like 'thus', 'therefore', 'hence', 'it follows that',
et cetera to link up your formulas. Be relevant and succinct.
</li>
<li>When constructing proofs, use the following schema:

<ol class="org-ol">
<li>Given:
</li>
<li>To be proved:
</li>
<li>Proof:
</li>
</ol>
</li>
<li>Use layout (in particular, indentation) to identify subproofs and to keep
track of the scopes of the assumptions.
</li>
<li>Look up definitions of defined notions, and use these definitions to
rewrite both "Given" and "To be proved."
</li>
<li>Make sure you have a sufficient supply of scrap paper. Make a fair copy of
the end-product - whether you think it to be flawless or not.
</li>
<li>Ask yourself two things: Is this correct? Can others read it?
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-3-2" class="outline-3">
<h3 id="sec-3-2"><span class="section-number-3">3.2</span> Proof recipes</h3>
<div class="outline-text-3" id="text-3-2">
<p>
Types of rules:
</p>
<dl class="org-dl">
<dt> elimination </dt><dd>reduces the proof problem to a simpler one
</dd>
<dt> introduction </dt><dd>makes clear how to prove a goal of a certain shape
</dd>
</dl>

<p>
Summary of the rules in 3.5 (p94-97).
</p>
</div>

<div id="outline-container-sec-3-2-1" class="outline-4">
<h4 id="sec-3-2-1"><span class="section-number-4">3.2.1</span> Rules for the connectives</h4>
<div class="outline-text-4" id="text-3-2-1">
</div><ol class="org-ol"><li>Implication<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-1-1-1">
<dl class="org-dl">
<dt> deduction rule </dt><dd>reduces the problem of proving \(\phi \rightarrow \psi\). Let \(\phi\) be
just another given, and reduce the task to proving
that \(\psi\).

<p>
Format:
</p>

<blockquote>
<p>
Given: &#x2026;
To be proved: \(\phi \rightarrow \psi\)
Proof:
    Suppose: \(\phi\)
    To be proved: \(\psi\)
    Proof: &#x2026;
Thus \(\phi \rightarrow \psi\).
</p>
</blockquote>

<p>
This is <b>safe</b>: even if \(\phi\) is false, the implication
\(\phi \rightarrow \psi\) will be true anyway. Just consider when \(\phi\) is
true and prove \(\psi\) is true for this case.
</p>
</dd>
</dl>

<blockquote>
<p>
If the 'to be proved' is an implication \(\phi \rightarrow \psi\), then your proof should
start with the following obligatory sentence:
</p>

<p>
<b>Suppose that \(\psi\) holds.</b>
</p>
</blockquote>

<dl class="org-dl">
<dt> modus ponens </dt><dd>from \(\phi \rightarrow \psi\) and \(\phi\) you can conclude that \(\psi\).

<blockquote>
<p>
Given: \(\phi \rightarrow \psi\), \(\phi\)
Thus \(\psi\).
</p>
</blockquote>
</dd>
</dl>
</div>
</li></ol>
</li>
<li>Conjunction<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-1-2-1">
<blockquote>
<ul class="org-ul">
<li>Given: \(\Phi\) and \(\Psi\).
</li>
<li>Thus \(\Phi\) and \(\Psi\).
</li>
</ul>
</blockquote>
</div>
</li>
<li>Elimination<br  /><div class="outline-text-6" id="text-3-2-1-2-2">
<blockquote>
<ul class="org-ul">
<li>Given: \(\Phi \land \Psi\).
</li>
<li>Thus \(\Phi\).
</li>
<li>or Thus \(\Psi\).
</li>
</ul>
</blockquote>
</div>
</li></ol>
</li>
<li>Equivalence<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-1-3-1">
<p>
To prove \(\Phi \leftrightarrow \Psi\):
</p>

<ol class="org-ol">
<li>(&rarr;) add \(\Phi\) as a new given, and show that \(\Psi\),
</li>
<li>(&larr;) add \(\Psi\) as a new given, and show that \(\Phi\).
</li>
</ol>

<blockquote>
<ul class="org-ul">
<li>Given: &#x2026;
</li>
<li>To be proved: \(\Phi \leftrightarrow \Psi\)
</li>
<li>Proof:
<ul class="org-ul">
<li>Suppose \(\Phi\)
</li>
<li>To be proved: \(\Psi\)
</li>
<li>Proof: &#x2026;
</li>
<li></li>
<li>Suppose \(\Psi\)
</li>
<li>To be proved: \(\Phi\)
</li>
<li>Proof: &#x2026;
</li>
</ul>
</li>
<li>Thus \(\Phi \leftrightarrow \Psi\).
</li>
</ul>
</blockquote>
</div>
</li>
<li>Elimination<br  /><div class="outline-text-6" id="text-3-2-1-3-2">
<blockquote>
<ul class="org-ul">
<li>Given: \(\Phi \leftrightarrow \Psi\), \(\Phi\), &#x2026;
</li>
<li>Thus \(\Psi\).
</li>
</ul>
</blockquote>

<blockquote>
<ul class="org-ul">
<li>Given: \(\Phi \leftrightarrow \Psi\), \(\Psi\), &#x2026;
</li>
<li>Thus \(\Phi\).
</li>
</ul>
</blockquote>
</div>
</li></ol>
</li>
<li>Negation<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-1-4-1">
<p>
If you need to prove \(\not\Phi\), assume \(\Phi\) and then try to reach an evidently
false statement (like \(2 = 1\)).
</p>
</div>
</li>
<li>Elimination<br  /><div class="outline-text-6" id="text-3-2-1-4-2">
<p>
If you are given \(\not\Phi\), you can attempt to prove \(\Phi\). If you succeed then
the conclusion is true in <b>all</b> cases.
</p>
</div>
</li>
<li>Proof by contradiction<br  /><div class="outline-text-6" id="text-3-2-1-4-3">
<dl class="org-dl">
<dt> proof by contradiction </dt><dd>(reductio ad absurdum). When given \(\Phi\),
suppose \(\not\Phi\) and work to reach an evidently false statement.

<blockquote>
<p>
Beginners are often lured into using this rule. The given \(\not\Phi\) that
comes in free looks so inviting! However, many times it must be
considered poisoned, making for a cluttered bunch of confused givens
that you will not be able to disentangle. It is a killer rule that
often will turn itself against its user, especially when that is a
beginner. Proof by contradiction should be considered your last way
out. Some proof problems do need it, but if possible you should
proceed without: you won't get hurt and a simpler and more
informative proof will result.
</p>
</blockquote>
</dd>
</dl>
</div>
</li></ol>
</li>
<li>Disjunction<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-1-5-1">
<p>
A disjunction follows from each of its disjuncts.
</p>

<blockquote>
<ul class="org-ul">
<li>Given: \(\Phi\).
</li>
<li>Thus \(\Phi \lor \Psi\).
</li>
</ul>
</blockquote>
</div>
</li>
<li>Elimination<br  /><div class="outline-text-6" id="text-3-2-1-5-2">
<p>
You can use a given \(\Phi \lor \Psi\) by giving <b>two</b> proofs: one employing \(\Phi\), and
one employing \(\Psi\).
</p>

<blockquote>
<ul class="org-ul">
<li>Given: \(\Phi \lor \Psi\), &#x2026;
</li>
<li>To be proved: \(\Lambda\)
</li>
<li>Proof:
<ul class="org-ul">
<li>Suppose \(\Phi\)
</li>
<li>To be proved: \(\Lambda\)
</li>
<li>Proof: &#x2026;
</li>
<li>&#x2014;&#x2014;
</li>
<li>Suppose: \(\Psi\)
</li>
<li>To be proved: \(\Lambda\)
</li>
<li>Proof: &#x2026;
</li>
</ul>
</li>
<li>Thus \(\Lambda\).
</li>
</ul>
</blockquote>
</div>
</li></ol>
</li></ol>
</div>
<div id="outline-container-sec-3-2-2" class="outline-4">
<h4 id="sec-3-2-2"><span class="section-number-4">3.2.2</span> Rules for the quantifiers</h4>
<div class="outline-text-4" id="text-3-2-2">
<p>
Each rule for a quantifier comes in two forms: one for an unrestricted
quantifier and another for the restricted version.
</p>
</div>

<ol class="org-ol"><li>Universal quantifier<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-2-1-1">
<blockquote>
<p>
When asked to prove that \(\forall x E(x)\), you should start a proof by
writing the Obligatory Sentence:
</p>

<p>
<b>Suppose that \(c\) is an arbitrary object.</b>
</p>

<p>
You then proceed to show that <b>this</b> object (about which you are not
supposed to assume extra information; in particular, it should not occur
earlier in the argument) has the property \(E\) in question.
</p>
</blockquote>

<blockquote>
<p>
If \(\forall x \in A \, E(x)\) is to be proved, you should start proof this time by
the, again, obligatory:
</p>

<p>
<b>Suppose that \(c\) is any object in \(A\).</b>
</p>

<p>
You proceed to show that <b>this</b> object (about which you only assume that
it belongs to \(A\)) has the property \(E\) in question.
</p>
</blockquote>

<dl class="org-dl">
<dt> arbitrary object </dt><dd>in a proof, something unspecified about which no
special assumptions are made. Used only as an aid to the imagination.

<blockquote>
<p>
Imagine that you allow someone else to pick an object, and that you
don't care what choice is made. 'Suppose \(c\) is an arbitrary A' is
the same as saying to the reader: 'Suppose you provide me with a
member \(c\) from the set \(A\); the choice is completely up to you.'
</p>
</blockquote>
</dd>
</dl>
</div>
</li>
<li>With implication<br  /><div class="outline-text-6" id="text-3-2-2-1-2">
<p>
The following schema is useful when we must prove an implication that is
universally quantified:
</p>

<blockquote>
<ul class="org-ul">
<li>Given: &#x2026;
</li>
<li>To be proved: \(\forall x(P(x) \rightarrow Q(x))\)
</li>
<li>Proof:
<ul class="org-ul">
<li>Suppose \(c\) is any object such that \(P(c)\)
</li>
<li>To be proved: \(Q(c)\)
</li>
<li>Proof:
</li>
</ul>
</li>
<li>Thus \(\forall x(P(x) \rightarrow Q(x))\)
</li>
</ul>
</blockquote>
</div>
</li>
<li>Elimination<br  /><div class="outline-text-6" id="text-3-2-2-1-3">
<blockquote>
<ul class="org-ul">
<li>Given: \(\forall x E(x)\)
</li>
<li>Thus \(E(t)\).
</li>
</ul>

<p>
Here, \(t\) is any object of your choice.
</p>
</blockquote>

<p>
With a restricted universal quantifier:
</p>

<blockquote>
<ul class="org-ul">
<li>Given: \(\forall x \in A\,E(x)\), \(t \in A\)
</li>
<li>Thus \(E(t)\).
</li>
</ul>
</blockquote>
</div>
</li></ol>
</li>
<li>Existential quantifier<br  /><ol class="org-ol"><li>Introduction<br  /><div class="outline-text-6" id="text-3-2-2-2-1">
<blockquote>
<p>
In order to show that \(\exists x E(x)\), it suffices to specify one object \(t\)
for which \(E(t)\) holds.
</p>
</blockquote>

<p>
The restricted case should be obvious.
</p>

<dl class="org-dl">
<dt> example-object </dt><dd>an object \(t\) for which \(E(t)\) holds and thus proves
                          \(\exists tE(t)\).
</dd>
</dl>
</div>
</li>
<li>Elimination<br  /><div class="outline-text-6" id="text-3-2-2-2-2">
<blockquote>
<p>
When you want to use that \(\exists x E(x)\) in an argument to prove \(\Lambda\), you
write the Obligatory Sentence:
</p>

<p>
<b>Suppose that \(c\) is an object that satisfies \(E\).</b>
</p>
</blockquote>

<p>
Restricted case: <b>Suppose that \(c\) is an object in \(A\) that satisfies \(E\)</b>
when given \(\exists x \in A \, E(x)\).
</p>
</div>
</li></ol>
</li></ol>
</div>
<div id="outline-container-sec-3-2-3" class="outline-4">
<h4 id="sec-3-2-3"><span class="section-number-4">3.2.3</span> Strategic guidelines</h4>
<div class="outline-text-4" id="text-3-2-3">
<blockquote>
<ol class="org-ol">
<li><b>Do not</b> concentrate on the given, by trying to transform that into what
is proved.
</li>
<li><b>Instead</b>, concentrate on (the form of) what is to be proved.
</li>
<li>A number of rules enable you to simplify the proof problem. For instance:
<ul class="org-ul">
<li>When asked to prove \(P \implies Q\), add \(P\) to the givens and try to
prove \(Q\). (Deduction Rule)
</li>
<li>When asked to prove \(\forall x E(x)\), prove \(E(c)\) for an arbitrary \(c\)
instead (\(\forall\)-introduction).
</li>
</ul>
</li>
<li>Only <b>after</b> you have reduced the problem as far as possible you should
look at the givens in order to see which of them can be used.
<ul class="org-ul">
<li>When one of the givens is of the form \(P \lor Q\), and \(R\) is to be proved,
make a case distinction: first add \(P\) to the givens and prove \(R\),
next add \(Q\) to the givens and prove \(R\).
</li>
<li>When one of the givens is of the form \(\exists x E(x)\), and \(P\) is to be
proved, give the object that satisfies \(E\) a name, by adding \(E(c)\) to
the givens. Next, prove \(P\).
</li>
</ul>
</li>
<li>It is usually a good idea to move negations inward as much as possible
before attempting to apply &not;-introduction.
</li>
<li>Stay away from Proof by Contradiction as long as possible.
</li>
</ol>
</blockquote>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> Sets, types and lists</h2>
<div class="outline-text-2" id="text-4">
</div><div id="outline-container-sec-4-1" class="outline-3">
<h3 id="sec-4-1"><span class="section-number-3">4.1</span> Let's talk about sets</h3>
<div class="outline-text-3" id="text-4-1">
<dl class="org-dl">
<dt> axioms </dt><dd>truths given without proof upon which proofs depend

<p>
Expected to be justified by intuition.
</p>
</dd>
<dt> lemma </dt><dd>a conclusive statement in a proof used to approach the conclusion
of a theorem
</dd>
<dt> Georg Cantor </dt><dd>1845-1915.

<blockquote>
<p>
The founding father of set theory.
</p>

<ul class="org-ul">
<li>Haskell Road
</li>
</ul>
</blockquote>
</dd>
<dt> Comprehension Principle </dt><dd><blockquote>
<p>
A set is a collection into a whole of definite, distinct objects of our
intuition or of our thought. The objects are called the elements
(members) of the set.
</p>
</blockquote>
</dd>
<dt> Principle of Extensionality </dt><dd>Sets that have the same elements are equal.

<p>
$$\forall x(x \in A \iff x \in B) \implies A = B$$
</p>

<p>
One of Zermelo's axioms.
</p>
</dd>
</dl>
</div>

<div id="outline-container-sec-4-1-1" class="outline-4">
<h4 id="sec-4-1-1"><span class="section-number-4">4.1.1</span> Subsets</h4>
<div class="outline-text-4" id="text-4-1-1">
<blockquote>
<p>
The set \(A\) is called a <i>subset</i> of the set \(B\), and \(B\) is a <i>superset</i> of
\(A\) (notations: \(A \subseteq B\) and \(B \supseteq A\)) if every member of \(A\)
is also a member of \(B\). In symbols:
</p>

<p>
$$\forall x(x \in A \implies x \in B)$$
</p>

<p>
If \(A \subseteq B\) and \(A \ne B\), then \(A\) is called a <i>proper subset</i> of \(B\).
</p>
</blockquote>

<p>
\({0, 2}\) is a proper subset of \(\mathbb{N}\).
</p>

<p>
$$A \subseteq B \land B \subseteq A \iff A = B$$
</p>

<blockquote>
<p>
To show that \(A \ne B\) we therefore either have to find an object \(c\) with \(c
    \in A\), \(c \not\in B\) (in this case \(c\) is a witness of \(A \not\subseteq B\)), or an
object \(c\) with \(c \not\in A\), \(c \in B\) (in this case \(c\) is a witness of \(B \not\in
    A\)). A proof of \(A = B\) will in general have the following form:
</p>

<ul class="org-ul">
<li>Given: &#x2026;
</li>
<li>To be proved: \(A = B\)
</li>
<li>Proof:
</li>
<li>\(\subseteq\): Let \(x\) be an arbitrary object in \(A\).
<ul class="org-ul">
<li>To be proved: \(x \in B\).
</li>
<li>&#x2026;
</li>
</ul>
</li>
<li>\(\subseteq\): Let \(x\) be an arbitrary object in \(B\).
<ul class="org-ul">
<li>To be proved: \(x \in A\).
</li>
<li>&#x2026;
</li>
</ul>
</li>
<li>Thus \(A = B\).
</li>
</ul>
</blockquote>

<ul class="org-ul">
<li>Russell Paradox
</li>
</ul>

<blockquote>
<p>
4.7 Given: A is a set of sets.
</p>

<ul class="org-ul">
<li>To be proved: \({x \in A | x \not\in x} \in A\).
</li>
<li>Proof:
<ul class="org-ul">
<li>Let \(B := {x \in A | x \not\in x}\), and assume \(B ∈ A\).
</li>
<li>Suppose \(B \in B\). Then, from the definition of \(B\), \(B \not\in B\), and
contradiction.
</li>
<li>Suppose \(B \not\in B\). Then, since \(B \in A\) and \(B \not\in B\), \(B \in B\), and
contradiction again.
</li>
</ul>
</li>
<li>Therefore \({x \in A | x \not\in x} \not\in A\).
</li>
</ul>
</blockquote>
</div>
</div>
<div id="outline-container-sec-4-1-2" class="outline-4">
<h4 id="sec-4-1-2"><span class="section-number-4">4.1.2</span> Paradoxes, types and type classes</h4>
<div class="outline-text-4" id="text-4-1-2">
<p>
A procedure <i>diverges</i> when it does not terminate or abort with an error.
</p>

<p>
With types, Russell's Paradox cannot hold:
</p>

<div class="org-src-container">

<pre class="src src-haskell">elem "Russell" "Cantor"    -- Error: "Cantor" must be a list of the type
                           -- of "Russell"
</pre>
</div>

<blockquote>
<p>
The types of object for which the question 'equal or not' makes sense are
grouped into a collection of types called a <i>class</i>.
</p>
</blockquote>

<dl class="org-dl">
<dt> <code>Eq</code> </dt><dd>Haskell typeclass which designates types which can be compared for
equality
</dd>
<dt> <code>Ord</code> </dt><dd>Haskell typeclass which designates types which can be tested for
order
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-4-1-3" class="outline-4">
<h4 id="sec-4-1-3"><span class="section-number-4">4.1.3</span> Algebra of sets</h4>
<div class="outline-text-4" id="text-4-1-3">
<dl class="org-dl">
<dt> symmetric difference </dt><dd>for two sets \(A\) and \(B\), the set of all
objects that are either in \(A\) or in \(B\), but not in
both. Given by \({x | x \in A \oplus x \in B}\).
</dd>
<dt> power set </dt><dd>for a set \(X\), the set \({A | A \subseteq X}\).
</dd>
<dt> generalized union </dt><dd>for a collection of sets \(A_i\), the set
         \({x | \exists i \in I(x \in A_i) }\)

<p>
Notated \(\cup_{i \in I} A_i\)
</p>

<p>
Short notation: for \(\mathcal F = { {1}, {2}, {3} }\), \(\cup
         \mathcal F = {1, 2, 3}\)
</p>
</dd>
<dt> generalized intersection </dt><dd>for a collection of sets \(A_i\), the
set \({x | \forall i \in I(x \in A_i) }\)

<p>
Notated \(\cap_{i \in I} A_i\)
</p>

<p>
Short notation: for \(\mathcal F = { {1, 2}, {2, 3}, {2, 4} }\),
\(\cap \mathcal F = {2}\).
</p>
</dd>
<dt> family </dt><dd>(set theory) a set of sets
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-4-1-4" class="outline-4">
<h4 id="sec-4-1-4"><span class="section-number-4">4.1.4</span> Ordered pairs and products</h4>
<div class="outline-text-4" id="text-4-1-4">
<p>
Equality:
</p>

<p>
$$(a, b) = (x, y) \implies a = x \land b = y$$
</p>

<dl class="org-dl">
<dt> Cartesian product </dt><dd>for two sets \(A\) and \(B\), the set of all ordered
pairs \((a, b)\) where \(a \in A\) and \(b \in B\). Notated \(A \times B\).

<p>
Formally, \(A \times B = \{(a, b) | a \in A \land b \in B\}\)
</p>

<p>
\(A \times A\) may be written \(A^2\).
</p>

<p>
\(\{0, 1\} \times \{1, 2, 3\} = \{(0, 1), (0, 2), (0, 3), (1, 1), (1, 2), (1,
         3)\}\)
</p>

<p>
When \(A\) and \(B\) are continuous real intervals and plotted on the X
and Y axis respectively, the Cartesian product of \(A\) and \(B\) forms a
rectangle.
</p>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-4-1-5" class="outline-4">
<h4 id="sec-4-1-5"><span class="section-number-4">4.1.5</span> A data type for sets</h4>
<div class="outline-text-4" id="text-4-1-5">
<p>
Using lists to represent sets in Haskell has a shortcoming: lists have
implicit order. For example, our abstraction fails when we compare the
"sets" <code>[1, 2, 3]</code> and <code>[3, 2, 1]</code>. The sets represented are equal, but
their corresponding abstractions as lists are not.
</p>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> Relations</h2>
<div class="outline-text-2" id="text-5">
</div><div id="outline-container-sec-5-1" class="outline-3">
<h3 id="sec-5-1"><span class="section-number-3">5.1</span> Relations as sets of ordered pairs</h3>
<div class="outline-text-3" id="text-5-1">
<p>
Examples of relations: \(<\) between two natural numbers, \(\subseteq\) between
two sets.
</p>

<p>
A relation can be represented by a set. Consider the ordering \(\le\) on
\(\mathbb{N}\). We can make \(R\), the set of ordered pairs \((m, n)\) for which \(m
   \le n\) is true:
</p>

<p>
$$R_\le = \{(m, n) \in \mathbb{N}^2 \mid m \le n\}$$
</p>

<p>
Now the statement \(m \le n\) is equivalent to \((m, n) \in R_\le\). So \((3, 5) \in
   R_\le\) and \((5, 3) \not\in R_\le\). We can say the ordering relation \(\le\) of
\(\mathbb{N}\) is <b>identified</b> with the set \(R_\le\).
</p>

<dl class="org-dl">
<dt> relation </dt><dd>set of ordered pairs

<p>
Instead of \((x, y) \in R\), we say \(xRy\) or \(R(x, y)\) or \(Rxy\).
</p>

<p>
The <b>domain</b> of the relation is \(\{x \mid \exists y(xRy)\}\), and the
<b>range</b> of the relation is \(\{y \mid \exists x(xRy)\}\).
</p>

<p>
If \(A\) and \(B\) are sets, then \(A \times B\) is a relation. For
non-empty \(A\) and \(B\), the domain of \(A \times B\) is \(A\) and the
range of \(A \times B\) is \(B\).
</p>

<p>
A relation \(R\) is <i>from A to B</i> or <i>between A and B</i> if
\(domain(R) \subseteq A \land range(R) \subseteq B\).
</p>

<p>
A relation \(R\) is <i>on A</i> if it is from \(A\) to \(A\).
</p>
</dd>

<dt> underlying set </dt><dd>for a relation \(R\) on \(A\) (i.e., from \(A\) to \(A\)), \(A\) is
the underlying set of the structure that consists of the
domain \(A\) and the relation \(R\).
</dd>

<dt> identity relation </dt><dd>also "diagonal relation". For a set \(A\), the identity
relation (notated \(\Delta\)) is

<p>
$$\Delta_A = \{(a, a) \mid a \in A\}$$
</p>

<p>
Trivially, \(\Delta_A^{-1} = \Delta_A\).
</p>
</dd>

<dt> inverse relation </dt><dd>if \(R\) is a relation between \(A\) and \(B\), then

<p>
$$R^{-1} = \{(b, a) \mid aRb\}$$
</p>

<p>
and \(R^{-1}\) is a relation between \(B\) and \(A\).
</p>

<p>
For example, the inverse of a relation <i>parent-of</i> is the relation
<i>child-of</i>.
</p>

<p>
Trivially, \((R^{-1})^{-1} = R\).
</p>
</dd>
</dl>

<p>
The relation defining the divisors of a natural \(n\) is defined as
</p>

<p>
$$div(n) = \{(a, b) \mid a, b \in \mathbb N \land ab = n \land a \le b\}$$
</p>

<p>
or, in Haskell,
</p>

<div class="org-src-container">

<pre class="src src-haskell">divisors :: Integer -&gt; [(Integer, Integer)]
divisors n = [ (d, quot n d) | d &lt;- [1..k], rem n d == 0 ]
             where k = floor (sqrt (fromInteger n))
</pre>
</div>

<p>
It is trivial to prove that every value is related to every other in some way.
</p>

<blockquote>
<p>
When we say that \(a\) and \(b\) are related we usually mean more than that it is
possible to form the ordered pair of \(a\) and \(b\). We usually mean that there
is some good reason for considering the pair \((a, b)\), because there is some
<i>specific</i> link between \(a\) and \(b\) (for instance, you can make Mrs. \(a\) blush
by mentioning Mr. \(b\) in a conversation).
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-5-2" class="outline-3">
<h3 id="sec-5-2"><span class="section-number-3">5.2</span> Properties of relations</h3>
<div class="outline-text-3" id="text-5-2">
<dl class="org-dl">
<dt> reflexive relation </dt><dd>a relation \(R\) is reflexive on \(A\) if \(\forall x \in
        A(x R x)\).

<p>
The identity relation on \(A\) (\(\Delta_A\)) is the smallest reflexive
relation on \(A\). We can thus say that a relation \(R\) on \(A\) is reflexive
iff \(\Delta_A \subseteq R\).
</p>
</dd>

<dt> irreflexive relation </dt><dd>for a relation \(R\) on \(A\), \(\not \exists x \in A
        (xRx)\).
</dd>

<dt> symmetric relation </dt><dd>for a relation \(R\) on \(A\), \(\forall x \in A \:\forall
        y \in A (xRy \iff yRx)\)

<blockquote>
<p>
The relation 'having the same age' between people is
symmetric. Unfortunately, the relation 'being in love with' between
people is not symmetric.
</p>
</blockquote>
</dd>

<dt> asymmetric relation </dt><dd>for a relation \(R\) on \(A\), \(\forall x, y \in A(xRy
        \implies \not yRx)\).

<p>
A relation \(R\) is asymmetric iff \(R \cap R^{-1} = \emptyset\).
</p>
</dd>

<dt> antisymmetric relation </dt><dd>for a relation \(R\) on \(A\), \(\forall x, y \in
        A(xRy \land yRx \implies x = y)\).

<blockquote>
<p>
The relation \(m|n\) (\(m\) is a divisor of \(n\)) is
antisymmetric.
</p>
</blockquote>

<p>
The relations \(\le\) and \(\ge\) are antisymmetric.
</p>

<p>
An asymmetric relation is always antisymmetric.
</p>
</dd>

<dt> transitive relation </dt><dd>for a relation \(R\) on \(A\), \(\forall x, y, z \in
        A(xRy \land yRz \implies xRz)\).
</dd>

<dt> intransitive relation </dt><dd>for a relation \(R\) on \(A\), \(\forall x, y, z \in
        A(xRy \land yRz \implies \not xRz)\).

<p>
The relation 'father of' on the set of all human beings is intransitive.
</p>
</dd>

<dt> pre-order relation </dt><dd>also "quasi-order relation." A relation which is both
transitive and reflexive.
</dd>

<dt> strict partial order </dt><dd>relation which is both transitive and irreflexive
</dd>

<dt> partial order </dt><dd>relation which is transitive, reflexive and antisymmetric
</dd>

<dt> linear relation </dt><dd>for a relation \(R\) on \(A\), \(\forall x, y \in A(xRy \lor
        yRx \lor x = y)\).
</dd>

<dt> total order </dt><dd>partial order which is also a linear relation

<p>
All Haskell types in the class <code>Ord a</code> are total orders.
</p>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-5-3" class="outline-3">
<h3 id="sec-5-3"><span class="section-number-3">5.3</span> Implementing relations as sets of pairs</h3>
<div class="outline-text-3" id="text-5-3">
<p>
Relations are sets of pairs:
</p>

<div class="org-src-container">

<pre class="src src-haskell">type Rel a = Set (a, a)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-5-4" class="outline-3">
<h3 id="sec-5-4"><span class="section-number-3">5.4</span> Implementing relations as functions</h3>
<div class="outline-text-3" id="text-5-4">
<dl class="org-dl">
<dt> characteristic function </dt><dd>a function of type \(A \to \{0, 1\}\) for some set
        \(A\).

<p>
Characterize subsets of a set \(A\).
</p>

<p>
The function \(f \colon A \to \{0, 1\}\) characterizes the subset \(B = \{a
        \mid a \in A \land f(a) = 1\}\), where \(B \subseteq A\).
</p>

<p>
Haskell characteristic functions have the type <code>a -&gt; Bool</code>.
</p>
</dd>
</dl>

<p>
Characteristic functions can be used to represent relations.
</p>

<p>
Remaining in set theory, a characteristic function representing a relation \(R\)
would be expected to take a tuple <code>(x, y)</code> and return <code>True</code> if \(xRy\), and
<code>False</code> otherwise.
</p>

<p>
But Haskell's characteristic functions for relations take their arguments one
by one rather than as a tuple.
</p>

<div class="org-src-container">

<pre class="src src-haskell">:t (==)
</pre>
</div>

<pre class="example">
(==) :: Eq a =&gt; a -&gt; a -&gt; Bool
</pre>

<p>
Talk on using currying to transform a function of \((a, b) \to c\) to \(a \to b \to c\).
</p>

<div class="org-src-container">

<pre class="src src-haskell">curry r :: ((a, b) -&gt; c) -&gt; (a -&gt; b -&gt; c)
curry f x y = f (x, y)

uncurry r :: (a -&gt; b -&gt; c) -&gt; ((a, b) -&gt; c)
uncurry f (x, y) = f x y
</pre>
</div>

<p>
Defining some simple relations of <code>(a, b) \to Bool</code>:
</p>

<div class="org-src-container">

<pre class="src src-haskell">eq :: Eq a =&gt; (a, a) -&gt; Bool
eq = uncurry (==)
</pre>
</div>

<p>
We can define a relation's inverse easily:
</p>

<div class="org-src-container">

<pre class="src src-haskell">inverse :: ((a, b) -&gt; c) -&gt; ((b, a) -&gt; c)
inverse f (x, y) = f (y, x)
</pre>
</div>

<p>
Here a relation on \(A\) is defined from <code>a -&gt; a -&gt; Bool</code>:
</p>

<div class="org-src-container">

<pre class="src src-haskell">type Rel a = a -&gt; a -&gt; Bool
</pre>
</div>

<p>
Define the identity relation on a list:
</p>

<div class="org-src-container">

<pre class="src src-haskell">idR :: Eq a =&gt; [a] -&gt; Rel a
idR xs x y = x == y &amp;&amp; x `elem` xs
</pre>
</div>

<p>
Moar:
</p>

<div class="org-src-container">

<pre class="src src-haskell">inR :: Rel a -&gt; (a, a) -&gt; Bool
inR = uncurry
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-5-5" class="outline-3">
<h3 id="sec-5-5"><span class="section-number-3">5.5</span> Equivalence relations</h3>
<div class="outline-text-3" id="text-5-5">
<dl class="org-dl">
<dt> equivalence relation </dt><dd>a relation \(R\) on \(A\) which is transitive,
reflexive on \(A\) and symmetric.

<blockquote>
<p>
On the set of human beings the relation of having the same age is an
equivalence relation.
</p>
</blockquote>

<p>
Let \(A\) be a set. \(\Delta_A\) (the identity relation) is the smallest
equivalence on \(A\). \(A^2\) (\(A \times A\)) is the biggest equivalence on \(A\).
</p>

<p>
The relation \(\sim\) between vectors in 3-dimensional space \(\mathbb R^3\)
that is defined by \(\vec a \sim \vec b \iff \exists r \in \mathbb R^+(\vec a = r
        \vec b)\) is an equivalence.
</p>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-5-6" class="outline-3">
<h3 id="sec-5-6"><span class="section-number-3">5.6</span> Equivalence classes and partitions</h3>
<div class="outline-text-3" id="text-5-6">
<dl class="org-dl">
<dt> equivalence class </dt><dd>Suppose \(R\) is an equivalence relation on \(A\) and that
        \(a \in A\). The set \(|a| = |a|_R = \{b \in A \mid bRa\}\) is called the
        <i>R-equivalence class</i> of \(a\), or the <i>equivalence class</i> of \(a \text{
        modulo } R\).

<p>
The equivalence class of \(a \in A \text{ modulo } \Delta_A\) is \(\{a\}\).
</p>
</dd>

<dt> partition </dt><dd>a family \(\mathcal A\) of subsets of a set \(A\) is a partition
of \(A\) if:

<ul class="org-ul">
<li>\(\emptyset \not\in \mathcal A\)
</li>

<li>\(\bigcup \mathcal A = A\)
</li>

<li>\(\forall X, Y \in \mathcal A(X \ne Y \implies X \cap Y = \emptyset)\) (no elements of \(A\) are
duplicated among multiple components of the partition).
</li>
</ul>
<p>
\(\{\{1, 2\}, \{3, 4\}\}\) is a partition of \(\{1, 2, 3, 4\}\).
</p>
</dd>
</dl>
</div>
</div>
</div>
<div id="outline-container-sec-6" class="outline-2">
<h2 id="sec-6"><span class="section-number-2">6</span> Functions</h2>
<div class="outline-text-2" id="text-6">
<blockquote>
<p>
We have to bear in mind that an implementation of a function as a computer
program is a concrete incarnation of an abstract object. The same function may
be computed by vastly different computation procedures. If you key in <code>sum
  [2*k | k &lt;- [1..100]]</code> at the <i>hugs</i> prompt you get the answer <code>10100</code>, and if
you key in <code>100 * 101</code> you get the same answer, but the computation steps that
are performed to get at the answers are different.
</p>
</blockquote>
</div>

<div id="outline-container-sec-6-1" class="outline-3">
<h3 id="sec-6-1"><span class="section-number-3">6.1</span> Basic notions</h3>
<div class="outline-text-3" id="text-6-1">
<dl class="org-dl">
<dt> function </dt><dd>something that transforms an object given to it into another
one.

<p>
With set theory: a function is a relation \(f\) that satisfies
the following condition:
</p>

<p>
$$(x, y) \in f \land (x, z) \in f \implies y =z$$
</p>

<p>
(For every \(x\) in the domain of \(f\) there is exactly one \(y\) in
the range of \(f\) such that \(f(x) = y\) or \((x, y) \in f\).)
</p>

<dl class="org-dl">
<dt> arguments </dt><dd>the objects that can be given to a function
</dd>

<dt> values </dt><dd>the results of a function's transformation
</dd>
</dl>
</dd>

<dt> image </dt><dd>a function value \(y = f(x)\) is called the <i>image</i> of \(x\) under
              \(f\).
</dd>
</dl>
</div>
</div>

<div id="outline-container-sec-6-2" class="outline-3">
<h3 id="sec-6-2"><span class="section-number-3">6.2</span> Surjections, injections and bijections</h3>
<div class="outline-text-3" id="text-6-2">
<dl class="org-dl">
<dt> surjection </dt><dd>a function \(f : X \to Y\) is <i>surjective</i> or <i>onto</i> if every
element \(b \in Y\) occurs as a function value of <i>at least</i> one
\(a \in X\), i.e., if \(f[X] = Y\)

<p>
To prove that a function \(f : X \to Y\) is surjective, prove that
</p>

<p>
$$\forall b \in Y \exists a \in X(f(a) = b)$$
</p>

<blockquote>
<p>
Let \(b\) be an arbitrary element of \(Y\). &#x2026; Thus there is an
\(a \in X\) with \(f(a) = b\).
</p>
</blockquote>
</dd>
<dt> injection </dt><dd>a function \(f : X \to Y\) is <i>injective</i> or <i>one-to-one</i> if every
                  \(b \in Y\) is the value of <i>at most</i> one \(a \in X\)

<p>
To prove that a function \(f\) is injective, prove that
</p>

<p>
$$f(x) = f(y) \implies x = y$$
</p>

<blockquote>
<p>
Let \(x, y\) be arbitrary and suppose \(f(x) = f(y)\). &#x2026; Thus \(x
                  = y\).
</p>
</blockquote>

<p>
Or prove the contrapositive:
</p>

<p>
$$x \ne y \implies f(x) \ne f(y)$$
</p>
</dd>
<dt> bijection </dt><dd>a function \(f : X \to Y\) is <i>bijective</i> if it is both injective
and surjective
</dd>
</dl>

<p>
Most functions are neither surjective nor injective.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-7" class="outline-2">
<h2 id="sec-7"><span class="section-number-2">7</span> Induction and recursion</h2>
<div class="outline-text-2" id="text-7">
</div><div id="outline-container-sec-7-1" class="outline-3">
<h3 id="sec-7-1"><span class="section-number-3">7.1</span> Mathematical induction</h3>
<div class="outline-text-3" id="text-7-1">
<dl class="org-dl">
<dt> induction </dt><dd><blockquote>
<p>
A proof method that can be used to establish the truth of a
statement for an infinite sequence of cases, 0, 1, 2, &#x2026;.
</p>

<p>
Let \(P(n)\) be a property of natural numbers. To prove a goal
of the form \(\forall n \in \mathbb N : P(n)\) one can proceed as
follows:
</p>

<ol class="org-ol">
<li><i>Basis.</i> Prove that 0 has the property \(P\).
</li>
<li><i>Induction step.</i> Assume the <i>induction hypothesis</i> that
                     \(n\) has property \(P\). Prove on the basis of this that \(n +
                     1\) has property \(P\).
</li>
</ol>

<p>
For every set $X \subseteq \mathbb N, we have that: if \(0 \in X\)
and \(\forall n \in \mathbb N(n \in X \implies n + 1 \in X)\), then \(X = \mathbb
                  N\).
</p>
</blockquote>

<p>
Induction works on \(\mathbb N\) because the relation \(<\) on \(\mathbb N\) is
well-founded.
</p>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-7-2" class="outline-3">
<h3 id="sec-7-2"><span class="section-number-3">7.2</span> Recursion over the natural numbers</h3>
<div class="outline-text-3" id="text-7-2">
<p>
We can think of any number as either zero or the operation +1 applied to zero
a finite number of times.
</p>

<div class="org-src-container">

<pre class="src src-haskell">data Natural = Z | S Natural
     deriving (Eq, Show)
</pre>
</div>

<p>
With this representation, 0 is <code>Z</code> and 4 is <code>S ( S ( S ( S Z ) ) )</code>.
</p>

<div class="org-src-container">

<pre class="src src-haskell">plus :: Natural -&gt; Natural -&gt; Natural
plus m Z = m
plus m (S n) = S (plus m n)
</pre>
</div>

<div class="org-src-container">

<pre class="src src-haskell">mult :: Natural -&gt; Natural -&gt; Natural
mult m Z = Z
mult m (S n) = plus (mult m n) m
</pre>
</div>

<div class="org-src-container">

<pre class="src src-haskell">expn :: Natural -&gt; Natural -&gt; Natural
expn m Z = S Z
expn m (S n) = mult (expn m n) m
</pre>
</div>

<div class="org-src-container">

<pre class="src src-haskell">leq Z _ = True
leq (S _) Z = False
leq (S m) (S n) = leq m n
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-7-3" class="outline-3">
<h3 id="sec-7-3"><span class="section-number-3">7.3</span> The nature of recursive definitions</h3>
<div class="outline-text-3" id="text-7-3">

<p>
The following is a general definition of a recursive function:
</p>

\begin{eqnarray*}
f(0) & := & c \\
f(n + 1) & := & h(f(n))
\end{eqnarray*}

<p>
Here \(c\) is a description of a value (maybe of type \(A\)), and \(h\) is a
function of type \(A \to A\). This definition is declared as a <i>structural
recursion</i> over the natural numbers. The function \(f\) will be of type
\(\mathbb N \to A\).
</p>

<blockquote>
<p>
Definition of structural recursion of \(f\) from \(c\) and \(h\) works like this:
take a natural number \(n\), view it as
</p>

<p>
$$\underbrace{1 + \cdots + 1}_{n\text{ times}} + 0$$
</p>

<p>
replace \(0\) by \(c\), replace each successor step \(1+\) by \(h\), and evaluate the
result:
</p>

<p>
$$\underbrace{h( \;\cdots\; (h}_{n \text{ times}}(c))\cdots)$$
</p>
</blockquote>

<p>
In code:
</p>

<div class="org-src-container">

<pre class="src src-haskell">foldn :: (a -&gt; a) -&gt; a -&gt; Natural -&gt; a
foldn h c Z = c
foldn h c (S n) = h (foldn h c n)
</pre>
</div>

<p>
Now we can redefine <code>plus</code> with <code>foldn</code>, with \(1+\) as our successor function.
</p>

<div class="org-src-container">

<pre class="src src-haskell">plus1 :: Natural -&gt; Natural
plus1 n = S n

plus :: Natural -&gt; Natural -&gt; Natural
plus = foldn plus1
</pre>
</div>

<p>
Similarly for multiplication, our initial value is \(0\) and our successor
function is "add \(n\)":
</p>

<div class="org-src-container">

<pre class="src src-haskell">mult :: Natural -&gt; Natural -&gt; Natural
mult m = foldn (plus m) Z
</pre>
</div>

<p>
For exponentiation, we begin with \(1\) and our successor function is "multiply
by \(n\)":
</p>

<div class="org-src-container">

<pre class="src src-haskell">expn :: Natural -&gt; Natural -&gt; Natural
expn m = foldn (mult m) (S Z)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-7-4" class="outline-3">
<h3 id="sec-7-4"><span class="section-number-3">7.4</span> Induction and recursion over trees</h3>
<div class="outline-text-3" id="text-7-4">
<div class="org-src-container">

<pre class="src src-haskell">data BinTree = L | N BinTree BinTree deriving Show

makeBinTree :: Integer -&gt; BinTree
makeBinTree 0 = L
makeBinTree (n + 1) = N (makeBinTree n) (makeBinTree n)

count :: BinTree -&gt; Integer
count L = 1
count (N t1 t2) = 1 + (count t1) + (count t2)
</pre>
</div>

<p>
A general data type for binary trees with information at the internal nodes
is given by:
</p>

<div class="org-src-container">

<pre class="src src-haskell">data Tr a = Nil | T a (Tr a) (Tr a)
     deriving (Eq, Show)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-7-5" class="outline-3">
<h3 id="sec-7-5"><span class="section-number-3">7.5</span> Induction and recursion over lists</h3>
<div class="outline-text-3" id="text-7-5">
<blockquote>
<p>
Induction and recursion over natural numbers are based on the two cases \(n =
   0\) and \(n = k + 1\). Induction and recursion over lists are based on the two
cases \(l = []\) and \(l = x:xs\).
</p>
</blockquote>

<p>
General form for structural recursion over lists:
</p>

\begin{eqnarray*}
f \; [] &:=& z \\
f(x : xs) &:=& h \; x \; (f \; xs)
\end{eqnarray*}

<p>
This is a <code>foldr</code> in disguise.
</p>

<div class="org-src-container">

<pre class="src src-haskell">foldr :: (a -&gt; b -&gt; b) -&gt; b -&gt; [a] -&gt; b
foldr f z [] = z
foldr f z (x:xs) = f x (foldr f z xs)
</pre>
</div>

<p>
Remember <code>z</code> is the identity element for the fold.
</p>

<p>
A <code>foldl</code> in disguise:
</p>

\begin{eqnarray*}
f \; z \; [] &:=& z \\
f \; z \; (x:xs) &:=& f \; (h \; z \; x) \; xs
\end{eqnarray*}

<div class="org-src-container">

<pre class="src src-haskell">foldl :: (a -&gt; b -&gt; a) -&gt; a -&gt; [b] -&gt; a
foldl f z [] = z
foldl f z (x:xs) = foldl f (f z x) xs
</pre>
</div>

<div class="org-src-container">

<pre class="src src-haskell">rev :: [a] -&gt; [a]
rev = foldl (\ xs x -&gt; x:xs) []
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-8" class="outline-2">
<h2 id="sec-8"><span class="section-number-2">8</span> Working with numbers</h2>
<div class="outline-text-2" id="text-8">
</div><div id="outline-container-sec-8-1" class="outline-3">
<h3 id="sec-8-1"><span class="section-number-3">8.1</span> Complex numbers</h3>
<div class="outline-text-3" id="text-8-1">
<div class="org-src-container">

<pre class="src src-haskell">infix 6 :+

data (RealFloat a) =&gt; Complex a = !a :+ !a
                             deriving (Eq, Show)
</pre>
</div>

<p>
Dissociating a complex:
</p>

<div class="org-src-container">

<pre class="src src-haskell">realPart, imagPart :: (RealFloat a) =&gt; Complex a -&gt; a
realPart (x :+ y) = x
imagPart (x :+ y) = y
</pre>
</div>

<p>
Moar:
</p>

<div class="org-src-container">

<pre class="src src-haskell">conjugate :: (RealFloat a) =&gt; Complex a -&gt; Complex a
conjugate (x :+ y) = x :+ (- y)
</pre>
</div>

<dl class="org-dl">
<dt> phase </dt><dd>for a complex number \(x + iy\), the angle of the vector \(<x, y>\).
</dd>
</dl>
</div>
</div>
</div>
<div id="outline-container-sec-9" class="outline-2">
<h2 id="sec-9"><span class="section-number-2">9</span> Polynomials</h2>
<div class="outline-text-2" id="text-9">
</div><div id="outline-container-sec-9-1" class="outline-3">
<h3 id="sec-9-1"><span class="section-number-3">9.1</span> Difference analysis of polynomial sequences</h3>
<div class="outline-text-3" id="text-9-1">
<p>
The <i>difference sequence</i> is given by the function
</p>

<p>
$$d(f) = \lambda n . a_{n+1} - a_n$$
</p>

<p>
(very similar to a difference matrix!)
</p>

<div class="org-src-container">

<pre class="src src-haskell">difs :: [Integer] -&gt; Integer
difs [] = []
difs [n] = []
difs (n:m:ks) = m - n : difs (m:ks)
</pre>
</div>

<p>
If \(f\) is a polynomial function of degree \(k\), then \(d(f)\) will be a
polynomial function of degree \(k - 1\). If it takes \(n\) applications of \(d\)
to \(f\) until \(d^n(f)\) is a sequence of a single repeating constant, then \(f\)
is a function of degree \(n\). (Proof provided in book; too lazy to copy.)
</p>

<p>
This function generates difference lists until the differences become
constant:
</p>

<div class="org-src-container">

<pre class="src src-haskell">difLists :: [[Integer]] -&gt; [[Integer]]
difLists [] = []
difLists lists@(xs:xss) = if constant xs
                             then lists
                             else difLists ((difs xs):lists)
                          where constant (n:m:ms) = all (==n) (m:ms)
                                constant _ = error "lack of data or not a polynomial"
</pre>
</div>

<p>
Because the lists in this function are prepended to the accumulator, the
list with the constant differences will be first in the result.
</p>
</div>
</div>
<div id="outline-container-sec-9-2" class="outline-3">
<h3 id="sec-9-2"><span class="section-number-3">9.2</span> Gaussian elimination</h3>
<div class="outline-text-3" id="text-9-2">
<div class="org-src-container">

<pre class="src src-haskell">type Matrix = [Row]
type Row    = [Integer]

rows, cols :: Matrix -&gt; Int
rows m = length m
cols m | m == []    = 0
       | otherwise = length (head m)

-- Generate a matrix for a list generated by a cubic function.
genMatrix :: [Integer] -&gt; Matrix
genMatrix xs = zipWith (++) (genM d) [[x] | x &lt;- xs]
               where d = 3
                     genM n = [[(toInteger x^m) | m &lt;- [0..n] ] | x &lt;- [0..n]]
</pre>
</div>

<p>
To perform forward elimination on a matrix, make the first column of each
row match and then subtract one from the other:
</p>

<div class="org-src-container">

<pre class="src src-haskell">-- ms (first row) used to adjust ns (second row)
adjustWith :: Row -&gt; Row -&gt; Row
adjustWith (m:ms) (n:ns) = zipWith (-) (map (n*) ms) (map (m*) ns)
</pre>
</div>

<p>
To bring a matrix \(A\) into echelon form:
</p>

<ol class="org-ol">
<li>If the number of rows or columns in \(A\) is 0, then the matrix is in
echelon form.
</li>
<li>If the first column of \(A\) is only zeros, then the echelon form of \(A\) can
be found by joining a column of 0's with the echelon form of the rest of
the columns. (recursive definition)
</li>
<li>If \(A\) has a nonzero first column, take \(A_{1j}\) (<code>piv</code>) and use it to
eliminate \(A_{i1}\) for all \(i\). This produces a matrix of the form

\begin{bmatrix}
a_{00} & a_{01} & a_{02} & \cdots & b_0    \\
0      & a_{11} & a_{12} & \cdots & b_1    \\
0      & a_{21} & a_{22} & \cdots & b_2    \\
\vdots & \vdots & \vdots & \vdots & \vdots \\
0      & a_{n1} & a_{n2} & \cdots & b_n
\end{bmatrix}

<p>
where row 0 is the pivot row. Now just put this sub-matrix in echelon
form:
</p>

\begin{bmatrix}
a_{11} & a_{12} & \cdots & b_1    \\
a_{21} & a_{22} & \cdots & b_2    \\
\vdots & \vdots & \vdots & \vdots \\
a_{n1} & a_{n2} & \cdots & b_n
\end{bmatrix}
</li>
</ol>

<p>
In Haskell:
</p>

<div class="org-src-container">

<pre class="src src-haskell">echelon :: Matrix -&gt; Matrix
echelon m
        -- 1
        | null m || null (head m) = m

        -- 2
        | all (==0) (map head m) = map (0:) (echelon (map tail m))

        -- 3
        | otherwise = piv : map (0:) (echelon rs')
          where rs' = map (adjustWith piv) (tail m)
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-10" class="outline-2">
<h2 id="sec-10"><span class="section-number-2">10</span> Corecursion</h2>
<div class="outline-text-2" id="text-10">
</div><div id="outline-container-sec-10-1" class="outline-3">
<h3 id="sec-10-1"><span class="section-number-3">10.1</span> Corecursive definitions</h3>
<div class="outline-text-3" id="text-10-1">
<div class="org-src-container">

<pre class="src src-haskell">ones = 1 : ones
</pre>
</div>

<p>
This looks like a recursive definition, but there is no base case.
</p>

<div class="org-src-container">

<pre class="src src-haskell">naturals = 0 : map (+1) naturals
</pre>
</div>

<p>
This looks like a recursive definition as well, but there is again no base
case. These definitions are <i>corecursive definitions</i>.
</p>

<p>
Corecursive definitions always yield infinite objects.
</p>

<p>
"GNU's Not Unix" is also a corecursive definition [like an L-system .. ?]
</p>

<div class="org-src-container">

<pre class="src src-haskell">odds = 1 : map (2+) odds
</pre>
</div>

<p>
Corecursive definitions can be more explicitly stated with <code>iterate</code>:
</p>

<div class="org-src-container">

<pre class="src src-haskell">:t iterate
</pre>
</div>

<pre class="example">
iterate :: (a -&gt; a) -&gt; a -&gt; [a]
</pre>

<div class="org-src-container">

<pre class="src src-haskell">theOnes  = iterate id 1
theNats  = iterate (+1) 0
theOdds  = iterate (+2) 1
theEvens = iterate (+2) 0
</pre>
</div>

<div class="org-src-container">

<pre class="src src-haskell">theNats1 = 0 : zipWith (+) ones theNats1
theFibs = 0 : 1 : zipWith (+) theFibs (tail theFibs)
</pre>
</div>

<p>
Corecursive Sieve of Eratosthenes:
</p>

<div class="org-src-container">

<pre class="src src-haskell">sieve :: [Integer] -&gt; [Integer]
sieve (n:xs) = n : sieve (filter (\ m -&gt; (rem m n) /= 0) xs)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-10-2" class="outline-3">
<h3 id="sec-10-2"><span class="section-number-3">10.2</span> Processes and labeled transition systems</h3>
<div class="outline-text-3" id="text-10-2">
<p>
Processes are composed of interacting procedures. e.g. clocks, vending
machines, operating systems, etc.
</p>

<dl class="org-dl">
<dt> labeled transition system </dt><dd>a system \((Q, A, T)\) which consists of a set
of <b>states</b> \(Q\), a set of <b>action labels</b> \(A\), and a ternary relation
\(T \subseteq Q \times A \times Q\), the <b>transition relation</b>.

<p>
If \((q, a, q') \in T\) we say \(q \overset{a}{\rightarrow} q'\).
</p>
</dd>
</dl>

<blockquote>
<p>
A simple way of modeling nondeterminism is by modeling as a process as a map
from a randomly generated list of integers to a stream of actions.
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-haskell">randomInts :: Int -&gt; Int -&gt; [Int]
randomInts bound seed = tail (randomRs (0, bound) (mkStdGen seed))
</pre>
</div>

<blockquote>
<p>
We define a process as a map from streams of integers to streams of action
labels. To start a process, create an appropriate random integer stream and
feed it to the process.
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-haskell">type Process = [Int] -&gt; [String]

start :: Process -&gt; Int -&gt; Int -&gt; [String]
start process bound seed = process (randomInts bound seed)

clock :: Process
clock (0:xs) = "tick"  : clock xs
clock (1:xs) = "crack" : []
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-11" class="outline-2">
<h2 id="sec-11"><span class="section-number-2">11</span> Finite and infinite sets</h2>
<div class="outline-text-2" id="text-11">
</div><div id="outline-container-sec-11-1" class="outline-3">
<h3 id="sec-11-1"><span class="section-number-3">11.1</span> Equipollence</h3>
<div class="outline-text-3" id="text-11-1">
<blockquote>
<p>
In order to check whether two finite sets have the same number of elements,
it is not necessary at all to count them. For, these numbers are the same
iff <i>there is a bijection between the two sets</i>.
</p>

<p>
Sometimes, it is much easier to construct a bijection than to count
elements. Imagine a large room full of people and chairs, and you want to
know whether there are as many people as there are chairs. In order to
answer this question, it suffices to ask everyone to sit down, and have a
look at the resulting situation.
</p>
</blockquote>

<dl class="org-dl">
<dt> equipollent </dt><dd>two sets \(A\) and \(B\) are equipollent if there is a
bijection from \(A\) to \(B\). Notated \(A \sim B\).
</dd>
</dl>
</div>
</div>
</div>
