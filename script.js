// script.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrossel-slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const totalSlides = slides.length;
    let index = 0;

    function showSlide(n) {
        if (n >= totalSlides) index = 0;
        else if (n < 0) index = totalSlides - 1;
        else index = n;

        const offset = -index * 100;
        document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 5000);
});
