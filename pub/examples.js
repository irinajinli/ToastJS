// select elements in DOM
const base = document.querySelector("#base");

const mouseover1 = document.querySelector("#mouseover1");
const mouseover2 = document.querySelector("#mouseover2");
const mouseover3 = document.querySelector("#mouseover3");
const mouseover4 = document.querySelector("#mouseover4");
const mouseover5 = document.querySelector("#mouseover5");
const enrolButton = document.querySelector("#enrolButton");

const mouseover1Popup = new Popup(
  base,
  "box",
  "George Christopher Williams was an American evolutionary biologist.",
  "mouseover",
  "mouseleave"
);
mouseover1Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover1Popup.addOpenTrigger(mouseover1);

const mouseover2Popup = new Popup(
  base,
  "box",
  "Evolution is change in the heritable characteristics of biological populations over successive generations.",
  "mouseover",
  "mouseleave"
);
mouseover2Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover2Popup.addOpenTrigger(mouseover2);

const mouseover3Popup = new Popup(
  base,
  "box",
  "Senescence or biological aging is the gradual deterioration of functional characteristics.",
  "mouseover",
  "mouseleave"
);
mouseover3Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover3Popup.addOpenTrigger(mouseover3);

const mouseover4Popup = new Popup(
  base,
  "box",
  "Pleiotropy occurs when one gene influences two or more seemingly unrelated phenotypic traits.",
  "mouseover",
  "mouseleave"
);
mouseover4Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover4Popup.addOpenTrigger(mouseover4);

const mouseover5Popup = new Popup(
  base,
  "box",
  "In biology, a gene is a sequence of nucleotides in DNA or RNA that encodes the synthesis of a gene product, either RNA or protein.",
  "mouseover",
  "mouseleave"
);
mouseover5Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover5Popup.addOpenTrigger(mouseover5);

const importantPopup = new Popup(
  base,
  "important",
  "You have successfully been enrolled in CSC309!",
  "click",
  "close button"
);
importantPopup.addOpenTrigger(enrolButton);
