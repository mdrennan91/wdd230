function checkCustomLocation(select) {
    var customLocationField = document.getElementById('customLocationField');
    if(select.value === 'custom') {
        customLocationField.style.display = 'block';
    } else {
        customLocationField.style.display = 'none';
    }
}