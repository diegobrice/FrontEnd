const phone = window.matchMedia("screen and (max-width:480px)");
const menu = document.querySelector(".menu");
const button = document.querySelector(".burger");

if (phone.matches) {
  mostrar();
} else {
  phone.addListener(validation);
}

function validation(event) {
  if (event.matches) {
    mostrar();
  } else {
    ocultar();
  }
}

function mostrar() {
  button.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

function ocultar() {
  button.removeEventListener("click", () => {
    menu.classList.toggle("active");
  });
  menu.removeEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
