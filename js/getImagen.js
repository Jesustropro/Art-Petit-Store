function obtenerDatos() {
    const resSession = JSON.parse(sessionStorage.getItem('cuadro'))
    pintarCuadro(resSession)
}
obtenerDatos()
function pintarCuadro(e) {
    //creo los elementos
    const { id, img, descripcion } = e
    const divDatos = document.createElement('div') // div que contiene todo
    const divImagen = document.createElement('div')
    const divinfo = document.createElement('div')
    const image = document.createElement('img')
    const codigo = document.createElement('h5')
    const descrip = document.createElement('p')
    // agrego sus clases para estilos en css 
    divDatos.classList.add('producDatos')
    divImagen.classList.add('producImg')
    divinfo.classList.add('producDescrip')
    // seteo sus valores 
    image.src = img
    codigo.textContent = `00${id}`
    descrip.textContent = descripcion
    divImagen.appendChild(image)
    divinfo.appendChild(codigo)
    divinfo.appendChild(descrip)
    divDatos.appendChild(divImagen)
    divDatos.appendChild(divinfo)
    document.querySelector('.cuadroSeleccionado').appendChild(divDatos)
    buttonCuadro()
}
function buttonCuadro(){
    const btn = document.createElement('button')
    btn.textContent ='¡Lo quiero! '
    btn.classList.add('btnComprar')
    document.querySelector('.producDescrip').appendChild(btn)
 

}
