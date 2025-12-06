document.addEventListener('DOMContentLoaded', () => {
    const parallaxCards = document.querySelectorAll('.parallax-card');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (parallaxCards.length > 0) {
        contentWrapper.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            parallaxCards.forEach(card => {
                const depth = parseFloat(card.dataset.depth); 
                const moveX = (clientX - centerX) * depth * -0.05; 
                const moveY = (clientY - centerY) * depth * -0.05;

                card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`; 
            });
        });

        contentWrapper.addEventListener('mouseleave', () => {
            parallaxCards.forEach(card => {
                card.style.transform = `translate(0px, 0px) scale(1)`;
            });
        });
    }

    window.setLang = function(lang) {
        console.log('Language set to:', lang);

    };
});