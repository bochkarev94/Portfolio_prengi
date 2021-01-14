const hamburger = () => {
    const hamburger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.menu__overlay'),
        links = document.querySelectorAll('.menu__link'),
        close = document.querySelector('.menu__close');

        overlay.classList.add('animated', 'fadeIn');

        function hideMenu () {
            overlay.style.display='block';
            document.body.classList.add('no-scroll');
        };

        function showMenu() {
            overlay.style.display='none';
            document.body.classList.remove('no-scroll');
        
        }
        hamburger.addEventListener('click', () => {
            hideMenu();
        });

        close.addEventListener('click', () => {
            showMenu();
        });

        
            links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 769 ) {
                    showMenu();
                }
                
            });
        });
        
}
export default hamburger