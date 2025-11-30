emailjs.init("tDm1ziFTtxw3FuRwk");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formularioContacto");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        emailjs.sendForm("service_6k9v1ph", "template_8opb29m", this)
            .then((response) => {
                console.log("EmailJS response:", response);
                alert("Mensaje enviado correctamente.");
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alert("Error al enviar el formulario. Mira la consola.");
            });
    });
});