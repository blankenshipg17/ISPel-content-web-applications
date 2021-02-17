---
layout: post
title: MVC and JavaScript
---

## Functional vs Non-function Requirements
* Functional requirement: a functional requirement defines a function of a system or its component (Wiki). 
  * Ability to do something. About system <mark>behavior or features</mark> to a user. 
  * E.g., A user should be able to upload the information of a classmate.
* Non-functional requirement: a non-functional requirement is a requirement that specifies <mark>criteria</mark> that can be used to judge the operation of a system, rather than specific behaviors (Wiki). 
  * Specify the system’s quality attributes or characteristics.
  * Typically, it is about: Performance (response time, throughput), Scalability, Reliability, Environment…
  * Simple way: if a requirement is not about a system behavior then, it is non-functional requirement.
  * <mark>Question:</mark> A user should be able to choose different models, such as decision trees, to process input data in the system.
    <!-- * Behavior -->
* Non-functional requirement is usually applied to <mark>a component or the whole system.</mark>

## Functional vs Non-function Requirements
* HW3: Is my roommate a vampire?
* Decide based on four features (shadow, garlic, complexion, and accent)
* In your opinion, which of the following should be functional requirements (behaviors) and which should be non-functional requirements (quality attributes or characteristics)?
  * A user can upload the information of his/her classmate.
    <!-- * Functional -->
  * The backend of the application should be implemented with Flask.
    <!-- * Environmental (non-functional) -->
  * A system manager can easily increase the number of database instances.
    <!-- * Scalability (non-functional) -->
  * The application should be able to generate a JSON file based on the input classmate information.
    <!-- * Functional -->
  * The application should be able to display suspicious classmate names in a table.
    <!-- * Functional -->
  * The system data visualization component should be implemented with D3.js library. 
    <!-- * Environmental (non-functional) -->

## Software Developer and Customer
* It is <font color=red>unusual</font> to code without talking with your customers.
* Weird but true: your customers may not even know what they want… All they want is a working application.
* Need to convert your customers’ ideas into functional requirements and non-functional requirements.
* To further organize these requirements, let’s learn MVC: Model View Control
  * Introduced in the 1970’s into Smalltalk-76, object-oriented, dynamically typed reflective programming language
  * Original paper here: <http://www.ics.uci.edu/~redmiles/ics227-SQ04/papers/KrasnerPope88.pdf>
  * Supported by modern tools, such as ASP.NET

![](MVC.png)
* Image source: <http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>

## Model
* Model component corresponds to all the data-related <font color=red>logic</font> that the user works with. 
* Does not dictate how data is displayed
* E.g., how to process a user’s order

## View
* Views indicate how model data is to be displayed
* A given model can have multiple views.
* Model notifies view when model changes, view responsible for displaying changes to the user

## Control
* Controller dictates how user interacts with model
* View provides actions that use controller to manipulate model (or modify view)
* Controller tells model what should be done.
* <mark>Question:</mark> why we want to split a system into these components? Why not just one component?

## What are the advantages of MVC Architecture?
* Advantages:
  * Faster development process: MVC supports <font color=red>rapid and parallel</font> development. If an MVC model is used to develop any particular web application then it is possible that one programmer can work on the view while the another can work on the controller to create business logic of the web application.
  * Ability to provide multiple views: In the MVC Model, you can create <font color=red>multiple</font> views for a model. E.g., fire simulation results can be visualized in 2D with canvas and 3D with WebGL.
  * Modification does not affect the entire model: For any web application, user interface tends to <font color=red>change</font> more frequently than even the business rules of the company. 
* Paper prototyping defines View and Controller.

## MVC Example: Is my roommate a vampire?
* HW3
{% include marginfigure.html id="MVC" url="web-apps/MVC_JavaScript/MVC2.png" description="MVC Example: Is my roommate a vampire? Decide based on four features (shadow, garlic, complexion, and accent)" %}
* A user can upload the information of his/her classmate.
  * Control
* The application should be able to display suspicious classmate names in a table.
  * View
* A user should be able to process data with different models, such as decision trees and threshold-based methods.
  * Model

## Group Homework 3 (Part 2)
* “Is my classmate a vampire?” Project design
* Decide based on four features (shadow, garlic, complexion, and accent)
* A user can input his/her classmate data and check if the student is a vampire.
* Create a paper prototype.
  * At least have four web pages, such as team member introduction, with four user interactions, such as classmate feature input form.
  * Record the user flow of your paper prototype (maybe with your phone)
* Functional requirements:
  * MVC each component at least four functional requirements
* Non-functional requirements <font color=red>at least</font> four.
* Due <mark>March 3</mark>.

||| [Index](../../)||| [Prev](../)||| [Next](../file2/)|||






















