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

    // Get the modal
    var modal = document.getElementById("comanda");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }