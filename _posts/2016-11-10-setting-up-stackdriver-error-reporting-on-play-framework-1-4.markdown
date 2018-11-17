---
author: steren
comments: false
date: 2016-11-10 12:13:44+00:00
layout: post
link: http://labs.steren.fr/2016/11/10/setting-up-stackdriver-error-reporting-on-play-framework-1-4/
slug: setting-up-stackdriver-error-reporting-on-play-framework-1-4
title: Setting up Stackdriver Error Reporting on Play Framework 1.4
wordpress_id: 909
categories:
- Cadeaux entre nous
- Google Cloud Platform
- Stackdriver
tags:
- crash reporting
- error reporting
- exception reporting
- java
- open-source
- play framework
---

Here is how I setup [Stackdriver Error Reporting](https://cloud.google.com/error-reporting/) for my application running [Play Framework](https://www.playframework.com) 1.4:

My goal was to capture any Java exception in my production application and report it to Stackdriver Error Reporting for automatic exception monitoring and alerting.

I use the very simple Stackdriver Error Reporting [report API](https://cloud.google.com/error-reporting/reference/rest/v1beta1/projects.events/report): just send error stack traces using an HTTP POST request and an API key.

After creating a project and getting an API key in the [Google Cloud Console](https://console.cloud.google.com/), I instrumented my Play Framework application to catch all exceptions, format them in the expected structure and POST them to Stackdriver.  (make sure you are using at least JDK v1.7)

Here is the code I added to my main application controller:

https://gist.github.com/steren/9753aa84d6a3059a360f7a77a20e2999

A short amount of time after deploying this code, I started receiving alerts that new errors were occurring in my production application:

[caption id="attachment_939" align="alignnone" width="2254"]![screen-shot-2016-11-10-at-1-04-09-pm](https://sterenlabs.files.wordpress.com/2016/11/screen-shot-2016-11-10-at-1-04-09-pm.png) Screenshot of Stackdriver Error Reporting: 2 different errors occurred in my Play Framework app in the last 6 hours. The first one happened 42 times.[/caption]

I was not aware of these application errors, now I have better visibility into their impact and will be able to prioritize what to fix.

My website ([Cadeaux entre nous](http://cadeaux-entre-nous.fr), to organize Secret Santas), has been running on Heroku for years and has huge usage spikes around christmas. This will help me make it more stable.

_Disclaimer: I am a Product Manager at Google, working on Stackdriver_
