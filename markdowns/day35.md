---
date: 20201026
---

# Day 35 - Render API slots

Lets take another step back and make some "standard" templates. Then we create the same using a render function.

Usage `<test-component class="red">WOHOO</test-component>

```vue
<template>
    <h1><slot></slot></h1>
</template>
```

```js
render() {
    return h('h1' {c}, this.$slots.defaul())
}
```

So think this implementation tells a bit about it

````js
const LayoutRender = {
    render() {
        return Vue.h('div', {}, [Vue.h('slot', { name: "header" }, this.$slots.header()), Vue.h('slot', {}, this.$slots.default())])
    }
}
// <div><slot name="header"></slot><slot></slot></div>
```

We render a div with two slot children inside. And finally i got it i think :)

We make the final test by representing our layout-render by rendering it with LayoutComponent with targeting the slots.

```
const LayoutRenderUsage = {
    render() {
        return Vue.h(LayoutComponent, {}, {
            header: () => Vue.h(TestRender, { class: "red" }, 'WOHOO'),
            default: () => 'Render usage Content'
        })
    }
}
/*
<layout-render>
    <template v-slot:header>
        <test-render class="red">WOHOO</test-render>
    </template>
    <template v-slot:default>
        Render content
    </template>
</layout-render>
*/
```
