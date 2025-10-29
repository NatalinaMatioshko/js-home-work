// 1 NodeList
// document.querySelector
// document.querySelectorAll

// 2 HTML Collection
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

"use strict";

let list = document.body.childNodes;
console.log(list);

// ===============================================================

const newSection = document.createElement("section");
newSection.classList.add("text");

const main = document.querySelector("main");
main.appendChild(newSection);

const newTitle = document.createElement("h2");
newTitle.textContent = "It`s a new title in a new section";
newSection.appendChild(newTitle);

// ===============================================================
const paragraph = document.createElement("p");
paragraph.textContent = "It is the text.";
paragraph.classList.add("text-block");

const button = document.createElement("button");
button.textContent = "Click me";
button.classList.add("btn");

const image = document.createElement("img");
image.src = "./img/favicon.svg";
image.alt = "JS";
image.classList.add("photo");

newSection.appendChild(paragraph);
newSection.appendChild(button);
newSection.appendChild(image);
