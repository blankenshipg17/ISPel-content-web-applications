---
layout: post
title: Software Design and JavaScript
---

## JavaScript: Where
* [Example 16](https://jsfiddle.net/rxb3ao6y/22/)
* [JS](https://jsfiddle.net/rxb3ao6y/23/)
* JavaScript code must be inserted between <font color=blue>&lt;script&gt;</font> and <font color=blue>&lt;/script&gt;</font> tags.
* Head and Body
  * All work.
  * Placing scripts at the bottom of the <font color=blue>&lt;body&gt;</font> element <font color=red>improves</font> the display speed, because script compilation slows down the display.
* External JavaScript <font color=red>advantages</font>:
  * It separates HTML and code
  * It makes HTML and JavaScript easier to read and maintain
  * Cached JavaScript files can speed up page loads

## JavaScript: Get Results from Model
* [Example 17](https://jsfiddle.net/rxb3ao6y/24/)
* [JS](https://jsfiddle.net/rxb3ao6y/25/)
* Functions.
* Dynamically display results.

## JavaScript: A Brief History
* Developed for Netscape by Brendan Eich in 1995, first shipped with Netscape Navigator 2.0B3
* JavaScript was created in <font color=red>2 weeks</font>!
* Standardized as ECMAScript (trademarked scripting-language specification), although standard seems to be only loosely followed by browsers
* Now the “assembly language of the web” (see <http://www.hanselman.com/blog/JavaScriptIsAssemblyLanguageForTheWebSematicMarkupIsDeadCleanVsMachinecodedHTML.aspx>)

## JavaScript: Language Basics
* Language looks very similar to C language family (including Java)
* <font color=red>Basic types</font> include numbers, arrays, objects, strings, booleans
* You can also define a class.

{% include marginfigure.html id="MVC" url="web-apps/MVC_JavaScript/file3/js.png" description="get syntax binds an object property to a function that will be called when that property is looked up. Figure credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" %}

## JavaScript Output
* [Example 18](https://jsfiddle.net/rxb3ao6y/26/)
* Important for debugging
* Four different ways to output information:
  * Writing into an HTML element, using innerHTML.
  * Writing into the HTML output using document.write().
  * Writing into an alert box, using window.alert().
  * Writing into the browser console, using console.log().
* document.write() after an HTML document is loaded, will <font color=red>delete</font> all existing HTML
* The document.write() method should only be used for <font color=red>testing</font>.
* For <font color=red>debugging</font> purposes, you can use the console.log() method to display data.

||| [Index](../../)||| [Prev](../file2/)||| [Next](../file4/)|||













