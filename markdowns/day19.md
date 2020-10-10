---
date: 20201010
---

# Day 19 - SFC sugar

So lets continue our journey by using the [example project](https://codesandbox.io/s/100daysofvue3-9yql8?file=/src/App.vue) we had yesterday. 

This time we will checkout the lesson learned in day 16 - Scoped styles.

My first try

```vue
<template>
  <div class="box">

  </div>
  <input type=color v-model="bg" />
</template>

<script setup>
  import {ref} from "vue";
  export const bg = ref("#000000");

</script>

<style vars={bg}>
.box {
  height: 100px;
  width: 100px;
  background-color: --bg
}
</style>
```

The thing I forgot was that we need to declare our css variables with `var()`. So changing
`background-color: var(--bg)` fixed the issue. This is something i have felt the need before. Feels like this can be a powerful addition.
