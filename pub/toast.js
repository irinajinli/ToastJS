"use strict";
const log = console.log;

function PopupGenerator() {
  this.popups = [];
}

class Popup {
  constructor(layout, contents, openTrigger, closeTrigger) {
    this.layout = layout;
    this.contents = contents;
    this.openTrigger = openTrigger;
    this.closeTrigger = closeTrigger;
    this.domElement = null;
  }

  addOpenTrigger(element) {
    const self = this;
    element.addEventListener(self.openTrigger, self.displayPopup(element));
  }

  addCloseTrigger(element, toClose) {
    const self = this;
    try {
      element.addEventListener(self.closeTrigger, self.domElement.remove());
    } catch {
      log("error");
    }
  }

  displayPopup(element) {
    const self = this;
    switch (self.layout) {
      case "text":
        return self.displayTextPopup();
      case "box":
        return self.displayBoxPopup();
    }
  }

  displayTextPopup() {
    const self = this;
    return function (event) {
      // find coordinates of event's target element
      const x =
        window.scrollX + event.currentTarget.getBoundingClientRect().left;
      const y =
        window.scrollY + event.currentTarget.getBoundingClientRect().top + 50;

      const popup = document.createElement("div");
      // popup.style = "z-index: 2; position: absolute;";
      popup.className = "textPopup";
      popup.style.left = x + "px";
      popup.style.top = y + "px";
      popup.appendChild(document.createTextNode(self.contents));
      event.currentTarget.parentElement.appendChild(popup);

      return popup;
    };
  }

  displayBoxPopup() {
    const self = this;
    return function (event) {
      // find coordinates of event's target element
      const x =
        window.scrollX + event.currentTarget.getBoundingClientRect().left;
      const y =
        window.scrollY + event.currentTarget.getBoundingClientRect().top + 50;

      const popup = document.createElement("div");

      // default style
      popup.className = "boxPopup";
      popup.style.left = x + "px";
      popup.style.top = y + "px";
      popup.appendChild(document.createTextNode(self.contents));

      event.currentTarget.parentElement.appendChild(popup);

      return popup;
    };
  }
}

PopupGenerator.prototype = {
  // new
  makePopup: function (layout, openTrigger, closeTrigger) {
    const popup = new Popup(layout, openTrigger, closeTrigger);
    return popup;
  },

  newMakePopupFunc: function (popup) {
    const popupFunc = function (e) {
      e.preventDefault();

      popup.displayPopup();
    };
  },

  // some basic popup formats are included
  makePopupFunc: function (type, contents, colour) {
    const popupFunc = function (e) {
      e.preventDefault();

      if (type == "text") {
        popupGen.makeTextPopup(e, contents);
      } else if (type == "box") {
        popupGen.makeBoxPopup(e, contents, colour);
      }
    };

    return popupFunc;
  },

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
    // popup.style = "z-index: 2; position: absolute;";
    popup.className = "textPopup";
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

    // default style
    popup.className = "boxPopup";
    popup.style.left = x + "px";
    popup.style.top = y + "px";
    popup.style.border = "1px solid " + borderColor;
    popup.appendChild(document.createTextNode(contents));

    event.currentTarget.parentElement.appendChild(popup);

    return popup;
  },

  makeImportantPopup: function (contents, color, base) {
    // create element to "grey out" background
    const greyOut = document.createElement("div");
    greyOut.className = "greyOut";
    base.appendChild(greyOut);

    // create centered popup
    const popup = document.createElement("div");
    popup.className = "importantPopup";
    popup.style.backgroundColor = color;
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
    closeButton.className = "closeButton";
    closeButton.addEventListener("click", function () {
      closeButton.parentElement.remove();
    });

    popup.appendChild(closeButton);
  },

  addCloseImportantButton: function (popup, greyOut) {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "close";
    closeButton.className = "closeButton";
    closeButton.addEventListener("click", function () {
      popup.remove();
      greyOut.remove();
    });

    popup.appendChild(closeButton);
  },
};
