document.addEventListener('DOMContentLoaded', function() {
  const apiUrl = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
  
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => createProphetCards(data.prophets))
      .catch(error => console.error('Error fetching data: ', error));
});

function createProphetCards(prophets) {
  const cardsContainer = document.querySelector('.temple-grid');
  cardsContainer.innerHTML = ''; 

  prophets.forEach(prophet => {
      let card = document.createElement('section');
      card.classList.add('prophet-card');
      
      let name = document.createElement('h2');
      name.textContent = `${prophet.name} ${prophet.lastname}`;
      card.appendChild(name);
      
      let birthdate = document.createElement('p');
      birthdate.textContent =`Date of Birth: ${prophet.birthdate}`;
      card.appendChild(birthdate);
    
      let birthplace = document.createElement('p');
      birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
      card.appendChild(birthplace);
      
      let image = document.createElement('img');
      image.src = prophet.imageurl;
      image.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
      card.appendChild(image);
      
      cardsContainer.appendChild(card);
  });
}