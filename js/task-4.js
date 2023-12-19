document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      email: loginForm.elements.email.value.trim(),
      password: loginForm.elements.password.value.trim(),
    });
    loginForm.reset();
  }

  loginForm.addEventListener("submit", handleSubmit);
});
