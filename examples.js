"use strict";

const popupGen = new PopupGenerator();

// select buttons in DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

function makePopup1(e) {
  e.preventDefault();
  popupGen.makeTextPopup(e, "this is a permanent click popup");
}

popupGen.triggerByClick(button1, makePopup1);

function makePopup2(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(
    e,
    "this is a close button popup",
    "#212F3D"
  );

  // style popup
  popupGen.changeBackgroundColor(popup, "#212F3D");
  popupGen.changeTextColor(popup, "white");
  popupGen.addCloseButton(popup);
}

popupGen.triggerByClick(button2, makePopup2);

function makePopup3(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(e, "this is a hover popup");
  // give popup a name so it's easily removable
  popup.id = "mouseOverPopup";

  // style popup
  popupGen.changeBackgroundColor(popup, "#212F3D");
  popupGen.changeTextColor(popup, "white");
}

function removePopup3(e) {
  e.preventDefault();
  const toRemove = document.querySelector("#mouseOverPopup");
  toRemove.remove();
}

popupGen.triggerByMouseover(button3, makePopup3);
popupGen.closeByMouseleave(button3, removePopup3);

function makePopup4(e) {
  e.preventDefault();
  const popup = popupGen.makeBoxPopup(
    e,
    "this is a disappearing popup",
    "#212F3D"
  );

  // style popup
  popupGen.changeBackgroundColor(popup, "#212F3D");
  popupGen.changeTextColor(popup, "white");
  popupGen.addCloseButton(popup);

  // make popup disappear automatically
  popupGen.addTimer(2000, popup);
}

popupGen.triggerByClick(button4, makePopup4);
