const openButton = document.getElementById("openPopupButton");
const closeButton = document.getElementById("closePopup");
const popupContainer = document.getElementById("popupContainer");

openButton.addEventListener("click", () => {
  popupContainer.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});