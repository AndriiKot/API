import { weatherData } from "./weather_data.js";

console.log(weatherData.current);

const tabItems = document.querySelector(
  ".tab-list__app-open-meteo"
).children;
const contentItems = document.querySelector(".content-list__app-open-meteo").children;

console.dir(tabItems);
console.dir(contentItems);
