---
layout: post
title: Web Service and Flask
---
## What are web services?

* A web service is a generic term for a software function that is <font color=red>hosted at a network addressable location</font>. E.g. randomly generate presentation orders of N teams. In this general sense it can imply a <font color=red>Cloud based service</font>, a Utility service or even a departmental application. The term web service can also be used in a more specific sense, such as a hosted service using <font color=red>SOAP</font> which is described using a WSDL (Web Services Description Language) document. It is this more specific meaning that is usually implied by the term web services. However, the more general term is often used by the <font color=red>JSON</font> community when describing JSON based services. JSON web services uses the term in its generic sense (IBM).

## Differences: SOAP and JSON
* The content of a SOAP message is <font color=red>XML</font> data, whereas a JSON message contains <font color=red>JSON</font> data. JSON and XML are different encoding mechanisms for describing structured data. JSON tends to be a more <font color=red>efficient encoding mechanism</font>, so a typical JSON message will be <font color=red>smaller</font> than the equivalent XML message.
JSON is <font color=red>easy to integrate</font> in JavaScript applications, but XML isn't. This makes JSON a preferred data format with many web application developers.
SOAP provides a mechanism to add <font color=red>Headers</font> to a message, and a family of specifications for qualities of service (such as security configuration, and distributed transactions). JSON <font color=red>does not</font> provide this mechanism, it instead relies on the services of the underlying HTTP network protocol. This results in fewer options for securing and configuring a workload.
SOAP web services are described using <font color=red>WSDL documents</font> (an XML format). JSON web services are structured less formally; they tend to <font color=red>be loosely coupled</font> and prefer documentation by example.
SOAP web services have an <font color=red>explicit error format</font> involving SOAP Fault messages. There's no equivalent for JSON.

## Similarities: SOAP and JSON
* Implementation of JSON is often derived from the SOAP architecture, and shares many of the concepts and artifacts. E.g., The CICS IBM enterprise application servers.
* Both involve offline utility programs that assist with mapping application data to and from the external data representation. For example, convert data into a database table.


|||[Index](../../)||| [Prev](../)||| [Next](../part2)|||














