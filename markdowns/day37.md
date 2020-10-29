---
date: 20201028
---

# Day 37 - Class and style attributes

In Vue 2 `style` and `class` got some special treatment. They where not included in `$attrs`.

If we had the following component

```vue
<template>
  <label>
    <input type="text" v-bind="$attrs" />
  </label>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
```

Using it with `<my-component id="my-id" class="my-class"></my-component>` It would result in

```html
<label class="my-class">
  <input type="text" id="my-id" />
</label>
```

Now in Vue 3 `$attr` contains all elements so we would get the following.

```html
<label>
  <input type="text" id="my-id" class="my-class" />
</label>
```
