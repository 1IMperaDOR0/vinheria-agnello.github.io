const container = document.querySelector('.carrossel-container');
const slides = document.querySelectorAll('.carrossel');
let currentSlide = 0;

function showSlide(index) {
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5500);