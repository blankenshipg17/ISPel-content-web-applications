---
layout: post
title: BootStrap
---

## BootStrap tutorial
* Based on: <https://www.w3schools.com/booTsTrap/default.asp>
* Bootstrap is a free front-end <font color=red>framework</font> for faster and easier web development
* Bootstrap also gives you the ability to easily create responsive designs
* <font color=red>Responsive web design</font> is about creating web sites which automatically adjust themselves to look good on all devices, from small phones to large desktops. (mobile friendly)

## BootStrap
* If you don't want to download and host Bootstrap yourself, you can include it from a <font color=red>CDN</font> (Content Delivery Network).
* MaxCDN provides CDN support for Bootstrap's CSS and JavaScript. You must also include jQuery.

* [Example 11](https://jsfiddle.net/rxb3ao6y/16/)
* Charset UTF-8, represent any character in the Unicode standard
  * A character in UTF8 can be from 1 to 4 bytes long. UTF-8 is backwards compatible with ASCII. UTF-8 is the preferred encoding for e-mail and web pages.
* UTF-16, encode the entire Unicode repertoire.
  * UTF-16 is used in major operating systems and environments, like Microsoft Windows, Java and .NET.
<font color=blue>&lt;&lt;meta&gt;</font> viewport element gives the browser instructions on how to control the page's dimensions and scaling.

Figure credit: https://www.w3schools.com/css/css_rwd_viewport.asp

* “width=device-width” part sets the width of the page to follow the screen-width of the device.
  * Change based on the device type.
* “initial-scale=1.0” part sets the initial zoom level when the page is first loaded by the browser.
* You need to load jQuery.js <font color=red>before</font> BootStrap.js.
* bootstrap.min.css vs bootstrap.css
  * bootstrap.min.css has been minified. This means all the <font color=red>whitespace</font> and other <font color=red>extra characters</font> have been removed. This is commonly done for use in production, to reduce the size of the file. When developing, it is usually helpful to use the unminified version, it is readable.
  * Similarly, bootstrap.min.js vs bootstrap.js

## BootStrap Grid System

Allow maximum 12 columns.
Used to define length of a column, can be applied to an HTML container, such as div.
Follow the rules, automatically mobile-friendly.
![](grid.png)

* The Bootstrap grid system has four classes:
  * <font color=blue>xs</font>
    * (for phones - screens less than 768px wide)
  * <font color=blue>sm</font> 
    * (for tablets - screens equal to or greater than 768px wide)
  * <font color=blue>md</font> 
    * (for small laptops - screens equal to or greater than 992px wide)
  * <font color=blue>lg</font> 
    * (for laptops and desktops - screens equal to or greater than 1200px wide)
* <font color=blue>&lt;div class="row"&gt;</font>
* <font color=blue>&lt;div class="col-*-*">&lt;/div&gt;</font>
* <font color=blue>&lt;div class="col-*-*">&lt;/div&gt;</font>
* <font color=blue>&lt;/div&gt;</font>
* For example: class="col-sm-4"
* [Example 12](https://jsfiddle.net/rxb3ao6y/17/)
  * <font color=blue>.container-fluid</font> 
    * for a full width container, spanning the entire width of the viewport.
* Demo the mobile-friendly test in Firefox and Google Chrome.

||[Index](../../../)||| [Prev](../file4)|||[Next](../file6)|||


