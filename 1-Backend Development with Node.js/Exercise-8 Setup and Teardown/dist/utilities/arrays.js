"use strict";
// Concatenate two arrays
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var concatArr = function (arr1, arr2) {
    return __spreadArrays(arr1, arr2);
};
// Add numbers in an array
var addArr = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total;
};
// Find the largest number in an array
var lgNum = function (arr) {
    var largest = 0;
    arr.forEach(function (x) {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};
// Remove the 3rd item from an array
var cut3 = function (arr) {
    arr.splice(2, 1);
    return arr;
};
exports.default = {
    concatArr: concatArr,
    addArr: addArr,
    lgNum: lgNum,
    cut3: cut3
};
