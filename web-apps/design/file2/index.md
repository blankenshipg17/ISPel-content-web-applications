---
layout: post
title: CSS
---

## What is CSS?

* This is based on W3C tutorial: https://www.w3schools.com/css/
* Cascading Style Sheets (CSS) is a style sheet language used for describing the <font color=red>presentation</font> of a document written in a markup language like HTML (wiki).
  * CSS is a language that describes the <font color=red>style</font> of an HTML document.
  * CSS can be used to design layout for different <font color=red>devices and screen sizes</font>.

## How?
* You need to select something and define a style.
* The selector points to the HTML element you want to style.
* The declaration block contains one or more declarations separated by semicolons.
* E.g.

![](css.png)

* CSS Syntax and Selectors: Example 05
* ID selector vs Class selector vs Grouping Selector
* Try to avoid have two styles for the same element
* HTML tag: &lt;div&gt;
  * defines a division or a section in an HTML document.
  * is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript.

## ID vs Class
* They are like hooks. (pointer in C++)
* ID are unique.
  * Each element can have only one ID
    * E.g. only one &lt;p&gt; has ID “first_paragraph”
  * Each page (html file) can have only one element with that ID
* Class are not unique.
  * You can use the same class on multiple elements.
    * E.g. multiple &lt;p&gt; belong to “self_introduction” class
  * You can use multiple classes on the same element.
    * E.g. a &lt;p&gt; can belong to “self_introduction” class and also “first_paragraph”
* An element can have both an ID and a class.

## How to insert CSS
* Three ways to insert: Example 06
  * Inline style (within tag)
  * Internal style sheet (&lt;style&gt;)
  * External style sheet (external file)
* Do not add a space between the property value and the unit (such as margin-left: 20 px;). The correct way is: margin-left: 20px;

## Where to define your style?
* Which
  * Very short ones
  * A middle size file
  * A very large file
* Cascading Order:
  * Inline style (inside an HTML element)
  * External and internal style sheets (in the head section, the later one)
  * Browser default
* Example 07


||| [Index](../../)||| [Prev](../)||| [Next](../file3/)|||
