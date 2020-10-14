---
date: 20201014
---

# Day 23 - Global API tree-shaking

Lets continue our journey with the breaking changes when going from Vue 2 to Vue 3.
Another thing i have not needed that much yet is the `nextTick`. Its a way to execute something after the DOM have updated.

In `Vue 2` this was on the global API that is `Vue.nextTick` this is not so great for e.g. three-shaking.

In `Vue 3` they continue using named exports so we need to use `import { nextTick } from 'vue'` so e.g webpack can tree-shake it.

The other global APIs that is affected is

* Vue.nextTick
* Vue.observable
* Vue.version
* Vue.compile
* Vue.set
* Vue.delete
