document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;

    title.textContent = '';

    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        title.appendChild(span);

        setTimeout(() => {
            span.style.transition = 'all 0.4s ease';
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        }, index * 120);
    });
});
