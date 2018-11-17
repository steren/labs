---
author: steren
comments: true
date: 2014-04-19 14:22:31+00:00
layout: post
link: http://labs.steren.fr/2014/04/19/lecamping-mafia/
slug: lecamping-mafia
title: LeCamping Mafia
wordpress_id: 443
categories:
- LeCamping
tags:
- alumni website
- angularjs
- javascript
- lecamping
- startup
---

It has been a 3 years since I took part to the first season of the startup accelerator [LeCamping](http://accelerate-en.numaparis.com/) in Paris. The application for the 6th season is starting this week. This creates a large network of "alumni" and a large number of startup created, between us, we call it the _Camping Mafia_.

Some months ago, we decided to build an [alumni website](http://lecamping.github.io/lecampingmafia). First goal was to create a summary listing of all the startups, inspired from [YC list](http://yclist.com/).

Romain Cochet had initiated a fully working Symfony based website. But I was thinking we could have a simpler solution that would encourage collaboration and not rely on a server-side database and hosting.

Based on the design work from Adrien Dupuy, I created a [very simple](https://github.com/lecamping/lecampingmafia/blob/gh-pages/app.js) AngularJS client-side application. This allowed us to easily add new features such as filtering and search.

[![LeCamping Mafia](http://sterenlabs.files.wordpress.com/2014/04/2014-04-16-11_48_39-le-campingmafia.png?w=584)](http://sterenlabs.files.wordpress.com/2014/04/2014-04-16-11_48_39-le-campingmafia.png)

The source code is [available on GitHub](https://github.com/lecamping/lecampingmafia) and the website is entirely hosted on GitHub pages. Startups data is stored in a [JSON file](https://github.com/lecamping/lecampingmafia/blob/gh-pages/startups.json), which encourage edition and update from anyone through Pull Requests.

Go take a look at [lecampingmafia.com](http://lecamping.github.io/lecampingmafia).
