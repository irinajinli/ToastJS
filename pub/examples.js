"use strict";

// select elements in DOM
const base = document.querySelector("#base");
const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
const buttonStyledBox = document.querySelector("#buttonStyledBox");
const buttonTranslucentPopup = document.querySelector(
  "#buttonTranslucentPopup"
);
const textButton = document.querySelector("#textButton");
const boxButton = document.querySelector("#boxButton");
const closeableButton = document.querySelector("#closeableButton");
const hoverButton = document.querySelector("#hoverButton");
const timedButton = document.querySelector("#timedButton");
const importantButton = document.querySelector("#importantButton");
const cssButton = document.querySelector("#cssButton");
const animationButton = document.querySelector("#animationButton");
const soundButton = document.querySelector("#soundButton");
const customParentButton = document.querySelector("#customParentButton");
const collateralButon = document.querySelector("#collateralButon");

// first, some basic built-in popups
const textPopup = new Popup(
  base,
  "text",
  "This is a default text popup.",
  "click",
  null
);
textPopup.addOpenTrigger(textButton);

const boxPopup = new Popup(
  base,
  "box",
  "This is a default box popup.",
  "click",
  null
);
boxPopup.addOpenTrigger(boxButton);

// popup which closes when clicked twice
const closeablePopup = new Popup(
  base,
  "box",
  "This is a default close-button popup.",
  "click",
  "close button"
);
closeablePopup.addOpenTrigger(closeableButton);

const timedPopup = new Popup(
  base,
  "box",
  "This is a timed popup.",
  "click",
  "time",
  2000
);
timedPopup.addOpenTrigger(timedButton);

// hover popup
const hoverPopup = new Popup(
  base,
  "box",
  "This is a hover popup.",
  "mouseover",
  "mouseleave"
);
hoverPopup.addOpenTrigger(hoverButton);

const importantPopup = new Popup(
  base,
  "important",
  "This is an important popup.",
  "click",
  "close button"
);
importantPopup.addOpenTrigger(importantButton);

const cssPopup = new Popup(
  base,
  "box",
  "This is a custom-styled popup.",
  "mouseover",
  "mouseleave",
  "customCss"
);
cssPopup.addOpenTrigger(cssButton);

const animationPopup = new Popup(
  base,
  "box",
  "This is an animated popup.",
  "click",
  "close button"
);
animationPopup.addAnimation("toTop", "1s", "1");
animationPopup.addOpenTrigger(animationButton);

const soundPopup = new Popup(
  base,
  "box",
  "This is a popup with sound!",
  "click",
  "close button"
);
soundPopup.addOpenTrigger(soundButton);
soundPopup.addSound("./resources/botw_get.mp3");

const customParentPopup = new Popup(
  base,
  "text",
  "This popup has a custom parent.",
  "click",
  "close button"
);
const customParent = document.querySelector("#customParent");
customParentPopup.setParentElement(customParent);
customParentPopup.addOpenTrigger(customParentButton);

const collateralPopup = new Popup(
  base,
  "text",
  "This popup affects other elements.",
  "click",
  "close button",
  "left"
);
collateralPopup.addAnimation("toRight", "1s", "1");
const collateralElements = [document.querySelector("#customParent")];
collateralPopup.setCollateral(collateralElements);
console.log(collateralPopup);
collateralPopup.setCollateralAnimation("toRight", "1s", "1");
console.log(collateralPopup);
collateralPopup.addOpenTrigger(collateralButon);
