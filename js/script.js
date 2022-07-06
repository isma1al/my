const emptyMenu = document.querySelector('.empty__menu');
const burgerMenu = document.querySelector('.burger__menu');
const burgerBtn = document.querySelector('.burger-menu__btn');
const title = document.querySelector('.header__title');


const date = new Date();
const hours = date.getHours();

if(hours >= 6 && hours < 12){
    title.innerHTML = 'Good morning';
} else if(hours >= 12 && hours < 18){
    title.innerHTML = 'Good afternoon';
} else if(hours >= 18 && hours < 24) {
    title.innerHTML = 'Good evening';
} else {
    title.innerHTML = 'Good night';
}

const menuWrapper = document.querySelector('.menu-wrapper');
const hamburger = document.querySelector('.hamburger-menu');

menuWrapper.addEventListener('click', () =>{
    hamburger.classList.toggle('animate')
    emptyMenu.classList.toggle('empty__menu--active');
    burgerMenu.classList.toggle('burger__menu--active')
    if(window.screen.width < '810' && emptyMenu.classList.contains('empty__menu--active')){
    document.querySelector('html').style.overflow = 'hidden'
    } else {
        document.querySelector('html').style.overflow = ''
    }
})


const anchors = document.querySelectorAll('.link')

for(let anchor of anchors){
    anchor.addEventListener('click', (e) =>{
        e.preventDefault();
        emptyMenu.classList.remove('empty__menu--active');
    burgerMenu.classList.remove('burger__menu--active')
    hamburger.classList.toggle('animate')
    document.querySelector('html').style.overflow = ''
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
