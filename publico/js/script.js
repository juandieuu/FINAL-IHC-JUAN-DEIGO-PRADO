
//BUTTONS REDIRECT
function handleLogin(event) {
    event.preventDefault(); // Prevenir acción predeterminada del botón
    alert("Inicio de sesión exitoso");
    window.location.href = "#section2"; // Redirige a la sección "section2"
  }

  //LOGIN FORM
  const submitButton = document.querySelector(".submit-button");
  const socialButtons = document.querySelectorAll(".social-button");

  //LOGIN BUTTONS
  submitButton.addEventListener("click", handleLogin);
  socialButtons.forEach((button) => {
    button.addEventListener("click", handleLogin);
  });
