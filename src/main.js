import { ColorButton } from "./color-button";

const buttonColors = ['white', 'red', 'green'];

const renderColorButtons = () => {
  const overlayRef = document.querySelector('#screen-overlay');
  const buttonContainer = document.querySelector('.button-container');
  if (!overlayRef || !buttonContainer) return;
  buttonColors.forEach(color => {
    const btn = ColorButton(color, overlayRef);
    buttonContainer.appendChild(btn);
  });
}

addEventListener("DOMContentLoaded", ()=> {
  // renderColorButtons();

});
