  const params = new URLSearchParams(window.location.search);
  const valor = params.get("opcion");

  if (valor) {
    const select = document.getElementById("numeroSesiones");
    select.value = valor;
  }