"use strict";

const popupGen = new PopupGenerator();

// select buttons in DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

function popupFunc1(e) {
  e.preventDefault();
  popupGen.makeTextPopup(e, "this is a simple click popup");
}

popupGen.triggerByClick(button1, popupFunc1);

function popupFunc2(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(e, "this is a box popup", "#212F3D");
  popupGen.changeBackgroundColor(popup, "#212F3D");
  popupGen.changeTextColor(popup, "white");
  popupGen.addCloseButton(popup);
}

popupGen.triggerByClick(button2, popupFunc2);

function makePopup3(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(e, "this is a hover popup");
  // give popup a name so it's easily removable
  popup.id = "mouseOverPopup";
}

function removePopup3(e) {
  e.preventDefault();
  const toRemove = document.querySelector("#mouseOverPopup");
  toRemove.remove();
}

popupGen.triggerByMouseover(button3, makePopup3);
popupGen.closeByMouseleave(button3, removePopup3);
