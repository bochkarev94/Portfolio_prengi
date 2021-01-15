import slider from './modules/slider';
import hamburger from './modules/hamburger';
import modal from './modules/modal';
import forms from './modules/forms';
import mask from './modules/mask';
import scrollSmoth from './modules/scrollSmoth';


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
            'fadeInLeft',
            'fadeInRight',
            ''
        )
    };

    modal('.btn__modal', '#poppup', '.overlay', '.modal__close');
    forms('#poppup', '#end', '.overlay');
    mask('input[name="phone"]');
    scrollSmoth('.pageup');
})