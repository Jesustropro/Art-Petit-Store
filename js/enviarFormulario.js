
// funcion para enviar el contenido del formulario al email del usuario final 
const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Enviando...';
   const serviceID = 'default_service';
   const templateID = 'template_djdnmgl';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      location.href='formularioEnviado.html'
    }, (err) => {
      btn.value = 'Enviar';
    console.log(JSON.stringify(err));
    });

});