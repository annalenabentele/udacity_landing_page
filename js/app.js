/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= 150 && rect.bottom >= 150
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {

    sections.forEach( section => {
        const li = document.createElement('li')
        li.innerHTML = `<a class="nav-item" target="#${section.id}">${section.getAttribute('data-nav')}</a>`
        nav.appendChild(li)
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();


// Scroll to section on link click

nav.addEventListener('click', event  => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("target")
    const targetSection = document.querySelector(`${sectionId}`)
    targetSection.scrollIntoView({behavior: "smooth"});
  });

// Set sections as active

document.addEventListener('scroll', () => {

    for(const section of sections){
        const navItem = document.querySelector(`[target="#${section.id}"]`)
        if(isElementInViewport(section)){
            navItem.classList.add('activ')
            section.classList.add('your-active-class')
        } else {
            navItem.classList.remove('activ')
            section.classList.remove('your-active-class')
        }
    }
});