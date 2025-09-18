class Tarea {
  constructor(titulo) {
    this.titulo = titulo;
    this.estado = "pendiente";
  }

  toggleEstado() {
    this.estado = this.estado === "pendiente" ? "completada" : "pendiente";
  }
}

const tarea1 = new Tarea("Aprender Promesas");
console.log(tarea1.titulo, "-", tarea1.estado);

tarea1.toggleEstado();
console.log(tarea1.titulo, "-", tarea1.estado); 

tarea1.toggleEstado();
console.log(tarea1.titulo, "-", tarea1.estado);
