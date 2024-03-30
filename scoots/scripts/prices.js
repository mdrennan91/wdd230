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
      row.insertCell(0).textContent = item['Rental Type'];
      row.insertCell(1).textContent = item['Max Persons'];
      row.insertCell(2).textContent = `$${item['Reservation']['Half Day (3 hrs)']}`;
      row.insertCell(3).textContent = `$${item['Reservation']['Full Day']}`;
      row.insertCell(4).textContent = `$${item['Walk-In']['Half Day (3 hrs)']}`;
      row.insertCell(5).textContent = `$${item['Walk-In']['Full Day']}`;
    });
  }