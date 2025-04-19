const menuLista = document.querySelector('.menu-lista');
const menuClose = document.querySelector('.menu-icon-close');
const menuBack = document.querySelector('.menu-lista-back');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    if (window.innerWidth <= 710) {
        menuLista.style.display = 'flex';
        menuClose.style.display = 'flex';
        menuBack.style.display = 'flex';
    }
});

menuClose.addEventListener('click', () => {
    menuLista.style.display = '';
    menuClose.style.display = '';
    menuBack.style.display = '';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 710) {
        menuLista.style.display = '';
        menuClose.style.display = '';
        menuBack.style.display = '';
    }
});
