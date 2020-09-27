---
date: 20200927
---

# Day 6 - Lifecycle methods

Now that we know how we can make our variables reactive inside of our `setup` we can dig into the [lifecycle methods](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup).

The different lifecycle methods that exist can be found in the [lifecycle-diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram).

So inside our setup method we can reach the same lifecycle methods by using the prefix `on`. So e.g. `onMounted`, `onCreated`.
