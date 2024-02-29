import { hourly_api } from "../weather_data.js";

const hourly = document.querySelector(".content-item__app-open-meteo__3");

hourly.innerHTML += `
<div class="${hourly.className}__time">Time: ${hourly_api.time} </div>
<div class="${hourly.className}__temperature">Temperatur: ${hourly_api.temperature2m} </div>
<div class="${hourly.className}__relative">Relative: ${hourly_api.relativeHumidity2m} </div>
<div class="${hourly.className}__apparent">Apparent: ${hourly_api.apparentTemperature} </div>
`;
