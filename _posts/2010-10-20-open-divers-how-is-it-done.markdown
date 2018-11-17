---
author: steren
comments: true
date: 2010-10-20 09:17:39+00:00
layout: post
link: http://labs.steren.fr/2010/10/20/open-divers-how-is-it-done/
slug: open-divers-how-is-it-done
title: 'Open Divers: How is it done?'
wordpress_id: 45
categories:
- Open Divers
tags:
- jquery
- play framework
- web
---

It all starts with some drawings: first the a few screens of what the website should roughly look like. And then the data model, to get an overview of all the entities of the website, and their relations. Have a look, you will see that objects are very linked:




[caption id="attachment_42" align="aligncenter" width="300"][![](http://sterenlabs.files.wordpress.com/2010/10/data-model.jpg?w=300)](http://sterenlabs.files.wordpress.com/2010/10/data-model.jpg) Current Data Model of the website[/caption]




I'm developping using [Play! framework](http://www.playframework.org/). It is a very efficient Java web framework, where you focus on getting things done. I can assure you it's not traditional Java (servlets and all) and that when you start feeling comfortable with it, you can build a clean website very quickly. If you are a web developer who wants to try something refreshing, you should give it a try. (I think you can compare it to [RoR](http://rubyonrails.org/), [Jango](http://www.jango.com/) or [Symfony](http://www.symfony-project.org/))

I first start by defining the objects (_Models_) of the platform, and relations between them. The framework uses JPA to automatically create the underlining database.

Then I define actions in _Controllers_ to display and edit this data: "show dives", "explore", "login" are example of actions.

Finally, I create the different pages (the _Views_) using HTML and the templating engine. I first used some code from [HTML5 boilerplate](http://html5boilerplate.com/) to start building on something clean. I use some Javascript (with the [jQuery](http://jquery.com/) library) to perform dynamic actions on the client side (messages that disappear, pop-up layers for login...). I also use [jQuery UI](http://jqueryui.com/) for some widgets (a date picker, an accordion for the dive edition page) and the [Google Maps Javascript API](http://code.google.com/intl/fr/apis/maps/documentation/javascript/) to display satellite maps. (I really needed satellite imagery, so I cannot use [OpenStreetMap](http://www.openstreetmap.org/) data).

I did not found the time to write unit tests, functional tests or front end tests, this is very bad. It will be the first thing I do when I start working on the project again.

There is still a lot to do, it's a first version, let's add on top of it. Check out [the screenshots from yesterday's post](http://sterenlabs.files.wordpress.com/2010/10/data-model.jpg2010/10/19/open-divers-first-screen/).
