function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = hours + ':' + minutes + ' ' + ampm;
    const formattedDate = date.toLocaleDateString();

    return formattedDate + ' ' + formattedTime;
}

function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModifiedFormatted = formatDateTime(document.lastModified);
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedFormatted}`;
}

window.onload = updateFooter;