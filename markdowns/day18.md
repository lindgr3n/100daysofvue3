---
date: 20201009
---

# Day 18 - SFC

So lets start and dig into some SFC components by making it simple and using Vue 3 template on [codesandbox](https://codesandbox.io/s/vue-3)! Can find it [here](https://codesandbox.io/s/100daysofvue3-9yql8?file=/src/App.vue)

Lets start with the setup script we learned in Day 15.

If we remembered we could use `<script setup>` to remove some boilerplate. So my initial try

```vue
<template>
    {{text}}
</template>

<script setup>
    const text = "WOHOO"
</script>
```

That failed... Forgot that you need to export the variable.
Coming from Vue 2 it feels more correct to be using `export default` but thing the less boilerplate needed will be a winner.
