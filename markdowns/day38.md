---
date: 20201029
---

# Day 38 - Where to go from here

So the things we have left on the [https://v3.vuejs.org/guide/migration/introduction.html](migration guide) is the [minor-changes](https://v3.vuejs.org/guide/migration/introduction.html#other-minor-changes) and [removed APIs](https://v3.vuejs.org/guide/migration/introduction.html#removed-apis).

Thing i notice is the life-cycle methods `destroyed` and `beforeDestroy` is now renamed `unmounted` and `beforeUnmounted`.

Data is always needed to be declared as a function that returns an object.

Watching an array will only trigger when the array is replaced. For triggering on mutation you need to use the `deep` option.
