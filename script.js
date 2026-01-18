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
        }, index * 150); // delay קל בין הכפתורים
    });

    // =====================
    // אנימציית שם (כתיבה) - כולל רווחים
    // =====================
    const heroTitle = document.querySelector('.hero h1');
    const text = heroTitle.textContent;
    heroTitle.textContent = ''; // רוקן את הטקסט

    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        // שמירת רווחים בלי להדביק אותות
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = 0;
        span.style.display = 'inline-block';
        span.style.transform = 'translateX(20px)'; // מתחיל מימין
        span.style.transition = 'all 0.3s ease';
        heroTitle.appendChild(span);

        // אפקט סדרתי - כל אות מופיעה אחרי אחרת
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateX(0)';
        }, i * 150);
    });
});
