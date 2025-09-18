let productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Tablet", precio: 500 },
    { id: 3, nombre: "Smartphone", precio: 800 }
];

function getProducto(id) {
    return new Promise((resolve, reject) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            resolve(producto);
        } else {
            reject(new Error("Producto no encontrado"));
        }
    });
}

getProducto(2)
    .then(producto => console.log("Producto encontrado:", producto))
    .catch(error => console.error(error.message));
getProducto(5)
    .then(producto => console.log("Producto encontrado:", producto))
    .catch(error => console.error(error.message));
// Producto encontrado: { id: 2, nombre: "Tablet", precio: 500 }
// Producto no encontrado