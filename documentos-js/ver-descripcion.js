const botones = document.querySelectorAll("button");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const descripcion = boton.previousElementSibling;
    const icono = descripcion.previousElementSibling;
    const titulo = icono.previousElementSibling;
    const margenArriba = 100;

    if (descripcion.style.display === "none" || descripcion.style.display === "") {
      descripcion.style.display = "block";

      requestAnimationFrame(() => {
        const posicionCalculada = titulo.getBoundingClientRect().top + window.scrollY - margenArriba;
        window.scrollTo({ top: posicionCalculada, behavior: "smooth" });
      });

      boton.innerText = "Cerrar";
    } else {
      descripcion.style.display = "none";
      boton.innerText = "Ver descripción";
    }
  });
});
