const controlsDiv = document.getElementById("controls");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", handleCreateBoxes);
destroyButton.addEventListener("click", handleDestroyBoxes);

function handleCreateBoxes() {
  const input = controlsDiv.querySelector("input");
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);

    size += 10;
  }
}

function handleDestroyBoxes() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
