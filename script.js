// Scroll suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botón subir
const btn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
