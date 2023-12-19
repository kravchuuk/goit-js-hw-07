const changeColorButton = document.querySelector(".change-color");
const bodyElement = document.body;
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
