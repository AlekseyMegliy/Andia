<template >
    
    <div class="container " id="header">
        <div class="row">
            <a href="./index.html" class="col-3 col-sm-3 col-lg-2 offset-sm-1 offset-0 align-items-center logo">
                <img class="col-10 col-sm-12" width="165px"  src="../assets/img/logo.png">
            </a>
            <button class="offset-4 offset-sm-6 header-button" onclick="headerClick()"> 
                <svg>
                    <rect x="10" y="6" width="15" height="2"/>
                    <rect x="10" y="11" width="15" height="2"/>
                    <rect x="10" y="16" width="15" height="2"/>
                </svg>
            </button>
            <div class="col-sm-11 offset-sm-1 col-lg-5 col-xl-5 offset-lg-2 offset-xl-3 nav">
                <a href="./index.html" v-bind:class="{current: page==1}">
                    <img src="../assets/ico//home-sm.png">
                    <p>HOME</p>
                </a>
                <a href="#">
                    <img src="../assets/ico/portfolio-sm.png">
                    <p>PORTFOLIO</p>
                </a>
                <a href="#">
                    <img src="../assets/ico/blog-sm.png">
                    <p>BLOG</p>
                </a>
                <a href="#">
                    <img src="../assets/ico/services-sm.png">
                    <p>SERVICES</p>
                </a>
                <a href="#">
                    <img src="../assets/ico/about-sm.png">
                    <p>ABOUT</p>
                </a>
                <a href="#">
                    <img src="../assets/ico/contact-sm.png">
                    <p>CONTACT</p>
                </a>
            </div>
            <span class="col-1"></span>
        </div>
    </div>
    
</template>
<script>
export default{
    props:['page']
}
</script>
<style >
    #header{
    text-align: center;
    
}
.header-button{
    padding: 0;
    margin-top: 20px;
    display: none;
    width: 35px;
    height: 25px;
    background-color: rgb(151, 100, 199);
    border: none;
    border-radius: 10px;
    
}
.nav{
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-bottom: 20px;
}
.nav a img{
    opacity: 0.5;
}
.nav a{
   
    padding-top: 30px;
    flex-grow: 1;
    text-decoration: none;
    color: rgb(62, 62, 62);
    transition: background-color 0.1s linear;
}
.current{
    background-color: rgb(229, 229, 229);
    box-shadow: inset #9d426b  0px  5px  0px 0px;
    
}
#header .logo{
    
    display: inline-block;
    width:165px;
    padding-top: 25px;
    margin-bottom:5% ;
}
.nav a:hover{
    background-color: #9d426b;
    color: white;
    
}
.nav a:hover img{
    opacity: 1;
    filter: invert(100%); 
  -webkit-filter:invert(100%); 
}
@media all and (max-width:991px ){
    #header{
        height: 100px;
        overflow:hidden;
        transition: height 0.5s linear;
    }
    .header-button{
        display: inline-block;
    }
    .nav{
        flex-direction: column;
    }
    .nav a{
        padding: 2% 0;
        display: flex;
        
    }
    .nav a img{
        height:min-content;
        margin: 0;
    }
    .nav a p{
        margin: 0;
    }

} 
@media all and (max-width:575px ){
    #header .logo{
        margin-bottom: 7%;
    }
}
@media all and (max-width:450px ){
    #header .logo{
        margin-bottom: 11%;
    }
}
 .header-button:active{
    background-color: rgb(124, 58, 186);
}
.button-click{
    height: 415px;
} 
</style>