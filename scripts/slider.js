function initSlider(sliderSelector) {

    const slider = document.querySelector(sliderSelector);
    const cardsNumber = slider.children.length;
    let cardWidth = parseInt(slider.getAttribute('data-width'));
    const gap = parseInt($(slider).css('gap'));

    if (gap === 0) cardWidth = 289;

    let curIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 37) {
            prevSlide();
        }
        else if (e.keyCode === 39) {
            nextSlide();
        }
    });

    $('#next').on('click', (e) => {
        e.preventDefault();

        nextSlide();

        e.stopPropagation();
    });

    $('#prev').on('click', (e) => {
        e.preventDefault();

        prevSlide();

        e.stopPropagation();
    });

    function nextSlide() {

        let span = gap;
        if (++curIndex >= cardsNumber) {
            curIndex = 0;
            span = 0;
        }
        span += cardWidth;

        let leftOffset = -1 * curIndex * span;

        slider.style.transform = `translate3d(${leftOffset}px, 0, 0)`;
    }

    function prevSlide() {

        let span = gap;

        if (--curIndex < 0) {
            curIndex = cardsNumber - 1;
        }
        span += cardWidth;

        let leftOffset = -1 * curIndex * span;

        slider.style.transform = `translate3d(${leftOffset}px, 0, 0)`;
    }
}