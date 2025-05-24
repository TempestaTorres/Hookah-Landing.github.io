function gallery() {
    $('.our-gallery').on('click', (e) => {

        if (e.target.tagName === 'IMG') {

            e.preventDefault();

            if (document.fullscreenElement === null) {
                e.target.requestFullscreen();
                e.target.parentNode.style.cursor = 'zoom-out';
            }
            else {
                document.exitFullscreen();
                e.target.parentNode.style.cursor = 'zoom-in';
            }
        }

        e.stopPropagation();
        return false
    });
}