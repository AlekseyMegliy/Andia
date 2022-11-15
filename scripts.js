let header = document.getElementById("header");
let slider_button_left = document.querySelector(".slider-button-left");
let slider_button_right = document.querySelector(".slider-button-right");
let small_imgs = document.querySelectorAll(".sm-img");


function headerClick(){
    header.classList.toggle("button-click");
    slider_button_left.classList.toggle("slider-buttons-move");
    slider_button_right.classList.toggle("slider-buttons-move");
}




