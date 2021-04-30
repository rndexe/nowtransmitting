
var mobilemenu = document.getElementById("mobile-menu");
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

// showing exhibit links
var exhibitMenu = document.querySelector('.exhibit-menu');
var exhibitMenuList = exhibitMenu.children.item(1);
var rightMenu = document.querySelector('.right-menu');
// exhibitMenu.addEventListener('click', () => {
//     exhibitMenuList.classList.toggle('hidden');
// })

// load json 
fetch('../../lp_json/exhibit_thumbnail.json')
    .then(response => response.json())
    .then(data => buildExhibitSection(data))

const buildExhibitSection = (exhibits) => {
    let ulist = exhibitMenuList
    // console.log(ulist);

    for(exhibit of exhibits) {
        // console.log(exhibit)
        let item = document.createElement('li')
        let itemlink = document.createElement('a')
        item.appendChild(itemlink)
        itemlink.innerHTML = exhibit.title;
        itemlink.href = exhibit.url;
        
        ulist.appendChild(item)
    }
}