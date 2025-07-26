document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.contact-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#eafaf1';
        });

        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#fff';
        });
    });
});
