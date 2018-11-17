---
author: steren
comments: true
date: 2011-05-07 13:11:53+00:00
layout: post
link: http://labs.steren.fr/2011/05/07/image-processing-with-javascript/
slug: image-processing-with-javascript
title: 'Image processing with Javascript '
wordpress_id: 279
categories:
- Misc.
tags:
- image
- javascript
---

I'm used to do image processing using Matlab or OpenCV. But today, I prefer using web technologies because sharing and debugging is easier.

How to do image processing using Javascript ?

The [canvas API](https://developer.mozilla.org/en/html/canvas) is good to manipulate pixels, however, a library with the most common operations would be great.
I spotted two libraries: [PaintbrushJS](https://github.com/mezzoblue/PaintbrushJS) and [Pixastic](https://github.com/jseidelin/pixastic).





  * PaintbrushJS simply allows to apply filters to images on the page, that's it.


  * Pixastic is more flexible, offers more filters and features. And you can easily call a filter in your Javascript code.



But because of its simplicity when reading the code, I started some experimentations using PaintbrushJS. 

After a few minutes, I noticed that the matrix convolution operation was not correct in this library. So I fixed it in [my branch](https://github.com/Steren/PaintbrushJS). Feel free to use it.
