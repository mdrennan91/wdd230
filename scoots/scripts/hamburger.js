document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('#hamburger');
    var navbar = document.querySelector('#navbar');
    hamburger.addEventListener('click', function() {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "block";
            hamburger.textContent = '✖';
        } else {
            navbar.style.display = "none";
            hamburger.textContent = '☰';
        }
    });
});