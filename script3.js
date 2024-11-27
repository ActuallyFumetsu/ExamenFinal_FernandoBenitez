emailjs.init("EroRhSfyHAcDiFRdF"); 

document.getElementById("employee-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const observation = document.getElementById("observation").value;

    const params = {
        name: name,
        salary: salary,
        observation: observation
    };

    emailjs
        .send("service_0tb3a2z", "template_itu2gp4", params)
        .then(() => {
            document.getElementById("form-status").textContent = "Formulario enviado con éxito.";
            document.getElementById("form-status").style.color = "green";
            document.getElementById("employee-form").reset();
        })
        .catch((error) => {
            document.getElementById("form-status").textContent = "Hubo un error al enviar el formulario.";
            document.getElementById("form-status").style.color = "red";
            console.error("Error:", error);
        });
});

document.getElementById("clear-form").addEventListener("click", function () {
    document.getElementById("employee-form").reset();
    document.getElementById("form-status").textContent = "";
});
