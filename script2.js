// Inicializar EmailJS
emailjs.init("EroRhSfyHAcDiFRdF");

// Enviar correo
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const recipientEmail = document.getElementById("recipient-email").value;
    const emailMessage = document.getElementById("email-message").value;

    const emailParams = {
        to_email: recipientEmail,
        message: emailMessage,
    };

    emailjs.send("service_0tb3a2z", "template_itu2gp4", emailParams)
        .then(() => {
            document.getElementById("email-status").textContent = "Correo enviado exitosamente.";
        })
        .catch((error) => {
            document.getElementById("email-status").textContent = "Error al enviar el correo.";
            console.error("Error:", error);
        });
});

// Mostrar imagen de gato
document.getElementById("fetch-cat").addEventListener("click", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            const catImage = document.getElementById("cat-image");
            catImage.src = data[0].url;
            catImage.style.display = "block";
        })
        .catch((error) => console.error("Error al obtener la imagen de gato:", error));
});

// Obtener consejo aleatorio
document.getElementById("fetch-advice").addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("advice").textContent = data.slip.advice;
        })
        .catch((error) => console.error("Error al obtener el consejo:", error));
});
