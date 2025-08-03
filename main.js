// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация при скролле
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаем за элементами
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature, .download-box, .install-instructions');
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Счетчик скачиваний (симуляция)
function updateDownloadCount() {
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        // Можно добавить реальный счетчик через API
        const count = Math.floor(Math.random() * 1000) + 500;
        // downloadBtn.setAttribute('data-count', `(${count} скачиваний)`);
    }
}

// Запуск функций при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateDownloadCount();
});