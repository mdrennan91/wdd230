document.addEventListener("DOMContentLoaded", function() {
    loadAndDisplayFeaturedCompanies();
});

function loadAndDisplayFeaturedCompanies() {
    fetch("https://mdrennan91.github.io/wdd230/chamber/members.json")
        .then(response => response.json())
        .then(data => {
            const eligibleCompanies = data.companies.filter(company => company.membership_level === 'Silver' || company.membership_level === 'Gold');
            const selectedCompanies = selectRandomCompanies(eligibleCompanies, 3);
            displayFeaturedCompanies(selectedCompanies);
        })
        .catch(error => console.error('Error loading featured companies:', error));
}

function selectRandomCompanies(companies, count) {
    const shuffled = companies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayFeaturedCompanies(companies) {
    const featuredContainer = document.querySelector('#featured-companies');
    featuredContainer.innerHTML = '';
    companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('company-card');
        card.innerHTML = `
            <h3>${company.name}</h3>
            <img src="${company.image_icon_file_name}" alt="${company.name} Logo" class="featured-company-logo">
            <p class="membership-level"><strong>Membership Level:</strong> ${company.membership_level}</p>
            <p class="company-about">${company.other_info}</p>
            <p>+ ${company.phone_number}</p>
            <p><a href="${company.website_url}" target="_blank">${company.website_url}</a></p>
        `;
        featuredContainer.appendChild(card);
    });
}