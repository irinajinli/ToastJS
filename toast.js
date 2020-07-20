"use strict";
const log = console.log;

function PopupGenerator() {
  this.popups = [];
}

PopupGenerator.prototype = {
  makePopup: function (location) {
    const popup = document.createElement("div");
    popup.style = "z-index: 2; position: absolute; top: 100px; left: 100px";
    popup.appendChild(document.createTextNode("this is a popup"));
    location.appendChild(popup);
  },
};
