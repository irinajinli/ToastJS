// select elements in DOM
const base = document.querySelector("#base");
const infoHover = document.querySelector("#infoHover");
const collateral = document.querySelector("#collateral");

const collateralPopup = new Popup(
  base,
  "text",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae enim vel arcu porta interdum. Sed ut libero neque. Donec eros felis, pellentesque vitae justo sed, porta scelerisque diam. Quisque tellus eros, consectetur ac velit eget, dictum tincidunt lectus. Vestibulum efficitur libero id massa pretium, et vulputate mi auctor. Integer tristique, odio id porttitor scelerisque, purus ligula suscipit lectus, vel gravida leo ex at lectus. Maecenas id accumsan arcu. Nulla mollis luctus orci sed vulputate. Ut arcu lacus, porttitor sed sapien vitae, mattis vestibulum nulla. Phasellus posuere interdum elit non hendrerit. Nunc eget eros sit amet lorem gravida gravida et eget turpis. Integer varius mauris et sapien maximus rutrum. Duis enim tellus, tincidunt nec pellentesque fermentum, facilisis id metus. Donec rhoncus auctor augue, nec pulvinar dui pulvinar quis. Nam ut metus ipsum.",
  "mouseover",
  null,
  "wide"
);
collateralPopup.setCollateral([collateral]);
collateralPopup.setCollateralAnimation("moveDown", "0s", "1");
collateralPopup.addOpenTrigger(infoHover);
