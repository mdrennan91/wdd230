const apiKey = '1cf188e6738afbceb02dcf2ac8d6e741';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.96&units=imperial&appid=${apiKey}`;

function displayWeatherBanner() {
  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const today = new Date().toISOString().split('T')[0]; 
      let tempMax = -Infinity; 

      data.list.forEach(slot => {
        const slotDate = slot.dt_txt.split(' ')[0];
        if (slotDate === today && slot.main.temp_max > tempMax) {
          tempMax = slot.main.temp_max;
        }
      });

      if (tempMax > -Infinity) {
        const tempMaxRounded = Math.round(tempMax);
        const banner = document.getElementById('weatherBanner');
        banner.innerHTML = `<span class="banner-text">DAYTIME HIGH: ${tempMaxRounded}°F</span> <button class="close-button" onclick="closeBanner()">Close</button>`;
      } else {
        console.log('No max temperature found for today.');
      }
    })
    .catch(error => console.error('Failed to fetch weather data:', error));
}

function closeBanner() {
  const banner = document.getElementById('weatherBanner');
  banner.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', displayWeatherBanner);