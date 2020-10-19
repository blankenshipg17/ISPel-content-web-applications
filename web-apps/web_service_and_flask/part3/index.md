---
layout: post
title: Web Service and Flask
---

## What are SOA advantages?

* <font color=red>Advantages:</font>
  * **Service Reusability:** the services can be reused in multiple applications independent of their interactions with other services.
  * **Easy Maintainability:** Since a service is an independent entity, it can be easily updated or maintained without having to worry about other services.
  * **Location Independence:** This approach allows a service to change its location at any time, such as AWS and Azure.
  * **Improved Scalability and Availability:** Multiple instances of a single service can run on different servers at the same time. This increases scalability and availability of the service.
  * **Platform Independence:** SOA facilitates the development of a complex product by integrating different products from different vendors independent of the platform and technology (e.g. node.js JavaScript).
  
## What are SOA disadvantages?

* <font color=red>Disadvantages:</font>
* **Increased Overhead:** Every time a service interacts with another service (e.g. JWT, when a user already logs in), complete validation of every input parameter takes place. This increases the response time and machine load, and thereby reduces the overall performance.
* **Complex Service Management:** The service needs to ensure that messages have been delivered in a timely manner. But as services keep exchanging messages to perform tasks, the number of these messages can go into millions even for a single application. E.g., online shopping application, an item should be sold multiple times.
* **High Investment Cost:** Implementation of SOA requires a large upfront investment by means of technology, development, and human resource.

|||[Index](../../)||| [Prev](../part2)||| [Next](../part4)|||






