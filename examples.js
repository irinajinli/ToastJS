"use strict";

const popupGen = new PopupGenerator();

// select buttons in DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

// event listeners for buttons
button1.addEventListener("click", makePopup1);
button2.addEventListener("click", makePopup2);
button3.addEventListener("mouseover", makePopup3);
button3.addEventListener("mouseleave", removePopup3);
// button4.addEventListener("click", makePopup4);

function makePopup1(e) {
  e.preventDefault();
  const popup = popupGen.makeTextPopup(e, "this is a simple text popup");
}

function makePopup2(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(e, "this is a box popup");
  popupGen.addCloseButton(popup);
}

function makePopup3(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(e, "this is a box popup");
  popup.id = "mouseOverPopup";
}

function removePopup3(e) {
  e.preventDefault();
  const toRemove = document.querySelector("#mouseOverPopup");
  toRemove.remove();
}
