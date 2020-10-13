---
date: 20201013
---

# Day 22 - Breaking changes from Vue 2

So with almost every project upgrading a major version of a module will contain some breaking changes.
Same is with going from Vue 2 to Vue 3 there exist some [breaking changes](https://v3.vuejs.org/guide/migration/introduction.html#breaking-changes).

First thing we will look at is the changes in the [global api](https://v3.vuejs.org/guide/migration/global-api.html#global-api).

For e.g declaring a component we would

```js
Vue.component('my-header', {
    template: `<h1>Header</h1>`
})
```

This have some "problems" for e.g. that all instances created by Vue shares the same global configuration.

```js
// this affects both root instances
Vue.mixin({
  /* ... */
})

const app1 = new Vue({ el: '#app-1' })
const app2 = new Vue({ el: '#app-2' })
```

This can also be a issue when testing because it could pollute other test cases. So you will need to restore each test case.

How this is fixed is that Vue now introduce a new [global API](https://v3.vuejs.org/guide/migration/global-api.html#a-new-global-api-createapp). This introduce a "app" behavior by using `createApp`.

```js
import { createApp } from 'vue'

const app = createApp({})
```
