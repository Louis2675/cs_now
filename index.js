const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');

hamburger.onclick = function() { // Au clic sur le menu hamburger
    hamburger.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu hamburger
    menu.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu
    container.classList.toggle('hidden'); // On ajoute ou on retire la classe "active" sur le container
}