function menuHandler() {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav');
    const close = document.querySelector('#li-close');

    burger.addEventListener('click', (e) => {
        e.preventDefault();

        burger.style.display = 'none';
        menu.classList.toggle('nav-active');

        e.stopPropagation();
    });
    close.addEventListener('click', (e) => {
        e.preventDefault();

        menu.classList.toggle('nav-active');

        setTimeout(() => {
            burger.style.display = 'flex';
        }, 500);

        e.stopPropagation();
    });
}