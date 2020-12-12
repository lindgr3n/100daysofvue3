---
date: 20201212
---

# Day 82 - Combining the power of the Composition API

My small example here is now that we have one composable that handles connection with persons and one that handles connection with planets.
With that we can now combine it and when we get a person we can use the planet composable to get the home planet for that person.
And if we get a planet we can get the persons living on it.
