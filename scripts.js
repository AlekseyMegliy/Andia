let header = document.getElementById("header");
let slider_button_left = document.querySelector(".slider-button-left");
let slider_button_right = document.querySelector(".slider-button-right");
let slides = document.querySelectorAll(".slide");
let small_imgs = document.querySelectorAll(".sm-img");
let testimonial = document.querySelectorAll(".testimonial");
let testimonial_buttons = document.querySelectorAll(".buttons");
let benefits = document.querySelectorAll(".benefits div p");
let slide_mass = [];
let small_imgs_mass = [];
let testi_mass = [];
let testi_butt_mass = [];
let benef_mass = [];
let count = 0;
let testi_count =0;

for(let slide of slides){
    slide_mass.push(slide);
}
for(let small_img of small_imgs){
    small_imgs_mass.push(small_img);
}
for(let testi of testimonial){
    testi_mass.push(testi);
}
for(let testi_butt of testimonial_buttons){
    testi_butt_mass.push(testi_butt);
}



function headerClick(){
    header.classList.toggle("button-click");
    slider_button_left.classList.toggle("slider-buttons-move");
    slider_button_right.classList.toggle("slider-buttons-move");
}

function toggle_func(mass, scount, tclass){
    mass[scount].classList.toggle(`${tclass}`);
}

function sliderLeftButton(){
    
    toggle_func(small_imgs_mass, count, "slider-this-simg");
    toggle_func(slide_mass, count, "slider-this-bimg");
    if(count==0){
        count=3
        toggle_func(slide_mass, count, "slider-this-bimg");
        
    } else{
        count-=1
        toggle_func(slide_mass, count, "slider-this-bimg");
        
    }
    toggle_func(small_imgs_mass, count, "slider-this-simg");
}

function sliderRightButton(){
    
    toggle_func(small_imgs_mass, count, "slider-this-simg");
    toggle_func(slide_mass, count, "slider-this-bimg");
    if(count==3){
        count=0
        toggle_func(slide_mass, count, "slider-this-bimg");
    } else{
        count+=1
        toggle_func(slide_mass, count, "slider-this-bimg");
    }
    toggle_func(small_imgs_mass, count, "slider-this-simg");
}

function smallImgClick(element){
   
    for(let i=0; i<small_imgs_mass.length; i++){
        if(small_imgs_mass[i] == element){
            toggle_func(small_imgs_mass, count, "slider-this-simg");
            toggle_func(slide_mass, count, "slider-this-bimg");
            count = i;
            toggle_func(small_imgs_mass, count, "slider-this-simg");
            toggle_func(slide_mass, count, "slider-this-bimg");
            
        }
    }
    
}

function testimonials(element){
    
    for(let i=0; i<testi_butt_mass.length; i++){
        if(testi_butt_mass[i] == element){
            toggle_func(testi_butt_mass, testi_count, "buttons-this");
            toggle_func(testi_mass, testi_count, "testi-this");
            testi_count = i;
            toggle_func(testi_butt_mass, testi_count, "buttons-this");
            toggle_func(testi_mass, testi_count, "testi-this");
            
        }
    }

}
