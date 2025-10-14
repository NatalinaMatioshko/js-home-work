"use strict";

// task 1

let a = 0.1;
let b = 0.2;
let sum = (a * 10 + b * 10) / 10;

// let sum = a + b;
// let rounded = sum.toFixed(1);

console.log("0.1 + 0.2 =", sum);

// task 2

let c = "1";
let d = 2;
let num = +c + d;
// let num = Number(c) + d;

console.log(num);

// task 3

const flashSizeGB = prompt("Enter the flash drive capacity in GB");
const flashSizeMB = +flashSizeGB * 1024;
const fileSizeMB = 820;

const fileCount = Math.floor(flashSizeMB / fileSizeMB);

alert(`The flash drive can hold ${fileCount} files, each 820 MB in size`);

console.log(fileCount);
