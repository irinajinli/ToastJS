"use strict";

(function (global) {
  class Popup {
    constructor(
      base,
      layout,
      contents,
      openTrigger,
      closeTrigger,
      cssStyle,
      ms
    ) {
      this.base = base;
      this.layout = layout;
      this.contents = contents;
      this.openTrigger = openTrigger;
      this.closeTrigger = closeTrigger;
      this.cssStyle = cssStyle; // optional; for providing custom css style
      this.ms = ms; // optional; only for when closeTrigger is time
      this.animationName = null;
      this.animationDuration = null;
      this.animationIterations = null;
      this.soundPath = null;
      this.parentElement = null;
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

    appendToEventTarget(target, popup) {
      // by default, makes the popup slightly below the target
      const x = window.scrollX + target.getBoundingClientRect().left;
      const y = window.scrollY + target.getBoundingClientRect().top + 50;

      popup.style.left = x + "px";
      popup.style.top = y + "px";

      target.parentElement.appendChild(popup);
    }

    setParentElement(parent) {
      this.parentElement = parent;
    }

    displayTextPopup(element) {
      const self = this;
      return function (event) {
        // find coordinates of event's target element
        // const x =
        //   window.scrollX + event.currentTarget.getBoundingClientRect().left;
        // const y =
        //   window.scrollY + event.currentTarget.getBoundingClientRect().top + 50;

        const popup = document.createElement("div");
        // popup.style = "z-index: 2; position: absolute;";
        popup.className = "textPopup";

        // custom style
        popup.classList.add(self.cssStyle);

        // popup.style.left = x + "px";
        // popup.style.top = y + "px";

        // check for animation
        if (self.animationName !== null) {
          self.setAnimation(popup);
        }

        // check for sound
        if (self.soundPath !== null) {
          playSound();
        }

        popup.appendChild(document.createTextNode(self.contents));

        if (self.parentElement === null) {
          self.appendToEventTarget(event.currentTarget, popup);
        } else {
          self.parentElement.append(popup);
        }

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

        // custom style
        popup.classList.add(self.cssStyle);

        popup.style.left = x + "px";
        popup.style.top = y + "px";

        // check for animation
        if (self.animationName !== null) {
          self.setAnimation(popup);
        }

        // check for sound
        if (self.soundPath !== null) {
          self.playSound();
        }

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

        // custom style
        popup.classList.add(self.cssStyle);

        // check for animation
        if (self.animationName !== null) {
          self.setAnimation(popup);
        }

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

    addAnimation(name, duration, iterations) {
      const self = this;
      self.animationName = name;
      self.animationDuration = duration;
      self.animationIterations = iterations;
    }

    setAnimation(popup) {
      const self = this;
      popup.style.animationName = self.animationName;
      popup.style.animationDuration = self.animationDuration;
      popup.style.animationIterations = self.animationIterations;
      popup.style.animationFillMode = "forwards";
    }

    addSound(path) {
      this.soundPath = path;
    }

    playSound() {
      const audio = new Audio(this.soundPath);
      audio.play();
    }
  }

  global.Popup = global.Popup || Popup;
})(window);
