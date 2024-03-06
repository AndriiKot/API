"use strict";

const btn_switch_theme = document.querySelector(".btn__switch-mode");
const btn_switch_shades = document.querySelector(
  ".btn__switch-shades_of_color"
);
const boxes = Array.from(
  document.querySelector(".box_wrapper_container-text").children
);

const body = document.body;

const localStorageSetElement = (
  classList,
  className = "",
  key = "",
  other_value = ""
) => {
  if (classList.contains(className)) {
    localStorage.setItem(key, className);
  } else {
    localStorage.setItem(key, other_value);
  }
};

const switchMode = (
  elementClasses,
  btn,
  tog1 = "",
  tog2 = "",
  keyLocalStorage = ""
) => {
  elementClasses.toggle(tog1);
  elementClasses.toggle(tog2);
  btn.innerText = elementClasses.contains(tog1) ? tog2 : tog1;
  localStorageSetElement(elementClasses, tog1, keyLocalStorage, tog2);
};

const shades_mode = () => {
  switchMode(body.classList, btn_switch_shades, "warm", "cool", "shades-mode");
};

const dark_mode = () => {
  switchMode(body.classList, btn_switch_theme, "dark", "light", "theme-mode");
};

const new_title = (_e,arr = boxes, className = "active") => {
  arr.forEach((el) => {
    el.classList.toggle(className);
  });
};

const colorMediaIsDark = () => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

// if (localStorage.getItem("dark-mode") || colorMediaIsDark()) {
//   dark_mode();
//   console.log("Dark mode");
// }

// if (localStorage.getItem("shades-mode")) {
//   shades_mode();
//   console.log("Shades mode");
// }

btn_switch_theme.addEventListener("click", dark_mode);
btn_switch_theme.addEventListener("click", new_title);
btn_switch_shades.addEventListener("click", shades_mode);
