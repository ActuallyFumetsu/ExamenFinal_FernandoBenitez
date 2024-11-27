// Función para obtener una imagen de gato usando la API
async function fetchCatImage() {
    const container = document.getElementById('cat-image-container');
    container.innerHTML = ""; // Limpiar el contenedor antes de agregar la nueva imagen

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) throw new Error("Error al obtener la imagen de gato.");

        const data = await response.json();
        const imgUrl = data[0]?.url;

        if (imgUrl) {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.alt = "Imagen de un gato";
            container.appendChild(imgElement);
        } else {
            container.textContent = "No se encontró ninguna imagen.";
        }
    } catch (error) {
        console.error(error);
        container.textContent = "Ocurrió un error al cargar la imagen.";
    }
}
