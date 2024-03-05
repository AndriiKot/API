"use strict";

const btn_switch_mode = document.querySelector(".btn__switch-mode");
const btn_switch_shades = document.querySelector(
  ".btn__switch-shades_of_color"
);
const boxes = Array.from(
  document.querySelector(".box_wrapper_container-text").children
);

const body = document.body;

const shades_mode = () => {
  body.classList.toggle("warm");
  body.classList.toggle("cool");
  btn_switch_shades.innerText = body.classList.contains("cool") ? "warm" : "cool";

  if (body.classList.contains("warm")) {
    localStorage.setItem("shades-mode","warm");
  } else {
    localStorage.setItem("shades-mode","")
  }
}


const dark_mode = (_e, btn = btn_switch_mode, main = body, arr = boxes) => {
  const main_classes = main.classList;
  main_classes.toggle("dark-style");
  btn.innerText = main_classes.contains("dark-style") ? "light" : "dark";

  if (main_classes.contains("dark-style")) {
    localStorage.setItem("dark-mode", "dark-style");
  } else {
    localStorage.setItem("dark-mode", "");
  }


  arr.forEach((el) => {
    el.classList.toggle("active");
  });
};

const colorMediaIsDark = () => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

if (localStorage.getItem("dark-mode") || colorMediaIsDark()) {
  dark_mode();
}

if (localStorage.getItem("shades-mode")) {
  shades_mode();
}

btn_switch_mode.addEventListener("click", dark_mode);
btn_switch_shades.addEventListener("click", shades_mode)

