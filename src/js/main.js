import slider from './modules/slider';
import hamburger from './modules/hamburger';


window.addEventListener('DOMContentLoaded', () => {
'use strict';

    hamburger();

    slider(
        '.slider__item', 
        '.prev', '.next', 
        '.circle',
        'circle-active',
        'slideInUp',
        'slideInLeft',
        'home'
        );

        if (window.innerWidth > 400) {
            slider(
            '.industries__slider',
            '.industries__prev',
            '.industries__next',
            '.industries__tab',
            'industries__tab-active',
            'slideInLeft',
            'slideInRight',
            ''
        )
    };
})