"use strict";

const btn_switch_mode = document.querySelector(".btn__switch-mode");
const boxes = document.querySelector(".box_wrapper_container-text").children;
const body = document.body;

btn_switch_mode.addEventListener(
  "click",
  (e, main = body, arr = Array.from(boxes)) => {
    main.classList.toggle('dark-style')
    
    const btn = e.currentTarget;
    btn.classList.toggle("light");


    const btn_classes = btn.classList;
    btn.innerText = btn_classes.contains("light") ? "dark" : "light";

    arr.forEach((el) => {
      el.classList.toggle("active");
    });
  }
);
