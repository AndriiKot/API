import { minutely15_api } from "../weather_data.js";

const inutely = document.querySelector(".content-item__app-open-meteo__2");


inutely.innerHTML += `
<div class="${inutely.className}__time">Time: ${minutely15_api.time} </div>
<div class="${inutely.className}__temperature">Temperatur: ${minutely15_api.temperature2m} </div>
<div class="${inutely.className}__relative">Relative: ${minutely15_api.relativeHumidity2m} </div>
<div class="${inutely.className}__apparent">Apparent: ${minutely15_api.apparentTemperature} </div>
`;
