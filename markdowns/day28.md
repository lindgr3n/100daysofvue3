---
date: 20201019
---

# Day 28 - v-bind merge order

When using attributes and v-bind on the same element in Vue 2 the attribute won.

```vue
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="red"></div>

<!-- template -->
<div v-bind="{ id: 'blue' }" id="red" ></div>
<!-- result -->
<div id="red"></div>
```

In Vue 3 they have given us better way to manage this by making the v-bind take precedence.

```vue
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="blue"></div>

<!-- template -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- result -->
<div id="red"></div>
```

So we now can make a mandatory behavior by putting the attribute last and by putting the attribute first we can make a default behavior.
