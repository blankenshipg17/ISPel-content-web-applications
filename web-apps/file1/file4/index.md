---
layout: post
title: HTML
---

## W3Schools
* Books or Online Materials?
* W3Schools is an educational website for learning web technologies online.
* Many good tutorials: <https://www.w3schools.com/>
* HTML part is based on w3schools tutorial: <https://www.w3schools.com/html/html_intro.asp>
* I will not cover all details, you are encouraged to check it by yourselves.

## What is HTML?
* HTML is short for <font color=red>Hypertext Markup Language</font> and is the <font color=red>standard</font> markup language for creating Web pages.
* HTML elements are the building blocks of HTML pages.
* HTML elements are represented by <font color=red>tags</font>.
* HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.
* Browsers <font color=red>do not</font> display the HTML tags, but use them to render the content of the page. Content will be displayed, but tag will not be displayed.

## HTML History
* HTML 3.2: Tables, text-flow around image…
* HTML 4.01: multimedia options, scripting languages…
* XHML 1.0: XML improvements (we will learn XML)
* HTML 5: e.g. SVG, canvas and other virtual vector graphics are supported in HTML5, whereas in HTML, using vector graphics was only possible by using it in conjunction with different technologies like Flash, VML, and Silver-light, etc. (we will introduce canvas)

![](HTML.png)

## Let’s do this: First example
* Editor: Sublime-<http://tipsonubuntu.com/2017/05/30/install-sublime-text-3-ubuntu-16-04-official-way/>
* Our first example: example_01.html
* About this example-HTML tags:
  * <font color=blue>&lt;h1&gt;</font>
  * <font color=blue>&lt;p&gt;</font>
  * <font color=blue>&lt;br&gt;</font>
* HTML tags are not case sensitive: <font color=blue>&lt;P&gt;</font> means the same as <font color=blue>&lt;p&gt;</font>.
* Some tags do not need a closing tag, e.g. <font color=blue>&lt;br&gt;</font>
* Even some tags are missing in your HTML file, a browser can still render everything correctly. Try to avoid missing tags, that is not professional.

## Let’s do this: second example
* Our second example: example_02.html
* About this example_02 tags:
  * <font color=blue>href</font>
    * (link) attribute
  * <font color=blue>&lt;p&gt;</font>
  * <font color=blue>&lt;br&gt;</font>
  * <font color=blue>&lt;img&gt;</font> two required attributes: src and alt.
* Try to quote attribute values
  * Good: <font color=blue>&lt;a href="https://www.ecu.edu/"&gt;</font>
  * Not professional: <font color=blue>&lt;a href=https://www.ecu.edu/&gt;</font>
* Double quotes around attribute values are the most common in HTML, but single quotes can also be used.
  * Weird but work: <font color=blue>&lt;p title='John "ShotGun" Nelson'&gt;</font>
  * Common way: <font color=blue>&lt;p title="John 'ShotGun' Nelson"&gt;</font>

## Let’s do this: third example
* Our third example: example_03.html
* <font color=blue>&lt;head&gt;</font> element contains meta information about the document
* Different size of text
* Define your own style (will talk more when we introduce CSS)
* Space and new line do <font color=red>not</font> affect
* Extra space: <font color=brown>&amp;nbsp;</font> (No-break space)
  * Extra two spaces: <font color=brown>&amp;ensp;</font>
  * Extra four spaces: <font color=brown>&amp;emsp;</font>
  * How to view your HTML source? Your browser is a debugger.

## Common Basic Tags
* Tag Descriptions
  * <font color=blue>&lt;!DOCTYPE&gt;</font>
    * Defines the document type

  * <font color=blue>&lt;html&gt;</font>
    * Defines an HTML document

  * <font color=blue>&lt;head&gt;</font>
    * Defines information about the document

  * <font color=blue>&lt;title&gt;</font>
    * Defines a title for the document

  * <font color=blue>&lt;body&gt;</font>
    * Defines the document's body

  * <font color=blue>&lt;h1&gt; to &lt;h6&gt;</font>
    * Defines HTML headings

  * <font color=blue>&lt;p&gt;</font>
    * Defines a paragraph

  * <font color=blue>&lt;br&gt;</font>
    * Inserts a single line break

  * <font color=blue>&lt;hr&gt;</font>
    * Defines a thematic change in the content

  * <font color=blue>&lt;!--...--&gt;</font>
    * Defines a comment

  * <font color=blue>&lt;img&gt;</font>
    * Defines an image in an HTML page.

## There are more tags…
* For example, tags for Table
* Example 4
* Don’t worry about the meaning of <font color=blue>&lt;style&gt;</font>, we will learn it in the next class.
* Other tags: <https://www.w3schools.com/tags/ref_byfunc.asp>
* Table generator: <https://www.tablesgenerator.com/html_tables>
* Tag Descriptions
  * <font color=blue>&lt;table&gt;</font>
    * Defines a table
  * <font color=blue>&lt;caption&gt;</font>
    * Defines a table caption
  * <font color=blue>&lt;th&gt;</font>
    * Defines a header cell in a table
  * <font color=blue>&lt;tr&gt;</font>
    * Defines a row in a table
  * <font color=blue>&lt;td&gt;</font>
    * Defines a cell in a table
    
<!-- <test> -->

|||[Index](../../../)||| [Prev](../file3)|||[Next](tree2)|||








