function initTabs(tabButtonsSelector, tabContentSelector) {

    const tabButtons = document.querySelector(tabButtonsSelector);
    const tabContent = document.querySelector(tabContentSelector);

    tabButtons.addEventListener('click', (e) => {
        e.preventDefault();

        resetButtons(tabButtons);
        hideTabContent(tabContent);

        if (e.target.nodeName === 'A')
        {
            let i = parseInt(e.target.id);
            tabContent.children[i].style.display = 'flex';
            tabButtons.children[i].classList.add('tab-active');
        }

        e.stopPropagation();
    });
    function hideTabContent(tabContent) {

        for (let i = 0; i < tabContent.children.length; i++) {
            tabContent.children[i].style.display = 'none';
        }
    }

    function resetButtons(tabButtons) {

        for (let i = 0; i < tabButtons.children.length; i++) {

            if (tabButtons.children[i].classList.contains('tab-active')) {
                tabButtons.children[i].classList.remove('tab-active');
            }
        }
    }

    tabButtons.children[0].click();
}