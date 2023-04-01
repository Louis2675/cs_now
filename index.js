const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');


hamburger.onclick = function() { // Au clic sur le menu hamburger
    hamburger.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu hamburger
    menu.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu
    container.classList.toggle('hidden'); // On ajoute ou on retire la classe "active" sur le container
}


const items = document.querySelector('.img-slider');
const nbSlide = items.length;
const suivant = document.querySelector('.nav-right');
const precedent = document.querySelector('.nav-left');

let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
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
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)