document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const title = document.querySelector('.hero h1');
    const text = title.textContent.trim();

    title.textContent = '';

    // עטיפת כל אות
    for (let char of text) {
        if (char === ' ') {
            title.appendChild(document.createTextNode(' '));
        } else {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.direction = 'rtl';
            span.style.unicodeBidi = 'bidi-override';
            title.appendChild(span);
        }
    }

    // הצגת כל ה־Hero
    requestAnimationFrame(() => {
        heroContent.classList.add('show');
    });

    // אנימציית נפילה לאותיות
    const letters = title.querySelectorAll('span');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            letter.style.opacity = 1;
            letter.style.transform = 'translateY(0)';
        }, index * 120);
    });
});
