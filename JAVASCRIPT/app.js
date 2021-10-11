let subPratos = document.querySelector('#pratos');
let subPratosPosition = subPratos.getBoundingClientRect().top;
let screenPosition = window.pageYOffset;
let subBebidas = document.querySelector('#bebidas');

window.addEventListener('scroll',()=>{
  if(subPratosPosition < screenPosition ){
    subPratos.classList.add('Active');
    subBebidas.classList.add('Active');
  }else{
    subPratos.classList.add('subtitulo');
    subPratos.classList.remove('Active');
    subBebidas.classList.add('subtitulo');
    subBebidas.classList.remove('Active');
  }
});

