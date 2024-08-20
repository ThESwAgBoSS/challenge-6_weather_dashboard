// Define your API key (replace with your actual API key from OpenWeatherMap)
const apiKey = '01e36ddc82a76b4d7a029f9ce5eb3c4c';

// Example coordinates for a location (latitude and longitude)
// You can replace these with the coordinates of the city you want to check
const lat = 40.7128; // Latitude for New York City
const lon = -74.0060; // Longitude for New York City

// API endpoint for the 5-day weather forecast
// This URL includes the latitude, longitude, API key, and units (metric for Celsius)
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// Function to fetch weather data from the OpenWeatherMap API
async function getWeatherData() {
    try {
        // Fetching data from the API using the constructed URL
        const response = await fetch(apiUrl);

        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response as JSON
        const weatherData = await response.json();

        // Log the weather data to the console for now
        // You can replace this with code to display data on your webpage
        console.log(weatherData);

        // Example: Access specific data (e.g., temperature, wind speed, etc.)
        const currentTemp = weatherData.list[0].main.temp;
        const windSpeed = weatherData.list[0].wind.speed;
        console.log(`Current temperature: ${currentTemp}°C`);
        console.log(`Wind speed: ${windSpeed} m/s`);

    } catch (error) {
        // Catch and log any errors that occur during the fetch
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch and log the weather data
getWeatherData();