---
layout: post
title: On Metacademy and knowledge graphs
excerpt: Modeling learning as a graph traversal
main: true
---

If there's one complaint I have about starting work as a researcher, it's about
information glut.

Sure---the work is scintillating and intellectually stimulating. But it is easy
to be overwhelmed by the sheer volume of knowledge lying ahead, and struggle in
the task of organizing your own plan for learning. While the acronyms and
extended noun phrases that your colleagues drop all sound darn interesting, it's
often unclear how to best acquire all the requisite knowledge you're lacking.

Enter [Metacademy][1], an open-source project for creating
["dependency graphs of knowledge."][2] The site consists of an enormous list of
*concepts,* all linked together in a single dependency graph. Each concept
consists of a list of prerequisite concepts and a collection of resources for
learning the concept itself. A picture is worth many words of explanation:

<a
href="http://www.metacademy.org/graphs/concepts/sequential_monte_carlo#focus=sequential_monte_carlo&mode=explore">
<img alt="Metacademy concept graph" src="/uploads/metacademy.png" /></a>

This is an exciting way to think about knowledge acquisition, I think. The graph
itself reminds me of "skill trees" in MMORPGs or of the "technology tree" in the
game [Civilization][3]:

<a href="/uploads/metacademy-civilization.png"><img alt="Civilization
technology tree" src="/uploads/metacademy-civilization.png"/></a>

With this kind of ontology defined, we can now think of learning as a slow and
deliberate traversal of a massive graph. I've been browsing and tracking my
learning on Metacademy for some time now, and I think it's a useful way to
organize my knowledge.

### The future

This is just the start for Metacademy. While the site content currently centers
around machine learning and artificial intelligence topics,[^1] this won't be
the case for much longer. The plan from the start has been to
[expand to cover all sorts of knowledge][2], from music to mathematics.

In hopes of expanding in this way, the Metacademy founders have just begun a
private beta of a visual knowledge graph editor. This is good news for getting
non-technical visitors to contribute to the graphs for their own fields.

Some other assorted opportunities that strike me as interesting:

- **Gamification of learning.** Provide personal and social incentives (à la
  [Duolingo][4]) for users to continue their walk through the knowledge graph.
  Imagine "leveling up" after marking a certain concept as known, and having a
  clear view of what your friends and colleagues are learning at the same time.
- **Inter-disciplinary links.** Visualize exactly how machine learning overlaps
  with natural language processing, or identify the mathematical concepts most
  crucial to understanding core artificial intelligence ideas.
- **Community-curated resources.** With all the content open and free, this site
  has the chance to raise a Wikipedia-style community, where motivated
  volunteers work to collect the best resources for each concept and ensure the
  entire graph remains well-connected.

I'm planning to extend the Metacademy database and increase its coverage in
natural language processing (and perhaps linguistics) topics. It's exciting to
think about the opportunities this site will reveal for the thousands of
autodidacts---students and workers alike---who wish to continue learning.

[^1]: Conveniently for me, the exact topics I should be learning!

[1]: http://metacademy.org
[2]: http://www.metacademy.org/about
[3]: http://en.wikipedia.org/wiki/Civilization_(video_game)
[4]: http://duolingo.com
