import slider from './modules/slider';
import hamburger from './modules/hamburger';


window.addEventListener('DOMContentLoaded', () => {
'use strict';

    hamburger();

    slider(
        '.slider__item', 
        '.prev', '.next', 
        'slider__item-active',
        '.circle',
        'circle-active',
        'slideInUp',
        'slideInLeft'
        );
})