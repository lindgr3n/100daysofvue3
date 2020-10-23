---
date: 20201023
---

# Day 23 - Render function API

So here we are again with the [render function](https://v3.vuejs.org/guide/migration/render-function-api.html#render-function-api).

The main thing that have changed is that a render function now don't receive the render function but is instead like the other tree-shake optimizations done so that it is imported.

```js
// Vue 2 Render Function Example
export default {
  render(h) {
    return h('div')
  }
}
```

In Vue 3 we import it

```js
// Vue 3 Render Function Example
import { h } from 'vue'

export default {
  render() {
    return h('div')
  }
}
```

Will need to play around a bit more with render functions to figure out its powers.
