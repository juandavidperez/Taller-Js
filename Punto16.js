let tareas = [];
let idCont = 1;

function crearTarea(titulo) {
  const nuevaTarea = {
    id: idCont++,
    titulo,
    estado: "pendiente"
  };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function obtenerTareas() {
  return tareas;
}

function obtenerTareaPorId(id) {
  return tareas.find(t => t.id === id) || null;
}

function actualizarTarea(id, datos) {
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return null;

  if (datos.titulo !== undefined) tarea.titulo = datos.titulo;
  if (datos.estado !== undefined) tarea.estado = datos.estado;

  return tarea;
}

function eliminarTarea(id) {
  const index = tareas.findIndex(t => t.id === id);
  if (index === -1) return false;

  tareas.splice(index, 1);
  return true;
}

console.log("Crear tareas");
crearTarea("Aprender Promesas");
crearTarea("Practicar Async/Await");
crearTarea("Hacer ejercicio");
console.log(obtenerTareas());

console.log("Obtener tarea con id=2");
console.log(obtenerTareaPorId(2));

console.log("Actualizar tarea id=1");
actualizarTarea(1, { estado: "completada", titulo: "Aprender Promesas en JS" });
console.log(obtenerTareas());

console.log("Eliminar tarea id=3");
eliminarTarea(3);
console.log(obtenerTareas());
