
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
    let res = datosLeidos.filter(obj=> obj.id === id)
    console.log(res.id);
    res.forEach((e) => {
        // una vez que filtro  guardo el resultado en el Session Storage
        sessionStorage.setItem('cuadro',JSON.stringify(e))
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