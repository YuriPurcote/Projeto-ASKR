window.addEventListener('scroll',()=>{
  let content = document.querySelector('#pratos');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.pageYOffset;
  if(contentPosition < screenPosition){
    content.classList.add('Active');
  }else{
    content.classList.add('subtitulo');
    content.classList.remove('Active');

  }
});
/* ANIMANDO TODOS OS PRATOS DO MENU */
var itemMenuELEMENTS = document.querySelectorAll('.item-menu');
itemMenuELEMENTS.forEach(function(itemMenuELEMENTS) {
  itemMenuELEMENTS.setAttribute("data-anima", "left");
  console.log(itemMenuELEMENTS);
})
