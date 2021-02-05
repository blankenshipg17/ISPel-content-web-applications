---
layout: post
title: REST and Software Architecture
---

## What is REST?

* REST = Representational State Transfer
* Defined in Roy Fielding’s thesis, chapter 5, available here: http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
* This class is also based on: https://restfulapi.net/
* REST is a software architecture:
  * A <font color=red>hybrid style, combining several architectural</font> styles

## What is RESTful API?

![](rest.png)

## Software architectures

* “A software architecture is an <font color=red>abstraction</font> (high-level) of the run-time elements of a software system during some phase of its operation. A system may be composed of many levels of abstraction and many phases of <font color=red>operation</font>, each with its own software architecture.”
  * Multiple phases: start-up, normal operation, etc
  * Multiple levels, different levels of architectural details
  * Focus is on <font color=red>run-time</font>, separates the discussion of architecture from the static structure of program source code

* “A software architecture is defined by a configuration of architectural elements—<font color=red>components, connectors, and data</font>—constrained in their relationships in order to achieve a desired set of architectural properties.”
  * Components: Elements that process system data
  * Connectors: Elements that connect pieces of the architecture
  * Data: The information used and transformed in the system
  
## Components

* “A component is an abstract unit of software instructions and internal state that provides a transformation of data via its <font color=red>interface</font>.”
  * Software instructions: what the component actually does (<font color=red>behavior</font>)
  * Internal state: impacts behavior, not seen from the outside
  * abstract unit…via its interface: components accessed through an interface, not directly, we see interface and services but not internal states and implementation details (blackbox)
  
## Connectors

* “A connector is an abstract mechanism that <font color=red>mediates</font> communication, coordination, or cooperation among components.”
* <font color=red>transfer</font> data elements between components
* <font color=red>no visible changes</font> to the data — although they may do encoding/decoding steps internally, these are not seen outside the connectors

## Data
* “A datum is an element of information that is <font color=red>transferred</font> from a component, or <font color=red>received</font> by a component, via a connector.” (such as xml and JSON)
  * information transferred to, or received from, a component using a <font color=red>connector</font>
  * does <font color=red>not</font> include internal state information
  * not included in all architectural descriptions, but important for those where data plays a major role (e.g., online purchase system)

## Configurations
* “A configuration is the structure of <font color=red>architectural relationships</font> among components, connectors, and data during a period of system run-time.”
  * <font color=red>represents</font> collections of interacting components and connectors
  * <font color=red>constrains</font> how components interact
  * allow distinguishing between a given “state” versus the universe of possibilities for component/connector structuring

## Design Patterns

* Design patterns, pattern languages are used to describe commonly recurring programming <font color=red>scenarios</font>.
* Styles give a similar shorthand to describing possibly complex configurations and <font color=red>interactions</font>

PLACE EXAMPLE 44 HERE

|||[Index](../../)||| [Prev](../)|||














