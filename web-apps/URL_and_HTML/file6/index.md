---
layout: post
title: Transport Protocols
---
text for tp1: Protocols for sensitive data transportation, hospital

text for tp3: pstn protocol: Public switched telephone network

## Web Services Transport Protocols

* Good news: almost all web services use HTTP as the transport protocol!
* Some alternate formats exist over custom protocols, but they are so rare we will just ignore them.


## The HyperText Transfer Protocol (HTTP)

* The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems (wiki).
* HTTP provides the basic mechanism for <font color=red>requesting</font> and <font color=red>providing</font> web resources.
* To fully understand HTTP and internet physically work, you may need to enroll Networking course…


text for http.png : IP addresses of the sending and receiving computers in the IP header
A good tutorial: https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm

* How HTTP and internet physically work is not required in this class. 
* In this class:
  * You should know HTTP provides the basic mechanism for requesting and providing web resources.
  * You should learn how to use JavaScript and JQuery to send requests and process requests on the server side.

* Here are some commonly used request methods 
* GET
  * Go and grab something
  * no browser payload included
  * used for file retrieval
  * E.g., grab an image from server
* POST
  * used for submitting information
  * often includes a browser payload
  * generally for submitting forms
  * E.g., send a user information to server (login form)
* Payload is the part of that response that is communicating directly to you, usually JSON format data. We will learn what is JSON later.


## Other HTTP Request Types

* PUT: 
  * creates a new resource or replaces a representation of the target resource with the request payload.
  * /device-management/devices/{id} : Update the device information identified by "id"
* DELETE
  * deletes the specified resource
  * /device-management/devices/{id} : Delete device by "id"
* There are some others, such as HEAD, TRACE, CONNECT…
* Note: most of these are not supported by browsers and may be barely supported by servers
* In Flask (we will learn it), you can define your own Requests.

## HTTP Server Response Codes

* When you send a request to a server, it usually responses your request if the request is not blocked (firewall).
* 200-level codes = success!
* 300-level codes = redirections
* 400-level codes = client-side errors (e.g., the dreaded 404 error! client was able to communicate with a given server, but the server could not find what was requested)
* 500-level codes = server-side errors
* More details will be introduced.

|||[Index](../../)||| [Prev](../file5/)|||










