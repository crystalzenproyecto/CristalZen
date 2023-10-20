
//MENU PRINCIPAL
const cerrarMenuBtn = document.getElementById('cerrar-menu');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Agrega un evento de clic al botón de cerrar el menú
cerrarMenuBtn.addEventListener('click', () => {
navMenu.classList.toggle('nav-menu_visible');
});

// Muestra el menú desplegable al hacer clic en los items
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar Menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir Menú");
  }
});



//VALIDACION DEL FORMULARIO DE SUSCRIPCION
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  
  if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      event.preventDefault();
  } else {
      alert("¡Gracias por suscribirte!");
  }
});

//VALIDACION DEL FORMULARIO DE CONTACTO
function validarFormulario() {
  var nombre = document.getElementById("nombre-contacto").value;
  var email = document.getElementById("nombre-email").value;
  var mensaje = document.getElementById("nombre-mensaje").value;

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos");
} else {
    alert("Correo enviado con éxito");
    // Aquí podrías agregar lógica adicional, como enviar datos al servidor.
}
}


//VENTANA EMERGENTE PARA MOSTRAR LOS PRODUCTOS
function mostrarPopup(event, id, nombreImagen, titulo, precio) {
  event.preventDefault(); // Evita la acción predeterminada del enlace (recarga de la página)

  var popup = document.getElementById(id);
  var imagenPopup = popup.querySelector(".img-producto-popup");
  var tituloPopup = popup.querySelector(".titulo-popup");
  var precioPopup = popup.querySelector(".precio-popup");

  imagenPopup.src = nombreImagen; // Cambia la fuente de la imagen popup
  tituloPopup.textContent = titulo; // Asigna el título al elemento del popup
  precioPopup.textContent = precio;
  
  popup.style.display = 'block';
}


function ocultarPopup(event, id) {
  event.preventDefault();
  
  var popup = document.getElementById(id);
  popup.style.display = "none";
}

