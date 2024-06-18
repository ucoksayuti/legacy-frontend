const initSlider = () => {
    const wrapper1 = document.querySelector('.wrapper-1');
    const indicators1 = [...document.querySelectorAll('.indicators-1 button')];

    if (!wrapper1 || indicators1.length === 0) {
        console.error("Wrapper or indicators not found");
        return;
    }

    let currentSlideshow = 0; // Default 0

    indicators1.forEach((item, i) => {
        item.addEventListener('click', () => {
            indicators1[currentSlideshow].classList.remove('active');
            wrapper1.style.marginLeft = `-${100 * i}%`;
            item.classList.add('active');
            currentSlideshow = i;
        });
    });
};

export default initSlider;
