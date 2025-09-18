function evaluarNumero(num) {
    return (num < 0) ? "Negativo" : (num === 0) ? "Cero" : "Positivo";
}

console.log(evaluarNumero(-5)); // "Negativo"
console.log(evaluarNumero(0)); // "Cero"
console.log(evaluarNumero(7)); // "Positivo"