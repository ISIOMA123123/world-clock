function updateTime() {


//Los Angeles
     let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:SS [<small>]A[</small>]");

//Paris
let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeElement = ParisElement.querySelector(".time");
let ParisTime = moment().tz("Europe/Paris");


ParisDateElement.innerHTML = ParisTime.format("MMMM Do, YYYY");
ParisTimeElement.innerHTML = ParisTime.format("h:mm:ss:SS [<small>]A[</small>]");


}

function updateCities(event) {
    let cityTimeZone = event.target.value;
    
let cityName = cityTimeZone.replace("-", " ").split("/")[1];

    let cityTime = moment().tz(cityTimeZone);
    console.log(cityTime.format("MMMM Do YYYY"));

  let citiesElement = document.querySelector("#cities");
  

  citiesElement.innerHTML = `<div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
    
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>`;
   
}


updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCities);

