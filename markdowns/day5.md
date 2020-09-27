---
date: 2020-09-26
---

# Day 5 - Pass by value or reference

Lets figure out what i did not manage yesterday.

So pass by value is always done with number and value.

So the basic example shows that re-declare the variables inside the function will affect the initial declaration.

So how do this work with objects? When we pass in a object it will pass it with reference so when we change the data inside the function it will affect the initial declaration.

So how will ref help us here? When we declare our number using `ref` and update its value we will update the declared value. That is how we can know that changing our values will correctly be reactive.
