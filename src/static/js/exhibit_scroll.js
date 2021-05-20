var widerScreenWidth = window.matchMedia("(max-width: 1024px)");

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

var scrollicon = document.getElementById("scroll-arrow")

if(process == null){
	navitems.children[1].removeChild(navitems.children[1].children[2])
}

if (!widerScreenWidth.matches) {
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

		if(main.scrollLeft > 0){
			scrollicon.style.visibility = "hidden";
		}

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
document.addEventListener('DOMContentLoaded', function() {
	const ele = document.getElementById('main');

	let pos = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function(e) {
		ele.style.cursor = 'grabbing';
		ele.style.userSelect = 'none';

		pos = {
			left: ele.scrollLeft,
			top: ele.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY,
		};

		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function(e) {
		// How far the mouse has been moved
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		// Scroll the element
		ele.scrollTop = pos.top - dy;
		ele.scrollLeft = pos.left - dx;
	};

	const mouseUpHandler = function() {
		ele.style.cursor = 'default';
		ele.style.removeProperty('user-select');

		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('mouseup', mouseUpHandler);
	};

	// Attach the handler
	ele.addEventListener('mousedown', mouseDownHandler);
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
}
