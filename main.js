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
