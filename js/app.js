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
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {

    for(const section of sections){
        const li = document.createElement('li')
        li.innerHTML = `<a target="#${section.id}">${section.getAttribute('data-nav')}</a>`
        nav.appendChild(li)
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();


// Scroll to section on link click

nav.addEventListener('click', function (event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute("target")
    const targetSection = document.querySelector(`${sectionId}`)
    targetSection.scrollIntoView();
  });

// Set sections as active

document.addEventListener('scroll', function () {

    for(const section of sections){
        if(isElementInViewport(section)){
            section.classList.add('your-active-class')
        } else {
            section.classList.remove('your-active-class')
        }
    }
});