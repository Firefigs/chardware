document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');

    // Toggle description visibility on click
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        section.addEventListener('click', function() {
            // Toggle 'clicked' class
            this.classList.toggle('clicked');
        });

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
