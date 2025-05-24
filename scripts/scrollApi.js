// Scroll event listener

let isScrolling = false;

 function addScrollingListener(scroller) {
     window.addEventListener('scroll', (e) => {

         if (!isScrolling) {
             window.requestAnimationFrame(() => {
                 scroller(e);
                 isScrolling = false;
             });
             isScrolling = true;
         }
     });
 }

 // Detect if element is partially visible
function isPartiallyVisible(element) {

     const rc = element.getBoundingClientRect();
     const top = rc.top;
     const bottom = rc.bottom;
     const height = rc.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
// Detect if element is fully visible
function isFullyVisible(element) {
    const rc = element.getBoundingClientRect();
    const top = rc.top;
    const bottom = rc.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}
// Scroll to target element
function smoothScroll(target) {

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}