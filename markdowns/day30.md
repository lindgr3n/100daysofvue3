---
date: 20201021
---

# Day 30 - Functional components

Lets dig into [functional components](https://v3.vuejs.org/guide/migration/functional-components.html#functional-components).

The reason we had function components in Vue 2 was mainly for performance reasons. They initialized faster then stateful components. In Vue 3 this is no longer the case and we are recommended to use stateful components.

The documentation gives a good [example](https://v3.vuejs.org/guide/migration/functional-components.html#_2-x-syntax)

```js
// Vue 2 Functional Component Example
export default {
  functional: true,
  props: ['level'],
  render(h, { props, data, children }) {
    return h(`h${props.level}`, data, children)
  }
}

// Vue 2 Functional Component Example with <template>
<template functional>
  <component
    :is="`h${props.level}`"
    v-bind="attrs"
    v-on="listeners"
  />
</template>

<script>
export default {
  props: ['level']
}
</script>
```

Doing the same thing in Vue 3 not looks like

```Vue
<template>
  <component
    v-bind:is="`h${$props.level}`"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: ['level']
}
</script>
```

Will dig into this more later. One of the things i really liked with React was how easy it was to make subcomponents inside a component. For e.g a list we could have the list-items defined inside. Bad for tree-shaking but convenient. Doing the same with Vue was a bit of boilerplate to make it work.
