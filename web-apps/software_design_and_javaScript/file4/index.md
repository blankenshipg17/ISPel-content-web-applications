---
layout: post
title: Software Design and JavaScript
---

## JavaScript Basic

* In HTML, JavaScript programs are executed by the web browser.
* A JavaScript program is a list of programming statements.
  * Values: var x = <mark>8</mark>;
  * Operators: var x <mark>=</mark> 8;
  * Expressions: any valid set of literals, variables, operators, and expressions that evaluates to a single value. E.g., x = 7; 3+4
    * <mark>Conditional Expressions:</mark> var status = (age >= 18) ? "adult" : "minor"
  * Keywords: for, if … else
  * Comments: after //, won’t be executed.
* Semicolons (;) separate JavaScript statements.
* For best readability, programmers often like to avoid code lines longer than 80 characters. => break a line after an operator.
* Example 19

{% include marginfigure.html id="MVC" url="web-apps/software_design_and_javaScript/file4/js1.png" description="Object literal Example
Figure Credit: <https://www.dyn-web.com/tutorials/object-literal/>" %}

## Group Activity 4: 5 minutes
* Work on Example 19
* &lt;form&gt;, &lt;label&gt; and &lt;input&gt; are new, we will come back to them later
* Decide if vampire based on user input values:
  * A user should be able to input numbers
  * The same logic should be applied to determine if a student is a vampire or not.
    * var status = (galic+shadow >= 2) ? "no" : "not sure";
  * Hint: use <mark>.value</mark> to get value of an &lt;input&gt; element and <mark>parseInt(String)</mark> to convert a string to an integer.

![](ga.png)

## Basic Data Visualization: Google Chart
* We have learned how to implement “View” components using tables. Now let's try some fancy methods.
* Google Chart four steps:
  * Import external library
  * Prepare your data in a datatable
  * Choose a visualization method
  * Create an HTML element to render the chart
* Example 20
* A <font color=red>callback function</font> is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

  
{% include marginfigure.html id="MVC" url="web-apps/software_design_and_javaScript/file4/googlechart.png" description="Callback function chart example" %}

## Basic Data Visualization: HW3 View Example
* Example 21
* Dynamically update Google Chart.
* If … else … statement
  * Use <mark>if</mark> to specify a block of code to be executed, if a specified condition is <font color=red>true</font>
  * Use <mark>else</mark> to specify a block of code to be executed, if the same condition is <font color=red>false</font>
  * Use <mark>else if</mark> to specify a new condition to test, if the first condition is false
  * Use <mark>switch</mark> to specify many alternative blocks of code to be executed, check Example 21_1
  
## Basic Data Visualization: HW3 View Example
* JavaScript array.
  * var array_name = [item1, item2, ...]; 
  * Arrary_name[0];
* JavaScript Date data type.
  * new Date(year, month, ...)
  * 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
    * var d = new Date(2018, 11, 24, 10, 33, 30, 0);
    * 11 means December, because month is starting from 0
 * Can also be defined as the below table. E.g., var d = new Date("2015-03-25");
 * var oneDay = 24\*60\*60\*1000; // hours\*minutes\*seconds\*milliseconds
 * var diffDays = Math.abs((dat1.getTime() - dat2.getTime())/(oneDay)); alert(diffDays); //calculate differences


||| [Index](../../)||| [Prev](../file3/)||| [Next](../file5/)|||








