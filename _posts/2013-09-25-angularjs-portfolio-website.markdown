---
author: steren
comments: true
date: 2013-09-25 18:32:27+00:00
layout: post
link: http://labs.steren.fr/2013/09/25/angularjs-portfolio-website/
slug: angularjs-portfolio-website
title: My Portfolio written with AngularJS
wordpress_id: 404
categories:
- Portfolio
tags:
- angularjs
- javascript
---

I've been working with [Backbone.JS](http://backbonejs.org/) for the past two years as front-end JavaScript framework for desktop and mobile web apps. I wanted to try a more structured framework. While I read a lot about [Web components](http://www.w3.org/TR/2013/WD-components-intro-20130606/), that are for me the future of web programming, I had issues using them in a very simple use case. The [Polymer project](http://www.polymer-project.org/) (based on them) looks interesting, but is still in very early stage. That is how I selected the [AngularJS](http://angularjs.org/) framework.

![portfolio made with AngularJS](http://sterenlabs.files.wordpress.com/2013/09/portfolio.png?w=300)

A refactoring of my simple portfolio at [http://steren.fr](http://steren.fr) was a perfect candidate as a simple project to learn this framework. You can check the [code on github](https://github.com/steren/steren.github.com).

I started with Angular's great [getting started tutorial](http://docs.angularjs.org/tutorial) and was then able to start working using the official [Documentation](http://docs.angularjs.org/guide/) and the rest of the interweb.

The app is very simple :



	
  * It contains two Views (described in partials), that are using the same Controller

	
  * The data comes from a JSON file and accessible from a Service.

	
  * I had to write a custom Filter to filter works based the checked checkboxes.


What is interesting is that I didn't needed to code any data-binding or manual refresh, Angular is handling this for me since everything is properly wired. For example: clicking on  the _sort radio-button_ changes the 'sort' variable that are linked to the _works_ filters.

Read and fork the portfolio [code on github](https://github.com/steren/steren.github.com/tree/angular).
