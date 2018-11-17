---
author: steren
comments: false
date: 2015-04-20 23:16:24+00:00
layout: post
link: http://labs.steren.fr/2015/04/21/portfolio-polymer/
slug: portfolio-polymer
title: Building a portfolio using Polymer
wordpress_id: 502
categories:
- Portfolio
tags:
- javascript
- Polymer
- portfolio
---

I wanted to give a try to [web components](http://webcomponents.org/), that I think will change the way people create and share UI elements on the web. I chose [Polymer](https://www.polymer-project.org/), a framework that embraces web components and makes them easy to use. And when I want to get familiar with a new web frontend technology, I just rewrite my personal website with it (last time was [Angular](http://labs.steren.fr/2013/09/25/angularjs-portfolio-website/)).

See it live at [steren.fr](http://steren.fr/), get the [code on GitHub](https://github.com/steren/steren.github.com), and compare it to [the previous Angular version](https://github.com/steren/steren.github.com/tree/angular).

Polymer contains many things :



	
  * A [set of browser polyfills](https://www.polymer-project.org/docs/start/platform.html), to enable new browser technologies that are not yet entirely supported by moderns browsers: shadow DOM, templates, HTML imports.

	
  * The [Polymer library](https://www.polymer-project.org/docs/polymer/polymer.html), that is an opinionated way to define and use web components.

	
  * The [core Polymer elements](https://www.polymer-project.org/docs/elements/core-elements.html#core-ajax) which provide basic new UI elements and tools without imposing any specific look and feel.

	
  * The [Paper Polymer elements](https://www.polymer-project.org/docs/elements/paper-elements.html#paper-button), that are an implementation, still incomplete, of the [Material Design guidelines](http://www.google.com/design/spec/material-design/introduction.html).


Each of these points depends on the points above it. I built the portfolio relying on the Paper elements, and thus, on the full Polymer stack.

[caption id="attachment_508" align="aligncenter" width="300"][![Polymer portfolio desktop](https://sterenlabs.files.wordpress.com/2015/03/screen-shot-2015-03-01-at-8-45-53-pm.png?w=300)](https://sterenlabs.files.wordpress.com/2015/03/screen-shot-2015-03-01-at-8-45-53-pm.png) My Polymer portfolio on a desktop device[/caption]

**Responsive**: The layout of the portfolio is responsive: on mobile, the menu is inside a navigation drawer, on a larger browser, it is displayed on the left. This behaviour came put of the box by using the [core-drawer-panel](https://www.polymer-project.org/0.5/docs/elements/core-drawer-panel.html) element.

[caption id="attachment_514" align="aligncenter" width="169"][![steren.fr on Chrome for Android](https://sterenlabs.files.wordpress.com/2015/03/polymer-portfolio-on-android.png?w=169)](https://sterenlabs.files.wordpress.com/2015/03/polymer-portfolio-on-android.png) The Polymer portfolio on Chrome for Android[/caption]

**UI elements:** I used many of the Paper elements to build the parts of the UI: A [Navigation drawer](https://www.polymer-project.org/0.5/docs/elements/core-drawer-panel.html), [tabs](https://www.polymer-project.org/0.5/docs/elements/paper-tabs.html), [icons](https://www.polymer-project.org/0.5/docs/elements/core-icon.html), [header](https://www.polymer-project.org/0.5/docs/elements/core-header-panel.html)... And as in the previous [Angular version](http://labs.steren.fr/2013/09/25/angularjs-portfolio-website/), the content is a set of cards, except that this time, a card is defined by [a custom element](https://github.com/steren/steren.github.com/blob/master/steren-card.html), which make the DOM very clean and meaningful. Also each of these card tag is receiving the style from the Material Design card specification.

**Data service**: A custom element is also used as a data service: it encapsulates fetching the content from a JSON file, using a Polymer helper (the [core-ajax](https://www.polymer-project.org/0.5/docs/elements/core-ajax.html)). While at first it may sounds strange and unfamiliar to fetch a JSON data resource using only an HTML tag, for simple cases I actually think it is a good idea: It reinforces the declarative way of building a page, by declaring its resources in the HTML, not in JS.

**Filtering and sorting**: Filtering and sorting of the cards based on their attributes is also done using Polymer's data binding and filtering, very similar to filters in AngularJS (see the [work list component](https://github.com/steren/steren.github.com/blob/master/steren-work-list.html)). UI elements for filters were available in the [paper elements library](https://www.polymer-project.org/0.5/components/paper-elements/demo.html) and helpers (like [core-selector](https://www.polymer-project.org/0.5/docs/elements/core-selector.html)) exists to ease the extraction and binding of their values.

**Routing:** At the time of writing, Polymer does not provide a routing framework: you cannot bind a state of the URL to a given view state. But because of its design, I could easily combine it with other routing microframework: [page.js](https://github.com/visionmedia/page.js).

**Layout helpers:** Centering things has never been that easy with Polymer: the framework is providing [CSS layout attributes](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html), that allow you to center something vertically or horizontally by adding just one class.

**My first impressions**

After building this simple app, what do I think about Polymer? I really believe custom elements are ideal for adding a fully functional and autonomous UI element in an app without worrying about its dependencies or its its compatibility with your code or its API: you simply import the element and use it as any other HTML element. **The DOM is the API**. This is really great, it's like if the DOM was designed from the beginning to allow this interoperability of UI elements.

However, I feel that building an app only with Polymer forces you to use custom elements too much. Sometimes, what I needed is not a fully isolated element represented as one tag in my HTML, but just a view, that can easily be styled using the global CSS. Because of this, I'm not sure Polymer is designed or should be used as a full featured client side framework.

I think it is really ideal to share and use custom elements and to add data binding capabilities to webpages. I would probably like it to focus on this role and make sure to be compatible with other popular web front-end framework like Angular, letting them handle the app state and complex controllers and services.
