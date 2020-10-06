---
date: 20200924
---

# Day 3 - Composition API

So yesterday we started to talk about the [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#basics-of-composition-api) and why we need it. Today lets dig into how we can use it!

The entry point for the Composition API for a component is something called `setup` this is called after the props have been resolved.

NOTE: That the setup will not know about the `this` scope, so you will not be able to use `computed properties`, `local state` or `methods`. Hmm so which purpose do the `setup` then fulfill?

Thanks documentation! So the `setup` will take two parameters as input `props` and `context`. Not sure about context but we get to know about it late :)

And everything we return from the `setup` will be exposed to the rest of the component. That is we can reach it inside `computed properties`, `local state` and `methods`. Cool so that's why we can't reach them inside the `setup` function.

Lets give it a shoot and just make a basic component and render it. Accessing some `local data` that we have not defined. Then we add a setup and see if it works.

So our basic application

```html
<div id="composition">Will it {{compositionParameter}}</div>
<script>
    const MyCompositionComponent = {
        setup() {

            // Everything here will be exposed inside our component
            return {}
        }
    }

    Vue.createApp(MyCompositionComponent).mount('#composition')
</script>
```

This will render in a warning. Well you would have guessed that already without running it :)

`[Vue warn]: Property "compositionParameter" was accessed during render but is not defined on instance. at <App>`

So lets see the magic of the Composition API. Lets add our parameter in the `setup` return value. And voilà it works!
So if the `setup` is the initial point of the component it means we could be able to fetch the value from a external function?

Yes we can, cool! How about the external value being async? Making a promise and setting the value afterwards was a bit of a long shoot.
Can the `setup` be async? Nah, would be a bit to good :) It would also be a bit bad because we would block the rendering because the component would not be initialized until all values would have been fetched.

Lets read a bit more because how can we make use of async values inside the setup method. Something that would be the power of it.
I know it! Vue exposes something called [ref](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref)
So the `ref` takes an argument and exposes a `value` property on it. This value property can then be used for its reactivity.

```js
const name = ref("lindgr3n")
console.log(name) // {value: "lindg3n"}
```

Think that's enough for today. Tomorrow we will checkout the power of the `ref`!
