$(window).ready(function(){

    'use strict';

    const selector = document.getElementById("phone");

    const im = new Inputmask("+999(99)999-99-99");
    im.mask(selector);

    InitScrolling('.slide-right', 'slide-right-active');
    initSlider('.slider-container');
    initTabs('.menu-tabs', '.tabs-content');
    hoverLinks('.social-list');
    gallery();
    menuHandler();
    try {
        validateForm('#form');
    }
    catch (e) {
        console.error('Error parsing form: ', e);
    }

});