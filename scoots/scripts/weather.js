const apiKey = '1cf188e6738afbceb02dcf2ac8d6e741';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.96&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.96&units=imperial&appid=${apiKey}`;

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  return hours + ':' + minutes + ampm;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

async function fetchCurrentWeather() {
    try {
      const response = await fetch(currentWeatherUrl);
      const data = await response.json();
      document.getElementById('current-temperature').textContent = `Current Temperature: ${Math.round(data.main.temp)}°F`;
      document.getElementById('current-humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('current-condition').textContent = capitalizeFirstLetter(data.weather[0].description);
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      document.getElementById('current-weather-icon').src = iconUrl;
      document.getElementById('current-weather-icon').alt = data.weather[0].description;
    } catch (error) {
      console.error('Error fetching current weather data:', error);
    }
  }

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const forecast = data.list.find(item => {
      const forecastDate = new Date(item.dt_txt);
      return formatDate(forecastDate) === formatDate(tomorrow) && forecastDate.getHours() === 15;
    });
    if (forecast) {
      document.getElementById('forecast-temperature').textContent = `Tomorrow at ${formatTime(new Date(forecast.dt_txt))} - ${Math.round(forecast.main.temp)}°F`;
      document.getElementById('forecast-icon').src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
      document.getElementById('forecast-icon').alt = forecast.weather[0].description;
    } else {
      document.getElementById('forecast-temperature').textContent = "Tomorrow's forecast at 15:00 not available";
    }
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
}

fetchCurrentWeather();
fetchForecast();