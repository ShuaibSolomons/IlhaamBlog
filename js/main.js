// Mobile nav
const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const primaryNav = document.getElementById('primary-nav');

mobileBtn.addEventListener('click', () => nav.classList.add('menu-btn'));
mobileBtnExit.addEventListener('click', () => nav.classList.remove('menu-btn'));
primaryNav.addEventListener('click', () => nav.classList.remove('menu-btn'));

// Smooth scroll without adding # to the URL
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
