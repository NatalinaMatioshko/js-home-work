"use strict";

//  task 1

function greet() {
  console.log("Hello!");
}

const sayHi = function () {
  console.log("Hi!");
};

const hello = () => {
  console.log("Hello again!");
};

//  task 2

function countArgs() {
  console.log(arguments.length);
}

//  task 3

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

//  task 4

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//  task 5

function combineDigits(a, b, c) {
  return Number(`${a}${b}${c}`);
}

//  task 6

function getArea(length, width) {
  if (width === undefined) {
    return length * length;
  }
  return length * width;
}

// Standart

//  task 1

function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

//  task 2

function showPerfectInRange(min, max) {
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) {
      console.log(i);
    }
  }
}
