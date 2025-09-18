function userRole(user) {
    return `El usuario ${user.nombre} tiene el rol de ${user.rol}.`;
}

const usuario = { nombre: "Ana", rol: "administrador" };

console.log(userRole(usuario)); // "El usuario Ana tiene el rol de administrador."