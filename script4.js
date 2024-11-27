function calculateSalary() {
    const points = [];
    for (let i = 1; i <= 3; i++) {
        const point = parseFloat(prompt(`Ingresa el precio ${i}:`));
        if (isNaN(point)) {
            alert("Por favor, ingresa valores válidos.");
            return;
        }
        points.push(point);
    }
    const total = points.reduce((sum, p) => sum + p, 0);
    alert(`El total de precio es: ${total}`);
}

function calculateTotalPoints() {
    const point = parseFloat(prompt("Ingresa el precio:"));
    if (isNaN(point)) {
        alert("Por favor, ingresa un valor válido.");
    } else {
        const percentage = point * 0.30;
        alert(`El precio del producto es: ${percentage.toFixed(2)}`);
    }
}

function calculatePercentage() {
    const point = parseFloat(prompt("Ingresa el precio:"));
    if (isNaN(point)) {
        alert("Por favor, ingresa un valor válido.");
    } else {
        const percentage = point * 0.25;
        alert(`El precio del producto es: ${percentage.toFixed(2)}`);
    }
}
