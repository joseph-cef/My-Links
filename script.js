document.addEventListener('DOMContentLoaded', () => {
    const parallaxCards = document.querySelectorAll('.parallax-card');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (parallaxCards.length > 0 && contentWrapper) {
        contentWrapper.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            parallaxCards.forEach((card) => {
                const depth = parseFloat(card.dataset.depth || '0');
                const moveX = (clientX - centerX) * depth * -0.04;
                const moveY = (clientY - centerY) * depth * -0.04;

                card.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });

        contentWrapper.addEventListener('mouseleave', () => {
            parallaxCards.forEach((card) => {
                card.style.transform = 'translate(0, 0)';
            });
        });
    }

    // For future language switch if you add multi-language later
    window.setLang = function (lang) {
        console.log('Language set to:', lang);
    };
});
