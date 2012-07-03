---
layout: post
title: Disabling electric indenting in Emacs modes
---

I am just getting settled in with [Org Mode][1] for Emacs and am constantly amazed at its versatility and wide feature set. One problem has been bugging me in Org for quite a while now, though: `electric-indent-mode`, which I use for auto-indentation when programming, gets in the way by auto-indenting Org headers.

My annoyance reached a critical point earlier this morning, and so I set off in search of a fix to disable electric indenting "mode-locally" &mdash; that is, disable the mode in Org buffers but not in buffers of any other mode. The catch with `electric-indent-mode` is that it is a global minor mode &mdash; something that is enabled once and assumed to be necessary for all buffers.

After a bit of searching, however, I was glad to find that the author of the mode had left in a backdoor for customizing its functionality. Meet `electric-indent-functions`:

> Special hook run to decide whether to auto-indent.
> Each function is called with one argument (the inserted char), with point right after that char, and it should return t to cause indentation, `no-indent' to prevent indentation or nil to let other functions decide.

Perfect! The default value for this variable (as of Emacs 24.0.92.1) is `nil`, so I made the choice to recklessly overwrite this variable at a [buffer-local level][2].

Enough technoblabber; here's the fix. Add the following code into an Emacs Lisp file that gets run on initialization:

{% highlight common-lisp %}
(add-hook 'org-mode-hook
          (lambda ()
            (set (make-local-variable 'electric-indent-functions)
                 (list (lambda (arg) 'no-indent)))))
{% endhighlight %}

You can find the latest version of my Org mode config in my [`dotfiles` repo][3].

[1]: http://orgmode.org
[2]: http://www.gnu.org/software/emacs/manual/html_node/emacs/Locals.html
[3]: https://github.com/hans/dotfiles/blob/master/emacs.d/scripts/org.el
