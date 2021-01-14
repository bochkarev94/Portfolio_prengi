const scrollSmoth = (selector) => {
    const up = document.querySelector(selector);

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

     up.classList.add('animated');

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 800) {
            up.classList.remove('fadeOut');
            up.classList.add('fadeIn');
        } else {
            up.classList.remove('fadeIn');
            up.classList.add('fadeOut');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash, 
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            
            requestAnimationFrame(freim);

            function freim (time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    y = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0 ,y);

                if(y != widthTop + toBlock) {
                    requestAnimationFrame(freim);
                } else {
                    location.hash;
                }
            }
        });
    });
}

export default scrollSmoth;