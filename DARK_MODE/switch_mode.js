"use strict";

const btn_switch_mode = document.querySelector(".btn__switch-mode");
const boxes = document.querySelector(".box_wrapper_container-text").children;
const body = document.body;


const fn =  (btn = btn_switch_mode, main = body, arr = Array.from(boxes)) => {
  main.classList.toggle("dark-style");

  btn.classList.toggle("light");

  const btn_classes = btn.classList;
  btn.innerText = btn_classes.contains("light") ? "light" : "dark";

  arr.forEach((el) => {
    el.classList.toggle("active");
  });
}


if(localStorage.getItem('dark-mode')) {
  fn()
}

btn_switch_mode.addEventListener(
  "click",
  (e, main = body, arr = Array.from(boxes)) => {
    main.classList.toggle("dark-style");

    const btn = e.currentTarget;
    btn.classList.toggle("light");

    const btn_classes = btn.classList;
    btn.innerText = btn_classes.contains("light") ? "light" : "dark";

    if (btn_classes.contains('light')) {
      localStorage.setItem('dark-mode','dark-style')
    } else {
      localStorage.setItem('dark-mode','')
    }

    arr.forEach((el) => {
      el.classList.toggle("active");
    });
  }
);

