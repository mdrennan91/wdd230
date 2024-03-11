const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.6588&lon=-117.4260&units=imperial&appid=1cf188e6738afbceb02dcf2ac8d6e741';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            updateWeatherCard(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function updateWeatherCard(data) {
    const tempElement = document.getElementById('currentTemp');
    const windSpeedElement = document.getElementById('currentWindSpeed');
    const weatherIconElement = document.getElementById('weather-icon');
    const weatherDescElement = document.getElementById('weather-desc');
    
    tempElement.textContent = Math.round(data.main.temp);
    windSpeedElement.textContent = Math.round(data.wind.speed);

    const iconCode = data.weather[0].icon;
    const weatherDescription = data.weather[0].description;
    weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconElement.alt = weatherDescription;
    weatherDescElement.textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    displayWindChill();
}


apiFetch();