/* animação para deslizar devagar o scroll */
const menuItems = document.querySelectorAll('#colunaMenu a[href^="#"]');/* SELECIONA TODOS OS "A" QUE TENHAM O HREF QUE COMECE COM # */

menuItems.forEach(item =>{
    item.addEventListener('click',scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;/* identifica o evento */
    const id = element.getAttribute('href');/* seleciona dentro do HREF */
    const to =document.querySelector(id).offsetTop;/* identifica o elemento ID que esta sendo clicado */
    window.scrollTo({
        top:to,
        behavior: "smooth",
    });
}
/* para a musica */
var audio =document.getElementById('audio');
var playMusicBTN =document.getElementById('pause');
var count = 0 ;

function playPause() {
    if(count == 0) {
        audio.play();
        count= 1;
    }else{
        audio.pause();
        count= 0;

    }
    
}
/* PICTURE IN PICTURE */
    vid=document.getElementById("myVideo")
    vid.disablePictureInPicture = true
/* MODAL PARA A COMANDA */

   // Get the modal
   var modal    = document.getElementById("pedido");
   var comanda  = document.getElementById("comanda");
   var realizado  = document.getElementById("pedido-feito");
 

   var btn      = document.getElementsByClassName("far")[4];
   var fechar   = document.getElementById("fechar");
   var fecharComanda   = document.getElementById("fechar-comanda");
   var botao    = document.getElementById("myBtn");

   var pedidoChecado = document.getElementsByClassName('fa-check-double')[0];

   pedidoChecado.onclick = function() {
       comanda.style.display = "none"; 
       realizado.style.display = "block"; 
   }

   btn.onclick = function() {
       modal.style.display = "block"; 
   }
   fechar.onclick = function() {
       modal.style.display = "none"; 
   }


   botao.onclick = function() {
       comanda.style.display = "block"; 
   }
   fecharComanda.onclick = function() {
       comanda.style.display = "none"; 
   }
   window.onclick = function(event) {
       if (event.target == comanda) {
           comanda.style.display = "none";
           modal.style.display = "none";
           realizado.style.display = "none";
       }
   }