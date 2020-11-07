---
date: 20201107
---

# Day 47 - Refs

we have a-lot of control in Vue using props and events but we can get into scenarios where we want to target a specific child element. Here is where ref comes into play.
By setting `<input ref="input" />` we can target the element by using `this.$refs.input`.

For example if we want the input field being focused at mount.
