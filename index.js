const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const colorButton = document.querySelector('.color-button');
const navLogo = document.querySelector('.nav-logo');
const mvCard = document.querySelectorAll('.mv-card');
const header = document.querySelector('header');
const meilleuresVentes = document.querySelector('.meilleures-ventes');
const sliderButton = document.querySelector('.slider-button');
const footer = document.querySelector('footer');
const tableau = document.querySelector('.tableau');
const scrollUp = document.querySelector('.scroll-up')

const mvSearch = Array.prototype.slice.call(mvCard) // on transforme la NodeList en Array pour pouvoir facilement parcourir les elements


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


const fname = document.querySelector('#fname'); // on récupère le prénom
const lname = document.querySelector('#lname'); // on récupère le nom
const submitButton = document.querySelector('#submit-button');
const welcomeClose = document.querySelector('#welcome-close');

const welcomePopup = document.querySelector('#welcome-popup');
const welcomeUser = document.querySelector('#welcome-user');


window.onload = () => { // quand la page se charge
    
    if (localStorage.getItem('color') == null) { // si on a pas de couleur enregistrée
        localStorage.setItem('color', 'light'); // on enregistre la couleur par défaut
    } 

    let SelectedColor = localStorage.getItem('color'); // on récupère la couleur enregistrée
    toggleColor(SelectedColor); // on applique la couleur enregistrée

    if (sessionStorage.getItem('shouldShowWelcomePopup') == null) { // si on a pas de valeur pour le popup de bienvenue
        sessionStorage.setItem('shouldShowWelcomePopup', true); // on enregistre la valeur par défaut
    }

    if (sessionStorage.getItem('shouldShowWelcomePopup') == "true") { // si on doit montrer le popup

        welcomePopup.classList.remove('hidden'); // On cache l'element

        if (localStorage.getItem('fname') != null && localStorage.getItem('lname') != null ) {
            welcomeUser.innerText = "Bonjour " + localStorage.getItem('fname') + " " + localStorage.getItem('lname') + ", bienvenue sur CSNOW !"; // On modifie le texte du popup
        } else {
            welcomeUser.innerText = "Bonjour, bienvenue sur CSNOW ! Pensez a vous inscrire sur la page contact pour profiter de toutes les fonctionnalités !"; // On modifie le texte du popup
        }

        welcomeClose.onclick = () => {
            sessionStorage.setItem('shouldShowWelcomePopup', false); // Quand on clique sur la fermuture, on sauvegarde la valeur qui determine si on doit fermer a false
            welcomePopup.classList.add('hidden'); // On cache
        }

    } else console.log("Welcome popup already shown"); // si on a deja montré le popup, on affiche un message dans la console

    if (shouldShowPopup(storageType)) { // si on doit afficher le popup
        cookiePopup.classList.remove('hidden'); // on l'affiche
        cookieAccept.onclick = () => {
            saveToStorage(); // on sauvegarde le consentement
            cookiePopup.classList.add('hidden'); // on cache le popup
        }
    }
}


function searchbar() {
    var search = document.getElementById('search').value

    let glossaire = ['glossaire', 'gloss', 'glossa', 'glossai', 'glossair'] // possibles entres qui renvoient vers la page glossaire
    let homepage = ['home', 'menu', 'homepage', 'index'] // possibles entres qui renvoient vers la page d'accueil
    let ressources = ['ressources', 'ressource', 'equipe', 'équipe', 'team'] // possibles entres qui renvoient vers la page ressources
    let contact = ['contact', 'contacts', 'cont' ,'conta', 'contac', 'contacte', 'form', 'formulaire', 'connexion'] // possibles entres qui renvoient vers la page contact

    if (glossaire.includes(search.toLowerCase())) // si l'entrée est dans la liste des possibles entres qui renvoient vers la page glossaire
    window.open('./glossaire.html', '_self') // on ouvre la page glossaire dans le meme onglet 

    if (homepage.includes(search.toLowerCase()))  
    window.open('./index.html', '_self')

    if (ressources.includes(search.toLowerCase()))
    window.open('./ressources.html', '_self')

    if (contact.includes(search.toLowerCase()))
    window.open('./contact.html', '_self')

    if (search.toLowerCase() === "easter egg")
    window.open('./easter-egg.html', '_self')
}


try {
    submitButton.onclick = () => { // quand on clique sur le submit button
        if (!(fname.value == null && lname.value == null)) { // si la valeur du prenom et nom sont differentes de null

        const fnameText = fname.value; // on stocke les valeurs des inputs dans des variables
        const lnameText = lname.value; // on stocke les valeurs des inputs dans des variables
    
        localStorage.setItem('fname', fnameText); // on enregistre les valeurs dans le localStorage
        localStorage.setItem('lname', lnameText); // on enregistre les valeurs dans le localStorage
        
        }
    }
} catch (error) {} 


const items = document.querySelectorAll('.img-slider > img');
const itemseg = document.querySelectorAll('.img-slider-eg > img');
const nbSlide = items.length;
const nbSlideeg = itemseg.length;
const suivant = document.querySelector('.button-right');
const precedent = document.querySelector('.button-left');
const suivanteg = document.querySelector('.button-right-eg');
const precedenteg = document.querySelector('.button-left-eg');

let count = 0;

function slideSuivante() { // fonction qui permet de passer a la slide suivante
    items[count].classList.remove('active'); // on enleve la classe active a l'element actuel

    if(count < nbSlide - 1){ 
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active') // on ajoute la classe active a l'element suivant
}

try {
    suivant.addEventListener('click', slideSuivante); // quand on clique sur le bouton suivant, on execute la fonction slideSuivante
} catch (error) {}

function slidePrecedente() { // fonction qui permet de passer a la slide precedente
    items[count].classList.remove('active'); // on enleve la classe active a l'element actuel

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active') // on ajoute la classe active a l'element precedent
}

try {
    precedent.addEventListener('click', slidePrecedente); // quand on clique sur le bouton precedent, on execute la fonction slidePrecedente
} catch (error) {} 

function slideSuivanteeg() { // fonction qui permet de passer a la slide suivante dans l'easter egg
    itemseg[count].classList.remove('active'); // met eneleve active class

    if(count < nbSlideeg - 1){
        count++;
    } else {
        count = 0;
    }

    itemseg[count].classList.add('active') // add la class active a l element suivant
}

try {
    suivanteg.addEventListener('click', slideSuivanteeg); // quand on clique sur le bouton suivant, on execute la fonction slideSuivante
} catch (error) {}

function slidePrecedenteeg() {
    itemseg[count].classList.remove('active'); //  eneleve active class de la banniere actuelle

    if(count > 0){
        count--;
    } else {
        count = nbSlideeg - 1;
    }

    itemseg[count].classList.add('active') // add la class active a l element precedent
}

try {
    precedenteg.addEventListener('click', slidePrecedenteeg); // quand on clique sur le bouton precedent, on execute la fonction slidePrecedente
} catch (error) {}


let i = 0;

function toggleColor(SelectedColor) { // fonction qui permet de changer la couleur du site

    if (SelectedColor == "dark") { // si la couleur selectionnee est dark
        // mettre les infos quand le cas est noir
        navLogo.classList.add("dark") // on ajoute la classe qui modifie l'element dans le cas ou on est en dark mode
        let i = 0;
        while (i < mvCard.length) {
            mvCard[i].classList.add("dark");  // on ajoute la classe qui modifie l'element dans le cas ou on est en dark mode
            i++; 
        }
        header.classList.add("dark"); // on ajoute la classe qui modifie l'element dans le cas ou on est en dark mode
        document.body.classList.add("dark"); // on ajoute la classe qui modifie l'element dans le cas ou on est en dark mode
        hamburger.classList.add("dark"); // on ajoute la classe qui modifie l'element dans le cas ou on est en dark mode
        menu.classList.add("dark"); // on ajoute la classe qui modifie l'element dans le cas ou on est en dark mode
        footer.classList.add("dark");
        scrollUp.classList.add("dark");

        try {
            sliderButton.classList.add("dark");
            meilleuresVentes.classList.add("dark");
            tableau.classList.add("dark");
        } catch (error) {}

    } else {
        // mettre les infos quand le cas est blanc
        navLogo.classList.remove("dark") // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
        let i = 0;
        while (i < mvCard.length) {
            mvCard[i].classList.remove("dark"); // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
            i++;
        }
        header.classList.remove("dark"); // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
        document.body.classList.remove("dark");  // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
        hamburger.classList.remove("dark"); // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
        menu.classList.remove("dark"); // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
        footer.classList.remove("dark");
        scrollUp.classList.remove("dark");
        try {
            sliderButton.classList.remove("dark"); // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
            meilleuresVentes.classList.remove("dark");  // on enleve la classe qui modifie l'element dans le cas ou on est en dark mode
            tableau.classList.remove("dark");
        } catch (error) {}
    }
}


try {
    colorButton.onclick = () => { // quand on clique sur le bouton de changement de couleur
        const colors = ["light", "dark"] // on stocke les couleurs dans un tableau
        
        if (i + 1 == colors.length) { // si on est a la derniere couleur du tableau
            i = 0; // on remet i a 0
        } else {
            i++; // sinon on incremente i
        }

        let SelectedColor = colors[i] // on stocke la couleur selectionnee dans une variable

        toggleColor(SelectedColor); // on execute la fonction qui permet de changer la couleur du site

        localStorage.setItem('color', SelectedColor); // on enregistre la couleur selectionnee dans le localStorage
    }
} catch (error) {}
