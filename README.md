# ToastJS
This is a library for creating popups created by Jean Li.

## Link to App Landing Page
https://floating-thicket-81506.herokuapp.com/

## Getting Started
Include the following link and script tags in your HTML file header:

```
<link rel="stylesheet" type="text/css" href="styles.css" />
<script defer type="text/javascript" src="toast.js"></script>
```

Select the HTML element you want to trigger the Popup:

```
const triggerElement = document.querySelector("#triggerElement");
```

Create a Popup object and add triggerElement as the openTrigger:

```
const myPopup = new Popup(
    base,
    "box",
    "Here's an example Popup!",
    "mouseover",
    "mouseleave"
  );
  myPopup.addOpenTrigger(triggerElement);
```

## Documentation
https://floating-thicket-81506.herokuapp.com/documentation.html
