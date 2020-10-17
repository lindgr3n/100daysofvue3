---
date: 20201017
---

# Day 26 - Key changes

In Vue 2 it was recommended to use key on `v-if`/`v-else`/`v-else-if`. Something i have not been thinking about. I have been using it without the key attribute.

In Vue 3 this is not needed anymore because Vue automatically generate a key for you.

Another thing i use rarely is using key on a template tag. This was not possible in Vue 2. But not with Vue 3 we should set it on the template tag and not the children.
