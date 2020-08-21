// select elements in DOM
const base = document.querySelector("#base");
const cartButton = document.querySelector("#cartButton");

const cartPopup = new Popup(
  base,
  "box",
  "This item has been added to your cart.",
  "click"
);
cartPopup.addAnimation("fadeOut", "2s", "1", "0.5s");
cartPopup.addOpenTrigger(cartButton);
