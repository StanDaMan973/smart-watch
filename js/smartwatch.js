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


// Get the button that opens the modal
let openButton = document.querySelectorAll('.bnt-block .blue-button'); 

// Get the <span> element that closes the modal
let closeButton = document.querySelector(".close"); 


// When the user clicks on any product button, open the modal

for (let i = 0; i < openButton.length; i++) {
    const button = openButton[i];
    button.addEventListener('click', function() {
    modal.style.display = "block"
});
    
}


// When the user clicks on <span> (x), close the modal
closeButton.addEventListener('click', function() {
    modal.style.display = "none"
});

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

