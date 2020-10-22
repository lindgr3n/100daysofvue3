---
date: 20201022
---

# Day 31 - Async components

In Vue 2 we defined async components by a function that returned a promise

```js
const asyncPage = () => import('./NextPage.vue')
```

In Vue 3 we have gotten the support for functional components so this will not work together with the previous async component. So to solve this we need to wrap it by a new functional helper named `defineAsyncComponent`.

```js
const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))
```
