 // Inicialización
    emailjs.init("tDm1ziFTtxw3FuRwk");

    // Envío del formulario
    document.getElementById("formContacto").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_6k9v1ph", "template_8opb29m", this)
            .then(() => {
                alert("Mensaje enviado correctamente.");
                this.reset();
            })
            .catch((error) => {
                alert("Error al enviar el formulario.");
                console.error(error);
            });
    });