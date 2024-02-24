document.addEventListener('DOMContentLoaded', function() {
    const msToDays = 1000 * 60 * 60 * 24;
    const visitMessageElement = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    
    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const daysSinceLastVisit = Math.floor((now - lastVisitDate) / msToDays);

        if (daysSinceLastVisit < 1) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessageElement.textContent = "You last visited 1 day ago.";
        } else {
            visitMessageElement.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    } else {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', now.getTime().toString());
});