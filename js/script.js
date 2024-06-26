const cards = document.querySelectorAll('.fade-in');

function checkVisibility() {
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
        if (isVisible) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
