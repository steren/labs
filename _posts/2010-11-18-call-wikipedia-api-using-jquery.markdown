---
author: steren
comments: true
date: 2010-11-18 02:12:05+00:00
layout: post
link: http://labs.steren.fr/2010/11/18/call-wikipedia-api-using-jquery/
slug: call-wikipedia-api-using-jquery
title: Call Wikipedia API using jQuery
wordpress_id: 101
categories:
- Open Divers
tags:
- api
- jquery
- mediawiki
- wikipedia
---

I decided to directly use the data from Wikipedia. Many pages contain a structured "_Infobox_" that I will use to gather information I need.

There is a Wikipedia API (more precisely, MediaWiki, the engine of Wikipedia, has an API). I invite you to [read the documentation](http://www.mediawiki.org/wiki/API).

Here are some examples of what can be done using the javascript library jQuery:



	
  * get the source of a page ([API doc](http://www.mediawiki.org/wiki/API:Query_-_Properties#revisions_.2F_rv)):
[sourcecode language="javascript"]$.getJSON("http://en.wikipedia.org/w/api.php?action=query&amp;format=json&amp;callback=?", {titles:pageName, prop: "revisions", rvprop:"content"}, wikipediaPageResult);[/sourcecode]

	
  * get the image names of a page ([API doc](http://www.mediawiki.org/wiki/API:Query_-_Properties#images_.2F_im)):
[sourcecode language="javascript"]$.getJSON("http://en.wikipedia.org/w/api.php?action=query&amp;format=json&amp;callback=?", {titles:pageName, prop: "images"}, wikipediaImageResult[/sourcecode]

	
  * get the HTML formatted content of a page ([API doc](http://www.mediawiki.org/wiki/API:Parsing_wikitext#parse)) (does not follow redirects)
[sourcecode language="javascript"]$.getJSON("http://en.wikipedia.org/w/api.php?action=parse&amp;format=json&amp;callback=?", {page:pageName, prop:"text"}, wikipediaHTMLResult);[/sourcecode]


It is important to note the needed "&callback=?" in the query (it will tell jQuery to use [JSONP](http://en.wikipedia.org/wiki/JSONP), a way to do cross-site javascript call), thanks to [stackoverflow](http://stackoverflow.com/questions/3873636/no-response-from-mediawiki-api-using-jquery) for this tip.

Note that to get the HTML content of a wiki page using javascript from the browser, I cannot use the "action=render" [parameter of index.php](http://www.mediawiki.org/wiki/Manual:Parameters_to_index.php) because of the [Same Origin Policy](http://en.wikipedia.org/wiki/Same_origin_policy). I had to use the API to do it client side. I think I will rewrite my system to do this call server-side.

In the end, check [my gist on github](https://gist.github.com/704540) to get the full code of how to import a Wikipedia Page in javascript.
