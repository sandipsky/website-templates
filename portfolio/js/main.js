AOS.init({
    duration: 700,
    mirror: true,
});
const mobileMenu = document.getElementById('mobile-menu');
const navClose = document.getElementById('nav-close');
const sideMenu = document.querySelector('.side-menu');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a'); 

mobileMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

navClose.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
