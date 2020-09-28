---
date: 20200928
---

# Day 7 - Watch

If you know the `watch` property we can use it to react to changes. The same thing we can do inside our `setup` method to react to changes. More information exist by reading the [docs](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch).

The `watch` function takes three arguments

* The property to watch
* A callback function
* Configuration options

So we can set up a basic `watch` that will react when our property change.

```js
Vue.watch(counter, (newValue, oldValue) => {
    console.log('Watched', { counter: counter.value, newValue, oldValue });
})
```

When our counter value changes our method will be triggered.

Tomorrow we will continue our exploration with the last part `computed`.
