---
layout: post
title: Post excerpts in Jekyll
excerpt: Easy excerpts without a self-hosted install.
main: true
---

There's a [fairly simple method][1] for creating WordPress-like post excerpts in Jekyll using a `<!-- more -->` tag, but unfortunately it requires the installation of a Jekyll plugin, a feature unavailable on a GitHub-hosted Jekyll instance.

What's a bored geek like me to do? Find another way! <!-- more --> The exact same excerpt functionality linked to earlier can be replicated by composing a few [Liquid filters][2] in the site layout code, like so:

<pre>&#123;{ post.content | split: '&lt;!-- more -->' | first }}</pre>

This little bit of code will output the content of a post until it sees a `<!-- more -->` tag inside the post content. Just insert the `<!-- more -->` tag into your posts wherever you'd like them to be cut off.

You can see this snippet in action in my [site index template](/).

[1]: http://www.jacquesf.com/2011/03/creating-excerpts-in-jekyll-with-wordpress-style-more-html-comments/
[2]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
