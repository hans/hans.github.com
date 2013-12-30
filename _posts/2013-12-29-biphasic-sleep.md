---
layout: post
title: My biphasic sleep experiment
excerpt: Giving a different sleep style a try
---

I think sleep is a pretty important issue when it comes to personal health and
improvement, given that we'll each spend around a third of our life in bed. I've
been reading [quite][3] [a bit][4] [lately][5] about biphasic and polyphasic
sleep patterns and considering possible implementations in my own life. It's
likely worth an attempt, given the potential benefit I could gain from a better
sleep schedule versus the cost of the experiment. For all I know I could be
stuck at a local maximum,[^1] unaware of the far larger global maximum nearby:

<style type="text/css">
@font-face {
    font-family: "xkcd";
    src: url('http://antiyawn.com/uploads/Humor-Sans-1.0.ttf');
}
#plt { font-family: 'xkcd', sans-serif; font-size: 16px; color: #333; width: 500px; margin: 0 auto; }
path { fill: none, stroke-width: 2.5px; stroke-linecap: round; stroke-linejoin: round; }
path.axis { stroke: black; }
path.bgline { stroke: white; stroke-width: 6px; }
</style>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/d3/3.3.11/d3.min.js"></script>
<script type="text/javascript" src="/js/xkcd.js"></script>
<div id="plt"></div>
<script type="text/javascript">
var f = function(x) { return 1 / (Math.pow(x-0.3, 2) + 0.1) + 1 / (Math.pow(x - 0.9, 2) + 0.04) - 6; },
    N = 100,
    data = d3.range(-0.1, 1, (1 / N)).map(function(d) { return {x: d, y: f(d)}; });
    var plot = xkcdplot();
    plot("#plt");
    plot.plot(data);
    plot.title("").xlabel("Biphasicity").ylabel("Awesomeness").xlim([-0.1, 1]).draw();
</script>

So why not give myself a chance to spring off this local maximum, I ask? I am
thus spending this last week of my winter break beginning an experiment with
[biphasic sleep][1].[^2] Last night was my first time ever sleeping
biphasically, and I intend to continue through at least the rest of this week.

Here's the schedule I've developed:[^3]

1. Go to sleep at 8:30 PM.
2. Wake up at 11:30 PM (3 hours later). Remain awake for 2 hours.
3. Go to sleep at 1:30 AM.
4. Wake up at 6:00 AM.

This yields a total of 7.5 hours of sleep, which exactly matches the average
amount of hours I spend in bed per night.[^4]

### Tracking the effects of biphasic sleep

I'm using [Quantified Mind][6] to get an objective measure of my daily awareness
as the experiment continues. I'm also recording observations of how I feel
throughout the day. I'll likely make this data public once I've decided on a
format that I can use consistently.

### Special considerations

Given that my per-segment sleep amount has been drastically reduced, I'm trying
to be more careful about what I do during the waking periods near and between
these segments. [Blue light can be especially detrimental to sleep][7], and so
I'm doing my best to avoid this. I'm using [f.lux][8] to tone down the color
temperature of my computer screens at night, and avoiding other artificial
lights of any kind (especially in the waking period between the two sleep
segments). I bought [these blue light-blocking glasses][9] in order to further
limit the amount of harm done by electronics at night. Apart from light, I'm
also lending special attention to my eating habits, avoiding late-night meals
and limiting sugar intake.

There's no hiding that I'm pretty ridiculously tired after the first night. As
you'll see in the forthcoming sleep logs, I had relatively very little amounts
of deep sleep in this first trial. I expect this to change as the week continues
and my body adjusts to this new pattern. It should be exciting to see where this
goes! Stay tuned for further updates.[^5]

<img src="http://ir-na.amazon-adsystem.com/e/ir?t=blog0cbb-20&l=as2&o=1&a=B000USRG90" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[1]: https://en.wikipedia.org/wiki/Segmented_sleep
[2]: http://foldl.me/2013/winter-2014/#sleep
[3]: http://dx.doi.org/10.1111%2Fj.1365-2869.1992.tb00019.x
[4]: http://www.psychiatrictimes.com/articles/broken-sleep-may-be-natural-sleep
[5]: http://www.nytimes.com/2006/03/14/health/14beha.html
[6]: http://www.quantified-mind.com/
[7]: http://www.health.harvard.edu/newsletters/Harvard_Health_Letter/2012/May/blue-light-has-a-dark-side/
[8]: http://justgetflux.com/
[9]: http://www.amazon.com/gp/product/B000USRG90/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000USRG90&linkCode=as2&tag=blog0cbb-20

[^1]: I'm definitely at some sort of maximum --- [I feel like I have sleep under control][2], that is. But what do I know?
[^2]: Specifically, [segmented biphasic sleep][1].
[^3]: This can be shifted forward or backward in time as long as the proportions stay the same.
[^4]: This quantity is based on data from my sleep tracking application, which I've been using since late August 2013.
[^5]: Apologies for the atrocious writing tonight. The fatigue isn't doing my sentence fluency any favors.
