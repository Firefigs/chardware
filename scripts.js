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

    // Example interactive function: Highlight section on click
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        section.addEventListener('click', function() {
            this.style.backgroundColor = '#e0e0e0';
            setTimeout(() => {
                this.style.backgroundColor = '#fff';
            }, 500);
        });
    }
});
