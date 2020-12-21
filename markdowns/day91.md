---
date: 20201221
---

# Day 91 - How the composable should work

Now we get into more detail on how to use our composable. Feels like it should be a good idea to check think about on what the composable should return. How can our useAnnyang composition be exposed.

We want the consumer to be able to inject different methods. basically wrapper around the annyang different methods. Can we provide them with a enum maybe? Then we can customize it a bit to make it easier for the user to just expose a method that calls when we get a match.
