export const ColorButton = (color) => {
  const btn = document.createElement('button');
  btn.classList.add('color-button', `${color}-overlay`);
  btn.addEventListener('click', () => {
    showOverlay(color);
  });
  return btn;
};