fetch("https://mdrennan91.github.io/wdd230/chamber/members.json")
    .then(response => response.json())
    .then(data => {
        const companies = data.companies;
        displayCompanies(companies);
    })
    .catch(error => console.error('Error fetching companies data:', error));

function displayCompanies(companies) {
    const cardsContainer = document.querySelector('.directory'); 

    cardsContainer.innerHTML = '';

    companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
            <div class="member-card-content">
                <h2>${company.name}</h2>
                <img src="${company.image_icon_file_name}" alt="${company.name} Logo" class="member-card-img">
                <p><strong>Address:</strong> ${company.address}</p>
                <p><strong>Phone:</strong> ${company.phone_number}</p>
                <p><strong>Website:</strong> <a href="${company.website_url}" target="_blank">${company.website_url}</a></p>
                <p><strong>Membership Level:</strong> ${company.membership_level}</p>
                <p><strong>About:</strong> ${company.other_info}</p>
            </div>
        `;

        cardsContainer.appendChild(card);
    });
}