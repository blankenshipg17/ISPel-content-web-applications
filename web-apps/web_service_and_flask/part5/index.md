---
layout: post
title: Web Service and Flask
---

## HTTP Responses
  * From “RESTful Web Services”
HTTP/1.1 200 OK

Date: Fri, 17 Nov 2006 15:36:32 GMT

Server: Apache

Last-Modified: Fri, 17 Nov 2006 09:05:32 GMT

Etag: "7359b7-a7fa-455d8264

Accept-Ranges: bytes

Content-Length: 43302

Content-Type: text/html

X-Cache: MISS from www.oreilly.com

Keep-Alive: timeout=15, max=1000

Connection: Keep-Alive

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;

&lt;html lang="en"&gt;

&lt;head&gt;
...

&lt;title>oreilly.com -- Welcome to O'Reilly Media, Inc.&lt;/title&gt;

...

## 200

HTTP/1.1 <font color=red>200</font> OK

Date: Fri, 17 Nov 2006 15:36:32 GMT

Server: Apache

Last-Modified: Fri, 17 Nov 2006 09:05:32 GMT

Etag: "7359b7-a7fa-455d8264

Accept-Ranges: bytes

Content-Length: 43302

Content-Type: text/html

X-Cache: MISS from www.oreilly.com

Keep-Alive: timeout=15, max=1000

Connection: Keep-Alive

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;

&lt;html lang="en"&gt;

&lt;head&gt;
...

&lt;title>oreilly.com -- Welcome to O'Reilly Media, Inc.&lt;/title&gt;

...

* HTTP Response Code: Numeric code indicating if the operation succeeded

## Date... Connection

HTTP/1.1 200 OK

.<font color=red>Date: Fri, 17 Nov 2006 15:36:32 GMT</font>

.<font color=red>Server: Apache</font>

.<font color=red>Last-Modified: Fri, 17 Nov 2006 09:05:32 GMT</font>

.<font color=red>Etag: "7359b7-a7fa-455d8264</font>

.<font color=red>Accept-Ranges: bytes</font>

.<font color=red>Content-Length: 43302</font>

.<font color=red>Content-Type: text/html</font>

.<font color=red>X-Cache: MISS from www.oreilly.com</font>

.<font color=red>Keep-Alive: timeout=15, max=1000</font>

.<font color=red>Connection: Keep-Alive</font>

&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;

&lt;html lang="en"&gt;

&lt;head&gt;
...

&lt;title>oreilly.com -- Welcome to O'Reilly Media, Inc.&lt;/title&gt;

...

* <font color=red>HTTP Response Headers</font>: Similar to request headers, name/value metadata pairs with additional response information

## !DOCTYPE...

HTTP/1.1 200 OK

Date: Fri, 17 Nov 2006 15:36:32 GMT

Server: Apache

Last-Modified: Fri, 17 Nov 2006 09:05:32 GMT

Etag: "7359b7-a7fa-455d8264

Accept-Ranges: bytes

Content-Length: 43302

Content-Type: text/html

X-Cache: MISS from www.oreilly.com

Keep-Alive: timeout=15, max=1000

Connection: Keep-Alive

.<font color=red>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"</font>

.<font color=red>"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</font>

.<font color=red>&lt;html lang="en"&gt;</font>

.<font color=red>&lt;head&gt;</font>

.<font color=red>...</font>

.<font color=red>&lt;title>oreilly.com -- Welcome to O'Reilly Media, Inc.&lt;/title&gt;</font>

.<font color=red>...</font>

* Entity-body, representation, payload: The actual result document, here starting from the DOCTYPE declaration

|||[Index](../../)||| [Prev](../part4)||| [Next](../part6)|||


