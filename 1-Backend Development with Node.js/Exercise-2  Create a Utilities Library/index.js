const { sum, concat } = require("./utilities/utils1");
const { lgNum, cut3 } = require("./utilities/utils2");

const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];

// sum of the numbers in an array
console.log(sum(numArr));

// Concatenate two arrays
console.log(concat(numArr, wordArr));

// Find the largest number in an array
console.log(lgNum(numArr));

// Remove the 3rd iten from an array
console.log(cut3(wordArr));
