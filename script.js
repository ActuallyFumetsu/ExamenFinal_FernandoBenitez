emailjs.init("EroRhSfyHAcDiFRdF");

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username === "admin" && password === "1234") {
        loginMessage.style.color = "#28a745";
        loginMessage.textContent = "Inicio de sesión exitoso. Redirigiendo...";

        emailjs.send("service_0tb3a2z", "template_itu2gp4", {
            usuario: username,
        }).then(
            () => {
                console.log("Correo enviado correctamente.");
            },
            (error) => {
                console.error("Error al enviar el correo:", error);
            }
        );

        setTimeout(() => {
            window.location.href = "pagina2.html";
        }, 2000);
    } else {
        loginMessage.style.color = "#d9534f";
        loginMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
