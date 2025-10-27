"use strict";
const productList = [
  {
    name: "milk",
    amount: 1,
    isBought: true,
    price: 55,
    productSum() {
      return this.amount * this.price;
    },
  },

  {
    name: "nutella",
    amount: 1,
    price: 120,
    isBought: false,
  },
  {
    name: "apple",
    amount: 5,
    price: 10,
    isBought: false,
  },
];

function showProducts(list) {
  const notBought = list.filter((item) => !item.isBought);
  const bought = list.filter((item) => item.isBought);
  console.log("Products to buy:");
  console.log(notBought);
  console.log("Bought products:");
  console.log(bought);
}
function buyProduct(productName) {
  for (const item of productList) {
    if (item.name === productName) {
      item.isBought = true;
      console.log(`${item.name} marked as bought!`);
      return;
    }
  }
  console.log("Product not found.");
}
showProducts(productList);
buyProduct("nutella");
showProducts(productList);
