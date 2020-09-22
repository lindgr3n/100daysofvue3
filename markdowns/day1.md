---
date: 20200922
---
# Day 1 - Time to go

Yesterday Vue 3 was released :fireworks: More information exist here [🍰 Vue.js v3.0.0 "One Piece" Released!](https://news.vuejs.org/issues/186)
  
So what is a better way when today marks that we have 100 days left of the year! Lets try and give the last 100 days of the year to dive into Vue 3.
  
Main goal would be to refactor my [Heroes of Vue](https://heroes-of-vue.netlify.app/) application to be built with Vue 3. Then we can also make the vue-cli part on the way.

So where do we start?

Lets check the Vue documentation. [Getting started](https://v3.vuejs.org/guide/introduction.html#getting-started) Always a good place to start.

Checking the first example lets try it out in a simple html file.

If you have worked with Vue 2 you will recognize some of the syntax. Ponting at data and mounted methods.

The thing that stands out is the declaration of the application.

```js
const Counter = {
    ...
}

Vue.createApp(Counter).mount('#counter')
```

We just create a variable containing a object and pass it to `Vue.createApp`. Instead of in Vue 2 where we needed to declare a new instance of Vue.

```js
var app = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
})
```

Feels really intuitive, especially if you a familiar with react and functional components.

How do we make use of multiple components?

Lets make for the exercise a button component and a label component and see how that interacts.

First as before we create our "app". Note that we don't mount it directly this time. You will know why soon if you didn't try it already :)

```js
const Counter2 = {
    data() {
        return {
            counter: 0
        }
    }
}

const app = Vue.createApp(Counter2)
```

Then we create our components. Pretty much the same as in Vue 2 with the difference that we just assign it to a variable.

```js
const MyButton = {
    template: "<button><slot></slot></button>"
}
```

Then we need to tell our application what our custom element tags will represent.

```js
app.component('my-button', MyButton)
```

That is why we don't mount the application beforehand. Because if we did we will get a warning `[Vue warn]: Failed to resolve component: my-button at <App>` Meaning that Vue don't know what to do with that element tag.

When both components is registered we mount the app and all is good to go!

So far so good! Lets step it up a bit tomorrow!
