/\*
логіка задачі
=========

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
\*/
