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


const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
	images[imageIndex].classList.remove('active');
	images[index].classList.add('active');
	imageIndex = index;
}

controlls.forEach(e => {
	e.addEventListener('click', () => {
		if (event.target.classList.contains('prev')) {
			let index = imageIndex - 1;

			if (index < 0) {
				index = images.length - 1;
			}

			show(index);
		} else if (event.target.classList.contains('next')) {
			let index = imageIndex + 1;
			if (index >= images.length) {
				index = 0;
			}
			show(index);
		}
	});
});

show(imageIndex);
