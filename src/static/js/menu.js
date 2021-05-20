var menubutton = document.getElementById("menu-button");
var menuclosebutton = document.getElementById("menu-close-button");
var menuContainer = document.getElementById('menu-container');
// things to hide when opening menu
var infoButton = document.getElementById('infobutton');
var mediator = document.getElementById('mediator');

menubutton.addEventListener('click',function(){
    // adding the effects
    menuContainer.classList.toggle('effect');
    menuContainer.classList.toggle('menu-open');
    // menubutton.classList.toggle('hidden');
    infoButton.classList.toggle('hidden');
    mediator.classList.toggle('hidden');

});

menuclosebutton.addEventListener('click',function(){
    // adding the effects
    menuContainer.classList.toggle('effect');
    menuContainer.classList.toggle('menu-open');
    // menubutton.classList.toggle('hidden');
    infoButton.classList.toggle('hidden');
    mediator.classList.toggle('hidden');
});
