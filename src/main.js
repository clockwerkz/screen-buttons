

addEventListener("DOMContentLoaded", ()=> {
  // renderColorButtons();
  const screenOverlay = document.getElementById("screen-overlay");
  screenOverlay.addEventListener("click", () => {
    if (!document.fullscreenElement) return;
    screenOverlay.style.display = 'none';
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
    document.removeEventListener('fullscreenchange', exitFullscreenHandler); 
  })
});
