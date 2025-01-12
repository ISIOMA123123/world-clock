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


updateTime();
setInterval(updateTime, 1);

