function InitScrolling(scrollElement, classNameActive) {

    const ScrollItems = document.querySelectorAll(scrollElement);

    function scrolling(event) {

        ScrollItems.forEach(Item => {

            if (isPartiallyVisible(Item)) {
                Item.classList.add(classNameActive);
            }
            else if (Item.classList.contains(classNameActive)) {
                Item.classList.remove(classNameActive);
            }

        });

    }

    addScrollingListener(scrolling);
}