let posts = [
  { id: 1, titulo: "Primer post", contenido: "Este es el primer post" },
  { id: 2, titulo: "Segundo post", contenido: "Contenido del segundo post" }
];

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getPosts() {
  return new Promise(async (resolve) => {
    await esperar(1000);
    resolve(posts);
  });
}

function getPostById(id) {
  return new Promise(async (resolve, reject) => {
    await esperar(1000);
    const post = posts.find(p => p.id === id);

    if (post) {
      resolve(post);
    } else {
      reject(new Error(`Post con id ${id} no encontrado`));
    }
  });
}

function addPost(nuevoPost) {
  return new Promise(async (resolve) => {
    await esperar(1000);
    nuevoPost.id = posts.length + 1; 
    posts.push(nuevoPost);
    resolve(nuevoPost);
  });
}

getPosts()
  .then(data => console.log("Todos los posts:", data));

getPostById(2)
  .then(post => console.log("Post encontrado:", post))
  .catch(err => console.error("Error:", err.message));

addPost({ titulo: "Nuevo post", contenido: "Contenido agregado dinámicamente" })
  .then(post => console.log("Post agregado:", post));
