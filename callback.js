function bakeCookies(cookies) {
  console.log("Починаю пекти печиво...");
  setTimeout(() => {
    console.log("Печиво готове! 🍪");
    cookies(); // викликаємо іншу функцію після завершення
  }, 2000); // імітуємо, що це зайняло 2 секунди
}

function eatCookies() {
  console.log("Я їм печиво! 😋");
}

bakeCookies(eatCookies);

function doHomework(subject, callback) {
  console.log(`Я роблю домашку з ${subject}...`);
  callback();
}

function finished() {
  console.log("Я закінчила домашку!");
}

doHomework("математики", finished);

// console.log(`Car description:`);
// console.log(`Manufacturer: ${this.manufacturer}`);
// console.log(`Model: ${this.model}`);
// console.log(`Year: ${this.year}`);
// console.log(`Average speed: ${this.averageSpeed} km/h`);
// console.log(`Fuel tank capacity: ${this.fuelTankCapacity} L`);
// console.log(`Fuel consumption: ${this.fuelConsumption} L/100 km`);
// console.log(`Drivers: ${this.drivers.join(", ") || "none yet"}`);
