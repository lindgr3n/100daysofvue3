---
date: 20201007
---

# Day 16 - CSS Variables

Looks like we now have support for state driven variables! This is another SFC syntax sugar that we can use.
If we look at the [basic-example](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-style-variables.md#basic-example)

```vue
<template>
  <div class="text">hello</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style vars="{ color }">
.text {
  color: var(--color);
}
</style>
```

We can now specify variables that can be used inside our css. With vue-cli we can try it out with a single component.
