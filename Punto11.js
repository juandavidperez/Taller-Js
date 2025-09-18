const productos = [
  { id: 1, nombre: "Laptop" },
  { id: 2, nombre: "Mouse" },
  { id: 3, nombre: "Teclado" }
];

function getProducto(id) {
  return new Promise((resolve, reject) => {
    const producto = productos.find(p => p.id === id);

    if (producto) {
      resolve(producto);
    } else {
      reject(new Error(`Producto con id ${id} no encontrado`));
    }
  });
}

async function buscarProducto(id) {
  try {
    const producto = await getProducto(id);
    console.log("Producto encontrado:", producto);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

buscarProducto(2);
buscarProducto(5);
