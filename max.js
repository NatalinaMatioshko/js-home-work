"use strict";

//  task 1

let userDeposit = prompt("Enter your deposit amount");
const annualRatePrc = 0.05;

const MONTHS = 2;
const YEAR_MONTHS = 12;
let period = MONTHS / YEAR_MONTHS;

let interest = userDeposit * annualRatePrc * period;

alert(`You will earn ${interest.toFixed(2)} in interest`);

//  task 2

2 && 0 && 3; // поверне 0
2 || 0 || 3; // поверне 2
(2 && 0) || 3; // поверне 3

// class task

let finishExirs =
  0 - Boolean("false") + ((Number(Boolean(" ")) + 5) * 100) / 50 + Boolean(0);

console.log(finishExirs);
/*    
      0−1+12+0
      (0−1)=−1
      (−1+12)=11
      (11+0)=11  
*/
