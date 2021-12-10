
const obtenerImg = document.querySelectorAll(".card-img-top");
const divImagen = document.querySelector(".cuadroSeleccionado");


obtenerImg.forEach((imagen) => {
    imagen.addEventListener("click", () => {
        mostrarImagen(Number(imagen.id));
        location.href='cuadroSeleccionado.html'
    });
});

// recibe todos los id por paramentro
async function mostrarImagen(id) {
    const datosLeidos = await traerDatos();
    // filtro por id
    const res = datosLeidos.filter((x) => x.id === id);
    res.forEach((e) => {
        
        pintarCuadro(e);
    });
}

async function traerDatos() {
    try {
        const data = await fetch("./data.json");
        const res = await data.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}
traerDatos();
function pintarCuadro(e) {
    //creo los elementos
    const divDatos = document.createElement('div') // div que contiene todo
    const divImagen = document.createElement('div')
    const divinfo = document.createElement('div')
    const img = document.createElement('img')
    const codigo = document.createElement('h5')
    const descrip = document.createElement('p')
    // seteo sus valores 
    img.src = e.img
    codigo.textContent = `00${e.id}`
    descrip.textContent = e.descripcion
    divImagen.appendChild(img)
    divinfo.appendChild(codigo)
    divinfo.appendChild(descrip)
    divDatos.appendChild(divImagen)
    divDatos.appendChild(divinfo)
    sessionStorage.setItem('cuadro',JSON.stringify(e))
    

}
function obtenerDatos(){

    sessionStorage.getItem('cuadro')
    console.log(  JSON.parse(sessionStorage.getItem('cuadro')));
}
obtenerDatos()