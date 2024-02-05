document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('#dark-mode-toggle');

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode'); 
        } else {
            document.body.classList.remove('dark-mode'); 
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
});