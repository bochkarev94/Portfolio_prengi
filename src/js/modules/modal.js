
import {showModal, hiddenModal} from './modalOverlay';

const modal = (modalBtn, modalIdSelector, modalSelector, modalClose) => {
    const btns = document.querySelectorAll(modalBtn),
    modal = document.querySelector(modalIdSelector),
    overlay = document.querySelector(modalSelector),
    inputs = document.querySelectorAll('input'),
    close = document.querySelector(modalClose);


    modal.classList.add('animated', 'fadeIn');

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal(overlay, modal);
        });
    });

    close.addEventListener('click', () => {
        hiddenModal(overlay, modal);
        clearInputs();
    });
    
    overlay.addEventListener ('click', (e) => {
        if (e.target === overlay) {
            hiddenModal(overlay, modal);
            clearInputs();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            hiddenModal(overlay, modal);
            clearInputs();
        }
    });


}
export default modal;
