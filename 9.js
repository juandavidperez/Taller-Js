function operar(a, b, callback) {
    return callback(a, b);
}

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}
console.log("Suma:", operar(5, 3, sumar)); // 8
console.log("Resta:", operar(5, 3, restar)); // 2
console.log("Multiplicación:", operar(5, 3, multiplicar)); // 15
