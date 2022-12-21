let header = document.getElementById("header");
let slider_button_left = document.querySelector(".slider-button-left");
let slider_button_right = document.querySelector(".slider-button-right");
let slides = document.querySelectorAll(".slide");
let small_imgs = document.querySelectorAll(".sm-img");
let home_page_zoom = document.querySelectorAll('.zoom');
let home_page_zoom_button = document.querySelectorAll(".zoom-button");
let home_page_remove_zoom = document.querySelectorAll(".remove-zoom");
let backdrop = document.getElementById("backdrop");
let portfolio_button_all = document.querySelector(".portfolio-button-all");
let portfolio_button_web = document.querySelector(".portfolio-button-web");
let portfolio_button_logo = document.querySelector(".portfolio-button-logo");
let portfolio_button_print = document.querySelector(".portfolio-button-print");
let filter_web = document.querySelectorAll(".web")
let filter_logo = document.querySelectorAll(".logo")
let filter_print = document.querySelectorAll(".print")
let testimonial = document.querySelectorAll(".testimonial");
let testimonial_buttons = document.querySelectorAll(".buttons");
let benefits = document.querySelectorAll(".benefits div p");
let slide_mass = [];
let small_imgs_mass = [];
let home_page_zoom_mass = [];
let home_page_zoom_button_mass = [];
let home_page_remove_zoom_mass = [];
let testi_mass = [];
let testi_butt_mass = [];
let benef_mass = [];
let count = 0;
let home_zoom_count =0;
let testi_count =0;
let limit = 120;

for(let slide of slides){
    slide_mass.push(slide);
}
for(let small_img of small_imgs){
    small_imgs_mass.push(small_img);
}
for(let zoomer of home_page_zoom){
    home_page_zoom_mass.push(zoomer);
}
for(let zoomer_button of home_page_zoom_button){
    home_page_zoom_button_mass.push(zoomer_button);
}
for(let zoomer_remove of home_page_remove_zoom){
    home_page_remove_zoom_mass.push(zoomer_remove);
}
for(let testi of testimonial){
    testi_mass.push(testi);
}
for(let testi_butt of testimonial_buttons){
    testi_butt_mass.push(testi_butt);
}
for(let benefit of benefits){
    benef_mass.push(benefit);
    let cont = benefit.innerHTML.split('');
    let new_cont = cont.slice(0, limit);
    benefit.innerHTML = new_cont.join('') + " et..."  
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

function zoom(element){
   
    for(let i=0; i<home_page_zoom_button_mass.length; i++){
        if(home_page_zoom_button_mass[i] == element){
            home_zoom_count = i;
            toggle_func(home_page_zoom_mass, home_zoom_count, "zoom-this");
            backdrop.classList.toggle("backdrop")
            
        }
    }
    
}
function removezoom(element){
    for(let i=0; i<home_page_remove_zoom_mass.length; i++){
        if(home_page_remove_zoom_mass[i] == element){
            home_zoom_count = i;
            toggle_func(home_page_zoom_mass, home_zoom_count, "zoom-this");
            backdrop.classList.toggle("backdrop")
            
        }
    }
}

function filter(type){
    if(type == 'all'){
        portfolio_button_all.classList.add("portfolio-button-this");
        portfolio_button_web.classList.remove("portfolio-button-this");
        portfolio_button_logo.classList.remove("portfolio-button-this");
        portfolio_button_print.classList.remove("portfolio-button-this");
        for( web of filter_web){
            web.classList.remove("inviz")    
        }
        for( logo of filter_logo){
            logo.classList.remove("inviz")
        }
        for( prints of filter_print){
            prints.classList.remove("inviz")
        }
    }
    if(type == 'web'){
        portfolio_button_all.classList.remove("portfolio-button-this");
        portfolio_button_web.classList.add("portfolio-button-this");
        portfolio_button_logo.classList.remove("portfolio-button-this");
        portfolio_button_print.classList.remove("portfolio-button-this");
        for( web of filter_web){
            web.classList.remove("inviz")
        }
        for( logo of filter_logo){
            logo.classList.add("inviz")
        }
        for( prints of filter_print){
            prints.classList.add("inviz")
        }
    }
    if(type == 'logo'){
        portfolio_button_all.classList.remove("portfolio-button-this");
        portfolio_button_web.classList.remove("portfolio-button-this");
        portfolio_button_logo.classList.add("portfolio-button-this");
        portfolio_button_print.classList.remove("portfolio-button-this");
        for( web of filter_web){
            web.classList.add("inviz")
        }
        for( logo of filter_logo){
            logo.classList.remove("inviz")
        }
        for( prints of filter_print){
            prints.classList.add("inviz")
        }
    }
    if(type == 'print'){
        portfolio_button_all.classList.remove("portfolio-button-this");
        portfolio_button_web.classList.remove("portfolio-button-this");
        portfolio_button_logo.classList.remove("portfolio-button-this");
        portfolio_button_print.classList.add("portfolio-button-this");
        for( web of filter_web){
            web.classList.add("inviz")
        }
        for( logo of filter_logo){
            logo.classList.add("inviz")
        }
        for( prints of filter_print){
            prints.classList.remove("inviz")
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

