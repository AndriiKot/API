"use strict";

const btn_switch_mode = document.querySelector(".btn__switch-mode");
const boxes = Array.from(
  document.querySelector(".box_wrapper_container-text").children
);
const body = document.body;

const dark_mode = (e, btn = btn_switch_mode, main = body, arr = boxes) => {
  main.classList.toggle("dark-style");
  btn.classList.toggle("light");

  const btn_classes = btn.classList;
  btn.innerText = btn_classes.contains("light") ? "light" : "dark";

  if (btn_classes.contains("light")) {
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

btn_switch_mode.addEventListener("click", dark_mode);
