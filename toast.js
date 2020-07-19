"use strict";
const log = console.log;

// get DOM elements
const testDiv = document.querySelector("#myId");

function PopupGenerator() {
  this.popups = [];
}

PopupGenerator.prototype = {
  makePopup: function (location) {
    const popup = document.createElement("div");
    popup.appendChild(document.createTextNode("this is a popup"));
    location.appendChild(popup);
  },
};
