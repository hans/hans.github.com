---
layout: post
title: Life update
image: /uploads/2016/point-reyes.jpg
image_alt: Pacific Coast Highway on the way to Point Reyes. 8 March 2015
excerpt: Coming back to blogging after another long hiatus
main: true
---

Hello world! I'm coming back up to the surface after over a year of silence on
this blog. As always, I have things about technology and my work to rant
about... but I'd like to first make a (public) review of what's happened in all
this time. This will be a smorgasbord of professional and personal happenings,
probably too strangely interwoven to be of interest to anyone in particular. I
feel nevertheless I should get some words out on this blog, and update the,
ahem, public record.

Just about the time of my last post in **March 2015**, the Stanford NLP Group
went on its first lab retreat in a long time to [Point Reyes][1]. The lead
picture of this post shows a beautiful section of the Pacific Coast Highway I
captured on the way north.

At this lab retreat I spoke with [Sam Bowman][2] and [Kelvin Gu][3] about
end-to-end systems for deep learning for NLP. Inspired by a recent debate
between Andrew Ng and Christopher Manning, I tried to argue an aggressive
(though not original) thesis about our long-term approach to language
understanding systems. My claim, which now sounds rather stale in 2016, was
that we should drop tasks like parsing and part-of-speech tagging. Natural
language processing should solve language understanding tasks that non-experts
actually care about. In short, we should focus on "end-to-end" systems where
the output is something of interest to real people.

The counter to that argument (then and still now) is that intermediate
representations like constituency parses *actually work* to produce useful
results downstream. They help us practically reason about extremely complicated
linguistic patterns. I can point at a parse or a part-of-speech tag and
recognize that it tells me something meaningful about a piece of language.
Building deep-learning systems that learn to model such complexity, while
theoretically feasible, is pretty darn hard.

But "pretty darn hard" had never stopped any of us before. We started to discuss
ways to simplify the end-to-end learning problem by adding structure (less
constraining than the structure of a parse) to the computation problem. That
discussion was the basis for our recently published [SPINN model][4]. More on
that later.

The Stanford Symbolic Systems Program is often described as the study of "minds
and machines." My spring 2015 quarter at Stanford turned out to be rather
mind-heavy in this sense. I took a seminar on theoretical neuroscience with
[Surya Ganguli][5] which opened my eyes to the deep connections between modern
machine learning and what we know so far about systems neuroscience. A class by
[Anthony Wagner][6] introduced me to theories of human learning, memory, and
attention.  The synergies between these theories and popular models in neural
networks are impressive, but there is still plenty of room for more cross-talk.
I am now convinced that we do have much more to learn from cognitive
neuroscience.[^1]

{% include img.html datetime="August 2015" alt="A summer at Google. I did some work, too &mdash; not pictured here." url="https://lh3.googleusercontent.com/hWUZzjbHILPjDVnt8KndEyDjSs337qEq4H177kLnwQCdkeGZk7WX9-oiw-tKHf6EPGncgAyCnRduTP4bSqpls9-g42C5tr0DafESa-Xg1hxPUOn4f2nWjQwDxYOjTGP2rApeMXKByzhNWYDcWumTSPXckjzzczrRmRr297Tyhvod35wi-BuEOSj8mn4oZxPk8LIGKLd94vlVJYRTlIZz95nkRgjt06cHSx3uRxJajq90b0hVCKPwJVW1FySHH5MdhPU4Dq5vQQ3m-hZLHHUnoHxPC-4-mJV93wuinci5z9wcRLgs3SJBd064g3pVbPKAF6RMO4JzZ5ZpauV6vwdox-RAyIuX-pdgLxB63f3x7MsPF0Pq7AJ2-q9lkgBjtBg_NwHGH13nRM-uLXOI4cLQY7a_iIHMBX3udWlO8gntmB-hXpdSgNPJB2IHJ7jaw80CriUC7khCngNzdQvIjLb7yPSki_bRu3ZenMO0JBTDcjvPwuhF-7j3oRyXOXfsZJDkErrWENwFku8xZEevcKwN0ngK-3v1f42NLDRu0tcjHZWtREVc3FoLLSBP6Y5yGZoKS6HfaZtYZy0m5jQUlzpmIkt1sUA_XMs=w693-h923-no" %}

I spent my summer as a research intern at [Google Brain][7], co-advised by [Ilya
Sutskever][8] and [Oriol Vinyals][9].[^2] The Brain team was an outstanding place
for young aspiring researchers like myself. Around 15 interns came to work with
the motivated and creative members of the team, using some seriously beefy
Google infrastructure to attack challenging problems in machine learning.

As a first non-work-related note, it's certainly worth mentioning that I
discovered a new road biking obsession that summer. I joined up with a team of
Googlers riding [Waves to Wine][10] and trained with them for the whole summer.
I learned to climb mountains and speed down descents, leveling up from
newbie-cyclist to slightly-less-newbie cyclist.

{% include img.html datetime="October 2015 / July 2015" alt="Yay, bikes!" url="https://lh3.googleusercontent.com/xtpDXoPy1-OP0V950aMG_A82PgcArAEjuu8UDoPCVfFqTgcbx_eLliFOv-NscV0HCqu7cejZhBzaSNBGk3cUgwYC5HWG7dGgiuD8jAakD7rMSg2hl9F7kmbTMh9oHd_SPce0FGzb1MDjGw-Y1Wj_yzOIVe7KjZ2_GF9gXI7W450uAVxRg6PQ3tv0KnG53h-EzIXw_q9lmNyaaoXBgNRWotX1IXkqDIhUCYVDGdJOAd6mkF5o-TCXysgJZjIRkw7yytMu_PIoaqY7llAGiULhhC7TvDz3rxPQEpRvPoJI7vOvJcYm1YXKi51eLyKykED9NjeLfnBCztGgNnMc54wL1eHaJJayWjQ82kohfFW2COGvepgcs6pCFAPhqh9uW0BhjYvmCMAPxJic13zrTrd6SWpdULihZbpfQgkbdlxRZMvnoRXci7KBAJWKzbfojExnrV9CrQjow497MsQkE5LFzUUu3pF97fnh48VJ8fe0ofKn2UVO5KiZmhmQr2UZmmjaksjdpOemNMX92gBXbRY8zea4piE4J846JpiKK86AS1TF4azRJ2gZqWYjVZc1je1h0X1ALW5hIRgJo7bumUDpn3260n3VPcs=w1231-h923-no" %}

Cycling was a great release for me. While I loved working on the Brain team, I
found the work environment on the Google campus rather stifling. It's truly a
paradise in Mountain View, for better and for worse. With a road bike I was able
to escape that sprawling land of perfection and explore everywhere from [China
Camp in the North Bay][11] to [Santa Cruz on the opposite end][12].

I kept biking when I got back to Stanford in the fall. It's become a reliable
way for me to escape the messy, mathy world of artificial intelligence.  The
Stanford cycling community is very supportive of motivated beginners, and I was
able to level up again with some very impressive skilled riders.

{% include img.html datetime="January 2016" alt="A fraction of the Stanford group on <a href=\"https://www.strava.com/activities/471935405\">a ride in Southern California</a>." url="https://lh3.googleusercontent.com/pHIAk3SrdgV-ZqG0V_doSSpVcGWDrVAvT6CdxN4jQ9fJX2e-O2Bbzik_26jc0OG7u1qz2WBSkjIElInzWLyE31gEyLpIP95iNVCAmGAJpO6ltB_vz72L1B7AmM4_VaDRf9B9SKQXplCQSlCwaWrrwRhOXWZuYzXvtSh_PtsnYZQVaBIbBNwn4xOFaOuMEA7LRa3Z9TL-HkcHD5UQ-EguBh6ZQXkX3HGe8sB2QSRmwrvXb5QIqUK3qqyCHELspdG47meM-EtWkxFXy_UUMDjiYzn3zrsgEF4K_R2cl4R1QR3FqJixsYz9Q8KBYKLXCTKV2Btj4z4zVS77dBwVGGVyUPVdBKYoTbUi_p-uC0byA7z_CCnE8oUQ31dLVfSz0Wa3l24PpI85Zx0TbSsKsW5wwGs-Ag_7u1--jTEMN3ouWEslVL6mXiP_qztYOCO2FebInjNH7LscP7tMhpa2XpZaItd0MTi-jvBamgPnNkRHnJg6VyVmo4K9gxq9Fm7dhhVHlFxhg8vjAAdtuU9rGu3mr6XziJefoDD1RD3A6JLwFyFJ2DCE4Z8IEX4KfKCD-3LTluO3xcSVYUAX8mQNsWGvb6J3qDdN40o=w1231-h923-no" %}

In the fall, [Sam][2] and I started working seriously on what would later be
called SPINN (the **S**tack-augmented **P**arser-**I**nterpreter **N**eural
**N**etwork). The idea began as a very simple one --- we wanted to exploit a
**stack** as a structured memory model for end-to-end deep learning for NLP
tasks, possibly using existing linguistic data to guide exactly how the stack
was used. We saw this approach[^3] as a first step toward a totally parse-free,
fully-differentiable end-to-end system.

We designed a model that would follow a shift-reduce parse sequence (generated
from a gold constituency parse) and build vector representations of the parse
nodes along the way. At some point in front of a whiteboard, Sam realized that
this model computed exactly the same function as a recursive neural network.[^4]
That was when we knew we were onto something interesting. Sam ran some
preliminary experiments on toy data and the results suggested we should move
forward.

Near the end of the year, Abhinav Rastogi and Raghav Gupta, two masters
students, joined us on the project. With double the manpower, we charged ahead
and sicced various evolved forms of the model on Sam's baby, the [Stanford
Natural Language Inference dataset][14].

We wrote the whole thing in Theano, and ended up having some serious problems
with training runtime performance. Months of toil in code optimization,
Theano-hacking, and writing CUDA code taught us a good lesson: if you're doing
anything remotely unusual in terms of neural network structure, you probably
should ditch abstractions like Theano and work down at the layer of the metal.

{% include img.html datetime="December 2015" alt="Keenon Werling and I in Montréal during NIPS 2015." url="https://lh3.googleusercontent.com/7fy5x8CICXIF9d8NruMbOuiNADOdlKisS3PRzsJdCtzDPcLwVuHSg9GKXDETMi4dGHLUuIY53zuf-XWBpO3FALzQCfrmX57EQgpyI0EBjZos6XAl4l0xCzzzffUCmmie6ot_pNR3D6i8WHHZTRekAMAxT_eT4xT0DCXxQOPGf1Yh4W1VrIaw7lWvzM4UHOMEb06D-UMFHAsHnASfRDe5q2JTtCcryAStDvHjl-BndqlMN7w3oNo4o-eCmVnA5-YmUAZ2oQH0-y9GtjQNgjv24tBo7p36DPQjV5Dq42BmMMqR_gcu0MFRtwCthFcblrie4yKdznRplXRbqWHyh4dd9MzbMvg0kq-1wWeke3SmtMAaS_0tX5T5xKaD1CdlLnk-tSMCEc2Z_svdqOlgWcPu1MQBCJHvz5PfAd38u-w1lby0LThDrrUjJd0Jh-mnMJP8hg3MdfEjm9eDTyIKeGUFB_vRylIOVrhmcPd-tq3eBtsBJBHmjeRAlVtjxt0EGk3fHp8WJZEque7PTWAixAPqT76DHYMd9oVqf--OjA9nGF-zsa_Daswt1i7Ot_U07B8UHT0jJL3g_4bZBtktlFeZfg64GmF2G8U=w1236-h927-no" %}

I escaped Stanford for a bit in the winter to attend NIPS 2015. This was my
my first machine learning conference, and I really enjoyed socializing and
participating in casual brain-storm sessions with people from across the world.
The conference itself was pretty exhausting --- there were way, way too many
people, and we all had to squeeze into a single gigantic conference room for a
single-track oral presentation schedule. In any case, it was nice to slip out of
California for a while and revive my seriously broken French in Montréal.

After a comfortable holiday break at home with the family, I returned to the
bike heaven / ridiculous economic bubble / home of an artificial intelligence
renaissance that is the San Francisco Bay Area. I made a big life decision that
had been sitting around in the queue for a while and **became a vegetarian**.

{% include img.html datetime="February 2016" alt="A yummy vegetarian meal from Ricker, a Stanford dining hall near the Gates CS building. Stanford has been voted the <a href='http://www.stanforddaily.com/2015/04/28/stanford-voted-most-vegan-friendly-campus/'>'Favorite Vegan-Friendly Large College'</a> by <a href='http://www.peta2.com/'>peta2</a>." url="https://lh3.googleusercontent.com/krv_0WtqUS9OOkUEweqHCUOuWMOrp2YZ7GItiAOMzxuQVh0IwcFGQT4lWWjGfMRepNUILikuIfFQ-xzXuzzqV4hCfgqoErc0LWvYXgv4dP5hegZmRl8-1cnWQVGbPakRyFILmRbPHuEhW3BGBpmpoxu2tk4hNc7kdiiw1pNGF-rjYPf_W2kzF0YzL6fvdRtQR5bpNO59Jna9tIU9C68TTMoHginRjvZLeMoLw0O1krysL4a9Gofm7VyLqjIxoYa-LXSxb79124RASmEnkti5WUzhM4qpPCXKf-DGy_mFo0yo8oLJ4hTo6zyTg77UoOSmiKmxKKgzYgTFWQqPsJ4whywYgLKMxc62aPsnavmdTHgjufeBqpyfSnQs8gdcm12CpPTBmLcs842aCXEn8di9w1HuZQOz9lGv9I9Ii631kvbjNfQolY-BVoetleJ7x8mtSAuMksO428KriYr1Bp8pXdgfalITsdd10s8lVrzbHIYxHDA5yZqZoOFBHZXkOiEtemOb7YbsGWgaq3FUOQGB9PKo2NM6vd3xKqWpQgHFdNFxC4CrrbGI1CK-TWRYukYtb3d61gJ9T4Orakc8XVUuyjLQtvXTbR0=w1231-h923-no" %}

This isn't the place for me to wage an anti-meat campaign --- interested readers
can just take a good look at e.g. [the report of the Pew Commission on
Industrial Farm Animal Production][15] to see why this might be a reasonable
thing to do.[^5] I had seen these reports and become acquainted with the facts
long before 2016. But, like many people, I had settled to live with the
cognitive dissonance of at once enjoying meat and knowing that it was a harmful
and ethically wrong habit. That changed after I read Jonathan Safran Foer's
[*Eating Animals*][16]. Jonathan's situation was much the same: before writing
his book, he was a meat eater with a guilty conscience who had made several
failed attempts at vegetarianism. While I was already familiar with the
high-level facts of the modern meat industry, Jonathan's personal story
motivated me even further --- enough to actually move forward and make the
change.

The SPINN team --- now six strong, including our advisors --- toiled throughout
the winter to develop the model theory and evaluate it on natural language data.
When not outside on a bike saddle, I spent the season cooped up in my office in
the Gates building, writing code, reading relevant papers, and hoping for
success. It slowly became clear during the quarter that things were going to
work out in our favor. We submitted a report of our work to the Association for
Computational Linguistics in March, and will present it at the conference this
summer.

And then I was off to Berlin!

{% include img.html alt="Riding a vintage roadie in central Berlin." datetime="April 2016" url="https://lh3.googleusercontent.com/CHT7vqzMZfF1ljvxae6BD26Z9AfmY4kX9qVmY7UcKll_M8fSpjjMoSo9Lw61v5l3JHHtU8JrmSryyMGGpR_Kh-Ro6fuBCEhqgyOZ5ToAPY9LZqmvY5vhf_8X98xx_VSdSwWDEV8EzKk3Uo_-9RYcqWTl8-scxCMwJF75hmmr63pt_ZCf0iLK5zDQ60cI5lO3WfCDrotsTHhwkwAru8O0O5A2qdVME2eDZ3MTwn69qcaDg4axh3yALENH_rpmJH3jZjxi1cnBWhrgr8Pqnr6Ja3Lcj6-I7HGGDs0knBDougkoIeGAKJBTVzizdaqe0wnbpybeHa4KjVqlLv7zNfGvSDLhHCE7CcYzpILHGyG1z6np1d0SRoesWQMyTzIytK-qZC6pChd1dP0nHUOhqZhWWDDBhmAS9zbRpjqRxTKi9NDKI-XY_14AYtzhGTatg9wK1dtshN07IqWKPQ7ViTLQXTZISKhjSsX2GmwbROYq1kXIsDlyJbP44klL8fpHK6BIuL6WBFZHs-UW7uAXpn96gch-0v4s6JuX-17WaHohbDXYGL8J0jbmMkcbYJkVq1_X5q7z3V7BP70aRZ37afFLkUMovQnUE08=w1231-h923-no" %}

I had long ago applied to the Stanford overseas study [program in Berlin][17].
After several years of mostly tunnel-vision intellectual focus on artificial
intelligence, I knew that my brain needed some novel content in order to keep
functioning. I wanted to return to my dormant love of language learning. I had
obsessively taught myself languages during high school, but mostly dropped the
activity at university, where time for leisure-learning was rather scarce. A
language-immersion trip to Germany was a perfect way to slip back into the old
hobby --- and, no less important, to slip out of the fast-paced world of AI
research for a short while.

A generous and welcoming family hosted me in the peaceful city quarter of
[Friedenau][18]. I studied German at a Stanford satellite in Berlin and spent my
free time exploring the city and cycling, sometimes [with the Freie Universität
Berlin riding group][19].

{% include img.html alt="Lutherstadt Wittenberg, in Saxony-Anhalt. Taken at the halfway point on <a href='https://www.strava.com/activities/582949905'>a bike trip to Leipzig</a>." datetime="May 2016" url="/uploads/2016/lutherstadt-wittenberg.jpg" %}

The immersion experience was a wonderful challenge, though I probably wouldn't
have chosen the adjective "wonderful" as I was going through it. I learned (the
hard way!) to trust myself to speak fluently in another language --- to be
willing to make some mistakes and fail in front of other people, that is, in
order to convey what I want to say. This was a fully intellectually engaging
task. I found every day quickly filled up with conversations, literature,
television, and movies, and everything that might have been banal or boring in
English was an important and interesting part of my studies in Berlin.

Of course, there is more to Berlin than the German language. The city has a dark
and complex past, and the modern Berlin, no longer physically divided, still
shows scars of its turbulent history. Exploring this history in person ---
through conversation and travel --- added a new dimension to formerly dry
textbook knowledge in my mind.

It's a happy coincidence that this year's [ACL conference][20] takes place in
Berlin in a few months. I have an excuse, then, to go back and ensure that my
German hasn't rusted!

But for now, I'm off to San Francisco for what is sure to be an exciting summer.
I'm joining the rapidly growing reseach team at [OpenAI][21], which has managed
to already release a swathe of papers on generative models and a platform for
open reinforcement learning research. I believe I'm expected to add some
linguistic nuance and NLP fun to the mix. We'll see what I come up with.

Well, I've reached the present day, so this brings my whirlwind review of over a
year to a close. I certainly wouldn't have managed to make this progress without
the support of my family and friends. With thanks to them and to my readers,
I'll end the review here. Until next time.

<img src="//ir-na.amazon-adsystem.com/e/ir?t=blog0cbb-20&l=am2&o=1&a=0316069884" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[^1]: I could point out in particular that our current memory models and representation choices are extremely limited compared to what is available in the human brain. Some (but not enough) work has been done on differential-speed learning models (comparable to e.g. complementary learning systems theory in neuroscience).
[^2]: Things move quickly in today's world of AI research. Ilya is now at OpenAI, and Oriol works at Google DeepMind in London.
[^3]: very similar to e.g. [Chris Dyer's work from ACL][13]
[^4]: I think this is a good example of how "nonlinear" research work often feels. We were totally surprised by this finding, and it certainly changed the direction of the project. These sort of discontinuous jumps are often omitted in the terse final write-ups, where it generally pays off to appear as if you knew the whole thing from the start...
[^5]: And why eating vegan may also be reasonable, if you have more willpower than I do.

[1]: https://en.wikipedia.org/wiki/Point_Reyes
[2]: https://www.nyu.edu/projects/bowman/
[3]: http://kelvinguu.com/
[4]: /uploads/papers/acl2016-spinn.pdf
[5]: https://web.stanford.edu/dept/app-physics/cgi-bin/person/surya-gangulijanuary-2012/
[6]: https://psychology.stanford.edu/awagner
[7]: https://research.google.com/teams/brain/
[8]: http://www.cs.toronto.edu/~ilya/
[9]: http://research.google.com/pubs/OriolVinyals.html
[10]: http://www.wavestowine.org
[11]: https://www.strava.com/activities/390877625
[12]: https://www.strava.com/activities/380561190
[13]: http://www.aclweb.org/anthology/P15-1033
[14]: http://nlp.stanford.edu/projects/snli/
[15]: http://www.ncifap.org/reports/
[16]: https://www.amazon.com/gp/product/0316069884/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316069884&linkCode=as2&tag=blog0cbb-20&linkId=579d4d5ea33b87f32c49a996a47fce36
[17]: https://undergrad.stanford.edu/programs/bosp/explore/berlin
[18]: https://en.wikipedia.org/wiki/Friedenau
[19]: https://www.strava.com/activities/571930933
[20]: http://acl2016.org/
[21]: https://openai.com/about/
