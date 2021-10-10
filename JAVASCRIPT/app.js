window.addEventListener('scroll',()=>{
  let subPratos = document.querySelector('#pratos');
  let subPratosPosition = subPratos.getBoundingClientRect().top;
  let screenPosition = window.pageYOffset;

  if(subPratosPosition < screenPosition ){
    subPratos.classList.add('Active');
  }else{
    subPratos.classList.add('subtitulo');
    subPratos.classList.remove('Active');
  }
});

window.addEventListener('scroll',()=>{
  let subBebidas = document.querySelector('#bebidas');
  let subBebidasPosition = subPratos.getBoundingClientRect().top;
  let screenPosition = window.pageYOffset;

  if(subBebidasPosition < screenPosition){
    subBebidas.classList.add('Active');
  }else{
    subBebidas.classList.add('subtitulo');
    subBebidas.classList.remove('Active');
  }
});

/* ANIMANDO TODOS OS PRATOS DO MENU */
