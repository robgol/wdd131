const apiKey = "f8094f9ff4454305eb9bbe6a4284f959";
const city = "Praia";
const units = "metric";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const weatherContent = document.getElementById("weather-content");

const capitalizeWords = (text) => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const calculateWindChill = (temp, speed) =>
  (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);

const displayWindChill = (temp, speed) => {
  let windChill = "N/A";
  if (temp <= 10 && speed > 4.8) {
    windChill = `${calculateWindChill(temp, speed)} °C`;
  }

  const windChillElement = document.querySelector("#wcf");
  if (windChillElement) {
    windChillElement.textContent = windChill;
  }
};

fetch(weatherUrl)
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch weather data.");
    return response.json();
  })
  .then((data) => {
    const iconCode = data.weather[0].icon;
    const temperature = data.main.temp;
    const description = capitalizeWords(data.weather[0].description);
    const windSpeed = data.wind.speed;
    const feelsLike = `${Math.round(data.main.feels_like)}°C`;

    const weatherHTML = `
      <div class="weather-row">
        <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}" class="weather-icon">
        <div class="weather-details">
          <p><strong>Temperature:</strong> <span>${Math.round(temperature)}°C</span></p>
          <p><strong>Conditions:</strong> <span>${description}</span></p>
          <p><strong>Feels Like:</strong> <span>${feelsLike}</span></p>
          <p><strong>Wind Speed:</strong> <span>${windSpeed} km/h</span></p>
          <p><strong>Wind Chill:</strong> <span id="wcf">N/A</span></p>
        </div>
      </div>
    `;
    weatherContent.innerHTML = weatherHTML;
    displayWindChill(temperature, windSpeed);
  })
  .catch(() => {
    weatherContent.innerHTML = `<p>Unable to load weather data. Please try again later.</p>`;
  });
