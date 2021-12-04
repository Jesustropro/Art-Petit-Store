// llamo a los inputs y los guardo en variables gloabales 
const formulario = document.querySelector('.contenedorFormulario')
const inputsFormulario = document.querySelectorAll('.contenedorFormulario input')


// recorro todos los inputs y le aplico un evento 
const validarFormulario = e => {
  switch (e.target.name) {
    case "nombre":
      // en el caso de que el nombre tenga 3 digitos o menos pone la clase siguiente  y quita la clase datoos correctos
      if (e.target.value.length < 3) {
        e.target.classList.add('errorDatos')
        e.target.classList.remove('datosCorrectos')
      } else {
        // caso contrario elimina la clase errorDatos y setea clase datosCorrectos
        e.target.classList.remove('errorDatos')
        e.target.classList.add('datosCorrectos')
      }
      break;
    case "email":
      if (e.target.value.length < 3) {
        e.target.classList.add('errorDatos')
        e.target.classList.remove('datosCorrectos')
      } else {
        e.target.classList.remove('errorDatos')
        e.target.classList.add('datosCorrectos')
        mostrarIconos()
      }
      break;
  }
}
const mostrarIconos = e => {
  const inputs = document.querySelectorAll('.formularioInput input')
  const estadoFormulario = document.querySelector('.formularioEstado')
inputs.forEach(input=>{
  console.log(input);
  console.log(estadoFormulario);
  if(input.classList.contains('errorDatos')){
    estadoFormulario.classList.add('formularioEstadoActivo')
    estadoFormulario.classList.add('formularioEstadoIncorrecto')
  }
  if(input.classList.contains('datosCorrectos')){
    estadoFormulario.classList.add('formularioEstadoActivo')
    estadoFormulario.classList.remove('formularioEstadoIncorrecto')
    estadoFormulario.classList.add('formularioEstadoCorreto')
  }
})

 
}
inputsFormulario.forEach(input => {
  input.addEventListener('keyup', validarFormulario)
  input.addEventListener('keyup', mostrarIconos)

})