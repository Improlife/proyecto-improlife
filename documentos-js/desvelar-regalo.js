const botonRegalo = document.getElementById("botonRegalo");
const regalo = document.getElementById("regalo");
function mostrarRegalo(){
    botonRegalo.style.display = "none";
    regalo.style.display = "block";
}
botonRegalo.addEventListener("click", mostrarRegalo);