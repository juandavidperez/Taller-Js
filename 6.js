let numeros = [3, 8, 12, 5, 20, 7];
let resultado = numeros
    .filter(num => num > 6)
    .map(num => num * 2);

console.log("Números mayores que 6, multiplicados por 2:", resultado); // [16, 24, 40, 14]