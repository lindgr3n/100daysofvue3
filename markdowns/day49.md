---
date: 20201109
---

# Day 49 - Continue

So did we learn anything yesterday. Well not sure about the implementation. Feels like it was not a composition just a random method we required.
Lets refactor the example a bit...

(Getting coffee)

So this approach feels a lot better. Problem is I overthinked the setup. My composable function should not be using the setup method. It just exposes a object with parameters or methods.
Then in our Vue component we use the setup method to inject and "setup" the needed hooks.

Lets dig into `refs` a bit more tomorrow.
