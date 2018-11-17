---
author: steren
comments: true
date: 2014-04-04 18:23:52+00:00
layout: post
link: http://labs.steren.fr/2014/04/04/priority-for-everyone/
slug: priority-for-everyone
title: Priority for everyone
wordpress_id: 438
categories:
- Prioprepare
tags:
- crypto
- legal
- priority statement
- simple
---

Here is a small but powerful idea I recently helped to concretise: [Priority for everyone](http://rschoenm.github.io/prioprepare/) **Priority statem****ent can be as simple as hashing your document and storing it in a bank transfer.** As an inventor, author, artist, scientist or other creator, you may fear that distributing your work creates a risk that others replace or deny your authorship. Here is a simple solution to this problem:

[caption id="attachment_439" align="alignnone" width="584"][![Compute a hash of a document and store it in a bank transaction.](http://sterenlabs.files.wordpress.com/2014/04/prioprepare-explanation.png?w=584)](http://rschoenm.github.io/prioprepare/) Compute a hash of a document and store it in a bank transaction.[/caption]

Compute a **cryptographic fingerprint** from a document and copy it to the text fields of a **bank transfer**. With such a fingerprint (hash value) stored at a bank there is **evidence of the existence** of the content of a document at a certain point in time. This can be used to e.g. support a proof of priority. I helped the inventor of this idea, Ralf, by setting up a simple landing page explaining the idea, by implementing an online version and by broadcasting the message in some online communities. You can visit the landing page at [this address](http://rschoenm.github.io/prioprepare/). We tried to be as simpel as possible while still explaining how and why it works. I created an online application that is performing a hash computation of a document and outputs the results ready to be copied in a bank statement. It is available [online](http://steren.fr/prioprepare-web/) and as an offline [Chrome app](https://chrome.google.com/webstore/detail/prioprepare/lekjackohbkgfieaaknhdkmjdoofccfi). It was my first Chrome packaged app, it is very pleasant to create simple desktop applications using web technologies and to be able to distribute it so easily. We had great feedback from Reddit's [/r/legal](http://www.reddit.com/r/legal/comments/2202kc/show_rlegal_priority_statement_can_be_as_simple/) and [/r/crypto](http://www.reddit.com/r/crypto/comments/2201cu/show_rcrypto_priority_statement_can_be_as_simple/) communities. But the most interesting discussions came from [HackerNews](https://news.ycombinator.com/item?id=7522069). The main feedback was regarding the Bitcoin cryptocurrency: Instead of storing the hash in a bank statement, the Bitcoin blockchain could be used. We thus wanted to keep things as simple and trustable as possible to understand for the end user. A bank statement goes more into this direction. I hope this idea can spread and be useful to you or people you know.
