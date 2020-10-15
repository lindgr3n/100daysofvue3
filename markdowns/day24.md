---
date: 20201015
---

# Day 24 - v-model changes

When using [v-model](https://v3.vuejs.org/guide/migration/v-model.html#v-model) you can remember that it is just a short hand for value `prop` and `input` event. This could be changed by using the model prop.

```vue
<my-component v-model="counter"></my-component>
<!-- shorthand for -->
<my-component :value="counter" @input="counter = $event"></my-component>
```

This have now changed to be using `modelValue` prop and `update:modelValue` event. To clarify `modelValue` can be any key as you will see.

The bad thing about the old v-model was that we could only have one model value. This is something that now have changed!

As we can see below we can use any model name.

```vue
<my-component v-model:counter="counter"></my-component>
<!-- shorthand for -->
<my-component :counter="counter" @update:counter="counter = $event"></my-component>
```
