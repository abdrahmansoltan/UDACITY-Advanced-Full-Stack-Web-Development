"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_js_1 = __importDefault(require("./utilities/arrays.js"));
var numbers_js_1 = __importDefault(require("./utilities/numbers.js"));
var strings_js_1 = __importDefault(require("./utilities/strings.js"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays_js_1.default.addArr(numArr);
var mixArr = arrays_js_1.default.concatArr(numArr, wordArr);
var myNum = '15' % 2;
var five = parseInt('5');
console.log(arrays_js_1.default.cut3(mixArr));
console.log(numbers_js_1.default.sum(arrSum, myNum));
console.log(strings_js_1.default.capitalize('the quick brown fox'));
console.log(numbers_js_1.default.multiply(five, 8));
console.log(arrays_js_1.default.lgNum(mixArr));
