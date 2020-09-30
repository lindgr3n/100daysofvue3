---
date: 20200930
---

# Day 9 - Teleports

So with the basics of `Composition API` done lets continue with the next part of the new features of `Vue 3`.
Today lets start digging into [Teleport](https://v3.vuejs.org/guide/teleport.html#teleport).

The `teleport` helps us structure our DOM tree in a better way. E.g as the documentation explains it. Think about a modal that we have as a component. When the modal triggers it will render its DOM tree inside its parent. Then we need some kind of css trick to make it appear in the correct place.

With teleport we can tell what parent the component DOM tree should have.

```html
<teleport to="body"><my-component /></teleport>
```

This will render our component as child to the body element. Pretty neat :)

Think i would guess the basics of the Teleport. Tried a basic example but a lot of things to figure out before it could work correctly :) If you want to dig into the teleport code it exist [here](https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/components/Teleport.ts)
