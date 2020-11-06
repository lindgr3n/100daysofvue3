---
date: 20201106
---

# Day 46 - Back to refactoring

Let get back to the example we where doing yesterday.
The issue i got stuck on before was the warning below.

```console
[Vue warn]: Component is missing template or render function.
  at <TodoListStatistics>
  at <TodoList>
  at <App>
```

Adding a render function returning null fixes the warning and all is good again :)
