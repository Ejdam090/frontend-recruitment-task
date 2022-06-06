/// variabels
const btn = document.querySelector(".content-btn");
const popupCounter = document.querySelector(".popup-counter");
const popupShadow = document.querySelector(".popup-shadow");
const xmark = document.querySelector("#close");
const resetBTn = document.querySelector(".popup-reset");
let count = localStorage.getItem("count") || 0;

/// function which show popup
const showPanel = () => {
  if (!(popupShadow.style.display === "block")) {
    popupShadow.style.display = "block";
    count++;
    popupCounter.textContent = `${count} times`;
  } else {
    popupShadow.style.display = "none";
  }

  if (count > 4) {
    resetBTn.style.display = "block";
  }
  localStorage.setItem("count", count);
};

//listener on click

btn.addEventListener("click", showPanel);
xmark.addEventListener("click", showPanel);
window.addEventListener("click", (e) => {
  e.target === popupShadow ? showPanel() : false;
});
resetBTn.addEventListener("click", () => {
  count = 0;
  localStorage.setItem("count", count);
  popupCounter.textContent = `${count} times`;
  resetBTn.style.display = "none";
});
