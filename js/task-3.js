const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateName);

function updateName() {
  const inputValue = nameInput.value.trim(); // Очищення від пробілів по краях

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
}

// Початкове значення для спана
updateName();
