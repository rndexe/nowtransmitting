var main = document.getElementById('main')
var exhibit = document.getElementById('exhibit-content')
var backbutton = document.getElementById("backbutton")
var navitems = document.getElementById("nav-items-container")

var about = document.querySelector('#about');
var process = document.querySelector('#process');
var scholar = document.querySelector('#authors');
var further = document.querySelector('#takeitfurther')
var aboutnav = document.querySelector('#nav-item-about');
var processnav = document.querySelector('#nav-item-process');
var scholarnav = document.querySelector('#nav-item-scholar');
var furthernav = document.querySelector('#nav-item-further')

if(process == null){
	navitems.children[1].removeChild(navitems.children[1].children[2])
}

backbutton.addEventListener("click",function() {
	window.location = "#home";
	backbutton.style.visibility = 'hidden'
	navitems.style.visibility = 'hidden';
	aboutnav.children[1].style.visibility = 'hidden'
	processnav.children[1].style.visibility = 'hidden'
	scholarnav.children[1].style.visibility = 'hidden'
	furthernav.children[1].style.visibility = 'hidden'

})

aboutnav.addEventListener("click",function() {
	resetNavbar()
	aboutnav.children[0].style.color = 'black'
	aboutnav.children[1].style.visibility = 'visible'

});
scholarnav.addEventListener("click",function() {
	resetNavbar()
	scholarnav.children[0].style.color = 'white'
	scholarnav.children[1].style.visibility = 'visible'

});
processnav.addEventListener("click",function() {
	resetNavbar()
	processnav.children[0].style.color = 'red'
	processnav.children[1].style.visibility = 'visible'


});
furthernav.addEventListener("click",function() {
	resetNavbar()
	furthernav.children[0].style.color = 'black'
	furthernav.children[1].style.visibility = 'visible'

});

aboutnav.children[0].style.color = 'black'

//For converting mousewheel scroll into horizontal scroll
main.addEventListener('wheel', (e) => {
	main.scrollLeft += e.deltaY;

	if (main.scrollLeft >= window.innerWidth/1.125) { // Just an example
		backbutton.style.visibility = 'visible';
		navitems.style.visibility = 'visible';
		aboutnav.children[1].style.visibility = 'visible'

	} else {
		navitems.style.visibility = 'hidden';
		backbutton.style.visibility = 'hidden';
		aboutnav.children[1].style.visibility = 'hidden'
		processnav.children[1].style.visibility = 'hidden'
		scholarnav.children[1].style.visibility = 'hidden'
		furthernav.children[1].style.visibility = 'hidden'
	}

	if ((window.scrollX >= about.getBoundingClientRect().left-80) && (window.scrollX <= scholar.getBoundingClientRect().left-300)) {
			resetNavbar()
			aboutnav.children[0].style.color = 'black'
			aboutnav.children[1].style.visibility = 'visible'
	}else if ((window.scrollX >= scholar.getBoundingClientRect().left-80) && (window.scrollX <= scholar.getBoundingClientRect().right-500) ) {
		resetNavbar()
		scholarnav.children[0].style.color = 'white'
		scholarnav.children[1].style.visibility = 'visible'

	}
	else if ((window.scrollX >= further.getBoundingClientRect().left-300) && (window.scrollX <= further.getBoundingClientRect().right-80 )) {
		resetNavbar()
		furthernav.children[0].style.color = 'black'
		furthernav.children[1].style.visibility = 'visible'
	}
	else if((window.scrollX>=scholar.getBoundingClientRect().right) && process!= null ){
		if((window.scrollX >= process.getBoundingClientRect().left-80) && (window.scrollX <= further.getBoundingClientRect().left))
		{	
			resetNavbar()
			processnav.children[0].style.color = 'red'
			processnav.children[1].style.visibility = 'visible'
		}
	}
	else{
		resetNavbar()
	}
		
});



function resetNavbar(){
		aboutnav.children[0].style.color = "#a3a3a3";
		processnav.children[0].style.color = "#a3a3a3";
		scholarnav.children[0].style.color = "#a3a3a3";
		furthernav.children[0].style.color = "#a3a3a3";
		aboutnav.children[1].style.visibility =   'hidden'
		processnav.children[1].style.visibility = 'hidden'
		scholarnav.children[1].style.visibility = 'hidden'
		furthernav.children[1].style.visibility = 'hidden'
}