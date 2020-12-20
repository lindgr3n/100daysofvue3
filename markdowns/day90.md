---
date: 20201220
---

# Day 90 - Still not typing correctly

After fixing the issue that we did not get the import to recognize the import we nog have a issue that we don't get any help for the methods.

`Property 'addCommands' does not exist on type 'typeof import("/Users/johan/Documents/Programmering/HTML5/projects/learn-reading/node_modules/@types/annyang/index")'.Vetur(2339)`

The thing i did to solve this was that i made a new file that wraps the annyang and declare a variable that we then export to be imported so we don't need to declare the variable in each file,

```js
import annyang, { Annyang } from "annyang";
export default annyang as Annyang;
```

Not sure if this is the correct way to do it but seems to solve the issue.
