function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesZone = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesZone.format("MMMM Do, YYYY");

    losAngelesTimeElement.innerHTML = losAngelesZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Paris
  let parisElement = document.querySelector("#paris");

  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisZone = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisZone.format("MMMM Do, YYYY");

    parisTimeElement.innerHTML = parisZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (event.target.value === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
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

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
