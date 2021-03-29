---
layout: post
title: Database and Flask
---

## Database is important!

* A database is an organized <font color=red>collection</font> of data, generally <font color=red>stored and accessed</font> electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques (wiki).
* The most commonly used databases for web applications are those based on the <font color=red>relational model</font>, also called SQL databases in reference to the Structured Query Language they use. In simplest terms, a relational database is one that presents information in tables with rows and columns (oracle).
* In recent years document-oriented and key-value databases, informally known together as NoSQL databases, have become popular alternatives. 

## Relational Database

* Relational databases store data in <font color=red>tables</font>, which model the different entities in the application’s domain. For example, a database for an order management application will likely have customers, products, and orders tables.
* A table has a <font color=red>fixed</font> number of columns and a <font color=red>variable</font> number of rows. The columns define the <font color=red>data attributes</font> of the entity represented by the table. For example, a customers table will have columns such as name, address, phone, and so on. Each row in a table defines an actual data element that assigns values to some or all the columns.

* Tables have a special column called the <font color=red>primary key</font>, which holds a <font color=red>unique</font> identifier for each row stored in the table. Tables can also have columns called <font color=red>foreign keys</font>, which reference the primary key of a row in the same or another table. These links between rows are called <font color=red>relationships</font> and are the foundation of the relational database model.
* <mark>Question</mark>: provide an example that foreign keys refer to the primary keys of a row in the same table.

## Relational Database: entity relationship diagram

![](database.png)
* id = Primary Key
* role_id = Foreign Key
* One-to-many relationship. One role is associate with many users.
* This figure shows a diagram of a simple database with two tables that store users and user roles. The line that connects the two tables represents a relationship between the tables.
* <mark>Question</mark>: Do you still remember the advantages and disadvantages of relational database?

|||[Index](../../)||| [Prev](../)||| [Next](../part2)|||














