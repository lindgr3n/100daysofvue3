---
date: 20201014
---

# Day 13

Second we got [modifiers](https://v3.vuejs.org/guide/component-custom-events.html#handling-v-model-modifiers).
To catch the custom modifier we need to use a new prop named same as our custom v-model but with the postfix `Modifiers`. So if we have `v-model="firstName.capitalize"` we need two props `firstName` and `firstNameModifiers`

