// select elements in DOM
const base = document.querySelector("#base");
const enrolButton = document.querySelector("#enrolButton");

const importantPopup = new Popup(
  base,
  "important",
  "You have successfully been enrolled in CSC309!",
  "click",
  "close button"
);
importantPopup.addOpenTrigger(enrolButton);
