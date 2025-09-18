const usuario = {
  id: 1,
  nombre: "Yeider",
  edad: 18,
  activo: true
};

const usuarioJSON = JSON.stringify(usuario);
console.log("JSON generado:", usuarioJSON);

localStorage.setItem("usuario", usuarioJSON);

const usuarioGuardado = localStorage.getItem("usuario");

const usuarioObjeto = JSON.parse(usuarioGuardado);
console.log("Objeto recuperado:", usuarioObjeto);
