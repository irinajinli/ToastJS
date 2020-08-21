const triggerElement = document.querySelector("#triggerElement");

const myPopup = new Popup(
  base,
  "box",
  "Here's an example Popup!",
  "mouseover",
  "mouseleave"
);
myPopup.addAnimation("fadeIn", "0.5s", "1");
myPopup.addOpenTrigger(triggerElement);
