document.addEventListener('DOMContentLoaded', function() {

    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        section.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    }
});
