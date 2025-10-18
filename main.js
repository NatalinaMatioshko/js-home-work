"use strict";

// MINIMUM

// TASK 1

let userAge = +prompt("Enter your age!");

if (userAge >= 0 && userAge <= 11) {
  alert("You just a baby!");
} else if (userAge >= 12 && userAge <= 17) {
  alert("You are a teenager!");
} else if (userAge >= 18 && userAge <= 59) {
  alert("You are an adult! You are allowed to watch adult movies!");
} else if (userAge >= 60 && userAge <= 103) {
  alert("You are retiree! Celebrate!");
} else if (userAge >= 103) {
  alert("You are a vampire! 🧄✝️");
} else {
  alert("Please enter your correct age!");
}
console.log(userAge);

// // // TASK 2

let userInput = +prompt("Enter a number from 0 to 9 ");

switch (userInput) {
  case 1:
    alert("!");
    break;
  case 2:
    alert("@");
    break;
  case 3:
    alert("#");
    break;
  case 4:
    alert("$");
    break;
  case 5:
    alert("%");
    break;
  case 6:
    alert("^");
    break;
  case 7:
    alert("&");
    break;
  case 8:
    alert("*");
    break;
  case 9:
    alert("(");
    break;
  case 0:
    alert(")");
    break;
  default:
    alert("Don't do that! I told you to enter the number!");
    break;
}
console.log(userInput);

// // TASK 3

let startNumber = +prompt("Enter the starting number");
let endNumber = +prompt("Enter the ending number");
let sum = 0;

if (isNaN(startNumber) || isNaN(endNumber) || startNumber > endNumber) {
  alert("Please enter the correct numbers");
} else {
  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
  }
  alert(`Sum is ${sum}`);
  console.log(sum);
}

// TASK 4

alert("Let's find the greatest common divisor");
let firstDivisor = +prompt("Enter the first number");
let secondDivisor = +prompt("Enter the second number");

while (secondDivisor !== 0) {
  let div = secondDivisor;
  secondDivisor = firstDivisor % secondDivisor;
  firstDivisor = div;
}
alert(`GCD is ${firstDivisor}`);

/*
ЛОГІКА ВИКОНАННЯ ЗАДАЧІ

alert("Let's find the greatest common divisor");

let firstDivisor = +prompt("Enter the first number");
let secondDivisor = +prompt("Enter the second number");

console.log(
  `Початкові значення: firstDivisor = ${firstDivisor}, secondDivisor = ${secondDivisor}`
);

while (secondDivisor !== 0) {
  console.log("-----");
  console.log(
    `Початок ітерації: firstDivisor = ${firstDivisor}, secondDivisor = ${secondDivisor}`
  );

  let temp = secondDivisor; // зберігаємо друге число
  console.log(`temp = ${temp}`);

  secondDivisor = firstDivisor % secondDivisor; // залишок від ділення
  console.log(`Після ділення: новий secondDivisor = ${secondDivisor}`);

  firstDivisor = temp; // переставляємо числа
  console.log(
    `Після перестановки: firstDivisor = ${firstDivisor}, secondDivisor = ${secondDivisor}`
  );
}

console.log("-----");
console.log(`Цикл завершено. Найбільший спільний дільник = ${firstDivisor}`);
alert(`GCD is ${firstDivisor}`);
*/

// TASK 5

let divisorNumber = +prompt(
  "Enter the number! Let's find all the divisors of the number!"
);
for (let i = 1; i <= divisorNumber; i++) {
  if (divisorNumber % i === 0) {
    console.log(i);
  }
}

// STANDART

// TASK 1

let palNumber = prompt("Enter a five-digit number");
let str = String(palNumber);

if (str.length === 5) {
  if (str === str.split("").reverse().join("")) {
    alert("It's a palindrome!");
  } else {
    alert("It is not a palindrome");
  }
} else {
  alert("It is not a five-digit number");
}

// TASK 2

let userInputSum = +prompt("Enter the purchase amount");
let discountSum = 0;

if (userInputSum >= 200 && userInputSum <= 300) {
  discountSum = userInputSum - userInputSum * 0.03;
} else if (userInputSum > 300 && userInputSum <= 500) {
  discountSum = userInputSum - userInputSum * 0.05;
} else if (userInputSum > 500) {
  discountSum = userInputSum - userInputSum * 0.07;
} else {
  alert("Enter correct amount");
}
alert(`Amount with discount is ${discountSum}`);

// TASK 3

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 10; i++) {
  let number = +prompt(`Enter a number ${i}`);

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (number !== 0) {
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

alert(
  `Statistics:
Positive: ${positiveCount}
Negative: ${negativeCount}
Zero: ${zeroCount}
Even: ${evenCount}
Odd: ${oddCount}`
);

// MAXIMUM
