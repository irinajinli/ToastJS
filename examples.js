"use strict";

const popupGen = new PopupGenerator();

// select elements in DOM
const base = document.querySelector("#base");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

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
    "#7FB3D5"
  );

  // style popup
  popupGen.changeBackgroundColor(popup, "#7FB3D5");
  popupGen.changeTextColor(popup, "white");
  popupGen.addCloseButton(popup);

  // make popup disappear automatically after 2 seconds
  popupGen.addTimer(2000, popup);
}

popupGen.triggerByClick(button4, makePopup4);

function makePopup5(e) {
  e.preventDefault();
  const popupAndGreyOut = popupGen.makeImportantPopup(
    "this is an important popup",
    "white",
    base
  );

  popupGen.addCloseImportantButton(popupAndGreyOut[0], popupAndGreyOut[1]);
}

popupGen.triggerByClick(button5, makePopup5);
