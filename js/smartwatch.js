//loader 
var loader;

function loadNow(opacity) {
	if (opacity <= 0) {
		displayContent();
	} else {
		loader.style.opacity = opacity;
		window.setTimeout(function() {
			loadNow(opacity - 0.05)
		}, 50)
	}
}


function displayContent() {
	loader.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
	loader = document.querySelector('.loader');
	loadNow(2);
});

// intersection Observer
const header = document.querySelector('header');
const sectionOne = document.querySelector('#cover');
var sectionOneOptions = {
	rootMargin: "-500px 0px 0px 0px"
};
const coverSectionObserver = new IntersectionObserver(function(entries, coverSectionObserver) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			header.classList.add('nav-scrolled');
		} else {
			header.classList.remove('nav-scrolled');
		}
	})
}, sectionOneOptions);
coverSectionObserver.observe(sectionOne);
// onScroll 
function onScroll(event) {
	let navLinks = document.querySelectorAll('#navbar a');
	let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	for (let i = 0; i < navLinks.length; i++) {
		var currLink = navLinks[i];
		var val = currLink.getAttribute('href');
		var refElement = document.querySelector(val);
		if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
			document.querySelector('#navbar ul li a').classList.remove('link-color');
			currLink.classList.add('link-color');
		} else {
			currLink.classList.remove('link-color');
		}
	}
}
window.document.addEventListener('scroll', onScroll);
// Mobile Menu navigation 
let navbarToggler = document.querySelector(".navbar-toggler");
let navbarMenu = document.querySelector("#navbar ul");
let navbarLinks = document.querySelectorAll("#navbar a");
navbarToggler.addEventListener('click', navbarToggleClick);

function navbarToggleClick() {
	navbarToggler.classList.toggle('open-navbar-toggler');
	navbarMenu.classList.toggle('open');
}
navbarLinks.forEach(elm => elm.addEventListener('click', navbarClick));

function navbarClick() {
	if (navbarMenu.classList.contains('open')) {
		navbarToggler.click();
	}
}
// Modal 
// Get the modal
let modal = document.getElementById('myModal');
let openButton = document.querySelectorAll('.bnt-block .blue-button');
let saleButton = document.querySelectorAll('.modal-button');
let closeButton = document.querySelector(".close");

function openModal(saleBtn, productBtn) {
	for (let i = 0; i < productBtn.length; i++) {
		const button = productBtn[i];
		button.addEventListener('click', function() {
			modal.style.display = "block"
		});
	}
	for (let i = 0; i < saleBtn.length; i++) {
		const btn = saleBtn[i];
		btn.addEventListener('click', function() {
			modal.style.display = "block"
		});
	}
}
openModal(openButton, saleButton);
closeButton.addEventListener('click', function() {
	modal.style.display = "none"
});
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
// form error handling
let form = document.querySelector('#order-form');
form.addEventListener('submit', function(e) {
	e.preventDefault;
});
// Carousel 
var swiper = new Swiper('.swiper-container', {
	speed: 600,
	parallax: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});