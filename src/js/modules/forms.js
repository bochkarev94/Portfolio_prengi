
import {showModal, hiddenModal} from './modalOverlay';
import {checkEmailInputs} from './checkInputs';

const forms = (modalStart, modalEnd, modalOverlay) => {
    const form  = document.querySelector('form'),
    inputs = document.querySelectorAll('input'),
    overlay = document.querySelector(modalOverlay),
    modalBig = document.querySelector(modalStart),
    modalMini= document.querySelector(modalEnd);

    const message = {
        loading: 'Загрузка...',
        title: 'Спасибо!',
        subtitle:' Наш менеджер в скоре с вами свяжитсья',
        error: 'Что-то пошло не так',
    };

    checkEmailInputs('input[name="email"]');

    modalMini.classList.add('animated', 'fadeIn');

    const postData = async (url, data) => {
        modalMini.querySelector('.modal__title').innerHTML = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        hiddenModal(overlay, modalBig);
        showModal(overlay, modalMini);
        

        const formData = new FormData(form);

        postData('server.php', formData)
            .then(res => {
                console.log(res);
                modalMini.querySelector('.modal__title').innerHTML = message.title;
                modalMini.querySelector('.modal__subtitle').innerHTML = message.subtitle;
            })
            .catch(() => modal.querySelector('.modal__title').innerHTML = message.error)
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    hiddenModal(overlay, modalMini);
                } ,2000);
            })
    });
}
export default forms;