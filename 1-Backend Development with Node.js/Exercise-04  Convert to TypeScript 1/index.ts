// Convert all CommonJS modules to ES6 modules index.ts
import arrays from "./src/utilities/arrays.js";
import numbers from "./src/utilities/numbers.js";
import strings from "./src/utilities/strings.js";

const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ("15" as unknown as number) % 2;
const five = parseInt("5");

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize("the quick brown fox"));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));
