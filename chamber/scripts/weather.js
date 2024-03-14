const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=47.6588&lon=-117.4260&units=imperial&appid=1cf188e6738afbceb02dcf2ac8d6e741`;

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            updateForecastDisplay(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function updateForecastDisplay(data) {
    for (let i = 0; i < 3; i++) {
        const forecast = data.list[i * 8]; 
        const dayElement = document.getElementById(`forecastDay${i}`);
        const iconElement = document.getElementById(`forecastIcon${i}`);
        const tempElement = document.getElementById(`forecastTemp${i}`);
        const descElement = document.getElementById(`forecastDesc${i}`);
        
        const date = new Date(forecast.dt * 1000);
        const dateString = date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        dayElement.textContent = i === 0 ? `Today, ${dateString}` : `${dayName}, ${dateString}`;
        
        const iconCode = forecast.weather[0].icon;
        const weatherDescription = forecast.weather[0].description;
        iconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        iconElement.alt = weatherDescription;
        tempElement.textContent = `${Math.round(forecast.main.temp)}°F`;
        descElement.textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
    }
}

fetchForecast();