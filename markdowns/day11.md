---
date: 20201002
---

# Day 10 - Events

Working with events you should always name them kebab-case. For example emitting an camelCase event `myEvent` listening on it with `on="my-event` will not work. Event listeners inside the template will automatically we transformed to lowercase so `myEvent` would be transformed to `myevent` so its better to always use `my-event`.

We can define in the component what events that is [emitted](https://v3.vuejs.org/guide/component-custom-events.html#defining-custom-events).

```js
vm.component('my-component', {
  emits: ['in-focus', 'submit']
})
```

If you don't set up the `emits` property you will get a warning

```bash
Extraneous non-emits event listeners (submit, in-focus) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.
```

We can also [validate an emit function](https://v3.vuejs.org/guide/component-custom-events.html#validate-emitted-events) if we declare the events with a object.
