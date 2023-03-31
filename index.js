hamburger = document.querySelector('.hamburger');
menu = document.querySelector('.menu');

hamburger.onclick = function() { // Au clic sur le menu hamburger
    hamburger.classList.toggle('active'); // On ajoute ou on retire la classe "active" sur le menu hamburger
}

if (hamburger.classList.contains('active') == true) { // Si le menu hamburger est actif
    menu.style.classList.toggle('active'); 
    console.log('ok');
}