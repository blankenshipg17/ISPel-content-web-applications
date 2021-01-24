---
layout: post
title: How URL's are Structured
---

## Scheme
* <mark>scheme</mark>://login:password@address:port/path/to/resource?query_string#fragment
* scheme: what protocol is being used?
  * http: standard web browsing, unsecured
  * https: standard web browsing, secured
  * ftp: file transfer protocol
  * others…

## //
* scheme:<font color=red>//</font>login:password@address:port/path/to/resource?query_string#fragment
* // indicates this is a “hierarchical URL”
  * required for hierarchical schemes, like http
  * not required for schemes like mailto
  
  
## login:password
* scheme://<font color=red>login:password</font>@address:port/path/to/resource?query_string#fragment
* login:password provides credentials for authentication
  * we won’t use this in our apps — almost all web applications
  * the password is optional, and so is this entire part
  
## address
* scheme://login:password@<font color=red>address</font>:port/path/to/resource?query_string#fragment
* address: what server are we accessing?
  * this can also be an IP address (<font color=red>127.0.0.1, your local address</font>)
  * this can even be an IPv6 address, but we won’t bother with this
  
## port
* scheme://login:password@address:<font color=red>port</font>/path/to/resource?query_string#fragment
* <font color=red>port</font>:is a way to identify a specific <font color=red>process</font> to which an Internet or other network message is to be forwarded when it arrives at a server.
* Different protocols have different port numbers:
  * FTP 21
  * HTTP 80
  * You can also define your web application port number. We will learn it when we reach the server part.
  
## /path/to/resource
* scheme://login:password@address:port<font color=red>/path/to/resource</font>?query_string#fragment
* <font color=red>path/to/resource</font>: the name of the resource to be loaded
* in some systems, these refer directly to files in the filesystem
  * Example: <http://www.cs.ecu.edu/wu/README.md>
* in others, these paths are interpreted by the servers to indicate “virtual” resources
  * Get a photo and display

## ?query_string
* scheme://login:password@address:port/path/to/resource<font color=red>?query_string</font>#fragment
* <font color=red>query_string</font> provides a way to pass parameters to the resource
* uses HTTP GET parameter mechanism or can be done in JavaScript

## #fragment
* scheme://login:password@address:port/path/to/resource?query_string<font color=red>#fragment</font>
* <font color=red>fragment</font> allows the URL to point to a fragment (piece) of the resource
* common use: point to individual sections of a larger document
  * example: <http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods>
  * note: this is handled on the client side, it is not even supposed to be sent to the server!
  
## URLs
* Usually, you can get some important information from a URL
* Example: https://mail.google.com
  * https: protocol
  * Mail: mail server
  * Google.com: domain name
  * Com: Top Level Domain (TLD), generally intended to be used for commercial businesses (similarly, .gov means goverment and .org means nonprofit organizations)

## TLD and URLs Price
### Something you need to pay attention to:
* <https://google.mail.com>: this is clearly phishing website. Usually, hackers use this trick pretend this is google. Similarly, <https://yahoo.mail.com>... If you know what is a domain name, you can easily tell.
* TLD: Com vs net vs org
  * Com: usually commercial, e.g., google.com
  * Net: usually networking services and internet service providers, e.g., att.net
  * Org: usually non-profit organizations
  * Edu: education institution
  * Gov: goverment
* Of course there are some weird TLDs and cheaper price:
  * Let’s say if you want to register a URL for “piratenation”
  * You can check the price here: <https://tld-list.com/>
  * Price for each year
  * Some weird TLDs do have very cheap price

## Homework 1 (Part 1)
* Good news, you can have a free URL if you are an ECU student!
* Apply a URL: <https://piratepanel.ecu.edu/>
  * Your URL should be something like this: <http://myweb.ecu.edu/student/pirateID>
  * This one is mine: <http://myweb.ecu.edu/wur18/>
  * I will show you how to upload all your files later.
* Due <mark>Feb. 5</mark>


  
||| [Index](../../)||| [Prev](../file2)||| [Next](../file4)|||

















