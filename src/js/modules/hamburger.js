const hamburger = () => {
    const hamburger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.menu__overlay'),
        links = document.querySelectorAll('.menu__link'),
        sliderBtn = document.querySelector('.slider__btn'),
        close = document.querySelector('.menu__close');

        function hideMenu () {
            overlay.classList.remove('menu__overlay-active');
            document.body.classList.add('no-scroll');
            sliderBtn.style.cssText = `
                z-index: 199;
            `
        };

        function showMenu() {
            overlay.classList.add('menu__overlay-active');
            document.body.classList.remove('no-scroll');
            sliderBtn.style.cssText = `
                z-index: 201;
            `
            
        }
        hamburger.addEventListener('click', () => {
            hideMenu();
        });

        close.addEventListener('click', () => {
            showMenu();
        });
        links.forEach(link => {
            link.addEventListener('click', () => {
                showMenu();
            });
        });
}
export default hamburger