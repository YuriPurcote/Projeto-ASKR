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
    
    vid=document.getElementById("myVideo")
    vid.disablePictureInPicture = true