document.getElementById('load-cat').addEventListener('click', async () => {
    const catContainer = document.getElementById('cat-container');
    catContainer.innerHTML = '<p>Cargando...</p>';

    try {
        
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();

        
        const catImage = document.createElement('img');
        catImage.src = data[0].url;
        catImage.alt = 'MUESTRA GATOS';

        catContainer.innerHTML = '';
        catContainer.appendChild(catImage);
    } catch (error) {
        catContainer.innerHTML = '<p>Error al cargar la imagen.</p>';
        console.error(error);
    }
});
