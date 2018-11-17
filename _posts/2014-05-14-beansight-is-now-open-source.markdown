---
author: steren
comments: true
date: 2014-05-14 13:33:59+00:00
layout: post
link: http://labs.steren.fr/2014/05/14/beansight-is-now-open-source/
slug: beansight-is-now-open-source
title: Beansight is now open source
wordpress_id: 481
categories:
- Beansight
tags:
- android
- github
- ios
- open-source
- play framework
- social
- web
---

Four years ago, I started working on [Beansight](http://www.beansight.com/) with [Cyril](https://twitter.com/cyrildorsaz), [Guillaume](https://twitter.com/geeyom) and [Jean-Baptiste](https://github.com/jbclaramonte), a project that became a long adventure.

![beansighthb](http://sterenlabs.files.wordpress.com/2014/05/beansighthb.png?w=214)

The website (that we host at [www.beansight.com](http://www.beansight.com/)) and associated mobile apps allow users to create predictions and vote on other’s predictions. Computation is done to extract from all votes a percentage of probability for a given event.
The website features all mechanisms of a social website : registration, login, user profiles, followers / following, content creation, comments, moderation tools, administration dashboard, API, i18n.

[caption id="attachment_483" align="aligncenter" width="300"][![Main page when logged into Beansight](http://sterenlabs.files.wordpress.com/2014/05/screen-shot-2014-05-14-at-14-44-32.png?w=300)](http://sterenlabs.files.wordpress.com/2014/05/screen-shot-2014-05-14-at-14-44-32.png) Main page when logged into Beansight[/caption]

All our code and design are [now available under the open source Apache licence](https://github.com/beansight). That means anyone is free to use it to run a similar website or to build upon it. Get it [from GitHub](https://github.com/beansight).

The technological architecture is quite regular: a server is generating web pages using a [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) framework, data is stored in a relational SQL database and user generated images are stored on the file system. Some simple client-side JavaScript is enriching these generated pages.

We built Beansight using the great [Play! Framework](http://www.playframework.com/). It turned out that Play! was a really great choice for our architecture and project. At that time, Play! was a Java web framework that got rid of the traditional Java web stack to focus on a simple MVC architecture, inspired by rails and other modern web frameworks, that prevails convention over configuration.
It was a real pleasure working with this language in a framework so well designed for websites like our.

[caption id="attachment_484" align="aligncenter" width="180"][![Beansight Android application](http://sterenlabs.files.wordpress.com/2014/05/beansight-mobile.png?w=180)](http://sterenlabs.files.wordpress.com/2014/05/beansight-mobile.png) Beansight Android application[/caption]

Mobile application are native for iOS and [Android](https://play.google.com/store/apps/details?id=com.beansight.android) and we used jQuery mobile for the mobile web version.
We decided to keep a very simple UI as part of our native mobile apps. We were one of the first apps to use [ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) on Android for example.

We realised quite soon that we needed to build an API, mostly for these mobile apps. Our MVC architecture allowed us to easily create one. Ideally I think the main website should have use it (either client or server side). Anyway, our API code and website code were sharing a lot, thanks to our rich object oriented Models. You can find the API documentation in [a GitHub wiki](https://github.com/beansight/beansight-api/wiki).

We used different hosts. We first started with PlayApps.net, the Platform As A Service offer from the builders of the Play! Framework. We never encountered any issue with it and were very satisfied to not bother about system administration. However, we had to move due to the service closing. Beansight was then running on Gandi Hosting. Here we had to take care about administring our server, which added some pain to the maintenance of Beansight.
Finally, in order to reduce the costs and make it easier to setup as part of the open source process, we made sure it is compatible with the [Heroku PaaS hosting](http://heroku.com/).
Today, Beansight can be easily run on any Linux server or pushed to Heroku with any MySQL database (beansight.com is now using [clearDB](https://www.cleardb.com/) for example).

I hope this code will be useful to somebody. I would be pleased to see you starting a new community from it, building something on top of it, or using it as part of another project.
While a few technical improvements could be done, I think it is still quite reliable, with a pretty well documented source code and good architecture.

**Get all the code [on GitHub](https://github.com/beansight):**



	
  * [Website source code](https://github.com/beansight/beansight-website)

	
  * [Android mobile app source code](https://github.com/beansight/beansight-mobile-android)

	
  * [iOS mobile app source code](https://github.com/beansight/beansight-mobile-ios)


