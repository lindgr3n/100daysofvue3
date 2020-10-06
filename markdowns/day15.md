---
date: 20201006
---

# Day 15 - Composition API syntax sugar

When using the composition API we remember in day 3 that we need to use the setup method.
Expressing our variables and methods and exposing them in a return.

Looking at the documentation at it's [basic example](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md#basic-example) used together with a SFC.

````vue
<template>
  <button @click="inc">{{ count }}</button>
</template>

<script setup>
  import { ref } from 'vue'

  export const count = ref(0)
  export const inc = () => count.value++
</script>
```

If we look at that code example we notice we don't need to return the `count` and `inc`. Also we don't need to setup a default export.

It also supports exposing custom [components](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md#exposing-components) when using exports.

`export { default as Foo } from './Foo.vue'` would be the same as importing the component and the exposing it in the component attribute.

One thing that feels a bit strange is to [declare props](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md#declaring-props-or-additional-options). Will need to dig into this when i get to play around a bit more with SFC.
