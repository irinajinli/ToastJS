// select elements in DOM
const base = document.querySelector("#base");
const mouseoverGCW = document.querySelector("#mouseoverGCW");
const mouseoverEvolutionary = document.querySelector("#mouseoverEvolutionary");
const mouseoverSenescence = document.querySelector("#mouseoverSenescence");
const mouseoverPleiotropy = document.querySelector("#mouseoverPleiotropy");
const mouseoverGene = document.querySelector("#mouseoverGene");

const mouseoverGCWPopup = new Popup(
  base,
  "box",
  "George Christopher Williams was an American evolutionary biologist.",
  "mouseover",
  "mouseleave"
);
mouseoverGCWPopup.addAnimation("fadeIn", "0.5s", "1");
mouseoverGCWPopup.addOpenTrigger(mouseoverGCW);

const mouseover2Popup = new Popup(
  base,
  "box",
  "Evolution is change in the heritable characteristics of biological populations over successive generations.",
  "mouseover",
  "mouseleave"
);
mouseover2Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover2Popup.addOpenTrigger(mouseoverEvolutionary);

const mouseover3Popup = new Popup(
  base,
  "box",
  "Senescence or biological aging is the gradual deterioration of functional characteristics.",
  "mouseover",
  "mouseleave"
);
mouseover3Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover3Popup.addOpenTrigger(mouseoverSenescence);

const mouseover4Popup = new Popup(
  base,
  "box",
  "Pleiotropy occurs when one gene influences two or more seemingly unrelated phenotypic traits.",
  "mouseover",
  "mouseleave"
);
mouseover4Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover4Popup.addOpenTrigger(mouseoverPleiotropy);

const mouseover5Popup = new Popup(
  base,
  "box",
  "In biology, a gene is a sequence of nucleotides in DNA or RNA that encodes the synthesis of a gene product, either RNA or protein.",
  "mouseover",
  "mouseleave"
);
mouseover5Popup.addAnimation("fadeIn", "0.5s", "1");
mouseover5Popup.addOpenTrigger(mouseoverGene);
