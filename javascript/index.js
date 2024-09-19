//If update citiesArray manually below, update citiesArray.length logic in updateCity function
let citiesArray = ["America/Vancouver", "Europe/Paris", "Asia/Taipei"];

function displayCities(citiesArray) {
  let citiesElement = document.querySelector("#cities");
  let citiesHtml = "";

  citiesArray.forEach(function (city, index) {
    let cityTimeZone = city;
    if (city === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);

    if (index < 5) {
      citiesHtml =
        citiesHtml +
        `
  <div class="city">
    <div class="city_date">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
          "A"
        )}</small></div>
        </div>
        `;
    }
  });
  citiesElement.innerHTML = citiesHtml;
}

function updateCity(event) {
  if (citiesArray.length > 3) {
    citiesArray.shift();
  }
  citiesArray.unshift(event.target.value);

  let resetButton = document.querySelector("#reset-button");
  resetButton.style.display = "block";
  resetButton.addEventListener("click", reloadPage);

  displayCities(citiesArray);
}

function reloadPage(event) {
  location.reload();
}

displayCities(citiesArray);
setInterval(displayCities, 1000, citiesArray);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
