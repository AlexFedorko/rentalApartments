
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY;
    if (scrolled > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

