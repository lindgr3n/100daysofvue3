---
date: 20201130
---

# Day 70 - Star Wars App

Had my talk about Vue 3 today, think it went pretty ok. Would like to have some more examples but. Hope this 100 days challenge is a good start :)
30 days left so what could we do for the last 1/3rd. More Composition API and render functions and also Typescript. Here we just need some good small applications to build. Build small build a lot. Let's do some fun with Star Wars API.

Fist we create a basic vue 3 - typescript project. Next we upload it to a repository on GitHub then we import it to codesandbox to continue our journey.

Running the project on CodeSandbox i got a issue with `tslib`. Adding it as a peerDependencies seem to fix the issue.

```json
"peerDependencies": {
    "tslib": "2.0.3"
},
```

You can find the ongoing project here [Vue 3/Typescript meets Star Wars API](https://codesandbox.io/s/vue-3typescript-meets-starwars-api-gsc1m)

Need to stop for now. Getting into some great example on how to use Typescript with fetch and how we best use the type definitions. More tomorrow!
