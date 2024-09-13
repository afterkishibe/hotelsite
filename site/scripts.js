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





const images2 = document.querySelectorAll('.slider-img2');
const controlls2 = document.querySelectorAll('.controlls2');
let imageIndex2 = 0;

function show2(index2) {
	images2[imageIndex2].classList.remove('active2');
	images2[index2].classList.add('active2');
	imageIndex2 = index2;
}

controlls2.forEach(e => {
	e.addEventListener('click', () => {
		if (event.target.classList.contains('prev2')) {
			let index2 = imageIndex2 - 1;

			if (index2 < 0) {
				index2 = images2.length - 1;
			}

			show2(index2);
		} else if (event.target.classList.contains('next2')) {
			let index2 = imageIndex2 + 1;
			if (index2 >= images2.length) {
				index2 = 0;
			}
			show2(index2);
		}
	});
});

show2(imageIndex2);