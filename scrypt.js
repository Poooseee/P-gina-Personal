window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) { // Si se ha desplazado desde el inicio
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('header').offsetHeight;
        const offsetTop = target.offsetTop - navbarHeight + 120; // Ajuste adicional de 50px

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

