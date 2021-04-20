var processElements = document.getElementById("process")
var main = document.getElementById('main')
var exhibit = document.getElementById('exhibit-content')
var backbutton = document.getElementById("backbutton")
var navitems = document.getElementById("nav-items-container")
backbutton.addEventListener("click",function() {
	window.location = "#home";
	backbutton.style.visibility = 'hidden'
	navitems.style.visibility = 'hidden';


})
//For converting mousewheel scroll into horizontal scroll
main.addEventListener('wheel', (e) => {
	main.scrollLeft += e.deltaY;

	if (main.scrollLeft >= window.innerWidth-50) { // Just an example
		backbutton.style.visibility = 'visible';
		navitems.style.visibility = 'visible';
	} else {
		navitems.style.visibility = 'hidden';
		backbutton.style.visibility = 'hidden';
	}
});

var about = document.querySelector('#about');
var process = document.querySelector('#process');
var scholar = document.querySelector('#scholar');
var further = document.querySelector('#further')
var aboutnav = document.querySelector('#nav-item-about');
var processnav = document.querySelector('#nav-item-process');
var scholarnav = document.querySelector('#nav-item-scholar');
var furthernav = document.querySelector('#nav-item-further')
//function resetNavbar(){
	//	aboutnav.style.color = "#a3a3a3";
	//	aboutnav.style.textDecoration = "none";
	//	processnav.style.color = "#a3a3a3";
	//	processnav.style.textDecoration = "none";
	//	scholarnav.style.color = "#a3a3a3";
	//	scholarnav.style.textDecoration = "none";
	//	furthernav.style.color = "#a3a3a3";
	//	furthernav.style.textDecoration = "none";
//}

//document.addEventListener('wheel', () => {
	//	if ((window.scrollX >= about.getBoundingClientRect().left)) {
		//		resetNavbar()
		//		aboutnav.style.color = 'black'
		//		aboutnav.style.textDecoration = 'underline'
	//	}else if ((window.scrollX >= process.getBoundingClientRect().left)) {
		//		resetNavbar()
		//		processnav.style.color = 'red'
		//		processnav.style.textDecoration = 'underline'
	//	}else if ((window.scrollX >= scholar.getBoundingClientRect().left) ) {
		//		resetNavbar()
		//		scholarnav.style.color = 'white'
		//		scholarnav.style.textDecoration = 'underline'
	//	}else if ((window.scrollX >= further.getBoundingClientRect().left) ) {
		//		resetNavbar()
		//		furthernav.style.color = 'black'
		//		furthernav.style.textDecoration = 'underline'
	//	}
	//	
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

