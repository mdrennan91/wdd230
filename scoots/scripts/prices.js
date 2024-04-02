document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/mdrennan91/wdd230/main/scoots/data/vehicles.json')
      .then(response => response.json())
      .then(jsonData => createTableFromJSON(jsonData))
      .catch(error => console.error('Error fetching JSON:', error));
  });

  function createTableFromJSON(jsonData) {
    const tableBody = document.getElementById('pricingTable').getElementsByTagName('tbody')[0];

    jsonData.forEach(item => {
        let row = tableBody.insertRow();
        let cell0 = row.insertCell(0);
        cell0.textContent = item['Rental Type'];
        cell0.setAttribute('data-title', 'Rental Type');

        let cell1 = row.insertCell(1);
        cell1.textContent = item['Max Persons'];
        cell1.setAttribute('data-title', 'Max. Persons');

        let cell2 = row.insertCell(2);
        cell2.textContent = `$${item['Reservation']['Half Day (3 hrs)']}`;
        cell2.setAttribute('data-title', 'Half Day (3 hrs) Reservation');

        let cell3 = row.insertCell(3);
        cell3.textContent = `$${item['Reservation']['Full Day']}`;
        cell3.setAttribute('data-title', 'Full Day Reservation');

        let cell4 = row.insertCell(4);
        cell4.textContent = `$${item['Walk-In']['Half Day (3 hrs)']}`;
        cell4.setAttribute('data-title', 'Half Day (3 hrs) Walk-In');

        let cell5 = row.insertCell(5);
        cell5.textContent = `$${item['Walk-In']['Full Day']}`;
        cell5.setAttribute('data-title', 'Full Day Walk-In');
    });
  }