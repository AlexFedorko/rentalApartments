const d = document;
const $ = selector => d.querySelector(selector);

const header = $('.header');

window.addEventListener('scroll', () => {
    const action = scrollY > 50 ? 'add' : 'remove';
    header.classList[action]('header-scrolled');
});


const modalBtn = $('#openModalLinkVideo');

modalBtn.addEventListener('click', () => {

})
