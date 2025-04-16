let totalSlides = document.querySelectorAll('.carrossel').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('#carrossel').clientWidth;

document.querySelector('#carrossel').style.width = 
    '${sliderWidth * totalSlides}px';

document.querySelector('.slider--controls').style.width = '${sliderWidth}px';

document.querySelector('.slider--controls').style.height = 
    '${document.querySelector(".slider").clientHeight}px';

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.carrossel').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('#carrossel').style.marginLeft = 
        '-${newMargin}px';
}

setInterval(goNext, 5000);