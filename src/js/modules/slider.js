const slider = (slide, prevBtn, nextBtn,  dot, dotActive, animatedNext, animatedPrev, block) => {
    const slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        dots = document.querySelectorAll(dot);
    
    let slideIndex = 2;

        function showSlides() {
            
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('slider__item-active');
                slide.classList.add('animated', animatedNext);

            });
            dots.forEach((dot, i) => {
                dot.classList.remove(dotActive);
                dot.setAttribute('data-slide', i + 1)
            });

            if (block === 'home') {
                slides[slideIndex - 1].style.display = 'block';
                slides[slideIndex].style.display = 'block';
                slides[slideIndex].classList.add('slider__item-active');
                dots[slideIndex - 1].classList.add(dotActive);
            } else {
                slides[slideIndex - 1].style.display = 'block';
                dots[slideIndex - 1].classList.add(dotActive);
            }

        }
        
        showSlides();

        next.addEventListener('click', (e) => {

            slides.forEach(slide => {
                slide.classList.remove(animatedPrev);
                slide.classList.add(animatedNext);
            });
            try {
                if (slideIndex == 5 && block === 'home') {
                e.target.removeEventListener();
            } else if(slideIndex == 6) {
                 e.target.removeEventListener();
            } else {
                slideIndex++;
                showSlides();
            }
            } catch{e};

            

        });

        prev.addEventListener('click', (e) => {
            slides.forEach(slide => {
                slide.classList.remove(animatedNext);
                slide.classList.add(animatedPrev);
            });
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