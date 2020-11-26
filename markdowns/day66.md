---
date: 20201126
---

# Day 66 - Keep on rolling

Well a-lot of work this week so not that much time to dig into this. Read up a bit in [cannot find module](https://github.com/vuejs/vetur/issues/762) of the problem i noticed yesterday where Vetur do not recognize `vue` import. What i could understand it can be an issue that we made our project not in the root. Can verify that by creating a new project from scratch and check if we get the same error.

...loading

So there we go. What have we learned?

Creating a new project it worked correctly. So it's a bug when the root project is in a subfolder. Configuration issue maybe? Lets just accept the problem for now :)
