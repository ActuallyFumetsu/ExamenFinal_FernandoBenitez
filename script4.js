function calculateSalary() {
    const salary = parseFloat(prompt("Ingresa tu salario:"));
    const discount = parseFloat(prompt("Ingresa el descuento:"));
    if (isNaN(salary) || isNaN(discount)) {
        alert("Por favor, ingresa valores válidos.");
    } else {
        const total = salary - discount;
        alert(`El salario final después del descuento es: $${total.toFixed(2)}`);
    }
}

function calculateTotalPoints() {
    const points = [];
    for (let i = 1; i <= 3; i++) {
        const point = parseFloat(prompt(`Ingresa el puntaje ${i}:`));
        if (isNaN(point)) {
            alert("Por favor, ingresa valores válidos.");
            return;
        }
        points.push(point);
    }
    const total = points.reduce((sum, p) => sum + p, 0);
    alert(`El total de puntos es: ${total}`);
}

function calculatePercentage() {
    const point = parseFloat(prompt("Ingresa el puntaje:"));
    if (isNaN(point)) {
        alert("Por favor, ingresa un valor válido.");
    } else {
        const percentage = point * 0.15;
        alert(`El 15% del puntaje es: ${percentage.toFixed(2)}`);
    }
}
