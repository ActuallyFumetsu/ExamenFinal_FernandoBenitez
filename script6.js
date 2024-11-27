async function fetchAdvice() {
    const container = document.getElementById('advice-container');
    container.innerHTML = "Cargando frase...";

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) throw new Error("Error al obtener la frase.");

        const data = await response.json();
        const advice = data.slip.advice;

        container.innerHTML = `<p>"${advice}"</p>`;
    } catch (error) {
        console.error(error);
        container.innerHTML = "Ocurrió un error al cargar la frase.";
    }
}
