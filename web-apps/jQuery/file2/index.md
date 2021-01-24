---
layout: post
title: jQurey
---

## jQuery: Selector
* Three common methods to select:
  * Element (tag): $("p")
  * Id: $("#vampire_1")
  * Class: $(".human")
* Other methods:
  * Current HTML element: $(this)
  * &lt;p&gt; elements with class=“human“: $("p.human") 
  * First &lt;p&gt; element: $("p:first")
  * all elements with an href attribute: $("&#91;href&#93;")
  * More: <https://www.w3schools.com/JQuery/jquery_selectors.asp>
  * Of course, you can define an Id for whatever element that you want to select.
* Example 28_1

## HTML Canvas & Data Visualization Example
* The HTML &lt;canvas&gt;element is used to draw graphics, on the fly, via scripting.
* The &lt;canvas&gt; element is only a container for graphics. You must use a script to actually draw the graphics.
* Canvas has several methods for drawing paths, boxes, circles, text, and adding images.
* Example 29 draw cells
  * Select canvas: canvasHandle = document.getElementById("myCanvas"); canvas2DContext = canvasHandle.getContext("2d");
  * Change size: canvas2DContext.canvas.height = canvasHeight; canvas2DContext.canvas.width  = canvasWidth;
  * Draw a rectangle: canvas2DContext.rect(cellWidth*i,cellHeight*m,cellWidth,cellHeight);
  * Display contents in the canvas: canvas2DContext.stroke();
  
## Hands-on Activity: Fill Canvas with Color
* 5 Minutes
* Example 30_hole fill colors. TODO:
  * Use toColor to convert a number to a color (hint: canvas2DContext.fillStyle)
  * Display the color to the corresponding cell
* Guess what is in the canvas?
* Color to fill: canvas2DContext.fillStyle
  * Name or hex or rgb works. RGBA does not work here…
  
{% include marginfigure.html id="MVC" url="web-apps/jQuery/file2/png1.png" description="HTML Canvas & Data Visualization Example: Kyle Canyon in Las Vegas, Nevada." %}

## HTML Canvas & Data Visualization Example
* setTimeout(function_name,waiting_ms,input_1,input2,…)
* Example 31 animation
* 2D instead of 3D array
* Application Video: my previous fire project
* Some other examples: 
  * <https://davidwalsh.name/canvas-demos>


||[Index](../../../)||| [Prev](../file1/)|||[Next](../file3/)|||





