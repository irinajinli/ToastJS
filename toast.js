"use strict";
const log = console.log;

function PopupGenerator() {
  this.popups = [];
}

PopupGenerator.prototype = {
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

  makeBoxPopup: function (event, contents) {
    // find coordinates of event's target element
    const x = window.scrollX + event.currentTarget.getBoundingClientRect().left;
    const y =
      window.scrollY + event.currentTarget.getBoundingClientRect().top + 50;

    // get event's target's parent
    const targetParent = event.currentTarget.parentElement;

    const popup = document.createElement("div");
    popup.style =
      "z-index: 2; position: absolute; border: 1px solid coral; padding: 20px";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
    popup.appendChild(document.createTextNode(contents));

    // create close button
    // const closeButton = document.createElement("button");
    // closeButton.innerHTML = "close";
    // closeButton.addEventListener("click", function () {
    //   closeButton.parentElement.remove();
    // });

    // popup.appendChild(closeButton);

    event.currentTarget.parentElement.appendChild(popup);

    return popup;
  },

  addCloseButton(popup) {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "close";
    closeButton.addEventListener("click", function () {
      closeButton.parentElement.remove();
    });

    popup.appendChild(closeButton);
  },
};
