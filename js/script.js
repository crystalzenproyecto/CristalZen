document.addEventListener("DOMContentLoaded", function() {
    const botonToggle1 = document.getElementById("boton-toggle");
    const contenido1 = document.getElementById("nombre1");

    botonToggle1.addEventListener("click", function() {
        if (contenido1.style.display === "none" || contenido1.style.display === "") {
            contenido1.style.display = "block";
        } else {
            contenido1.style.display = "none";
        }
    });

    const botonToggle2 = document.getElementById("boton-toggle2");
    const contenido2 = document.getElementById("obtencion1");

    botonToggle2.addEventListener("click", function() {
        if (contenido2.style.display === "none" || contenido2.style.display === "") {
            contenido2.style.display = "block";
        } else {
            contenido2.style.display = "none";
        }
    });

    const botonToggle3 = document.getElementById("boton-toggle3");
    const contenido3 = document.getElementById("color1");

    botonToggle3.addEventListener("click", function() {
        if (contenido3.style.display === "none" || contenido3.style.display === "") {
            contenido3.style.display = "block";
        } else {
            contenido3.style.display = "none";
        }
    });

});