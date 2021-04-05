---
layout: post
title: Web Service and Flask
---

## Template Engine: Jinja2

* Jinja2 is a full featured template engine for <font color=red>Python</font>.
* It has full <font color=red>unicode</font> support, an optional integrated sandboxed execution environment, widely used and <font color=red>BSD</font> licensed.
* The BSD: originally developed at the University of California at Berkeley (UCB)—(1) one should not claim that they wrote the software if they did not write it and (2) one should not sue the developer if the software does not function as expected or as desired.
* Flask uses Jinja2 to dynamically generate a html file.

* Placeholders for the dynamic content, enclosed in {{ ... }} sections. 
* Example 36_1: 
  * How to avoid repeat code for navigation bar
  * base.html
* Display which one is activated.
* Debugging information display.
* Check variable value
* Where Pin is used.

## Flask and SOA

* A question about if two “get” requests.
* To make it clear: Example 37.
* Python:
  * time.sleep(N): wait for N seconds
* href=“/” does not mean the URL is only “/” => “127:0.0.1:5000/”
* Similarly, href=“/background” does not mean the URL is only “/background” => “127:0.0.1:5000/<font color=red>background</font>”
* Multithreading in JavaScript: <https://medium.com/techtrument/multithreading-javascript-46156179cf9a>
  * secure_filename(): “never trust user input”, avoid dangerous filenames (hacker attacks). 
  * E.g.: filename = "../../../../home/username/.bashrc“
    * 'home_username_.bashrc'
  * .bashrc is a shell script that Bash runs.
* How to define configuration attribute globally: <http://exploreflask.com/en/latest/configuration.html>

## Preview a CSV file
* Example 38
  * PLACE LINK HERE
* Organize uploaded data into a table
  * Jinja2: for loop
  
## Final Group Project: Part 3
 
* Implement your web app based on your design in your Final Group Project: Part 2
* Your application must use what we have learned in this class, such as Flask and jQuery,  and also have a database.
* Demo Day: 
  * TBD, either April 21 or May 3.
* Google Forms will be used to collect opinions from audience.
README: team member names and emails
* <font color=red>Due after April 19 </font>

|||[Index](../../)||| [Prev](../part6)|||






