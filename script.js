document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.animate-up');
    setTimeout(() => {
        card.classList.add('show');
    }, 200);
});
