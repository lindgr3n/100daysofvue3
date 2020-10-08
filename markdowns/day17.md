---
date: 20201008
---

# Day 17 - Style and slotted content

Another feature together with a SFC is the use of scoped styles that can target slotted content.
Personally i have not really been needing specific rule targeting a child component.

In Vue 2 we could use `>>>` or `/deep/` but did give some confusion. In Vue 3 they have introduced `::v-deep` to make it more clear that it is a specific Vue feature.

Feels like we need to start digging into the SFC to try out this features more.
