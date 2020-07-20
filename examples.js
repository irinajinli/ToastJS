"use strict";

const popupGen = new PopupGenerator();

// select buttons in DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

// event listeners for buttons
button1.addEventListener("click", makePopup1);

function makePopup1(e) {
  log("button1 clicked");
  e.preventDefault();
  popupGen.makePopup(button1.parentElement);
}
