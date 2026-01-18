document.addEventListener('DOMContentLoaded', () => {
    // =====================
    // אנימציית כפתורים
    // =====================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.transition = 'all 0.5s ease';
            btn.style.opacity = 1;
            btn.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // =====================
    // אנימציית שם (כתיבה) - רווחים נשמרים
    // =====================
    const heroTitle = document.querySelector('.hero h1');
    const text = heroTitle.textContent;
    heroTitle.textContent = ''; // רוקן את הטקסט

    let delay = 0;
    for (let char of text) {
        if (char === ' ') {
            heroTitle.appendChild(document.createTextNode(' ')); // רווח רגיל
        } else {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = 0;
            span.style.display = 'inline-block';
            span.style.transform = 'translateX(20px)';
            span.style.transition = 'all 0.3s ease';
            heroTitle.appendChild(span);

            setTimeout(() => {
                span.style.opacity = 1;
                span.style.transform = 'translateX(0)';
            }, delay);
            delay += 150;
        }
    }
});
