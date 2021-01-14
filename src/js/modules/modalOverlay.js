 
 import calcScroll from './calcScroll';
 
 const showModal = (overlay, modal) => {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.classList.add('no-scroll');
        document.body.style.marginRight = `${calcScroll()}px`
    };

    const hiddenModal = (overlay, modal) => {
        overlay.style.display = 'none';
        modal.style.display='none';
        document.body.classList.remove('no-scroll');
        document.body.style.marginRight = `0px`;
    };

    export {showModal, hiddenModal}