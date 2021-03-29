---
date: 20201218
---

# Day 88 - Typescript in Vue

When using [Typescript in Vue SFC](https://v3.vuejs.org/guide/typescript-support.html#typescript-support) its important to use `definecomponent` when setting up the component. Also note the `lang="ts"`

Here [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) is create to start up a boilerplate.

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
```
