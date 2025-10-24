"use strict";
// TASK 1

const car = {
  manufacturer: "Bugatti",
  model: "Chiron",
  year: 2018,
  averageSpeed: 380, // km/h
  fuelTankCapacity: 100, // liters
  fuelConsumption: 22.5, // liters per 100 km
  drivers: [],
  showInfo() {
    setTimeout(() => {
      alert(
        `  Car description:

  Manufacturer: ${this.manufacturer}
  Model: ${this.model}
  Year: ${this.year}
  Average speed: ${this.averageSpeed} km/h
  Fuel tank capacity: ${this.fuelTankCapacity} L
  Fuel consumption: ${this.fuelConsumption} L/100 km
  Drivers: ${this.drivers.join(", ") || "none yet"}`
      );
    }, 3000);
  },

  addDriver(name) {
    this.drivers.push(name);
    console.log(name); //видалити
  },

  hasDriver(driverName) {
    return this.drivers.includes(driverName);
  },

  calculateTrip(distance) {
    // 1. Порахувати час у дорозі без перерв
    // 2. Порахувати кількість перерв
    // 3. Додати час відпочинку до загального часу
    // 4. Порахувати кількість палива, яке потрібно
    // 5. Порахувати кількість заправок (опціонально)
    // 6. Вивести результат

    /*    
    Що мені дано?               averageSpeed, fuelConsumption, fuelTankCapacity
    Що користувач вводить?	    distance
    Що треба знайти?	          totalTime, fuelNeeded, refuels
    Як знайти?	                 застосовуємо прості формули з математики
    Як показати?	             alert або console.log
 */

    let tripTime = distance / this.averageSpeed;
    let breaks = Math.floor(tripTime / 4);
    let totalTime = tripTime + breaks;
    let fuelNeeded = (distance / 100) * this.fuelConsumption;
    let refuels = Math.ceil(fuelNeeded / this.fuelTankCapacity);

    const tripInfo = `
Distance: ${distance} km
Total time (with breaks): ${totalTime.toFixed(1)} h
Fuel needed: ${fuelNeeded.toFixed(1)} L
Refuels required: ${refuels}
`;

    // alert(tripInfo);
    console.log(tripInfo);

    return tripInfo;
  },
};
car.addDriver(`Natalie`);
car.showInfo();
console.log(car); //видалити
car.hasDriver("Natalie");
console.log(car.hasDriver("Ivan"));
car.calculateTrip(1200);
// console.log(car.calculateTrip(1200)); //видалити

// TASK 2 ============================================

const time = {
  hours: 17,
  minutes: 59,
  seconds: 12,

  showTime() {
    let hours = this.hours < 10 ? "0" + this.hours : this.hours;
    let minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    let seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    let currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);
  },

  addSeconds(additionalSeconds) {
    this.seconds += additionalSeconds;

    if (this.seconds >= 60) {
      let extraMinutes = Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
      this.addMinutes(extraMinutes);
    }

    this.showTime();
  },

  addMinutes(additionalMinutes) {
    this.minutes += additionalMinutes;

    if (this.minutes >= 60) {
      let extraHours = Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
      this.addHours(extraHours);
    }

    this.showTime();
  },

  addHours(additionalHours) {
    this.hours += additionalHours;

    if (this.hours >= 24) {
      this.hours = this.hours % 24;
    }

    this.showTime();
  },
};

time.showTime();
time.addSeconds(150);
time.addMinutes(189);
time.addHours(10);

// TASK 3 ============================================

const fraction = {
  numerator: 1,
  denominator: 2,
  showFraction() {
    console.log(`${this.numerator}/ ${this.denominator}`);
  },

  getGCD(a, b) {
    return b === 0 ? a : this.getGCD(b, a % b);
  },

  reduce() {
    const gcd = this.getGCD(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
    return this;
  },

  add(fraction2) {
    // Формула: a/b + c/d = (a*d + b*c) / (b*d)
    const newNumerator =
      this.numerator * fraction2.denominator +
      this.denominator * fraction2.numerator;

    const newDenominator = this.denominator * fraction2.denominator;

    const result = {
      numerator: newNumerator,
      denominator: newDenominator,

      getGCD: this.getGCD,
      reduce: this.reduce,
    };

    return result.reduce();
  },

  subtract(fraction2) {
    // Формула: a/b - c/d = (a*d - b*c) / (b*d)
    const newNumerator =
      this.numerator * fraction2.denominator -
      this.denominator * fraction2.numerator;

    const newDenominator = this.denominator * fraction2.denominator;

    const result = {
      numerator: newNumerator,
      denominator: newDenominator,
      getGCD: this.getGCD,
      reduce: this.reduce,
    };

    return result.reduce();
  },

  multiply(fraction2) {
    // Формула: a/b * c/d = (a*c) / (b*d)
    const newNumerator = this.numerator * fraction2.numerator;
    const newDenominator = this.denominator * fraction2.denominator;

    const result = {
      numerator: newNumerator,
      denominator: newDenominator,
      getGCD: this.getGCD,
      reduce: this.reduce,
    };

    return result.reduce();
  },

  divide(fraction2) {
    // Формула: (a/b) ÷ (c/d) = (a*d) / (b*c)
    const newNumerator = this.numerator * fraction2.denominator;
    const newDenominator = this.denominator * fraction2.numerator;

    const result = {
      numerator: newNumerator,
      denominator: newDenominator,
      getGCD: this.getGCD,
      reduce: this.reduce,
    };

    return result.reduce();
  },
};

const f1 = { numerator: 1, denominator: 2 };
const f2 = { numerator: 1, denominator: 3 };

Object.setPrototypeOf(f1, fraction);
Object.setPrototypeOf(f2, fraction);

// console.log("Початкові дроби:");
f1.showFraction();
f2.showFraction();

console.log("Результати операцій:");
console.log("Додавання:");
console.log(f1.add(f2));

console.log("Віднімання:");
console.log(f1.subtract(f2));

console.log("Множення:");
console.log(f1.multiply(f2));

console.log("Ділення:");
console.log(f1.divide(f2));
