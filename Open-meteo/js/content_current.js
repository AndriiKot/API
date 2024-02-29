import { current_api } from '../weather_data.js';

const current = document.querySelector(
  '.content-item__app-open-meteo__1__wrapper__current_content'
);

current.innerHTML += `
<div class="${current.className}__time">Time: ${current_api.time} </div>
<div class="${current.className}__temperature">Temperatur: ${current_api.temperature2m} </div>
<div class="${current.className}__relative">Relative: ${current_api.relativeHumidity2m} </div>
<div class="${current.className}__apparent">Apparent: ${current_api.apparentTemperature} </div>
`;
