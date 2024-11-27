emailjs.init("EroRhSfyHAcDiFRdF");

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
