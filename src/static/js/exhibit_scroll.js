var processElements = document.getElementById("process")
var main = document.getElementById('main')
var exhibit = document.getElementById('exhibit-content')
var backbutton = document.getElementById("backbutton")
var navitems = document.getElementById("nav-items-container")

var process = document.querySelector('#process-images');
var scholar = document.querySelector('#scholar');
var further = document.querySelector('#further')
var aboutnav = document.querySelector('#nav-item-about');
var processnav = document.querySelector('#nav-item-process');
var scholarnav = document.querySelector('#nav-item-scholar');
var furthernav = document.querySelector('#nav-item-further')

var about = document.querySelector('#about');

backbutton.addEventListener("click",function() {
	window.location = "#home";
	backbutton.style.visibility = 'hidden'
	navitems.style.visibility = 'hidden';
})

aboutnav.addEventListener("click",function() {
	resetNavbar()
	aboutnav.style.color = 'black'
	aboutnav.style.textDecoration = 'underline'

});
scholarnav.addEventListener("click",function() {
	resetNavbar()
	scholarnav.style.color = 'white'
	scholarnav.style.textDecoration = 'underline'

});
processnav.addEventListener("click",function() {
	resetNavbar()
	processnav.style.color = 'red'
	processnav.style.textDecoration = 'underline'

});
furthernav.addEventListener("click",function() {
	resetNavbar()
	furthernav.style.color = 'black'
	furthernav.style.textDecoration = 'underline'

});

aboutnav.style.color = 'black'
aboutnav.style.textDecoration = 'underline'
//For converting mousewheel scroll into horizontal scroll
main.addEventListener('wheel', (e) => {
	main.scrollLeft += e.deltaY;

	if (main.scrollLeft >= window.innerWidth/1.125) { // Just an example
		backbutton.style.visibility = 'visible';
		navitems.style.visibility = 'visible';
	} else {
		navitems.style.visibility = 'hidden';
		backbutton.style.visibility = 'hidden';
	}

	if ((window.scrollX >= about.getBoundingClientRect().left) && (window.scrollX <= about.getBoundingClientRect().right)) {
			resetNavbar()
			aboutnav.style.color = 'black'
			aboutnav.style.textDecoration = 'underline'
	}else if ((window.scrollX >= scholar.getBoundingClientRect().left) && (window.scrollX <= scholar.getBoundingClientRect().right) ) {
		resetNavbar()
		scholarnav.style.color = 'white'
		scholarnav.style.textDecoration = 'underline'
	}else if ((window.scrollX >= process.getBoundingClientRect().left) && (window.scrollX <= process.getBoundingClientRect().right)) {
			resetNavbar()
			processnav.style.color = 'red'
			processnav.style.textDecoration = 'underline'
	}else if ((window.scrollX >= further.getBoundingClientRect().left) && (window.scrollX <= further.getBoundingClientRect().right)) {
			resetNavbar()
			furthernav.style.color = 'black'
			furthernav.style.textDecoration = 'underline'
	}
		
});



function resetNavbar(){
		aboutnav.style.color = "#a3a3a3";
		aboutnav.style.textDecoration = "none";
		processnav.style.color = "#a3a3a3";
		processnav.style.textDecoration = "none";
		scholarnav.style.color = "#a3a3a3";
		scholarnav.style.textDecoration = "none";
		furthernav.style.color = "#a3a3a3";
		furthernav.style.textDecoration = "none";
}

//document.addEventListener('wheel', () => {
	
//})


//For navigation by clicking and dragging


var mobilemenu = document.getElementById("mobile-menu");
var menubutton = document.getElementById("menu-button");
var menuclosebutton = document.getElementById("menu-close-button");

menubutton.addEventListener('click',function(){
	mobilemenu.style.visibility = 'visible'
});

menuclosebutton.addEventListener('click',function(){
	mobilemenu.style.visibility = 'hidden'
});

