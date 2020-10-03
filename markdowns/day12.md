---
date: 20201003
---

# Day 12 - v-model

As we remember [v-model](https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments) is a shorthand for value/checked and input/change event. 
Now we have more control over the `v-model`. E.g. `<my component v-model:title />` then our component wants a `title` prop and it will emit an `update:title` event. Feel this will make it easier to control how `v-model` works.

We also now have support for [multiple v-model](https://v3.vuejs.org/guide/component-custom-events.html#multiple-v-model-bindings) bindings. Something that will make it even more easier to use v-model.