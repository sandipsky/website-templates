const mobileMenu = document.getElementById('mobile-menu');
const navClose = document.getElementById('nav-close');
const sideMenu = document.querySelector('.side-menu');

mobileMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

navClose.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});