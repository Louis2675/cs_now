const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');

 
function toggleClass(element, className) {
    if (element.classList.contains(className)) {  // Si l'élément contient la classe "className" on la retire
        element.classList.remove(className); 
    } else { // Si l'élément ne contient pas la classe "className" on l'ajoute
        element.classList.add(className);
    }
}


hamburger.onclick = () => { // Au clic sur le menu hamburger
    toggleClass(hamburger, 'active'); // On ajoute ou on retire la classe "active" sur le menu
    toggleClass(menu, 'active'); // On ajoute ou on retire la classe "active" sur le menu
    toggleClass(container, 'active'); // On ajoute ou on retire la classe "active" sur le menu
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


const storageType = localStorage; // on stocke le consentement dans le localStorage du navigateur 
const consentPropertyName = 'cookieConsentement'; // nom de la propriété dans le storage

const shouldShowPopup = () => !storageType.getItem(consentPropertyName); // si on a pas de consentement, on affiche le popup
const saveToStorage = () => storageType.setItem(consentPropertyName, true); // on sauvegarde le consentement dans le storage

const cookiePopup = document.querySelector('#cookie-popup'); // on récupère le popup
const cookieAccept = document.querySelector('#cookie-accept'); // on récupère le bouton d'acceptation

window.onload = () => { // quand la page se charge
    if (shouldShowPopup(storageType)) { // si on doit afficher le popup
        cookiePopup.classList.remove('hidden'); // on l'affiche  
        cookieAccept.onclick = () => {
            saveToStorage(); // on sauvegarde le consentement
            cookiePopup.classList.add('hidden'); // on cache le popup
        }
    }
}