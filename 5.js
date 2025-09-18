// Spread
const configBase = {
    host: "localhost",
    port: 8080,
    useSSL: false
};

const configExtended = {
    ...configBase,
    port: 9090,
    timeout: 5000
};

console.log("Configuración extendida:", configExtended); // { host: 'localhost', port: 9090, useSSL: false, timeout: 5000 }

// Rest
function promedio(...numeros) {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return numeros.length ? suma / numeros.length : 0;
}

console.log("Promedio:", promedio(10, 20, 30, 40)); // 25
console.log("Promedio:", promedio(5, 15)); // 10
console.log("Promedio:", promedio()); // 0