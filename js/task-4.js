const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Забороняє перезавантаження сторінки при відправці форми

  const formData = {};
  const formElements = event.target.elements;

  for (const element of formElements) {
    if (element.type !== "submit") {
      formData[element.name] = element.value.trim(); // Очищення від пробілів по краях
    }
  }

  if (Object.values(formData).some((value) => value === "")) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData); // Виведення об'єкта в консоль

  loginForm.reset(); // Очищення значень полів форми
}
