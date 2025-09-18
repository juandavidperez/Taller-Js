let usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Luis" }
];

let usuario = usuarios.find(u => u.id === 2) || {};

console.log(usuario); // { id: 2, nombre: "Ana" } o {} si no existe