
// intersection Observer

const header = document.querySelector('header');
const sectionOne = document.querySelector('#cover');


var sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const coverSectionObserver = new IntersectionObserver(function(entries, coverSectionObserver) {

    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled'); 
        } else {
            header.classList.remove('nav-scrolled'); 
        }
    })

}, sectionOneOptions); 


coverSectionObserver.observe(sectionOne);