---
title: Jon Gauthier's homepage
layout: default
---

<img alt="Me in Montreal in December 2015." src="/uploads/me-dec-2015.jpg"
style="float:right; width: 38.2%; margin:10px 0 10px 20px;" />

Hi, I'm **Jon Gauthier**. I'm a postdoctoral scholar working in the
[Chang Lab][34] at the [University of California, San Francisco][35]. I build
computational models of how people understand and produce language, and use
them to explain human behavior and brain activity, combining methods
from [artificial intelligence][9], [linguistics][26], [neuroscience][27],
and [philosophy][30].

I completed my Ph.D. in cognitive science at the [MIT][18]
[Department of Brain and Cognitive Sciences][17] in the [Computational
Psycholinguistics Laboratory][21]. You can find my full CV [here][36].

I had the good fortune to begin research at a young age, thanks to the
generosity and support of my advisors and academic community. I'm interested
in helping ambitious undergraduate students likewise break into the world of
academia. Please [get in touch](/contact/)!

[1]: http://stanford.edu
[2]: http://symsys.stanford.edu
[3]: http://nlp.stanford.edu
[4]: http://nlp.stanford.edu/courses/NAACL2013/
[5]: http://nlp.stanford.edu/manning/
[21]: http://cpl.mit.edu
[22]: http://cocosci.mit.edu
[23]: https://research.google.com/teams/brain/
[24]: http://www.cs.toronto.edu/~ilya/
[25]: https://research.google.com/pubs/OriolVinyals.html
[32]: https://sites.google.com/view/mit-bcs-philosophy/
[34]: https://changlab.ucsf.edu/
[35]: https://www.ucsf.edu/
[36]: {{site.url}}/uploads/resume.pdf

### Recent personal news

- I joined the [Chang Lab][34] in September 2023. Excited to develop new methods
  and designs for studying the neural representation of linguistic structure!
- We've just launched [LM Zoo][33], an open source repository of
state-of-the-art neural network language models.
- The [Open Philanthropy Project][29] has named me an [AI Fellow][28].
  We'll be collaborating to support the development of more interpretable,
  robust systems for language understanding, and the discussion of both short-
  and long-term potential risks of artificial intelligence.
- I joined the [MIT][18] [Department of Brain and Cognitive Sciences][17] in
  September 2017.
<!--- I joined [OpenAI][10] as a research intern in June 2016.-->

[9]: {{site.url}}/uploads/papers/acl2016.pdf
[10]: https://openai.com/
[11]: http://acl2016.org/
[12]: https://www.nyu.edu/projects/bowman/
[13]: https://deepmind.com/
[14]: https://nips.cc/
[15]: {{site.url}}/uploads/papers/nips-main2016.pdf
[16]: https://mainatnips.github.io/
[17]: https://bcs.mit.edu/
[18]: http://web.mit.edu/
[19]: http://stanford.edu/~lucy3/
[20]: http://acl2017.org/
[26]: {{site.url}}/uploads/papers/cogsci2018.pdf
[27]: {{site.url}}/uploads/papers/ccn2018.pdf
[28]: https://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/announcing-2018-ai-fellows
[29]: https://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence
[30]: {{site.url}}/2018/word-representations/
[31]: https://neuranna.wordpress.com/
[33]: https://cpllab.github.io/lm-zoo/

### Research

(Find me on [Google Scholar][7] for an up-to-date list.)

{% for paper in site.papers %}
{% capture local_url %}{{site.url}}/uploads/papers/{{paper.id}}.pdf{% endcapture %}
<div class="paper" id="paper-{{paper.id}}">
<a class="paper-title" href="{% if paper.url %}{{paper.url}}{% else %}{{local_url}}{% endif %}">{{paper.title}}</a>.
<div class="paper-byline">
<span class="paper-authors">{{paper.authors | replace: "Jon Gauthier", "<strong>Jon Gauthier</strong>"}}.</span>
<span class="paper-venue">{{paper.venue}}.</span>
</div>
{% if paper.brags %}
<div class="paper-brags">{{paper.brags}}</div>
{% endif %}
<div class="paper-links">
{% for link in paper.links %}
{% assign linkFirst = link.href | slice: 0 %}
{% if linkFirst == "/" %}
[<a href="{{site.url}}{{link.href}}">{{link.title}}</a>]
{% else %}
[<a href="{{link.href}}">{{link.title}}</a>]
{% endif %}
{% endfor %}
{% if paper.bibtex %}[<a class="bibtex-link" href="{{site.url}}/uploads/papers/{{paper.id}}.bib">bibtex</a>]{% endif %}
{% if paper.code %}[<a href="{{paper.code}}">code</a>]{% endif %}
{% if paper.url %}[<a href="{{local_url}}">local mirror</a>]{% endif %}
</div>
{% if paper.bibtex %}
<div class="paper-bibtex">
{% include {{paper.bibtex}} %}
</div>
{% endif %}
</div>
{% endfor %}

[7]: https://scholar.google.com/citations?user=n7Z2vI4AAAAJ

### Around the web

* [Twitter](https://twitter.com/j_gauthier)
* [Goodreads](http://www.goodreads.com/user/show/5092154-jon-gauthier)
* [Strava](https://www.strava.com/athletes/3380054)
* [GitHub](https://github.com/hans)

### Currently reading

<!-- Show static HTML/CSS as a placeholder in case js is not enabled - javascript include will override this if things work -->
<style type="text/css" media="screen">
#gr_custom_widget_1345940422 {
margin-top: 10px;
line-height: 24px;
}
#gr_custom_widget_1345940422 center {
display: none;
}
.gr_custom_header_1345940422 {
display: none;
border-bottom: 1px solid #CCC;
width: 100%;
margin: 5px 0 10px;
padding-bottom: 5px;
line-height: inherit;
text-align: center;
font-size: 120%
}
.gr_custom_each_container_1345940422 {
width: 100%;
clear: both;
margin-bottom: 15px;
overflow: auto;
}
.gr_custom_book_container_1345940422 {
/* customize your book covers here */
overflow: hidden;
float: left;
margin-right: 10px;
width: 50px;
}
.gr_custom_author_1345940422 {
/* customize your author names here */
font-size: 16px;
}
.gr_custom_tags_1345940422 {
/* customize your tags here */
font-size: 14px;
color: gray;
}
.gr_custom_rating_1345940422 {
/* customize your rating stars here */
display: none;
}
</style>

<div id="gr_custom_widget_1345940422">
<div class="gr_custom_container_1345940422">
<h2 class="gr_custom_header_1345940422">
<a href="http://www.goodreads.com/review/list/5092154-hans-engel?shelf=currently-reading&amp;utm_medium=api&amp;utm_source=custom_widget" style="text-decoration: none;">Currently reading</a>
</h2>
<div class="gr_custom_each_container_1345940422">
<div class="gr_custom_book_container_1345940422">
<a href="http://www.goodreads.com/review/show/298032756?utm_medium=api&amp;utm_source=custom_widget" title="The Information: A History, a Theory, a Flood"><img alt="The Information: A History, a Theory, a Flood" border="0" src="http://photo.goodreads.com/books/1328132938s/10728649.jpg" /></a>
</div>
<div class="gr_custom_title_1345940422">
<a href="http://www.goodreads.com/review/show/298032756?utm_medium=api&amp;utm_source=custom_widget">The Information: A History, a Theory, a Flood</a>
</div>
          <div class="gr_custom_author_1345940422">
            by <a href="http://www.goodreads.com/author/show/10401.James_Gleick">James Gleick</a>
          </div>
          <div class="gr_custom_tags_1345940422">
            tagged:
            mind-tickling and currently-reading
          </div>
      </div>
      <div class="gr_custom_each_container_1345940422">
          <div class="gr_custom_book_container_1345940422">
            <a href="http://www.goodreads.com/review/show/298034861?utm_medium=api&amp;utm_source=custom_widget" title="The Computational Beauty of Nature: Computer Explorations of Fractals, Chaos, Complex Systems, and Adaptation"><img alt="The Computational Beauty of Nature: Computer Explorations of Fractals, Chaos, Complex Systems, and Adaptation" border="0" src="http://photo.goodreads.com/books/1173120203s/248544.jpg" /></a>
          </div>
          <div class="gr_custom_title_1345940422">
            <a href="http://www.goodreads.com/review/show/298034861?utm_medium=api&amp;utm_source=custom_widget">The Computational Beauty of Nature: Computer Explorations of Fractals, Chaos, Complex Systems, and Adaptation</a>
          </div>
          <div class="gr_custom_author_1345940422">
            by <a href="http://www.goodreads.com/author/show/145268.Gary_William_Flake">Gary William Flake</a>
          </div>
          <div class="gr_custom_review_1345940422">

          </div>
          <div class="gr_custom_tags_1345940422">
            tagged:
            mind-tickling, currently-reading, and programming
          </div>
      </div>
      <div class="gr_custom_each_container_1345940422">
          <div class="gr_custom_book_container_1345940422">
            <a href="http://www.goodreads.com/review/show/298025763?utm_medium=api&amp;utm_source=custom_widget" title="The Haskell Road to Logic, Maths and Programming"><img alt="The Haskell Road to Logic, Maths and Programming" border="0" src="http://photo.goodreads.com/books/1175062093s/475675.jpg" /></a>
          </div>
          <div class="gr_custom_title_1345940422">
            <a href="http://www.goodreads.com/review/show/298025763?utm_medium=api&amp;utm_source=custom_widget">The Haskell Road to Logic, Maths and Programming</a>
          </div>
          <div class="gr_custom_author_1345940422">
            by <a href="http://www.goodreads.com/author/show/266052.Kees_Doets">Kees Doets</a>
          </div>
          <div class="gr_custom_review_1345940422">

          </div>
          <div class="gr_custom_tags_1345940422">
            tagged:
            programming, haskell, functional-programming, math, mind-tickling, ...
          </div>
      </div>
      <div class="gr_custom_each_container_1345940422">
          <div class="gr_custom_book_container_1345940422">
            <a href="http://www.goodreads.com/review/show/390330254?utm_medium=api&amp;utm_source=custom_widget" title="Learning J"><img alt="Learning J" border="0" src="http://www.goodreads.com/assets/nocover/60x80.png" /></a>
          </div>
          <div class="gr_custom_title_1345940422">
            <a href="http://www.goodreads.com/review/show/390330254?utm_medium=api&amp;utm_source=custom_widget">Learning J</a>
          </div>
          <div class="gr_custom_author_1345940422">
            by <a href="http://www.goodreads.com/author/show/1247847.Roger_Stokes">Roger Stokes</a>
          </div>
          <div class="gr_custom_review_1345940422">

          </div>
          <div class="gr_custom_tags_1345940422">
            tagged:
            currently-reading and programming
          </div>
      </div>
      <div class="gr_custom_each_container_1345940422">
          <div class="gr_custom_book_container_1345940422">
            <a href="http://www.goodreads.com/review/show/383998506?utm_medium=api&amp;utm_source=custom_widget" title="On LISP: Advanced Techniques for Common LISP"><img alt="On LISP: Advanced Techniques for Common LISP" border="0" src="http://photo.goodreads.com/books/1266457564s/41803.jpg" /></a>
          </div>
          <div class="gr_custom_title_1345940422">
            <a href="http://www.goodreads.com/review/show/383998506?utm_medium=api&amp;utm_source=custom_widget">On LISP: Advanced Techniques for Common LISP</a>
          </div>
          <div class="gr_custom_author_1345940422">
            by <a href="http://www.goodreads.com/author/show/23551.Paul_Graham">Paul Graham</a>
          </div>
          <div class="gr_custom_review_1345940422">

          </div>
          <div class="gr_custom_tags_1345940422">
            tagged:
            currently-reading, lisp, and programming
          </div>
      </div>
  <br style="clear: both"/>
  </div>

      </div>
<script src="http://www.goodreads.com/review/custom_widget/5092154.Currently%20reading?cover_position=left&cover_size=small&num_books=5&order=d&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=1&show_tags=1&show_title=1&sort=date_updated&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=1&widget_id=1345940422&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charset="utf-8"></script>
