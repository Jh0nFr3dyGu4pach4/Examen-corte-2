
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeToggle.textContent = '☀️ Modo Claro';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeToggle.textContent = '☀️ Modo Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙 Modo Oscuro';
            localStorage.setItem('theme', 'light');
        }
    });
    
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener('click', function() {
            const producto = this.getAttribute('data-producto');
            alert(`¡Has seleccionado: ${producto}! ¿Quieres más info?`);
        });
    });
});