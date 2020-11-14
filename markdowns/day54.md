---
date: 20201114
---

# Day 54 - What to do

Im a bit stuck today. Not sure what i want to do. Think we just take a coffee and read some [Vue 3 documentation](https://v3.vuejs.org/guide/component-registration.html#component-registration) :)

Well i can't really forget [Typescript](https://www.typescriptlang.org/). Something i have thought about giving a shoot again. Last used it for around five years ago. Now with Vue 3 written in typescript it can be a good idea to start working with it.

Lets dig into [Typescript](https://www.typescriptlang.org/) the coming days so we can get back to Vue 3 and how we can use it together with Vue. How long do you think we need to get the hang of Typescript? :) 5 days? Let's go!

Lets start with the most basic thing

```ts
let testString = "test";
let testNumber = 1
const testFunction = function (str, nbr) { return str + nbr }
const testArrowFunction = (str, nbr) => str + nbr
```

Then we redeclare `testString = testNumber`

If we where in a norma `.js` file nothing would be noticed. But if we make a `.ts` file we get a notification that

```txt
let testString: string
Type 'number' is not assignable to type 'string'.ts(2322)
```

This is done in VSCode that have great Typescript support out of the box. So we did not even need to declare the variables.

If we use the compiler to compile the `ts` file to a `js` file we also get an error.

```bash
$ npx tsc index.ts
index.ts:6:1 - error TS2322: Type 'number' is not assignable to type 'string'.

6 testString = testNumber;
  ~~~~~~~~~~

Found 1 error.
```

Lets fix it by using redeclaring to another string variable. Then we get no errors.

Now running the `tsc` command it all works. Looking at the result we see that it is compiled down to ES5. No arrow functions and no const.
Lets check the default `tsc` configuration. Default it uses `commonjs` or `ES5` as target.

Lets create a configuration file and

```json
{
    "compilerOptions": {
        "target": "es2015"
    },
}
```

and then running `npx tsc tsconfig.json`. No difference? Hmm...

Running `npx tsc --project tsconfig.json` it works. So not sure where `tsc` gets its configuration file default.

