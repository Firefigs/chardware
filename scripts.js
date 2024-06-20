document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');

    // Smooth Scroll Function
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    // Hover Effects
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        });
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
        });
    }
});
