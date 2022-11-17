let header = document.getElementById("header");
let slider_button_left = document.querySelector(".slider-button-left");
let slider_button_right = document.querySelector(".slider-button-right");
let slides = document.querySelectorAll(".slide");
let small_imgs = document.querySelectorAll(".sm-img");
let slide_mass = [];
let small_imgs_mass = [];
let count = 0;

function headerClick(){
    header.classList.toggle("button-click");
    slider_button_left.classList.toggle("slider-buttons-move");
    slider_button_right.classList.toggle("slider-buttons-move");
}
function sliderLeftButton(){
    
    for(let slide of slides){
        slide_mass.push(slide);
    }
    for(let small_img of small_imgs){
        small_imgs_mass.push(small_img);
    }
    small_imgs_mass[count].classList.toggle("slider-this-simg");
    slide_mass[count].classList.toggle("slider-this-bimg");
    if(count==0){
        count=3
        slide_mass[count].classList.toggle("slider-this-bimg");
        
    } else{
        count-=1
        slide_mass[count].classList.toggle("slider-this-bimg");
        
    }
    small_imgs_mass[count].classList.toggle("slider-this-simg");
}

function sliderRightButton(){
    
    for(let slide of slides){
        slide_mass.push(slide);
    }
    for(let small_img of small_imgs){
        small_imgs_mass.push(small_img);
    }
    small_imgs_mass[count].classList.toggle("slider-this-simg");
    slide_mass[count].classList.toggle("slider-this-bimg");
    if(count==3){
        count=0
        slide_mass[count].classList.toggle("slider-this-bimg");
    } else{
        count+=1
        slide_mass[count].classList.toggle("slider-this-bimg");
    }
    small_imgs_mass[count].classList.toggle("slider-this-simg");
}


// slider-this-simg