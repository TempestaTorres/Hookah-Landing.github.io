function hoverLinks(linkSelector) {

    const icons = $(linkSelector).find('i');

    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        icon.addEventListener('mouseover', mouseOver);
        icon.addEventListener('mouseout', mouseOut);
    }



    function mouseOver(e){

        if (e.target.nodeName === 'I' && !e.target.classList.contains('fa-beat-fade')) {
            e.target.classList.add('fa-beat-fade');
        }
    }

    function mouseOut(e){

        if (e.target.nodeName === 'I') {
            e.target.classList.remove('fa-beat-fade');
        }
    }
}