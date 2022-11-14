let header = document.getElementById("header");
let slider_button_left = document.querySelector(".slider-button-left");
let slider_button_right = document.querySelector(".slider-button-right");
let small_imgs = document.querySelectorAll(".sm-img");


function headerClick(){
    header.classList.toggle("button-click");
    slider_button_left.classList.toggle("slider-buttons-move");
    slider_button_right.classList.toggle("slider-buttons-move");
}


// var headerr = new Vue({
//     el: header,
//     methods:{
//         header_button: function(){
//             header.classList.toggle("button-click");
//             slider_button_left.classList.toggle("slider-buttons-move");
//             slider_button_right.classList.toggle("slider-buttons-move");
        
//         }
//     }
// })


var big_slider = new Vue({
    el: '#slider',
    data: {
        sm_imgs: 1
    },
    methods:{
        right: function(){
            if(this.sm_imgs != 4){
                this.sm_imgs +=1;
            } else{
                this.sm_imgs=1
            }
            
        },
        left: function(){
            if(this.sm_imgs != 1){
                this.sm_imgs -=1;
            } else{
                this.sm_imgs=4
            }
            
        }
        

    }
    
});


