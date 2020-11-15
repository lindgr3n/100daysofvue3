---
date: 20201115
---

# Day 55 - Typescript

So lets continue where we left of yesterday, playing around with some types.

If you remember yesterday we made som variables. One was a function. I we try and call it `testArrowFunction(str: any, nbr: any): any` we can see that it accepts `str:any` and `nbr: any`. any is typescripts definition like vanilla js. It can be anything.

Let't type our attributes and also correct the return because typescript complains about combining string and number as it should.

Now we can see that we get correct definition. `testArrowFunctionTyped(str: String, nbr: Number): string´
