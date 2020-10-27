---
date: 20201027
---

# Day 36 - Render API listeners

Continue with the Render API but now looking into [listeners](https://v3.vuejs.org/guide/migration/listeners-removed.html#listeners-removed).

A way to provide attributes on another element then the root element one could use `inheritAttrs: false`.
In Vue 3 event listeners are now just attributes prefixed with `on`.

So in Vue 2 we did

```html
<!-- Vue 2 -->
<input type="text" v-bind="$attrs" v-on="$listeners" />
<!-- Vue 3 -->
<input type="text" v-bind="$attrs" />
```
