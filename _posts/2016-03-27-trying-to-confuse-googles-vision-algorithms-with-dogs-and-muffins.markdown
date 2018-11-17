---
author: steren
comments: false
date: 2016-03-27 20:28:47+00:00
layout: post
link: http://labs.steren.fr/2016/03/27/trying-to-confuse-googles-vision-algorithms-with-dogs-and-muffins/
slug: trying-to-confuse-googles-vision-algorithms-with-dogs-and-muffins
title: Trying to confuse Google's Vision algorithms with dogs and muffins
wordpress_id: 742
categories:
- Misc.
tags:
- api
- cloud
- funny
- meme
- vision
---

When I saw [this set](https://www.reddit.com/r/funny/comments/49rpkb/dog_or_muffin/) of very similar pictures of dogs and muffins (which comes from [@teenybiscuit](https://twitter.com/teenybiscuit/status/707727863571582978)'s tweets), I had only one question: How would [Google's Cloud Vision API](https://cloud.google.com/vision/) perform on this.

At a quick glance, it's not obvious for a human, so how does the machine perform?  It turns out it does pretty well, check the results in this gallery:

[gallery ids="743,746,747,748,749,821,822,823"]


(also find the album on [imgur](https://imgur.com/a/zLWre))


For almost each set, there is one tile that is completely wrong, but the rest is at least in the good category. Overall, I am really surprised how well it performs.

You can try it yourself online with your own images [here](http://steren.fr/vision-meme/), and of course find the code [on GitHub](https://github.com/steren/vision-meme).

Technically it is built entirely in the browser, there is no server side component except the what's behind the API of course:



	
  * Images are loaded from presets or via the browser's File API.

	
  * Each tile is converted in its own image, and converted to base 64.

	
  * All of this is sent at once to the Google Cloud Vision API, asking for label detection results (this is what matters to us here, even if the API can do much more like face detection, OCR, landmark detection...)

	
  * Only the label with the highest score is kept from the results and printed back into the main canvas.


