document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger');
    var navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('open');
        // Toggle between '☰' for closed and '×' for open states
        hamburger.textContent = navbar.classList.contains('open') ? '' : '☰';
    });
});