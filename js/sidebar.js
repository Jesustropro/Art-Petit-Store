const btnSidebar = document.getElementById('sidebar')
const contendidoNavs = document.querySelector('.contenedorNavs')
btnSidebar.addEventListener('click',()=>{
    contendidoNavs.classList.toggle('active')

})