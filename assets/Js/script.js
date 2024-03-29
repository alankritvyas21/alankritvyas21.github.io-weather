const apiKey = "e7acaf25d1ddea2dcb0380036e10679f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/Images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/Images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/Images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./assets/Images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});
