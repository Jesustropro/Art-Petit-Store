// llamo a los inputs y los guardo en variables gloabales 
const nombreInput = document.querySelector('#floatingName')
const emailInput = document.querySelector('#floatingInput')
const textoPedido = document.querySelector('#exampleFormControlTextarea1')
const btnSubmit = document.querySelector('.botonSubmit')

btnSubmit.addEventListener('click',e=>{
    e.preventDefault()
    checkDatos()
})

function checkDatos() {
if(nombreInput.value.length<2|| nombreInput.value ==='' ){
    console.log("nombre demasiado corto o vacio");
}else if(emailInput.value.length<2||emailInput.value ==='') {
    console.log("campo no valido o vacio");
}else{
    console.log("datos completados correctamente");
}
}
