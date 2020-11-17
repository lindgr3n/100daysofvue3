let testString = "test";
let testString2 = "test2";
let testNumber = 1
const testFunction = function (str, nbr) { return str + nbr }
const testArrowFunction = (str, nbr) => str + nbr
const testArrowFunctionTyped = (str: String, nbr: Number) => `${str} + ${nbr}`

testArrowFunctionTyped("10", 10);
