const rentalsUrl = 'https://raw.githubusercontent.com/mdrennan91/wdd230/main/scoots/data/vehicles.json';

function displayRentals(rentals) {
    const rentalSection = document.getElementById('rentalOptions');

    rentals.forEach(rental => {
        const container = document.createElement('div');
        container.className = 'vehicle-card';

        const img = document.createElement('img');
        img.src = rental["Image URL"];
        img.alt = rental["Rental Type"];
        img.loading = "lazy";
        img.setAttribute('width', '600'); 
        img.setAttribute('height', '400');  
        container.appendChild(img);

        const type = document.createElement('h3');
        type.textContent = rental["Rental Type"];
        container.appendChild(type);

        const maxPersons = document.createElement('p');
        maxPersons.textContent = `Max Persons: ${rental["Max Persons"]}`;
        container.appendChild(maxPersons);

        if (rental["Engine Size"]) {
            const engineSize = document.createElement('p');
            engineSize.textContent = `Engine Size: ${rental["Engine Size"]}`;
            container.appendChild(engineSize);
        }

        if (rental["Transmission Type"]) {
            const transmissionType = document.createElement('p');
            transmissionType.textContent = `Transmission Type: ${rental["Transmission Type"]}`;
            container.appendChild(transmissionType);
        }

        const reservationInfo = document.createElement('p');
        reservationInfo.innerHTML = `<strong>Reservation:</strong> Half Day (3 hrs): $${rental.Reservation["Half Day (3 hrs)"]}, Full Day: $${rental.Reservation["Full Day"]}`;
        container.appendChild(reservationInfo);

 
        const walkInInfo = document.createElement('p');
        walkInInfo.innerHTML = `<strong>Walk-In:</strong> Half Day (3 hrs): $${rental["Walk-In"]["Half Day (3 hrs)"]}, Full Day: $${rental["Walk-In"]["Full Day"]}`;
        container.appendChild(walkInInfo);

         const buttonContainer = document.createElement('div');
         buttonContainer.className = 'button-container'; 
 
         const button = document.createElement('button');
         button.textContent = 'RESERVE NOW';
         button.onclick = function() {

            location.href = 'https://mdrennan91.github.io/wdd230/scoots/reservations.html'; 
         };
         buttonContainer.appendChild(button);
         container.appendChild(buttonContainer);
        

        rentalSection.appendChild(container);
    });
}

fetch(rentalsUrl)
  .then(response => response.json())
  .then(data => displayRentals(data))
  .catch(error => console.error('Unable to load rental data:', error));