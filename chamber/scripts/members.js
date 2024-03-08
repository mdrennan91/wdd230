let companies = [];

fetch("https://mdrennan91.github.io/wdd230/chamber/members.json")
    .then(response => response.json())
    .then(data => {
        companies = data.companies;
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

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const directoryContainer = document.querySelector('.directory');

gridButton.addEventListener("click", () => {
    directoryContainer.classList.add("grid");
    directoryContainer.classList.remove("list");
    displayCompanies(companies);
});

listButton.addEventListener("click", () => {
    directoryContainer.classList.add("list");
    directoryContainer.classList.remove("grid");
    if (!directoryContainer.querySelector('.directory-table')) {
        createTableView(companies); 
    }
});

function createTableView(companies) {
    const cardsContainer = document.querySelector('.directory');
    cardsContainer.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'directory-table';

    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Address', 'Phone', 'Website'];
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    table.appendChild(headerRow);

    companies.forEach(company => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${company.name}</td>
            <td>${company.address}</td>
            <td>${company.phone_number}</td>
            <td><a href="${company.website_url}" target="_blank">${company.website_url}</a></td>
        `;
        table.appendChild(row);
    });

    cardsContainer.appendChild(table);
}