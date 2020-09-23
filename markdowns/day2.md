---
date: 20200923
---
# Day 2 - Whats new

If you have played around with Vue 2 before and have no clue what Vue 3 has in store. The Vue team have put together a great resource page covering all the new topics! You can find it [here](https://v3.vuejs.org/guide/migration/introduction.html#overview)

Lets take a look and see whats [notable](https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features)

* Composition API
* Teleport
* Fragments
* Emits Component Option
* createRenderer API from @vue/runtime-core to create custom renderers
* SFC Composition API Syntax Sugar (<script setup>) experimental
* SFC State-driven CSS Variables (<style vars>) experimental
* SFC <style scoped> can now include global rules or rules that target only slotted content

Well think this can take a while so i think i know what i will do the upcoming two weeks :P

Lets just take glance at the [composition-api](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) and continue more tomorrow!

So why would we need composition-api? The thing with current Vue 2 application is that we have logic spread out in the component. E.g first declaration in the `data` block then we have some `computed` properties for presentation or filtering of the data. We have some `methods` for e.g fetching data and the some `watchers` to react to different changes. All for the same logic.

When the component gets big it happens that we need to jump up and down to follow the trail of the logic. When building the component it's not really a problem. But looking back on it a few months later or when some other developer wants to dig in. It can a bit of an uphill to figure out how the logic is.

Here is where the composition api comes in. With it we can collocate our logic together to keep it cleaner and easier to maintain.

So for tomorrow we will dig into how we can make use of the composition API to make cleaner code!
