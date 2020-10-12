---
layout: post
title: jQurey
---

## jQuery Tutorial
* Based on: https://www.w3schools.com/JQuery/
* jQuery is a JavaScript Library.
* jQuery simplifies your programming: GET, POST request …
* Many of the biggest companies on the Web use jQuery, such as:
  * Google
  * Microsoft
  * IBM
  * Netflix
* jQuery executes the same way in all major browsers.
* Three versions:
  * Regular: jquery.js, Development version - this is for testing and development (uncompressed and readable code)
  * Minimized: jquery.min.js, Production version - this is for your live website because it has been minified and compressed
  * Slim: some features are removed, check this: https://stackoverflow.com/questions/35424053/what-are-the-differences-between-normal-and-slim-package-of-jquery, BootStrap 4 supports slim version

## jQuery: Include
* Two popular ways to include jQuery from a CDN (Content Delivery Network):
  * Google: &ls;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"&gt;&ls;/script&gt;
  * Microsoft: &ls;script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"&gt;&ls;/script&gt;
* CDN advantages:
  * Many users already have downloaded jQuery from Google or Microsoft when visiting another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.
  * If you do not like CDN, you can download jQuery from: <http://jquery.com/download/>

## jQuery: Syntax
* The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
* $(selector).action()
  * A $ sign to define/access jQuery
  * A (selector) to "query (or find)" HTML elements
  * A jQuery action() to be performed on the element(s)
* Example 28: <https://jsfiddle.net/3kche5fy/>
* ready(function(){}) the function will be triggered when something is ready (loaded). Or you may:
  * hide an element that is not created yet
  * Get the size of an image that is not loaded yet

## JSFiddle
* <https://jsfiddle.net/3kche5fy/1/>

||[Index](../../../)||| [Prev](../)|||[Next](file2/)|||





