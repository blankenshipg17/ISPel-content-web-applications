---
layout: post
title: Web Service and Flask
---

## HTTP Server Response Codes

* 200-level codes = success!
* 300-level codes = redirections
* 400-level codes = client-side errors (e.g., the dreaded 404 error!)
* 500-level codes = server-side errors

## HTTP Server Response Codes in Detail

* <font color=red>200</font> (OK): Everything is fine, the response has the information you requested (if any)
* <font color=red>400</font> (Bad Request): There is a problem in the client request, there may be error information in the response
* <font color=red>500</font> (Internal Server Error): There is a problem on the server side, there may be error information in the response (but, it may not help much unless you control the server)
* <font color=red>301</font> (Moved Permanently): Your request moves a resource, or you are asking for the moved resource
* <font color=red>404</font> (Not Found): You are asking for something that isn’t there, the server doesn’t know what it is
* <font color=red>410</font> (Gone): You are asking for something that used to be there that the server is aware of
* <font color=red>409</font> (Conflict): The client request would leave resources in an inconsistent state. For example, you may get a 409 response when uploading a file which is <font color=red>older</font> than the one already on the server resulting in a version control conflict.

* <font color=red>SOAP web services</font> just use <font color=red>200</font> for success and <font color=red>500</font> for all failures; to find out what went wrong, you need to look at the response
* RESTful web services should use <font color=red>at least</font> 200, 400, and 500, and may use a large number of other response codes
* Many 200 codes are used for normal operations, like deletes or requests that do not update client info

|||[Index](../../)||| [Prev](../part5)||| [Next](../part7)|||






