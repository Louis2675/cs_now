const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');


hamburger.onclick = function() { // Au clic sur le menu hamburger
    hamburger.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu hamburger
    menu.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu
    container.classList.toggle('hidden'); // On ajoute ou on retire la classe "active" sur le container
}


const items = document.querySelectorAll('.img-slider > img');
const nbSlide = items.length;
const suivant = document.querySelector('.button-right');
const precedent = document.querySelector('.button-left');

let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedente)