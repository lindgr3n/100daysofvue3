---
date: 20201016
---

# Day 25 - v-model .sync

The [sync modifier](https://v3.vuejs.org/guide/migration/v-model.html#using-v-bind-sync) was a way to make use of a similar way of multiple v-model

```vue
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
<!-- Shorthand for  --->
<ChildComponent :title.sync="pageTitle" />
```

What you notice here is something like the new v-model syntax.
So for migrating away from .sync. So to migrate one can just remove the sync and use the new attribute for the v-model.

```vue
<ChildComponent v-model:title="pageTitle" />
```
