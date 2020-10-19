---
layout: post
title: Web Service and Flask
---

## Web Services Transport Protocols

* Almost all web services use <font color=red>HTTP</font> as the transport protocol!
* Some alternate formats exist over custom protocols, but they are so rare we will just ignore them

* A web service protocol stack is a protocol stack (a stack of computer networking protocols) that is used to <font color=red>define, locate, implement</font>, and make Web services <font color=red>interact</font> with each other (wiki).
* HTTP provides the basic mechanism for requesting and providing web resources

## HTTP Requests

GET /index.html HTTP/1.1

Host: www.oreilly.com

User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12)...

Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,...

Accept-Language: us,en;q=0.5

Accept-Encoding: gzip,deflate

Accept-Charset: ISO-8859-15,utf-8;q=0.7,*;q=0.7

Keep-Alive: 300

Connection: keep-alive

## GET

.<font color=red>GET</font> /index.html HTTP/1.1

Host: www.oreilly.com

User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12)...

Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,...

Accept-Language: us,en;q=0.5

Accept-Encoding: gzip,deflate

Accept-Charset: ISO-8859-15,utf-8;q=0.7,*;q=0.7

Keep-Alive: 300

Connection: keep-alive

* HTTP Method: 
  * GET here, also referred to as the “HTTP <font color=red>Verb</font>” or “HTTP <font color=red>Action</font>”, lets us tell the server how it should process the message

## /index.html

GET <font color=red>/index.html</font> HTTP/1.1

Host: www.oreilly.com

User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12)...

Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,...

Accept-Language: us,en;q=0.5

Accept-Encoding: gzip,deflate

Accept-Charset: ISO-8859-15,utf-8;q=0.7,*;q=0.7

Keep-Alive: 300

Connection: keep-alive

* <font color=red>Path:</font> 
  * The part to the right of the server name, given as a URL/URI, lets us tell the server what resource we are requesting

## Host...

GET /index.html HTTP/1.1

.<font color=red>Host: www.oreilly.com</font>

.<font color=red>User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12)...</font>

.<font color=red>Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,...</font>

.<font color=red>Accept-Language: us,en;q=0.5</font>

.<font color=red>Accept-Encoding: gzip,deflate</font>

.<font color=red>Accept-Charset: ISO-8859-15,utf-8;q=0.7,*;q=0.7</font>

.<font color=red>Keep-Alive: 300</font>

.<font color=red>Connection: keep-alive </font>

* <font color=red>Request headers:</font> 
  * key/value pairs with metadata describing the request

* <font color=red>Entity body/document/representation:</font> 
  * Detailed information about our request — none here, everything with a GET request goes <font color=red>into the path</font>

|||[Index](../../)||| [Prev](../part3)||| [Next](../part5)|||


