---
date: 20201025
---

# Day 34 - Render API

Lets get back to basic for the render API and figure out how it works.

The render function `h` is something we can use to generate VNodes that Vue uses. Lets check the [attributes](https://v3.vuejs.org/guide/render-function.html#h-arguments)

Here we have the first attribute `tag` that is a html element or a component.
Second we have the props that is the things we e.g use in the template.
Third we have the children that can be a plain string, an array of VNodes or a object for slots.

Playing around I'm starting to get into the structure. The thing i do not manage to get is the slot content. Think we dig into this more tomorrow.
