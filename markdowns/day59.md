---
date: 20201119
---

# Day 59 - Tic tac to

Lets continue where we left of yesterday. It was not pretty but lets see where it goes.

Got a confusing error message yesterday `Duplicate identifier 'BoardManager'.ts(2300)` Looking into it it looks like its because of lacking `tsconfig`. If no files section is set it will include all folder so we get conflict between my days folders. Found on StackOverflow - [confusing-duplicate-identifier-typescript-error-message](https://stackoverflow.com/questions/31322525/confusing-duplicate-identifier-typescript-error-message)

Adding a basic tsconfig we don't get the error anymore.
