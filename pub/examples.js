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
