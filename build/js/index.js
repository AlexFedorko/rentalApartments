const d = document;
const $ = selector => d.querySelector(selector);

const header = $('.header');

window.addEventListener('scroll', () => {
    const action = scrollY > 50 ? 'add' : 'remove';
    d.body.classList[action]('header-scrolled');
});



// Burger menu navigation

const btnBurgerMenu = document.getElementById('burger-btn');
const mobMenu = document.querySelector('.menu');

if (mobMenu) {
    mobMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-link')) {
            document.body.classList.remove('menu-active');
        }
    })
}

if (btnBurgerMenu) {
    btnBurgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('menu-active');
    })
}

window.addEventListener('load', () => {
    new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})






