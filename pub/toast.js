"use strict";
const log = console.log;

class Popup {
  constructor(base, layout, contents, openTrigger, closeTrigger, ms) {
    this.base = base;
    this.layout = layout;
    this.contents = contents;
    this.openTrigger = openTrigger;
    this.closeTrigger = closeTrigger;
    this.ms = ms; // optional; only for when closeTrigger is time
  }

  addOpenTrigger(element) {
    const self = this;
    element.addEventListener(self.openTrigger, self.displayPopup(element));
  }

  displayPopup(element) {
    const self = this;
    switch (self.layout) {
      case "text":
        return self.displayTextPopup(element);
      case "box":
        return self.displayBoxPopup(element);
      case "important":
        return self.displayImportantPopup(element);
    }
  }

  displayTextPopup(element) {
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

      if (self.closeTrigger === "mouseleave") {
        element.addEventListener(self.closeTrigger, function (e) {
          e.preventDefault();
          popup.remove();
        });
      } else if (self.closeTrigger === "close button") {
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "close";
        closeButton.className = "closeButton";
        closeButton.addEventListener("click", function () {
          closeButton.parentElement.remove();
        });

        popup.appendChild(closeButton);
      } else if (self.closeTrigger === "time") {
        setTimeout(function () {
          popup.remove();
        }, self.ms);
      }
      return popup;
    };
  }

  displayBoxPopup(element) {
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

      if (self.closeTrigger === "mouseleave") {
        element.addEventListener(self.closeTrigger, function (e) {
          e.preventDefault();
          popup.remove();
        });
      } else if (self.closeTrigger === "close button") {
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "close";
        closeButton.className = "closeButton";
        closeButton.addEventListener("click", function () {
          closeButton.parentElement.remove();
        });

        popup.appendChild(closeButton);
      } else if (self.closeTrigger === "time") {
        setTimeout(function () {
          popup.remove();
        }, self.ms);
      }

      return popup;
    };
  }

  displayImportantPopup(element) {
    const self = this;
    return function (event) {
      // create element to "grey out" background
      const greyOut = document.createElement("div");
      greyOut.className = "greyOut";
      base.appendChild(greyOut);

      // create centered popup
      const popup = document.createElement("div");
      popup.className = "importantPopup";
      popup.style.backgroundColor = "white";
      popup.appendChild(document.createTextNode(self.contents));

      if (self.closeTrigger === "mouseleave") {
        element.addEventListener(self.closeTrigger, function (e) {
          e.preventDefault();
          popup.remove();
          greyOut.remove();
        });
      } else if (self.closeTrigger === "close button") {
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "close";
        closeButton.className = "closeButton";
        closeButton.addEventListener("click", function () {
          closeButton.parentElement.remove();
          greyOut.remove();
        });

        popup.appendChild(closeButton);
      } else if (self.closeTrigger === "time") {
        setTimeout(function () {
          popup.remove();
          greyOut.remove();
        }, self.ms);
      }

      base.appendChild(popup);
    };
  }
}
