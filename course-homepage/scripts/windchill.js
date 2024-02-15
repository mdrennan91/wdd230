document.addEventListener('DOMContentLoaded', function() {
    function calculateWindChill(temperature, windSpeed) {
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    }

    function displayWindChill() {
        const tempElement = document.getElementById('currentTemp');
        const windSpeedElement = document.getElementById('currentWindSpeed');

        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);

        let windChill = 'N/A';

        if (temperature <= 50 && windSpeed > 3) {
            windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + '°F';
        }

        document.getElementById('windChillValue').textContent = windChill;
    }
    displayWindChill();
});