function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=5362bd34cf050a03d30tbfffa6oc1faa&units=metric`;
  axios.get(apiUrl).then(displayTemprature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

// final task
function displayTemprature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let searchedCity = document.querySelector("#current-city");
  searchedCity.innerHTML = `${city}`;

  let tempCity = document.querySelector("#current-temperature-id");
  tempCity.innerHTML = `${temperature}`;
}

/*function displayTemp(response) {
  let temperature = document.querySelector(".current-temperature-value");
  let temp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  temperature.innerHTML = temp;
  cityElement.innerHTML = response.data.city;
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "te41005c6ao302b3034af61b1f22f9a7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
*/
