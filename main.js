"use strict";

// alert(`Hello user!`);

// let userFromUkraine = confirm("Are you form Ukraine?");
// console.log(userFromUkraine);

// let userAge = 18;

// userName;
// _userName;
// $userName;

// camelCase, snake_case, PascalCase, kebab-case
// 4username

/*
  User`s name, age, perimeter of square
    */
let userFirstName = prompt("What is your name ?");

alert(`Hello my friend ${userFirstName}`);

let userYearOfBirth = prompt("What is your year of birth?");
const currentYear = new Date().getFullYear();
let userAge = currentYear - Number(userYearOfBirth);

alert(`You are ${userAge} years old`);

let squareSide = prompt("Enter length of the side of the square?");
let numberSide = parseFloat(squareSide);

if (isNaN(numberSide)) {
  alert("Please enter a number!");
} else if (numberSide <= 0) {
  alert("The side of the square must be greater than zero!");
} else {
  let squarePerimeter = 4 * numberSide;
  alert(`Perimeter of a square with side ${squareSide} is ${squarePerimeter}!`);
}

console.log(userFirstName);
console.log(userAge);
console.log(currentYear);
console.log(numberSide);
/*
  User`s s
    */
