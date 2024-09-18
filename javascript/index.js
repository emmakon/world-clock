function updateTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesZone = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesZone.format("MMMM Do, YYYY");

  losAngelesTimeElement.innerHTML = losAngelesZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisZone = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisZone.format("MMMM Do, YYYY");

  parisTimeElement.innerHTML = parisZone.format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime);
