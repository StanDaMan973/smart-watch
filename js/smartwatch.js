

//loader 

var loader;

function loadNow(opacity) {
    if(opacity <= 0) {
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

const coverSectionObserver = new IntersectionObserver(function (entries, coverSectionObserver) {

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
    if(navbarMenu.classList.contains('open')) {
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

// Carousel 


let sliderImages = document.querySelectorAll('.slide');
let leftArrow = document.querySelector('.button-prev'); 
let rightArrow = document.querySelector('.button-next'); 
let currentSlide = 0; 


function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none"; 
    }
}

function startSlide() {
    reset(); 
    sliderImages[0].style.display = "block"
    sliderImages[0].style.opacity = 1;
    
}



function slideLeft() {
    reset();
    sliderImages[currentSlide - 1].style.display = "block";
    sliderImages[currentSlide - 1].style.opacity = "1";  
    currentSlide--;
   
}

function slideRight() {
    reset();
    sliderImages[currentSlide + 1].style.display = "block";
    sliderImages[currentSlide + 1].style.opacity = "1";  
    currentSlide++;
    
    
}


leftArrow.addEventListener('click', function() {
    if (currentSlide === 0) {
        currentSlide = sliderImages.length; 
    }

    slideLeft(); 
}); 
  

rightArrow.addEventListener('click', function() {
    if (currentSlide === sliderImages.length - 1) {
        currentSlide = - 1;     
    }

    slideRight(); 
}); 

startSlide();