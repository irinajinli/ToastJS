"use strict";

const popupGen = new PopupGenerator();

// select elements in DOM
const base = document.querySelector("#base");
const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
const buttonStyledBox = document.querySelector("#buttonStyledBox");
const button3 = document.querySelector("#button3");
const button5 = document.querySelector("#button5");
const buttonTranslucentPopup = document.querySelector(
  "#buttonTranslucentPopup"
);
const textButton = document.querySelector("#textButton");
const boxButton = document.querySelector("#boxButton");
const hoverButton = document.querySelector("#hoverButton");

// first, some basic built-in popups
const textPopup = new Popup(
  "text",
  "This is a default text popup.",
  "click",
  null
);
textPopup.addOpenTrigger(textButton);

const boxPopup = new Popup(
  "box",
  "This is a default box popup.",
  "click",
  null
);
boxPopup.addOpenTrigger(boxButton);

// hover popup
const hoverPopup = new Popup(
  "box",
  "This is a hover popup.",
  "mouseover",
  "mouseleave"
);
hoverPopup.addOpenTrigger(hoverButton);
hoverPopup.addCloseTrigger(hoverButton);

// first, some basic built-in popups
// const makePopup1 = popupGen.makePopupFunc(
//   "text",
//   "this is a basic click popup"
// );

// popupGen.triggerByClick(button1, makePopup1);

// const makePopup2 = popupGen.makePopupFunc(
//   "box",
//   "this is a basic box popup",
//   "#212F3D"
// );

// popupGen.triggerByClick(button2, makePopup2);

// custom-styled popups
// function makePopupStyledBox(e) {
//   e.preventDefault();
//   const popup = popupGen.makeBoxPopup(
//     e,
//     "this is a close button popup",
//     "#212F3D"
//   );

//   // style popup
//   popupGen.changeBackgroundColor(popup, "#212F3D");
//   popupGen.changeTextColor(popup, "white");
//   popupGen.addCloseButton(popup);
// }

// popupGen.triggerByClick(buttonStyledBox, makePopupStyledBox);

// function makePopup3(e) {
//   e.preventDefault();
//   const popup = popupGen.makeBoxPopup(e, "this is a hover popup");
//   // give popup a name so it's easily removable
//   popup.id = "mouseOverPopup";

//   // style popup
//   popupGen.changeBackgroundColor(popup, "#212F3D");
//   popupGen.changeTextColor(popup, "white");
// }

// function removePopup3(e) {
//   e.preventDefault();
//   const toRemove = document.querySelector("#mouseOverPopup");
//   toRemove.remove();
// }

// popupGen.triggerByMouseover(button3, makePopup3);
// popupGen.closeByMouseleave(button3, removePopup3);

// function makePopup4(e) {
//   e.preventDefault();
//   const popup = popupGen.makeBoxPopup(
//     e,
//     "this popup disappears after 2 seconds",
//     "#7FB3D5"
//   );

//   // style popup
//   popupGen.changeBackgroundColor(popup, "#7FB3D5");
//   popupGen.changeTextColor(popup, "white");
//   popupGen.addCloseButton(popup);

//   // make popup disappear automatically after 2 seconds
//   popupGen.addTimer(2000, popup);
// }

// popupGen.triggerByClick(button4, makePopup4);

// function makePopup5(e) {
//   e.preventDefault();
//   const popupAndGreyOut = popupGen.makeImportantPopup(
//     "this is an important popup",
//     "white",
//     base
//   );

//   popupGen.addCloseImportantButton(popupAndGreyOut[0], popupAndGreyOut[1]);
// }

// popupGen.triggerByClick(button5, makePopup5);

// function makeTranslucentPopup(e) {
//   e.preventDefault();
//   // make background popup for demo purposes
//   const textPopup = popupGen.makeTextPopup(e, "translucency demo");
//   popupGen.changeTextColor(textPopup, "red");

//   const translucentPopup = popupGen.makeBoxPopup(
//     e,
//     "this is a translucent popup",
//     "#212F3D"
//   );

//   popupGen.changeBackgroundColor(translucentPopup, "rgba(29, 29, 22, 0.70)");
//   popupGen.changeTextColor(translucentPopup, "white");
// }

// popupGen.triggerByClick(buttonTranslucentPopup, makeTranslucentPopup);
