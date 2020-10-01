---
date: 20201001
---

# Day 10 - Fragments

Yesterday we digged into [Teleports](https://v3.vuejs.org/guide/teleport.html#teleport) and how we can use it to structure our DOM tree a bit better.

Today we are going into the next part of the new features of Vue 3 that is [Fragments](https://v3.vuejs.org/guide/migration/fragments.html#fragments).

Remember in Vue 2 when you wanted to have multiple elements as siblings in a component? That we couldn't do because a template could only have one root element.

```html
<template>
    <div>
        <header>...</header>
        <main>...</main>
        <footer>...</footer>
    </div>
</template>
```

Here is where fragments come in! With `framgents` we now can do just this!

```html
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```

The thing we need to note it that with this we need to specify the element where attributes should be distributed.
