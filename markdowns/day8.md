---
date: 20200929
---

# Day 8 - The power of the Composition API

Just like before we can use `computed` to create a new variable depending on another variable. E.g for the user not knowing the `computed` property we can use it for  user object containing first and last name. By using a computed we can create a 'fullName => `${user.firstname} ${user.lastname}`'

For our example yesterday we can just try out and make a basic variable that doubles the counter.

So what do we do with all this? Now we have all our logic inside the setup method! Well the thing is that we can move our code into different functions (or composables as in the doc) then we can inside the setup method import our functions and use them in the setup! That way we can reuse different parts of our application.

My small examples is pretty basic but if we extract our counter logic inside a function we can reuse it and make a counter component (with no logic inside!). So we have the logic in one place and the only thing our components do is to import the declarations and expose it to the component.

Will be fun to try this out more!
