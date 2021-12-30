// llamo a los inputs y los guardo en variables gloabales
const formulario = document.querySelector(".contenedorFormulario");
const inputsFormulario = document.querySelectorAll(".contenedorFormulario input");
const iconoForm = document.querySelector("#nombreUser");
const iconoFormEmail = document.querySelector("#emailUser");
const estadoFormulario = document.querySelector(".formularioEstado");
const estadoFormularioEmail = document.querySelector(".formularioEstadoEmail");
const exprReguEMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const btnSubmit = document.querySelector('.botonSubmit')

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      // en el caso de que el nombre tenga 3 digitos o menos pone la clase siguiente  y quita la clase datoos correctos
      validarDatosNombre(e)

      break;
    case "email":
      // si el  email no pasa el test entonces marcalo como no valido , caso contrario marcalo como valido 
      validarDatosEmail(e)
      break;
  }
};
// recorro todos los inputs y le aplico un evento
inputsFormulario.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
});


const validarDatosNombre = (e) => {
  if (e.target.value.length <=3 || e.target.value.length > 25) {
    btnformulario(e)
    e.target.classList.add("errorDatos");
    e.target.classList.remove("datosCorrectos");
    estadoFormulario.classList.add('formularioEstadoActivo')
    iconoForm.classList.remove('formularioEstadoCorrecto')
    iconoForm.classList.add('formularioEstadoIncorrecto')
    document.querySelector('#iconoError ').classList.add('fa-times')
    
  } else {
    // caso contrario elimina la clase errorDatos y setea clase datosCorrectos
    btnformulario(e)
    e.target.classList.remove("errorDatos");
    e.target.classList.add("datosCorrectos");
    estadoFormulario.classList.add('formularioEstadoActivo')
    iconoForm.classList.remove('formularioEstadoIncorrecto')
    iconoForm.classList.add('formularioEstadoCorreto')
    document.querySelector('#iconoError').classList.remove('fa-times')
    document.querySelector('#iconoError').classList.add('fa-check')
  }
}
const validarDatosEmail = (e) => {
  if (exprReguEMail.test(e.target.value) === false) {
    btnformulario(e)
    e.target.classList.add("errorDatos");
    e.target.classList.remove("datosCorrectos");
    estadoFormularioEmail.classList.add('formularioEstadoActivo')
    iconoFormEmail.classList.remove('formularioEstadoCorrecto')
    iconoFormEmail.classList.add('formularioEstadoIncorrecto')
    document.querySelector('#iconoErrorEmail').classList.add('fa-times')
    document.querySelector('#iconoErrorEmail').classList.remove('fa-check')
  } else {
    btnformulario(e)
    // caso contrario elimina la clase errorDatos y setea clase datosCorrectos
    e.target.classList.remove("errorDatos");
    e.target.classList.add("datosCorrectos");
    estadoFormularioEmail.classList.add('formularioEstadoActivo')
    iconoFormEmail.classList.remove('formularioEstadoIncorrecto')
    iconoFormEmail.classList.add('formularioEstadoCorreto')
    document.querySelector('#iconoErrorEmail ').classList.remove('fa-times')
    document.querySelector('#iconoErrorEmail ').classList.add('fa-check')
  }

}

const btnformulario = e=>{
if(e.target.classList[2]==='errorDatos'){
  btnSubmit.classList.add('--incompleto')
  document.querySelector(".botonSubmit").disabled = true;
}else{
  btnSubmit.classList.remove('--incompleto')
  document.querySelector(".botonSubmit").disabled = false;
  
}
}