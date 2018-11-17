---
author: steren
comments: true
date: 2014-05-05 09:19:02+00:00
layout: post
link: http://labs.steren.fr/2014/05/05/indoor-climbing-tracker/
slug: indoor-climbing-tracker
title: Indoor climbing tracker
wordpress_id: 465
categories:
- Climb tracker
tags:
- angularjs
- climbing
- mobile
- parse
- runkeeper
- sport
---

_**Update**: I built [a new version of the app ](http://labs.steren.fr/2015/10/27/climb-tracker-for-android-and-android-wear/)as an [Android and Android Wear native app](https://play.google.com/store/apps/details?id=fr.steren.climbtracker). The one described on this page is not maintained anymore._

I have been doing outdoor and indoor climbing for five years now. While I enjoy a lot rock climbing and multi-pitch outdoor routes, I also practice every week indoor climbing at my local climbing gym.

[caption id="attachment_473" align="aligncenter" width="180"][![Tracking a new Climb](http://sterenlabs.files.wordpress.com/2014/05/wpid-screenshot_2014-05-05-10-55-45.png?w=180)](http://sterenlabs.files.wordpress.com/2014/05/wpid-screenshot_2014-05-05-10-55-45.png) Tracking a new Climb on mobile[/caption]

I use Foursquare everyday, RunKeeper when running or skiing, a diving computer when diving, but I have nothing to track my indoor climbs.
We were thinking about this with [Pierre](https://twitter.com/pierregerlach), a climber friend, and I started working on it as a side project. We imagine it very simple:



	
  * select a climbing gym

	
  * "check-in" on routes after each climb saying if it was lead or top-rope, leaving a comment. Of course, gyms and routes need to be user generated.


The value would be that you can track your progress and the app could give route suggestions. You could leave and get comments and tips on routes.

[caption id="attachment_474" align="aligncenter" width="696"][![Climbing log on Chrome Desktop](http://sterenlabs.files.wordpress.com/2014/05/screen-shot-2014-05-05-at-11-10-55.png?w=696)](http://sterenlabs.files.wordpress.com/2014/05/screen-shot-2014-05-05-at-11-10-55.png) Climbing log on Chrome Desktop[/caption]

I had great [feedback from the /r/climbing reddit community](http://www.reddit.com/r/climbing/comments/23oem5/ask_rclimbing_i_am_building_an_app_to_track/). Telling me if this kind of app would be useful, what people would use it for and pointing me to similar projects.

Technically, the [prototype app](http://steren.fr/faiteslemur-web/) is a client-side web application, based on [Parse](https://parse.com/) because I didn't want to bother building once again a new dumb backend server that is just storage and user credentials. I like Parse’s phylosophy of being a “backend as a service”, they are right to think that a lot of web or mobile application are structured the same way and do not have a lot of server-side logic. Focusing on the front end was what interested me with this project, and Parse allowed me to prototype things fast and be sure that it is reliable for the future.
It is generated using [Yeoman](http://yeoman.io/) (so uses Bower as client-side library management tool and Grunt as build tool), it uses [AngularJS](https://angularjs.org/) and [bootstrap](http://getbootstrap.com/) 3.

I think I did the mistake to think that I could target mobile and desktop with the exact same responsive website, while this may not be false, I think I would better have focus only on the mobile application and build a dedicated mobile UI using a mobile web framework, such as [ionic framework](http://ionicframework.com/). This may be the next step.

It is available [online](http://steren.fr/faiteslemur-web/) at and still needs a nice name and logo.


**[Try it now](http://steren.fr/faiteslemur-web/)**
