---
layout: note
title: Book notes&#58; Computational Beauty of Nature
date: 04/11/2012 20:32
from_org: true
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">Chaos</a>
<ul>
<li><a href="#sec-1-1">Nonlinear dynamics in simple maps</a>
<ul>
<li><a href="#sec-1-1-1">The shadowing lemma</a></li>
<li><a href="#sec-1-1-2">Characteristics of chaos</a></li>
</ul>
</li>
<li><a href="#sec-1-2">Strange attractors</a>
<ul>
<li><a href="#sec-1-2-1">The Hénon attractor</a></li>
<li><a href="#sec-1-2-2">The Lorenz attractor</a></li>
<li><a href="#sec-1-2-3">The Mackey-Glass system</a></li>
</ul>
</li>
<li><a href="#sec-1-3">Producer-consumer dynamics</a>
<ul>
<li><a href="#sec-1-3-1">Producer-consumer interactions</a></li>
<li><a href="#sec-1-3-2">Predator-prey systems</a></li>
<li><a href="#sec-1-3-3">Generalized Lotka-Volterra systems</a></li>
<li><a href="#sec-1-3-4">Individual-based ecology</a></li>
<li><a href="#sec-1-3-5">Unifying themes</a></li>
</ul>
</li>
<li><a href="#sec-1-4">Controlling chaos</a>
<ul>
<li><a href="#sec-1-4-1">Eigenvectors, eigenvalues and basis</a></li>
</ul>
</li>
<li><a href="#sec-1-5">Postscript: chaos</a></li>
</ul>
</li>
<li><a href="#sec-2">Complex systems</a>
<ul>
<li><a href="#sec-2-1">Cellular automata</a></li>
</ul>
</li>
<li><a href="#sec-3">Natural and analog computation</a></li>
<li><a href="#sec-4">Adaptation</a>
<ul>
<li><a href="#sec-4-1">Genetics and evolution</a>
<ul>
<li><a href="#sec-4-1-1">Biological adaptation</a></li>
<li><a href="#sec-4-1-2">Heredity as motivation for simulated evolution</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Chaos</h2>
<div class="outline-text-2" id="text-1">
</div><div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Nonlinear dynamics in simple maps</h3>
<div class="outline-text-3" id="text-1-1">
</div><div id="outline-container-sec-1-1-1" class="outline-4">
<h4 id="sec-1-1-1"><span class="section-number-4">1.1.1</span> The shadowing lemma</h4>
<div class="outline-text-4" id="text-1-1-1">
<blockquote>
<p>
Since computers can represent only digital quantities and approximate real
numbers with finite precision, any computer simulation of a chaotic system is
doomed to degrade increasingly the farther into the future one tries to
predict.
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-1-1-2" class="outline-4">
<h4 id="sec-1-1-2"><span class="section-number-4">1.1.2</span> Characteristics of chaos</h4>
<div class="outline-text-4" id="text-1-1-2">
</div><ol class="org-ol"><li>Deterministic<br  /><div class="outline-text-5" id="text-1-1-2-1">
<blockquote>
<p>
Chaotic systems are completely deterministic and not random. Given a
previous history of a chaotic system, the future of the system will be
completely determined; however, this does not mean that we can compute what
the future looks like.
</p>
</blockquote>

<p>
The change in a chaotic system is always structured, however complex the
outcome is.
</p>
</div>
</li>
<li>Sensitive<br  /><div class="outline-text-5" id="text-1-1-2-2">
<blockquote>
<p>
Any perturbation, no matter how minute, will forever alter the future of a
chaotic system.
</p>
</blockquote>

<p>
"Butterfly effect."
</p>
</div>
</li>
<li>Ergodic<br  /><div class="outline-text-5" id="text-1-1-2-3">
<dl class="org-dl">
<dt> ergodic system </dt><dd>a system which always returns to the local region of a
previous point in its trajectory.

<p>
Weather is an ergodic system: it is very likely that
someday in the future you will experience weather
almost&#x2013;but not exactly&#x2013;identical to today's weather.
</p>
</dd>
</dl>
</div>
</li>
<li>Embedded<br  /><div class="outline-text-5" id="text-1-1-2-4">
<blockquote>
<p>
Chaotic attractors are embedded with an infinite number of unstable periodic
orbits.
</p>
</blockquote>

<p>
Every valid point composes an unstable attractor which launches the system's
trajectory into a limit cycle with an infinite amount of periods.
</p>
</div>
</li></ol>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> Strange attractors</h3>
<div class="outline-text-3" id="text-1-2">
<p>
Now detailing multidimensional dynamical systems. Previously we had only one
dimension in our systems (\(x_t\), which varied based on a parameter \(t\)).
</p>
</div>

<div id="outline-container-sec-1-2-1" class="outline-4">
<h4 id="sec-1-2-1"><span class="section-number-4">1.2.1</span> The Hénon attractor</h4>
<div class="outline-text-4" id="text-1-2-1">
\begin{eqnarray*}
  x_{t+1} &=& a-x^2_t+by_t \\
  y_{t+1} &=& x_t
\end{eqnarray*}

<p>
The space plot of \(x_t\) vs. \(y_t\) is self-similar at multiple zoom levels.
</p>

<blockquote>
<p>
In theory, we could zoom into the attractor forever, never finding an end to
the detail. This fractal nature is the essence of the "strangeness" of a
strange attractor.
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-1-2-2" class="outline-4">
<h4 id="sec-1-2-2"><span class="section-number-4">1.2.2</span> The Lorenz attractor</h4>
<div class="outline-text-4" id="text-1-2-2">

<div class="figure">
<p><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lorenz.png/200px-Lorenz.png" alt="200px-Lorenz.png" />
</p>
<p><span class="figure-number">Figure 1:</span> A plot of a solution for &rho; = 28, &sigma; = 10, and &beta; = 8/3</p>
</div>

<p>
A simplified model of atmospheric convention. Let \(x\) represent convective
motion, \(y\) temperature difference, \(z\) distortion of the temperature
profile.
</p>

\begin{eqnarray*}
  \dfrac{dx}{dt} &=& ay-ax \\
  \dfrac{dy}{dt} &=& bx-y-zx \\
  \dfrac{dz}{dt} &=& xy-cz
\end{eqnarray*}
</div>
</div>
<div id="outline-container-sec-1-2-3" class="outline-4">
<h4 id="sec-1-2-3"><span class="section-number-4">1.2.3</span> The Mackey-Glass system</h4>
<div class="outline-text-4" id="text-1-2-3">
<p>
Has just one time-varying variable, but is more complex than both the Hénon
and Lorenz systems. Originally used as a model of white blood cell
production, where \(a\) and \(b\) are typically fixed at 0.2 and 0.1, and \(\tau\) is
a special parameter that we can use to alter how pathological the resulting
time series is.
</p>

<p>
\(\dfrac{dx}{dt} = \dfrac{ax(t-\tau)}{1+x^{10}(t-\tau)}-bx(t)\)
</p>

<p>
The \(x(t-\tau)\) terms signify that the \(x\) value from \(\tau\) time steps away
should be inserted. This is what makes the system so chaotic, especially for
large \(\tau\). Also because of this property, given a certain state there exist
multiple histories which could have generated that state (unlike the other
strange attractor systems detailed).
</p>
</div>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> Producer-consumer dynamics</h3>
<div class="outline-text-3" id="text-1-3">
<blockquote>
<p>
Nature itself, even in chaos, cannot proceed except in an orderly and regular
manner.
</p>

<p>
Immanuel Kant
</p>
</blockquote>
</div>

<div id="outline-container-sec-1-3-1" class="outline-4">
<h4 id="sec-1-3-1"><span class="section-number-4">1.3.1</span> Producer-consumer interactions</h4>
<div class="outline-text-4" id="text-1-3-1">
<blockquote>
<p>
Living things, almost by definition, must be capable of an endless variety
of behavior in order to adapt to an infinite number of scenarios.
</p>
</blockquote>

<blockquote>
<p>
Stabilization is easy when the state of an environment is mostly independent
of the state of an individual. If you couple the two states, you get
feedback, which makes each state recursively dependent on the other.
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-1-3-2" class="outline-4">
<h4 id="sec-1-3-2"><span class="section-number-4">1.3.2</span> Predator-prey systems</h4>
<div class="outline-text-4" id="text-1-3-2">
<p>
Simplest type of system: one predator and one prey.
</p>

<dl class="org-dl">
<dt> Lotka-Volterra system </dt><dd>two differential equations which model a
predator-prey system with one predator species and one prey species

<p>
\(\dfrac{dF}{dt} = F(a - bS)\) and \(\dfrac{dS}{dt} = S(cF - d)\), where
\(F\) represents the prey population and \(S\) represents the shark
population.
</p>

<p>
Notice the populations are coupled: each equation contains both an \(F\)
and an \(S\) term.
</p>

<p>
\(a\), \(b\), \(c\) and \(d\) are all understood to be \(\ge 0\).
</p>

<p>
\(a\) represents a reproduction rate of the prey. By the original model,
if there are no predators (\(bS = 0\)), then the prey population grows
exponentially.
</p>

<p>
\(b\) represents a predation rate. From the model, \(FS\) represents the
chance that a predator will encounter a prey.
</p>

<p>
\(c\) can be thought of as the amount of "energy" that a predator gains
after successfully preying on the prey. If \(c\) is large, then from the
original model, \(cFS\) is large and the predator population will
increase quickly.
</p>

<p>
\(d\) represents the death rate of the predator.
</p>

<p>
For any \(a\), \(b\), \(c\) and \(d\) parameters, this system has a fixed point
at \(F = d/c\) and \(S = a/b\), because \(dF/dt\) and \(dS/dt\) are zero at
these values. These fixed point values are interesting to analyze. To
increase the number of prey, you would not add prey but rather remove
predators. (Adding prey would only increase the number of predators and
keep the amount of prey about the same after some time.)
</p>

<p>
The system yields an infinite number of limit cycles which orbit around
this fixed point.
</p>
</dd>
</dl>
</div>
</div>
<div id="outline-container-sec-1-3-3" class="outline-4">
<h4 id="sec-1-3-3"><span class="section-number-4">1.3.3</span> Generalized Lotka-Volterra systems</h4>
<div class="outline-text-4" id="text-1-3-3">
<blockquote>
<p>
Continuous chaos can exist only in systems of three or more dimensions.
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-1-3-4" class="outline-4">
<h4 id="sec-1-3-4"><span class="section-number-4">1.3.4</span> Individual-based ecology</h4>
<div class="outline-text-4" id="text-1-3-4">
<p>
The Lotka-Volterra model is very broad and only takes into account the state
of a species as a whole.
</p>

<p>
Individual-based systems are difficult to simulate, because there are so
many different features to track for each organism in a grid.
</p>

<p>
Creepy / interesting: this enormously complex system produces a resultant
graph reminiscent of the Lotka-Volterra system. Simple systems like
Lotka-Volterra produce more complex motion, and the complex individual-based
system breaks down into more simple motion.
</p>
</div>
</div>
<div id="outline-container-sec-1-3-5" class="outline-4">
<h4 id="sec-1-3-5"><span class="section-number-4">1.3.5</span> Unifying themes</h4>
<div class="outline-text-4" id="text-1-3-5">
<blockquote>
<p>
Chaos is not randomness but is, in fact, order masquerading as disorder.
</p>
</blockquote>
</div>
</div>
</div>
<div id="outline-container-sec-1-4" class="outline-3">
<h3 id="sec-1-4"><span class="section-number-3">1.4</span> Controlling chaos</h3>
<div class="outline-text-3" id="text-1-4">
<p>
Implications of being able to control chaos:
</p>

<ul class="org-ul">
<li>Smart pacemakers
</li>
<li>Epileptic seizure inhibitors
</li>
<li>Intelligent control strategies for adjusting the global economy
</li>
<li>Weather control?
</li>
</ul>

<p>
Tips for controlling chaos:
</p>

<ul class="org-ul">
<li><b>Bang for the buck</b>: We can make a minute adjustment in a system that leads
to huge changes in behavior later on
</li>
<li><b>Preselected goals</b>: Need to move toward fixed-point or limit-cycle
behavior
</li>
<li><b>What goes around comes around</b>: By tapping into the ergodic nature of a
system, we can get as close to the goal as we want with enough patience
</li>

<li id="Jacobian matrix">the matrix of all first-oredr partial derivatives of a
function with respect to another value.

<blockquote>
<p>
The Jacobian matrix of a vector function tells us how each result of the
vector function slopes relative to varying each argument.
</p>
</blockquote>
</li>
</ul>
</div>

<div id="outline-container-sec-1-4-1" class="outline-4">
<h4 id="sec-1-4-1"><span class="section-number-4">1.4.1</span> Eigenvectors, eigenvalues and basis</h4>
<div class="outline-text-4" id="text-1-4-1">
<p>
For some matrices there are \(n\) special vectors, \(e_1, \dots e_n\) that have the
property \(Ae_i = \lambda_i e_i\). \(e_i\) is the $i$th <i>eigenvector</i> of \(A\) and \(\lambda_i\) is
the $i$th <i>eigenvalue</i> of \(A\).
</p>

<p>
Eigenvectors are unit vectors by convention. Eigenvalues are scalars.
</p>

<dl class="org-dl">
<dt> eigenvector </dt><dd>a vector related to some matrix \(A\) for which \(Ax\) yields a
scaled version of itself (i.e., a vector which is parallel
to itself). The scale factor is known as the <b>eigenvalue</b>.

<p>
Mathematically, an eigenvector \(e\) of a matrix \(A\) exhibits
the property
</p>

<p>
$$Ae = \lambda e$$
</p>

<p>
where \(\lambda\) is the vector's eigenvalue.
</p>

<p>
Understood to be a unit vector. Evidently, any vector in
the direction of a unit eigenvector is also an eigenvector.
</p>

<p>
Eigenvectors form a <b>basis</b> in n-dimensional space. Any
\(n\)-dimensional vector \(x\) can be written as a linear
combination of the \(n\) \(n\)-dimensional eigenvectors:
</p>

<p>
$$x = a_1 e_i + \cdots + a_n e_n$$
</p>

<p>
Matrix-vector multiplication can become much easier with
this property:
</p>

\begin{eqnarray*}
Ax & = & A(a_1 e_i + \cdots a_n e_n) \\
   & = & a_1 Ae_1 + \cdots + a_n Ae_n \\
   & = & a_1 \lambda_1 e_1 + \cdots + a_n \lambda_n e_n
\end{eqnarray*}
</dd>

<dt> eigenvalue </dt><dd>the factor by which an eigenvector is scaled after matrix
multiplication. See <b>eigenvector</b>.
</dd>
</dl>

<p>
Good example: in Earth's rotation, the poles would be eigenvectors of the
rotation matrix and their eigenvalues would be 1 (they don't change length
after a rotation occurs). Stolen from Strang's <i>Linear Algebra and Its
Applications</i>.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-1-5" class="outline-3">
<h3 id="sec-1-5"><span class="section-number-3">1.5</span> Postscript: chaos</h3>
</div>
</div>

<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Complex systems</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> Cellular automata</h3>
<div class="outline-text-3" id="text-2-1">
<blockquote>
<p>
[Chris] Langton has compared these different regions &#x2026; : Fixed points are
like crystals in that they are for the most part static and orderly. Chaotic
dynamics are similar to gases, which can be described only statistically.
Periodic behavior is similar to a non-crystal solid, and complexity is like
a liquid that is close to both the solid and gaseous states. In this way, we
can once again view computation as existing on the edge of chaos and
simplicity.
</p>
</blockquote>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Natural and analog computation</h2>
<div class="outline-text-2" id="text-3">
<blockquote>
<p>
Recall that the [soap] bubble "wanted" to minimize its surface area [while
maintaining a constant volume, and a sphere did this job best]. Surface area
is not a property of soap-water molecules, but of an entire soap film. Yet
each molecule in a soap solution interacts only with a relatively small number
of neighboring molecules. Hence, a global property &#x2013; surface area &#x2013; is
minimized by only local interactions. Similarly, global properties such as the
collection of neural activations that compose a distributed memory or the
solution to an optimization problem may emerge from only local interactions.
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> Adaptation</h2>
<div class="outline-text-2" id="text-4">
</div><div id="outline-container-sec-4-1" class="outline-3">
<h3 id="sec-4-1"><span class="section-number-3">4.1</span> Genetics and evolution</h3>
<div class="outline-text-3" id="text-4-1">
</div><div id="outline-container-sec-4-1-1" class="outline-4">
<h4 id="sec-4-1-1"><span class="section-number-4">4.1.1</span> Biological adaptation</h4>
<div class="outline-text-4" id="text-4-1-1">
<p>
adaptation = variation + heredity + selection
</p>

<blockquote>
<p>
As Richard Dawkins is fond of saying, you and I can proudly make the claim
that every one of our ancestors - without exception - survived long enough
to reproduce. This may be an obvious statement, but if we consider the
number of organisms that did not survive long enough to reproduce, and
consider the exponential number of descendants that could have been, then we
can be seen as members of a truly exclusive club.
</p>
</blockquote>

<blockquote>
<p>
What really counts in natural selection is an organism's ability to
reproduce, and nothing else.
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-4-1-2" class="outline-4">
<h4 id="sec-4-1-2"><span class="section-number-4">4.1.2</span> Heredity as motivation for simulated evolution</h4>
</div>
</div>
</div>
