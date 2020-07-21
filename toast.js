"use strict";
const log = console.log;

function PopupGenerator() {
  this.popups = [];
}

PopupGenerator.prototype = {
  triggerByClick: function (element, popupFunc) {
    element.addEventListener("click", popupFunc);
  },

  triggerByMouseover: function (element, popupFunc) {
    element.addEventListener("mouseover", popupFunc);
  },

  closeByMouseleave: function (element, removeFunc) {
    element.addEventListener("mouseleave", removeFunc);
  },

  makeTextPopup: function (event, contents) {
    // find coordinates of event's target element
    const x = window.scrollX + event.currentTarget.getBoundingClientRect().left;
    const y =
      window.scrollY + event.currentTarget.getBoundingClientRect().top + 50;

    const popup = document.createElement("div");
    popup.style = "z-index: 2; position: absolute;";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
    popup.appendChild(document.createTextNode(contents));
    event.currentTarget.parentElement.appendChild(popup);

    return popup;
  },

  makeBoxPopup: function (event, contents, borderColor) {
    // find coordinates of event's target element
    const x = window.scrollX + event.currentTarget.getBoundingClientRect().left;
    const y =
      window.scrollY + event.currentTarget.getBoundingClientRect().top + 50;

    // get event's target's parent
    const targetParent = event.currentTarget.parentElement;

    const popup = document.createElement("div");
    popup.style =
      "z-index: 2; position: absolute; border: 1px solid black; padding: 20px";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
    popup.style.border = "1px solid " + borderColor;
    popup.appendChild(document.createTextNode(contents));

    event.currentTarget.parentElement.appendChild(popup);

    return popup;
  },

  changeTextColor: function (popup, color) {
    popup.style.color = color;
  },

  changeBackgroundColor: function (popup, color) {
    popup.style.backgroundColor = color;
  },

  addCloseButton: function (popup) {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "close";
    closeButton.style = "margin: 8px";
    closeButton.addEventListener("click", function () {
      closeButton.parentElement.remove();
    });

    popup.appendChild(closeButton);
  },
};
