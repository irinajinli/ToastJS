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

      // the following fields are all optional and can be set with methods below
      this.animationName = null;
      this.animationDuration = null;
      this.animationIterations = null;
      this.animationDelay = null;
      this.soundPath = null; // to play sound effect when popup appears
      this.parentElement = null; // if null, popup will be appended to event target's parent
      this.collateral = null; // an array of other elements to move when the popup appears
      this.collateralAnimationName = null; // how to animate the other affected elements
      this.collateralAnimationDuration = null;
      this.collateralAnimationIterations = null;
      this.collateralAnimationDelay = null;
    }

    addOpenTrigger(element) {
      const self = this;
      element.addEventListener(self.openTrigger, self.displayPopup(element));
    }

    setParentElement(parent) {
      this.parentElement = parent;
    }

    addAnimation(name, duration, iterations, delay) {
      const self = this;
      self.animationName = name;
      self.animationDuration = duration;
      self.animationIterations = iterations;
      self.animationDelay = delay;
    }

    addSound(path) {
      this.soundPath = path;
    }

    setCollateral(arrayOfCollateralElements) {
      this.collateral = arrayOfCollateralElements;
    }

    setCollateralAnimation(name, duration, iterations, delay) {
      this.collateralAnimationName = name;
      this.collateralAnimationDuration = duration;
      this.collateralAnimationIterations = iterations;
      this.collateralAnimationDelay = delay;
    }

    // =================================
    // THE FOLLOWING METHODS ARE PRIVATE
    // =================================
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

    animate(popup) {
      const self = this;
      popup.style.animationName = self.animationName;
      popup.style.animationDuration = self.animationDuration;
      popup.style.animationIterations = self.animationIterations;
      popup.style.animationDelay = self.animationDelay;
      popup.style.animationFillMode = "forwards";
    }

    animateCollateral() {
      for (let i = 0; i < this.collateral.length; i++) {
        const currElement = this.collateral[i];

        currElement.style.animationName = this.collateralAnimationName;
        currElement.style.animationDuration = this.collateralAnimationDuration;
        currElement.style.animationIterations = this.collateralAnimationIterations;
        currElement.style.animationDelay = this.collateralAnimationDelay;
        currElement.style.animationFillMode = "forwards";
      }
    }

    playSound() {
      const audio = new Audio(this.soundPath);
      audio.play();
    }

    displayTextPopup(element) {
      const self = this;
      return function (event) {
        const popup = document.createElement("div");
        // popup.style = "z-index: 2; position: absolute;";
        popup.className = "textPopup";

        // custom style
        popup.classList.add(self.cssStyle);

        // check for animation
        if (self.animationName !== null) {
          self.animate(popup);
        }

        // check for collateral animation
        if (self.collateral !== null) {
          self.animateCollateral();
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
        } else {
          element.addEventListener(self.closeTrigger, function (e) {
            e.preventDefault();
            popup.remove();
          });
        }
        return popup;
      };
    }

    displayBoxPopup(element) {
      const self = this;
      return function (event) {
        // find coordinates of event's target element
        let x =
          window.scrollX + event.currentTarget.getBoundingClientRect().left;
        let y =
          window.scrollY + event.currentTarget.getBoundingClientRect().top + 30;

        // make sure popup doesn't appear off of screen
        if (x + 0.2 * window.innerWidth > window.innerWidth) {
          x = window.innerWidth - 0.25 * window.innerWidth;
        }

        const popup = document.createElement("div");

        // default style
        popup.className = "boxPopup";

        // custom style
        popup.classList.add(self.cssStyle);

        popup.style.left = x + "px";
        popup.style.top = y + "px";

        // check for animation
        if (self.animationName !== null) {
          self.animate(popup);
        }

        // check for collateral animation
        if (self.collateral !== null) {
          self.animateCollateral();
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
            callback();
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
          self.animate(popup);
        }

        // check for collateral animation
        if (self.collateral !== null) {
          self.animateCollateral();
        }

        // check for sound
        if (self.soundPath !== null) {
          playSound();
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
  }

  global.Popup = global.Popup || Popup;
})(window);
