const productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 50 },
  { id: 3, nombre: "Teclado", precio: 100 },
  { id: 4, nombre: "Monitor", precio: 800 }
];

let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    console.log(`Producto con id ${id} no existe`);
    return;
  }

  const yaEnCarrito = carrito.find(p => p.id === id);
  if (yaEnCarrito) {
    console.log(`El producto "${producto.nombre}" ya está en el carrito`);
    return;
  }

  carrito.push(producto);
  console.log(`Producto "${producto.nombre}" agregado al carrito`);
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    console.log("El carrito está vacío");
    return;
  }

  console.log("\n--- Carrito de compras ---");
  let total = 0;
  carrito.forEach(p => {
    console.log(`${p.nombre} - $${p.precio}`);
    total += p.precio;
  });
  console.log("--------------------------");
  console.log(`Total: $${total}\n`);
}

agregarAlCarrito(1); 
agregarAlCarrito(2);
agregarAlCarrito(2);
agregarAlCarrito(5);
mostrarCarrito();
