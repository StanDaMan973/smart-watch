// intersection Observer

const header = document.querySelector('header');
const sectionOne = document.querySelector('#cover');


var sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
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
        if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
           document.querySelector('#navbar ul li a').classList.remove('link-color');
           currLink.classList.add('link-color');
        } else {
            currLink.classList.remove('link-color');
        }    
    } 
}


window.document.addEventListener('scroll', onScroll);

