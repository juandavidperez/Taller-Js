const curso = {
    titulo: "JavaScript",
    duracion: 40,
    temas: ["Funciones", "Objetos", "Asincronía"]
};

const { titulo, duracion, temas } = curso;
const primerTema = temas[0];

console.log(titulo); // "JavaScript"
console.log(duracion); // 40
console.log(primerTema); // "Funciones"