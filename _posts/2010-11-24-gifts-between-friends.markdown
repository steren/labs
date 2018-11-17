---
author: steren
comments: true
date: 2010-11-24 12:45:49+00:00
layout: post
link: http://labs.steren.fr/2010/11/24/gifts-between-friends/
slug: gifts-between-friends
title: Gifts between us
wordpress_id: 166
categories:
- Cadeaux entre nous
tags:
- gifts
- new project
- website
---

I've been building a new small website in a couple of evenings with the help of Xavier : [www.gifts-between-us.com](http://www.gifts-between-us.com) ([www.cadeaux-entre-nous.fr](http://www.cadeaux-entre-nous.fr) for the French version).

Xavier needed it to organize a present distribution with his family for Christmas. The idea is simple: in a group of person (family, co-workers) everyone will have to give a present to another person. What makes this fun is that you don't know from who you are getting yours.

[caption id="attachment_171" align="aligncenter" width="300"][![](http://sterenlabs.files.wordpress.com/2010/11/capture-2.png?w=300)](http://sterenlabs.files.wordpress.com/2010/11/capture-2.png) The Gifts between us Home page[/caption]

We first hacked a first version in a small amount of hours using the [Play! framework](http://www.playframework.org/). I could try the very easy to use [Mailer function from the framework](http://www.playframework.org/documentation/1.1/emails). So easy to use.

I did not found a very elegant method to define present targets. At first, users could only offer one present to the other, so I randomized the user list and then used a circular permutation to determine who offer to who. But then we decided that users could offer more than one gift. I couldn't think rapidely of an algorithm that makes sure the gift repartition seams random, that everyone gets the same number of present and that I don't offer one to myself. So I implemented a strategy that if it cannot find a solution once, try again.

[caption id="attachment_170" align="aligncenter" width="300"][![](http://sterenlabs.files.wordpress.com/2010/11/capture-1.png?w=300)](http://sterenlabs.files.wordpress.com/2010/11/capture-1.png) The "Pick a paper" page[/caption]

I also took the time to make the pick experience something nice and natural, in the end, you pick a paper the same way you would do it in real life. I used [CSS3 transforms](http://www.w3.org/TR/css3-2d-transforms/) with transitions. What is great with this technology is that it degrades well on non-compliant browsers: on IE, the papers are displayed as a list, on Firefox3 the papers are nicely organize but don't move when you click on them, on Chrome you have a very nice transition when you pick one.

If you tested it, you probably noticed that the papers seam to flip in 3D. They don't. 3D transforms are not really available in current browsers. To simulate a flip of the paper, I use the scale 2D transform, going from -1 to 1 in both X and Y. The illustion is here.

A last comment concerning CSS transforms: manipulating the transformation values using jQuery is not very easy. I tried the [transform plugin](http://plugins.jquery.com/project/2d-transform) but this one wants to be compatible with all browsers (something I don't necessarily want) and do not offer what I was looking for : an easy way to get and set transform values. I may extract my code into a plugin if I need it another time.

Then we polished the edges, tested it and we are proud to release it. [Check it out](www.cadeaux-entre-amis.fr) and tell me what you think of it.
