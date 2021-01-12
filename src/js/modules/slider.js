const slider = (slide, prevBtn, nextBtn, active, dot, dotActive, animatedNext, animatedPrev) => {
    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        dots = document.querySelectorAll(dot);
    
    let slideIndex = 2;

        function showSlides() {
            
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove(active);
                slide.classList.add('animated', animatedNext, animatedPrev);

            });
            dots.forEach((dot, i) => {
                dot.classList.remove(dotActive);
                dot.setAttribute('data-slide', i + 1)
            });
            slides[slideIndex - 1].style.display = 'block';
            slides[slideIndex].style.display = 'block';
            slides[slideIndex].classList.add(active);
            dots[slideIndex - 1].classList.add(dotActive);

        }
        
        showSlides();

        next.addEventListener('click', (e) => {

            try {
                if (slideIndex == 5) {
                e.target.removeEventListener();
            } else {
                slideIndex++;
                showSlides();
                
            }
            } catch{e};

        });

        prev.addEventListener('click', (e) => {

            try {
                 if (slideIndex == 1) {
                    e.target.removeEventListener();
                } else {
                    slideIndex--;
                    showSlides();
                    
                }
            } catch{e}
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                let slideDots = e.target.getAttribute('data-slide');
                slideIndex = slideDots;
                showSlides();

            });
        });    
}
export default slider;