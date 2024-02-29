import { weatherData } from "./weather_data.js";

console.log(weatherData.current);

// TABS
const tabItems = document.querySelector(".tab-list__app-open-meteo").children;
const contentItems = document.querySelector(
  ".content-list__app-open-meteo"
).children;

console.dir(tabItems);
console.dir(contentItems);

const checkoutTabs = (item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("is-active")) return;
    console.log(item);
  });
};

Array.from(tabItems).forEach(checkoutTabs);
