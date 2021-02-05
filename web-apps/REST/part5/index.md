---
layout: post
title: REST and Software Architecture
---

## REST Resource Methods
* Roy Fielding has never mentioned any recommendation around which method to be used in which condition. All he emphasizes is that it should be <font color=red>uniform interface</font>.
  * E.g.: GET/PUT/POST/DELETE
* Ideally, everything that is needed to <font color=red>change the resource state</font> shall be part of API response for that resource – including methods and in what state they will leave the representation.

## <font color=red>REST != HTTP</font>
* In the <font color=red>REST</font> architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs). 
* RESTful applications should be simple, lightweight, and fast.
  * Resources are decoupled from their representation so that their content can be accessed in a <font color=red>variety of formats</font>, such as HTML, XML, plain text, PDF, JPEG, JSON, and others. <font color=red>Metadata</font> about the resource is available and used, for example, to control caching, detect transmission errors, negotiate the appropriate representation format, and perform authentication or access control. And most importantly, every interaction with a resource is <font color=red>stateless</font>.
* The resources are acted upon by using a set of simple, <font color=red>well-defined operations</font> (e.g. GET/POST). The clients and servers exchange representations of resources by using a standardized interface and protocol – typically <font color=red>HTTP</font>.

## PostgreSQL and Flask
* Example 45: <https://github.com/ruiwu1990/db_docker>

## REST Data Elements
![](data.png)
## REST Connectors
![](connectors.png)
## REST Components
![](components.png)

## REST: Three views
* Process view: how do components interact?
  * Processes connect in a pipe-and-filter style, each request may include different processes
* Connector view: how do components communicate?
* Data view: what is the application state as data flows through the components?

|||[Index](../../)||| [Prev](../part4/)|||














