const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const colorButton = document.querySelector('.color-button');
const navLogo = document.querySelector('.nav-logo');
const mvCard = document.querySelectorAll('.mv-card');
const header = document.querySelector('header');
const meilleuresVentes = document.querySelector('.meilleures-ventes');
const sliderButton = document.querySelector('.slider-button');

const mvSearch = Array.prototype.slice.call(mvCard)


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
    toggleClass(container, 'hidden'); // On ajoute ou on retire la classe "active" sur le menu
}


const storageType = localStorage; // on stocke le consentement dans le localStorage du navigateur 
const consentPropertyName = 'cookieConsentement'; // nom de la propriété du consentement dans le storage

const shouldShowPopup = () => !storageType.getItem(consentPropertyName); // si on a pas de consentement, on affiche le popup
const saveToStorage = () => storageType.setItem(consentPropertyName, true); // on sauvegarde le consentement dans le storage

const cookiePopup = document.querySelector('#cookie-popup'); // on récupère le popup
const cookieAccept = document.querySelector('#cookie-accept'); // on récupère le bouton d'acceptation


const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const submitButton = document.querySelector('#submit-button');
const welcomeClose = document.querySelector('#welcome-close');

const welcomePopup = document.querySelector('#welcome-popup');
const welcomeUser = document.querySelector('#welcome-user');


window.onload = () => { // quand la page se charge
    
    let shouldShowWelcomePopup = sessionStorage.getItem('shouldShowWelcomePopup');

    if (sessionStorage.getItem('shouldShowWelcomePopup') == null) {
        sessionStorage.setItem('shouldShowWelcomePopup', true);
    }

    if (shouldShowWelcomePopup == "true") {

        welcomePopup.classList.remove('hidden');

        if (localStorage.getItem('fname') != null && localStorage.getItem('lname') != null ) {
            welcomeUser.innerText = "Bonjour " + localStorage.getItem('fname') + " " + localStorage.getItem('lname') + ", bienvenue sur CSNOW !";
        } else {
            welcomeUser.innerText = "Bonjour, bienvenue sur CSNOW ! Pensez a vous inscrire sur la page contact pour profiter de toutes les fonctionnalités !";
        }

        welcomeClose.onclick = () => {
            sessionStorage.setItem('shouldShowWelcomePopup', false);
            welcomePopup.classList.add('hidden');
        }

    } else console.log("Welcome popup already shown");

    if (shouldShowPopup(storageType)) { // si on doit afficher le popup
        cookiePopup.classList.remove('hidden'); // on l'affiche
        cookieAccept.onclick = () => {
            saveToStorage(); // on sauvegarde le consentement
            cookiePopup.classList.add('hidden'); // on cache le popup
        }
    }
}


function searchbar() {
    var search = document.getElementById("search").value

    let glossaire = ["glossaire", "gloss", "glossa", "glossai", "glossair"]
    let homepage = ["home", "menu", "homepage", "index"]
    let ressources = ["ressources", "ressource", "equipe", "équipe", "team"]

    if (glossaire.includes(search.toLowerCase()))
    window.open("./glossaire.html", "_self")

    if (homepage.includes(search.toLowerCase()))
    window.open("./index.html", "_self")

    if (ressources.includes(search.toLowerCase()))
    window.open("./ressources.html", "_self")

    if (search.toLowerCase() === "easter egg")
    window.open("./easter-egg.html", "_self")
}


try {
    submitButton.onclick = () => {
        if (!(fname.value == null && lname.value == null)) {

        const fnameText = fname.value;
        const lnameText = lname.value;
    
        localStorage.setItem('fname', fnameText);
        localStorage.setItem('lname', lnameText);
        
        }
    }
} catch (error) {} 


const items = document.querySelectorAll('.img-slider > img');
const nbSlide = items.length;
const suivant = document.querySelector('.button-right');
const precedent = document.querySelector('.button-left');


let count = 0;


function slideSuivante() {
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
}

try {
    suivant.addEventListener('click', slideSuivante)
} catch (error) {}


function slidePrecedente() {
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}

try {
    precedent.addEventListener('click', slidePrecedente)
} catch (error) {}

let i = 0;

try {
    colorButton.onclick = () => {
        const colors = ["light", "dark"]

        if (i + 1 == colors.length) {
            i = 0;
        } else {
            i++;
        }

        var SelectedColor = colors[i]

        if (SelectedColor === "dark") {
            // mettre les infos quand le cas est noir
            navLogo.classList.add("dark")
            let i = 0;
            while (i < mvCard.length) {
                mvCard[i].classList.add("dark");
                i++;
            }
            header.classList.add("dark");
            document.body.classList.add("dark");
            meilleuresVentes.classList.add("dark");
            sliderButton.classList.add("dark");
            hamburger.classList.add("dark");
            menu.classList.add("dark");

        } else {
            // mettre les infos quand le cas est blanc
            navLogo.classList.remove("dark")
            let i = 0;
            while (i < mvCard.length) {
                mvCard[i].classList.remove("dark");
                i++;
            }
            header.classList.remove("dark")
            document.body.classList.remove("dark");
            meilleuresVentes.classList.remove("dark");
            sliderButton.classList.remove("dark");
            hamburger.classList.remove("dark");
            menu.classList.remove("dark");
        }
    }
} catch (error) {}