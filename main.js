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

/*  User`s name, age, perimeter of square    */

let userFirstName = prompt("What is your name ?");

// if (!userFirstName) {
//   alert("You didn’t enter your name!");
// }

alert(`Hello my friend ${userFirstName}`);

let userYearOfBirth = prompt("What is your year of birth?");
const currentYear = new Date().getFullYear();
let userAge = currentYear - Number(userYearOfBirth);

// if (isNaN(userYearOfBirth) || userYearOfBirth > currentYear) {
//   alert("Please enter a valid year!");
// }
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

// console.log(userFirstName);
// console.log(userAge);
// console.log(currentYear);
// console.log(numberSide);

/*  Area of a circle    */

let radiusInput = prompt("Enter the radius of the circle");
let circleRadius = Number(radiusInput);

const PI = Math.PI;
let area = PI * circleRadius ** 2;
// let area = PI * Math.pow(circleRadius, 2);
let roundedArea = area.toFixed(2);
alert(`The area of a circle with radius ${circleRadius} is ${roundedArea}`);

/*  Speed of travel between cities   */

let distanceInput = prompt("Enter distance to the city (in kilometers)");
let timeInput = prompt(
  "Enter the time required to cover this distance (in hours)"
);
let distance = Number(distanceInput);
let time = Number(timeInput);

let speed = distance / time;
let roundedSpeed = speed.toFixed(2);

alert(
  `To arrive on time, you need to travel at a speed of ${roundedSpeed} km/h`
);

/*  currency converter   */

let dollarsInput = prompt("Enter the amount in dollars");
let dollars = Number(dollarsInput);
const USD_TO_EUR = 0.93;
let euros = dollars * USD_TO_EUR;
let roundedEuros = euros.toFixed(2);
alert(
  `${dollars} dollars equals ${roundedEuros} euros at an exchange rate of ${USD_TO_EUR}`
);
