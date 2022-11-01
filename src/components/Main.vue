<template >

    <div>

    <div class="block-slider">
        <div class="container">
            <div class="row">
                <div class="slider col-sm-12 col-md-9"  id="slider">
                    <div class="big-slider " >
                        <span class="slider-button-left" v-on:click="left"></span>


                        <transition name="slider">
                            <img class="col-12 big-img"  v-if="sm_imgs==1" src="../assets/img/slider/1.jpg">
                        </transition>
                        <p class=" slider-text " v-if="sm_imgs==1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et obcaecati, illo porro ex provident nisi ipsam cupiditate quo! Quam, impedit veniam commodi dolores </p>


                        <transition name="slider">
                            <img class="col-12 big-img" v-if="sm_imgs==2" src="../assets/img/slider/2.jpg">
                        </transition>
                        <p class=" slider-text " v-if="sm_imgs==2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magnam eum suscipit accusantium explicabo illum voluptatibus nisi pariatur deleniti, ipsa  </p>


                        <transition name="slider">
                            <img class="col-12 big-img" v-if="sm_imgs==3" src="../assets/img/slider/3.jpg">
                        </transition>
                        <p class=" slider-text " v-if="sm_imgs==3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet aspernatur repellendus minus error voluptatum nostrum velit, cupiditate architecto adipisci dolorem </p>


                        <transition name="slider">
                            <img class="col-12 big-img " v-if="sm_imgs==4" src="../assets/img/slider/4.jpg">
                        </transition>
                        <p class=" slider-text  " v-if="sm_imgs==4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus spernatur repellendus minus error voluptatum nostrum velit, cupiditate architecto </p>


                        <span class="slider-button-right" v-on:click="right"></span>
                    </div>
                    <div class="col-12 sm-imgs " id="sm-imgs">
                        <img class="col-3 sm-img" v-on:click="sm_imgs=1" src="../assets/img/slider/1.jpg">
                        <img class="col-3 sm-img" v-on:click="sm_imgs=2" src="../assets/img/slider/2.jpg">
                        <img class="col-3 sm-img" v-on:click="sm_imgs=3" src="../assets/img/slider/3.jpg">
                        <img class="col-3 sm-img" v-on:click="sm_imgs=4" src="../assets/img/slider/4.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container block-benefits">

        <h1>We are <span>Andia</span>, a super cool design agency.</h1>
        <h3>We design beautiful websites, logos and prints. Your project is safe with us.</h3>
        <div class="row">
            <span class="col-sm-0 col-md-1 "></span>
            <div class="row col-sm-12 col-md-10">
                <div class="col-sm-12 col-md-3 benefits">
                    <div>
                        <img class="col-2 col-sm-1 col-md-4  col-lg-3" src="../assets/ico/eye.png">
                        <h4>BEAUTIFUL WEBSITES</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 benefits">
                    <div>
                        <img class="col-2 col-sm-1 col-md-4 col-lg-3" src="../assets/ico/layout.png">
                        <h4>RESPONSIVE LAYOUT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 benefits">
                    <div>
                        <img class="col-2 col-sm-1 col-md-4 col-lg-3" src="../assets/ico/awesome.png">
                        <h4>AWESOME LOGOS</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 benefits">
                    <div>
                        <img class="col-2 col-sm-1 col-md-4 col-lg-3" src="../assets/ico/print.png">
                        <h4>HIGH RES PRINTS</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
            <span class="col-sm-5 col-md-1 "></span>
        </div>

    </div>
    <div class="container block-latest">
        <div class="h1">
            <h1>Our Latest Work</h1>
        </div>
        <div class="row">
            <span class="col-sm-0 col-md-1 "></span>
            <div class="row col-sm-12 col-md-10">
                <div class="col-sm-12 col-md-3 latest">
                    <div>
                        <img class="col-12" src="../assets/img/slider/1.jpg">
                        <h4>BEAUTIFUL WEBSITES</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                        <a href="#"><img class="col-10" src="../assets/ico/zoom2.png"></a>
                        <a href="#"><img class="col-10" src="../assets/ico/link2.png"></a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 latest">
                    <div>
                        <img class="col-12" src="../assets/img/slider/2.jpg">
                        <h4>RESPONSIVE LAYOUT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                        <a href="#"><img class="col-10" src="../assets/ico/zoom2.png"></a>
                        <a href="#"><img class="col-10" src="../assets/ico/link2.png"></a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 latest">
                    <div>
                        <img class="col-12" src="../assets/img/slider/3.jpg">
                        <h4>AWESOME LOGOS</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                        <a href="#"><img class="col-10" src="../assets/ico/zoom2.png"></a>
                        <a href="#"><img class="col-10" src="../assets/ico/link2.png"></a>
                    </div>
                </div>

                <div class="col-sm-12 col-md-3 latest">
                    <div>
                        <img class="col-12" src="../assets/img/slider/4.jpg">
                        <h4>HIGH RES PRINTS</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum.</p>
                        <a href="#"><img class="col-10" src="../assets/ico/zoom2.png"></a>
                        <a href="#"><img class="col-10" src="../assets/ico/link2.png"></a>
                    </div>
                </div>
            </div>
            <span class="col-sm-5 col-md-1 "></span>
        </div>
    </div>

    <div class="container block-testimonials">
        <div class="h1">
            <h1>Testimonials</h1>
        </div>
        <div class="row">
            <span class="col-1"></span>
            <div class="testimonial testimonial-one testi-this col-9">

                <img class="col-sm-2 col-md-1" src="../assets/img/testimonials/1.jpg">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus tempora ab obcaecati fuga atque esse! Similique illum, tempora, hic cumque vitae debitis delectus, molestiae cupiditate praesentium illo ea eligendi."</p>
                    <p class="mail">sit_ame_consectetur.com</p>
                </span>

            </div>

            <div class="testimonial testimonial-two  col-9">

                <img class="col-sm-2 col-md-1" src="../assets/img/testimonials/1.jpg">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, in rem? Molestias perferendis veritatis, eos perspiciatis, natus esse nihil molestiae a ipsam quo odit facere quis praesentium, porro iste doloribus?"</p>
                    <p class="mail">perferendis_veritati.ua</p>
                </span>

            </div>

            <div class="testimonial testimonial-three col-9">

                <img class="col-sm-2 col-md-1" src="../assets/img/testimonials/3.png">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis expedita neque modi voluptatem. Molestiae, ex quod voluptates aliquam et, distinctio dignissimos, omnis qui repudiandae quaerat quos repellat sunt beatae doloremque!"</p>
                    <p class="mail">expedita_neque_modi.uk</p>
                </span>

            </div>

            <div class="testimonial testimonial-four col-9">

                <img class="col-sm-2 col-md-1" src="../assets/img/testimonials/3.png">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem commodi cumque eos non quas sunt culpa nostrum, obcaecati, recusandae dolorum ipsam accusamus nisi alias quo laborum nam fugit aspernatur est."</p>
                    <p class="mail">quas_sunt_culpa.com</p>
                </span>

            </div>
        </div>
        <div class="testimonial-buttons row">
            <div class="testimonial-buttons col-3">
                <input class="col-1 buttons buttons-this" onclick="testimonials()" type="button" id="testimonials">
                <input class="col-1 buttons" onclick="testimonials()" type="button" id="testimonials">
                <input class="col-1 buttons" onclick="testimonials()" type="button" id="testimonials">
                <input class="col-1 buttons" onclick="testimonials()" type="button" id="testimonials">
            </div>
            <span class="col-2"></span>
        </div>
    </div>
    </div>
</template>
<script >
export default{
   props:['sm_imgs'],
   methods:{
        right(){
            if(this.sm_imgs != 4){
                this.sm_imgs +=1;
            } else{
                this.sm_imgs=1
            }

        },
        left(){
            if(this.sm_imgs != 1){
                this.sm_imgs -=1;
            } else{
                this.sm_imgs=4
            }

        }


    }


}
</script>


<style >
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    .big-slider{
    white-space: nowrap;
    overflow: hidden;
    padding: 5px;
}
.block-slider{
    background-color: rgb(240, 240, 240);
    box-shadow: inset rgb(177, 177, 177) 0px 0px 7px 0px;
    margin-right: 0;
    margin-left: 0;

}
.block-slider .row{
    justify-content: center;
}
.slider{
    margin: 50px 0;

}
.big-img{
    outline: 6px solid white;
    /* border:5px solid white ; */
    background-color: white;
    /* padding:  5px 6px 5px 5px; */
    position: relative;

}

.slider-this-bimg{
    display: inline-block;
}
.slider-text{

    top: 140px;
    margin-left: -99%;
    color: rgba(255, 255, 255, 0.847);
    background-color: rgba(0, 0, 0, 0.836);
    position: relative;
    width: 98%;
    /* word-break:break-all; */
    white-space: normal;
    display: inline-block;
    font-style: italic;
    /* margin: 0 10px; */
}


.slider-button-left{
    transition:
        left 0.5s ease-in 0s,
        opacity 0.5s ease-in 0s,
        margin 0.5s linear;
    display: inline-block;
    position: absolute;
    opacity: 0.0;
    width: 100px;
    height: 100px;
    content: " ";
    top: 370px;
    left: 15%;
    background: url(../assets/img/slider-nav-left.png) 0 center no-repeat;
    cursor: pointer;
    margin-top: 0px;
    z-index: 5;

}
.slider:hover  .slider-button-left{
    left: 20.7%;
    opacity: 0.9;
}
.slider-button-left:hover{
    opacity: 1;
}

.slider-button-right{
    transition:
        right 0.5s ease-in 0s,
        opacity 0.5s ease-in 0s,
        margin 0.5s linear;
    display: inline-block;
    position: absolute;
    opacity: 0.0;
    width: 100px;
    height: 100px;
    content: " ";
    top: 370px;
    right: 12.3%;
    background: url(../assets/img/slider-nav-right.png) 0 center no-repeat;
    cursor: pointer;
    margin-top: 0px;
    z-index: 5;
}
.slider:hover  .slider-button-right{
    right: 17.9%;
    opacity: 0.9;
}
.slider-button-right:hover{
    opacity: 1;
}
.slider-buttons-move{
    transition: margin 0.5s linear;
    margin-top: 300px;
}
.sm-imgs{
    margin-left: auto;
    margin-right: auto;
    border: 5px solid white;
    /* border-left: 5px solid white;
    border-right: 5px solid white; */
}
.sm-img{
    padding: 0;
    margin-left: -5px;
    opacity: 0.7;
}
.sm-img:first-child{
    margin: 0;
}
.sm-img:hover{
    opacity: 1;
    cursor:pointer;
}
.slider-this-simg{
    opacity: 1;
}

@media all and (max-width:1200px ){
    .slider-button-left{
        top: 320px;
        left: 17%;
    }
    .slider:hover  .slider-button-left{
        left: 22.5%;
    }
    .slider-button-right{
        top: 320px;
        right: 12.6%;
    }
    .slider:hover  .slider-button-right{
        right: 19.1%;
    }

}

@media all and (max-width:991px ){
    .slider-text{
        opacity: 0;
    }
    .slider-button-left{
        opacity: 0.9;
        top: 250px;
        left: 23.4%;
    }
    .slider:hover  .slider-button-left{
        left: 23.4%;
    }
    .slider-button-right{
        opacity: 0.9;
        top: 250px;
        right: 19.2%;
    }
    .slider:hover  .slider-button-right{
        right: 19.2%;
    }

}
@media all and (max-width:767px ){
    .slider-button-right{
        width: 50px;
        height: 50px;
    }
    .slider-button-left{
        width: 50px;
        height: 50px;
    }
    .slider-this-text{
        opacity: 0;
    }
    .slider-button-left{
        opacity: 0.9;
        top: 270px;
        left: 17%;
    }
    .slider:hover  .slider-button-left{
        left: 17%;
    }
    .slider-button-right{
        opacity: 0.9;
        top: 270px;
        right: 17%;
    }
    .slider:hover  .slider-button-right{
        right: 17%;
    }

}

@media all and (max-width:460px ){
    .slider-button-right{
        width: 50px;
        height: 50px;

    }
    .slider-button-left{
        width: 50px;
        height: 50px;
    }
    .slider-this-text{
        opacity: 0;
    }
    .slider-button-left{
        opacity: 0.7;
        top: 230px;
        left: 5%;
    }
    .slider:hover  .slider-button-left{
        left: 5%;
    }
    .slider-button-right{
        opacity: 0.7;
        top: 230px;
        right: 5%;
    }
    .slider:hover  .slider-button-right{
        right: 5%;
    }

}

@media all and (max-width:350px ){
    .slider-button-right{
        width: 45px;
        height: 45px;

    }
    .slider-button-left{
        width: 45px;
        height: 45px;
    }
    .slider-this-text{
        opacity: 0;
    }
    .slider-button-left{
        opacity: 0.7;
        top: 230px;
        left: 6%;
    }
    .slider:hover  .slider-button-left{
        left: 6%;
    }
    .slider-button-right{
        opacity: 0.7;
        top: 230px;
        right: 6%;
    }
    .slider:hover  .slider-button-right{
        right: 6%;
    }

}


.slider-enter-active, .slider-leave-active {
    transition: width ease-in-out 1s;

  }
.slider-enter, .slider-leave-to  {
    width: 0;

}



.block-benefits h1{
    text-align: center;
    font-family: 'Lobster', cursive;
    padding-top: 50px;
    font-size: 30px;
    font-weight:bold;
    color: rgba(0, 0, 0, 0.704);
}
.block-benefits h1 span{
    color: #9d426b;

}
.block-benefits h3{
    font-style: italic;
    text-align: center;
    font-size: 20px;
    opacity: 0.6;
    margin-bottom: 50px;
}
.block-benefits .row{
    justify-content: center;
}
.benefits{
    text-align: center;
}
.benefits div{
    background-color: rgba(0, 0, 0, 0.049);
    padding-bottom: 20px ;
    border-bottom: #9d426b solid 3px;
    box-shadow: inset black 0px 0px 20px -20px;
    transition: box-shadow 0.3s linear ;
}
.benefits img{
    opacity: 0.6;
    margin: 10px 0;
}
.benefits h4{
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing:-1px;
    opacity: 0.8;

}
.benefits p{
    font-size: 0.9em;
    opacity: 0.9;
    padding: 0 10px;
}
.benefits a{
    text-decoration: none;
    color: white;
    font-size: 0.9em;
    font-style: italic;
    padding: 0.4em 2em;
    background-color:#9d426b;

}
.benefits div:hover{
    box-shadow: inset black 0px 0px 25px -15px;
}
@media all and (max-width:1200px ){
    .benefits h4{
        font-size: 1em;

    }
}
@media all and (max-width:991px ){
    .benefits a{
        padding: 0.4em 1em;
    }
    .benefits h4{
        font-size: 0.8em;

    }
}
@media all and (max-width:767px ){
    .benefits div{
        margin-bottom: 15px;
    }
    .benefits{
        margin: 0;
    }
    .benefits h4{
         font-size: 1em;
    }
}
.block-latest{
    margin-top: 50px;
    border-top: rgba(0, 0, 0, 0.144) 2px dotted;
    text-align: center;
}
.block-latest .h1{
    margin-top: -32px;
}
.block-latest h1{
    font-family: 'Lobster', cursive;
    padding: 0 20px;
    font-size: 30px;
    font-weight:bold;
    color: rgba(0, 0, 0, 0.704);
    margin-bottom: 30px;
    background-color: white;
    display: inline-block;
}

.block-latest .row{
    justify-content: center;
}
.latest{
    text-align: center;
}
.latest div{
    background-color: rgba(0, 0, 0, 0.049);
    padding-bottom: 15px;
    border-bottom: #9d426b solid 3px;
    box-shadow: inset black 0px 0px 20px -20px;
    transition: box-shadow 0.3s linear ;
}

.latest h4{
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing:-1px;
    opacity: 0.8;
    padding-top: 15px;

}
.latest p{
    font-size: 0.9em;
    opacity: 0.9;
    font-style: italic;
    text-overflow: ellipsis;
    padding: 0 5px 0 5px;
}
.latest a{
    text-decoration: none;
    background-color:#9d426b;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 5px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
}
.latest a img{
    filter: invert(100%);
  -webkit-filter:invert(100%);
}
.latest div:hover{
    box-shadow: inset black 0px 0px 25px -15px;
}
@media all and (max-width:1200px ){
    .latest h4{
        font-size: 1em;
    }
}
@media all and (max-width:991px ){
    .latest h4{
        font-size: 0.8em;
    }

}
@media all and (max-width:767px ){
    .latest div{
        margin-bottom: 15px;
    }
    .latest{
        margin: 0;
    }
    .latest h4{
        font-size: 1em;
   }

}

.block-testimonials{
    margin-top: 50px;
    border-top: rgba(0, 0, 0, 0.144) 2px dotted;
    text-align: center;
}

.block-testimonials h1{
    font-family: 'Lobster', cursive;
    padding: 0 20px;
    font-size: 30px;
    font-weight:bold;
    color: rgba(0, 0, 0, 0.704);
    margin-bottom: 30px;
    background-color: white;
    display: inline-block;
}
.block-testimonials .h1{
    margin-top: -32px;
}
.block-testimonials span{
  vertical-align:top;
}

.block-testimonials img, .block-testimonials .testimonial span{
    display: inline-block;
    margin: 0 10px;
}
.block-testimonials p{
    display: inline-block;
    text-align: start;
    padding: 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.46);
    font-style: italic;
}

.block-testimonials .mail{
    display: flex;
    align-self:flex-start;
    color:#9d426b;
}
.testimonial{
    display: none;
}
.testi-this{
    display: inline-block;
}
.testimonial-buttons{
    display: flex;
    justify-content: flex-end;
}
.testimonial-buttons .buttons{
    border: none;
    background-color: #c5c5c5;
    width: 5%;
    height: 50%;
    margin: 2px;
}
.testimonial-buttons .buttons-this{
    background-color: #9d426b;
}
</style>
