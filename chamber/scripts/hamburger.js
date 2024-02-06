document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger');
    var navbar = document.querySelector('.navbar');
    console.log('hamburger: ', hamburger)
    console.log('navbar: ', navbar.classList)
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('open');
        hamburger.textContent = navbar.classList.contains('open') ? '' : '☰';
    });
});