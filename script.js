if (window.location.pathname.includes('index.html')) {
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
}

if (window.location.pathname.includes('pagina2.html')) {
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
// 2. Función para obtener una imagen de gato
async function fetchCatImage() {
    const container = document.getElementById('cat-image-container');
    container.innerHTML = ""; // Limpiar contenedor

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) throw new Error("Error al obtener imagen de gato.");

        const data = await response.json();
        const imgUrl = data[0]?.url;

        if (imgUrl) {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.alt = "Imagen de un gato";
            imgElement.style.maxWidth = "300px";
            imgElement.style.marginTop = "10px";
            container.appendChild(imgElement);
        } else {
            container.textContent = "No se encontró ninguna imagen.";
        }
    } catch (error) {
        console.error(error);
        container.textContent = "Ocurrió un error al cargar la imagen.";
    }
}

// 3. Función para obtener una frase motivacional
async function fetchMotivationalQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    quoteElement.textContent = "Cargando frase...";

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) throw new Error("Error al obtener frase motivacional.");

        const data = await response.json();
        const advice = data.slip?.advice;

        quoteElement.textContent = advice || "No se encontró una frase.";
    } catch (error) {
        console.error(error);
        quoteElement.textContent = "Ocurrió un error al cargar la frase.";
    }
}
}
