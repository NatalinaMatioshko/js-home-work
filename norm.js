"use strict";

// task 1

const userMoney = parseFloat(
  prompt("Enter the amount of money in your wallet")
);
const chocPrice = parseFloat(prompt("Price of one chocolate bar"));

if (chocPrice > 0) {
  const chocolates = Math.floor(userMoney / chocPrice);

  // const change = (money - chocolates * price).toFixed(2);
  const change = userMoney % chocPrice;

  alert(`You can buy ${chocolates} chocolate bars. Change: ${change}.`);
} else {
  alert("The price of a chocolate bar must be greater than zero");
}
//  task 2

let number = prompt("Enter a three-digit number:");
let lastDigit = number % 10;
let middleDigit = Math.floor(number / 10) % 10;
let firstDigit = Math.floor(number / 100);

let reversed = `${lastDigit}${middleDigit}${firstDigit}`;
alert(`Reversed number is: ${reversed}`);

console.log(reversed);

// let reversed = number.split("").reverse().join("");

// alert(`Reversed number is: ${reversed}`);

console.log(typeof number);
