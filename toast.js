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
    popup.style.borderRadius = "5px";
    popup.appendChild(document.createTextNode(contents));

    event.currentTarget.parentElement.appendChild(popup);

    return popup;
  },

  makeImportantPopup: function (contents, color, base) {
    // create element to "grey out" background
    const greyOut = document.createElement("div");
    greyOut.innerHTML = "hello";
    greyOut.style.position = "relative";
    greyOut.style.opacity = "80%";
    greyOut.style.zIndex = 0;
    greyOut.style.backgroundColor = "#424949";
    greyOut.style.height = "100vh";
    greyOut.style.width = "100%";
    base.appendChild(greyOut);

    // create centered popup
    const popup = document.createElement("div");
    popup.style =
      "zIndex: 1; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border: 1px solid black; padding: 20px";
    popup.style.backgroundColor = color;
    popup.style.borderRadius = "5px";
    popup.appendChild(document.createTextNode(contents));

    base.appendChild(popup);

    return [popup, greyOut];
  },

  addTimer: function (ms, popup) {
    setTimeout(function () {
      popup.remove();
    }, ms);
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

  addCloseImportantButton: function (popup, greyOut) {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "close";
    closeButton.style = "margin: 8px";
    closeButton.addEventListener("click", function () {
      popup.remove();
      greyOut.remove();
    });

    popup.appendChild(closeButton);
  },
};
