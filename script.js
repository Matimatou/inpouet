// Navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Diaporama 
const imgPath = ["gala_1.jpg", "gala_2.jpg", "gala_3.jpg", "léonor.jpg"]
function fillSlideContainer() {
    const slideContainer = document.querySelector('.slideshow-container');
    const dotContainer = document.querySelector('.dot-container');
    function createSlide(index) {
        // Create the slide with proper class
        const slide = document.createElement('div');
        slide.classList.add('mySlides', 'fade');
        // Create the number text
        const numberText = document.createElement('div');
        numberText.classList.add('numbertext');
        numberText.innerText = `${index + 1} / ${imgPath.length}`;
        // Create the image
        const img = document.createElement('img');
        img.src = `img/${imgPath[index]}`;
        //img.style.width = "100%";
        // Add the elements to the slide
        slide.appendChild(numberText);
        slide.appendChild(img);
        // Add the slide to the container
        slideContainer.appendChild(slide);
        console.log(slide, slideContainer);
    }
    function createDot(index) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => currentSlide(index));
        dotContainer.appendChild(dot);
    }
    for (let i = 0; i < imgPath.length; i++) {
        createSlide(i);
        createDot(i);
    }
}

fillSlideContainer();

let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}
function plusSlides(step) {
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active');

    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        plusSlides(1);
    }, 500000); // Change image every 5 seconds
}