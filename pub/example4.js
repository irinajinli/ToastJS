// select elements in DOM
const base = document.querySelector("#base");
const sendButton = document.querySelector("#sendButton");

const sendPopup = new Popup(
  base,
  "box",
  "Your message has been sent!",
  "click"
);
sendPopup.addSound("./resources/botw_get.mp3");
sendPopup.addAnimation("fadeOut", "2s", "1", "0.5s");
sendPopup.addOpenTrigger(sendButton);
