---
author: steren
comments: true
date: 2010-12-03 23:47:46+00:00
layout: post
link: http://labs.steren.fr/2010/12/04/bugfixes-and-new-features/
slug: bugfixes-and-new-features
title: Bugfixes and new features
wordpress_id: 3
categories:
- Cadeaux entre nous
---

[Cadeaux entre nous](http://www.cadeaux-entre-nous.fr/) has been moderately used during the previous days. It's nice to see people organizing their Christmas using our tool.

![](http://sterenlabs.files.wordpress.com/2010/12/internet-mail.png)Unfortunately, we had some bad feedback from users who did not received invitation emails. This was because emails were sent right away after the event creation. Thus after the creation of an event with a lot of participants, the mail server wasn't very happy.
I re-wrote yesterday the invitation system using a job list. I used the very simple[ Job feature of the Play! framework](http://www.playframework.org/documentation/1.1/jobs).

We also added a new feature : **wishlists**. Now users can express their wishes by entering what they would like to receive. The person who have to offer something to him receive a new mail giving him a hint about what to offer.

This feature has been asked by a couple of users. And that's something we had in mind, indeed, it is a path top a potential monetization of the website.
