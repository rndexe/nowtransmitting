
var mobilemenu = document.getElementById("mobile-menu");
var menubutton = document.getElementById("menu-button");

var menuclosebutton = document.getElementById("menu-close-button");
var menuContainer = document.getElementById('menu-container');

menubutton.addEventListener('click',function(){
    // adding the effects
    menuContainer.classList.toggle('effect');
    menuContainer.classList.toggle('menu-open');
});

menuclosebutton.addEventListener('click',function(){
	// adding the effects
    menuContainer.classList.toggle('effect');
    menuContainer.classList.toggle('menu-open');
});

// showing exhibit links
var exhibitMenu = document.querySelector('.exhibit-menu');
var rightMenu = document.querySelector('.right-menu');
exhibitMenu.addEventListener('click', () => {
    rightMenu.classList.toggle('hidden');
})