// pipiski
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-navigation');
const navLinks = document.querySelectorAll('.mobile-navigation .navigation_link a');


function closeMobileMenu() {
  mobileNav.classList.remove('show');
  burgerMenu.classList.remove('active');
}


burgerMenu.addEventListener('click', (event) => {
  event.stopPropagation(); 
  mobileNav.classList.toggle('show');
  burgerMenu.classList.toggle('active'); 
});


navLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});


document.addEventListener('click', (event) => {
  if (!mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
    closeMobileMenu();
  }
});
