---
layout: post
title: Conditional generative adversarial networks for face generation
excerpt: I describe a recent project using <em>generative adversarial nets</em> to learn to draw human faces.
main: true
image: http://www.foldl.me/uploads/2015/conditional-gans-face-generation/axis_incremental.png
---

This week marks the end of the winter quarter at Stanford, and with it ends the
class [CS 231N: Convolutional Neural Networks for Visual Recognition][1]. The
teaching team, led by [Andrej Karpathy][2] and [Fei-Fei Li][3], did an
outstanding job putting together a course on neural networks and CNNs from
scratch.

This post is a high-level overview of the project I submitted for the course,
titled *Conditional generative adversarial networks for convolutional face
generation*. For those interested in a technical deep dive, check out
[my full paper][4] and the [code on GitHub][5].

<p style="text-align:center;font-size:88%">(jump to: <a
href="#introduction">introduction</a>, <a href="#model">model</a>)</p>

<p>
<a href="/uploads/2015/conditional-gans-face-generation/axis_incremental.png">
<img alt="Demonstration of deterministic control of image samples. We tweak conditional information to first make the sampled faces age, then again to make them smile." src="/uploads/2015/conditional-gans-face-generation/axis_incremental.png" />
</a>
</p>
<p class="caption">Example of faces sampled from the generative model. We draw
random faces in the first row. In the second row we ask the model to "age" the
faces, and in the third row we ask the model to add a smile.</p>

## Introduction

A major task in machine learning is to learn [*density models*][10] of
particular distributions. Ideally, we want to have a machine that accepts
arbitrary inputs and says either "Yes, that's an *x*," or "No, that's not an
*x*." We might name this density model mathematically as \\(p(\mathbf{x})\\),
where \\(\mathbf{x}\\) is the data we're interested in modeling.

In this project, we learn a density model of **human faces**. Given some image
\\(\mathbf{x}\\), our precise task here is to determine whether \\(\mathbf{x}\\)
is a picture of a face or not. Every seeing human has such a model in her brain,
and uses it effortlessly every day. Like many tasks in computer vision and
artificial intelligence, what is ridiculously simple for humans turns out to be
notoriously difficult for computers to crack.

There are two important extensions in this project:

- We want to be able to *sample* from the model --- to ask it to "imagine" new
  faces that we haven't ever showed it. (Again, this is something that humans
  can do easily.)
- We want the model to *condition* on external data. This means that we should
  be able to specify particular facial attributes as we sample. (Once again,
  this is trivial for humans. Imagining an old white male with a mustache takes
  little apparent cognitive effort.)

Images are traditionally represented in digital form as large matrices of
numbers. Our density model in particular is expected to deal with images with
3072 different dimensions of variation.[^2] Our task, then, (as is the task in
much of [unsupervised learning][11]) is to find and exploit structure in the
data that help us reason efficiently and accurately about what is and isn't a
face.

### The project

We train on human face images like these:

<p style="text-align:center">
<img style="width: 100px; display: inline;" src="/uploads/2015/conditional-gans-face-generation/lfwcrop/Akbar_Al_Baker_0001.jpg"/>
<img style="width: 100px; display: inline;" src="/uploads/2015/conditional-gans-face-generation/lfwcrop/Catherine_Zeta-Jones_0004.jpg"/>
<img style="width: 100px; display: inline;" src="/uploads/2015/conditional-gans-face-generation/lfwcrop/Igor_Ivanov_0005.jpg"/>
<img style="width: 100px; display: inline;" src="/uploads/2015/conditional-gans-face-generation/lfwcrop/Milo_Maestrecampo_0001.jpg"/>
</p>

The above images are samples from a dataset called
[Labeled Faces in the Wild][12], which contains about 13,000 images of random
people in uncontrollled settings.[^1]

As mentioned before, we intend to build a density model in this project that is
*conditional*. Rather than answering the question "Is this an *x*," we now
answer "Is this an *x* given *y*?" Formally, we build a density model
\\(p(\mathbf{x} \mid \mathbf{y})\\). \\(\mathbf{y}\\) is the "conditional
information" --- any external information that might cue us on what we should be
looking for in the provided data \\(\mathbf{x}\\).

Concretely, in this project \\(\mathbf{y}\\) specifies facial attributes, such
as the following:

- Age: baby, youth, middle-aged, senior, ...
- Emotion: frowning, smiling, ...
- Race: Asian, Indian, black, white, ...

Informally, when we ask about \\(p(\mathbf{x} \mid \mathbf{y})\\) in this
setting, we ask the question: If we're looking for faces of type
\\(\mathbf{y}\\) (e.g. frowning people with mustaches), should we accept
\\(\mathbf{x}\\) as a good example or not?

### Why is this interesting?

Good question! Recall that we're learning a *generative* model of faces while we
do this density modeling. The interesting implication is that we can **sample
brand-new faces** from the learned density model. Like these ones:

<img src="/uploads/2015/conditional-gans-face-generation/samples_cgan_fixed.png"/>

The faces above are created by the model from scratch. These faces are entirely
new, and don't resemble faces in the training data provided to the model. That's
right --- once our model learns what a face looks like, it can **learn to draw
new ones**.

Hooked? Let's get into the model.

## Model

The model used in this project is an extension of the *generative adversarial
network*, proposed by [Ian Goodfellow][14] and colleagues (see their [paper][15]
and associated [GitHub repo][16]). Here's the basic pitch:

Suppose you want to build a generative model of some dataset with data points
called \\(\mathbf{x}\\). Let's create two players and set them against each
other in an adversarial game:

- A **discriminator** -- call it *D*. *D*'s job is to accept an input
  \\(\mathbf{x}\\) and determine whether the input came from the dataset, or
  whether it was simply made up. *D* wins points when he detects real
  dataset values correctly, and loses points when he approves fake values or
  denies real dataset values.
- A **generator** -- call it *G*. *G*'s job is to *make up* new values
  \\(\mathbf{x}\\). *G* wins points when he tricks *D* into thinking that his
  made-up values are real.

We now let *D* and *G* take turns in the game, and teach both how to correct
their mistakes after each turn. Here's what we expect to happen:

1. *G* begins as a completely stupid generator. He outputs some random noise in
   a weak attempt to trick *D*.
2. *D* quickly learns to make a lazy distinction between *G*'s random noise and
   things that look like human faces. But *D* trains only long enough to make a
   basic distinction --- to look for a skin tone, for example.
3. *G* learns from its mistakes and starts producing images with skin tone color
   in them.
4. *D* picks up on basic facial structure, and uses this to distinguish between
   real face images and *G*'s fake data.
5. *G* follows *D*'s cue, and learns to draw face shapes (and perhaps some basic
   features like noses and eye-holes).
6. *D* notices other features in the real face images that distinguish them from
   *G*'s data.

This process continues on forever, with *D* learning new discriminative features
and *G* promptly learning to copy them.

What we end up with (after several hours of training on GPUs) is a **generative
model** *G* which can make convincing images of human faces like the ones
presented earlier. Ideally, this model *G* can also serve as a generative
density model as described earlier.

### Conditional data

But there's more! I mentioned earlier that our key extension is to add a
*conditioning* feature. In the setting of face images, this means we can specify
particular facial attributes. Both the generator *G* and the discriminator *D*
learn to operate in certain *modes*. For example, with a particular conditional
information input \\(\mathbf{y}\\), we might ask the generator *G* to generate a
face with a smile, and likewise ask the discriminator *D* whether a particular
image contains a face with a smile.

<a href="/uploads/2015/conditional-gans-face-generation/axis_incremental.png">
![Demonstration of deterministic control of image samples. We tweak conditional information to first make the sampled faces age, then again to make them smile.](/uploads/2015/conditional-gans-face-generation/axis_incremental.png)
</a>

The final consequence of all of this is that we can directly control the output
of the generator *G*. The image above shows a figure from the paper. We begin
with a random row of faces sampled from the model. (Note that these are not
faces from the training data.) We then tweak \\(\mathbf{y}\\) in two ways:
first, along an axis that corresponds to old age, and second, along an axis that
corresponds to smiling. You can see in the second and third rows that the
subjects first grow older and then put on a smile.

## Conclusion

I'll end my brief overview here. There's much more to say --- for example, on
training dynamics, on evaluation, and on the role of convolution in both *G* and
*D* --- and if you've reached this far in the blog post you would probably enjoy
reading [the paper][4] in full.

It is still early days for generative models, and I'm excited to explore both
new architectures and new possibilities in model applications. Watch this space
for more soon, and let me know if you're working on similar ideas!

### Acknowledgements

Thanks to my colleagues [Keenon Werling][6] and [Danqi Chen][7], who put up with
persistent requests for advice on the project throughout the quarter. None of
this would have happened without [Andrej's][2] advice at the start of the
quarter, which set me off in the right direction.

This project would have taken twice as long were it not for the developers of
[Pylearn2][8] and [Theano][9]. This kind of machine learning framework
development is certain to accelerate the progress of the field --- exciting
stuff! Of course, [Ian Goodfellow][14] deserve credit for the original
generative adversarial net code, published with their NIPS '14 paper.

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript">
MathJax.Hub.Config({TeX: { equationNumbers: { autoNumber: "AMS" } } });
</script>

[^1]: These images were cropped by [Conrad Sanderson][13] at NICTA.
[^2]: 3072 = 32 by 32 by 3. Our images are 32 by 32, with three RGB color channels.

[1]: http://cs231n.stanford.edu/index.html
[2]: http://cs.stanford.edu/people/karpathy/
[3]: http://vision.stanford.edu/feifeili/
[4]: /uploads/2015/conditional-gans-face-generation/paper.pdf
[5]: https://github.com/hans/adversarial
[6]: http://keenon.github.io
[7]: http://cs.stanford.edu/~danqi
[8]: http://deeplearning.net/software/pylearn2/
[9]: http://deeplearning.net/software/theano/
[10]: http://en.wikipedia.org/wiki/Probability_density_function
[11]: http://en.wikipedia.org/wiki/Unsupervised_learning
[12]: http://vis-www.cs.umass.edu/lfw/
[13]: http://conradsanderson.id.au/lfwcrop/
[14]: http://www-etud.iro.umontreal.ca/~goodfeli/
[15]: http://papers.nips.cc/paper/5423-generative-adversarial-nets
[16]: https://github.com/goodfeli/adversarial
