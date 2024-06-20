document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');

    // Toggle description visibility on click
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        section.addEventListener('click', function() {
            // Toggle 'clicked' class
            this.classList.toggle('clicked');
        });
    }
});
