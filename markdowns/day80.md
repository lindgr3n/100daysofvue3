---
date: 20201210
---

# Day 80 - Soon out of time

Now we only have 20 days left. Time flies. Will continue the next few days to work with the Composition API and typescript. Will push up the Star Wars repo later when I'm done.
Set up typing for a fetch command. Got a good guide here [fetch-with-async-await-and-typescript](https://www.carlrippon.com/fetch-with-async-await-and-typescript/)

Here typescript helped us!

In my setup i wanted to play around to see how good typescript will help us. So added the following in my setup to make a computed property.

```js
setup() {
    const id = ref('');
    const { people, person, getPerson } = useSWPeople();
    watch(person, (val, val2) => console.log(val, val2));

    const name = computed(() => person.name);

    return { id, people, person, getPerson, name };
  },
```

Looks harmless. But we can notice that `person` in this case is our ref so we need to access it with `.value` So we get an error `Property 'name' does not exist on type 'Ref<SWPerson | null | undefined>'.Vetur(2339)`. This clearly helps us to know that its a `ref` so we need to use `.value` and it can also be `null`! So we need to change it to following

```js
const name = computed(() => person.value.name);
```

All good? Nope we get an error. `Object is possibly 'null' or 'undefined'` Remember what i said. It can be null. So we can make use if the new optional chaining.

```js
const name = computed(() => person?.value?.name);
```

Also managed to set up a model for our Star Wars person. What can we manage to do tomorrow!
