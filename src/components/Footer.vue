<template >
    
    <div id="footer">
        <div class="container">
            <div class="row">
            
                <div class="col-sm-12 col-md-10 row">
                    <div class="col-sm-12 col-md-3 footer">
                        <h4>about us</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, eius repellendus saepe molestiae quisquam eaque doloribus fuga sit deserunt! Nam doloribus nihil animi voluptas unde vero corrupti sint voluptates et.</p>
                        <a href="#">Read more...</a>
                    </div>
                    <div class="col-sm-12 col-md-3 footer">
                        <h4>LATEST TWEETS</h4>
                        <p>Loading...</p>
                    </div>
                    <div class="col-sm-12 col-md-3 footer">
                        <h4>our team</h4>
                        <img class="col-sm-1 col-md-4 col-lg-3" src="../assets/img/testimonials/1.jpg">
                        <img class="col-sm-1 col-md-4 col-lg-3" src="../assets/img/testimonials/1.jpg">
                        <img class="col-sm-1 col-md-4 col-lg-3" src="../assets/img/testimonials/1.jpg">
                        <img class="col-sm-1 col-md-4 col-lg-3" src="../assets/img/testimonials/1.jpg">
                        <img class="col-sm-1 col-md-4 col-lg-3" src="../assets/img/testimonials/1.jpg">
                        <img class="col-sm-1 col-md-4 col-lg-3" src="../assets/img/testimonials/1.jpg">
                    </div>
                    <div class="col-sm-12 col-md-3 footer contact">
                        <h4>CONTACT US</h4>
                        <div>
                            <img class="col-md-2 col-lg-1" src="../assets/ico/gps.png" width="20px">
                            <p class="col-9 col-lg-10"> Address: Lorem city, Ipsum street, 123 </p>
                        </div>
                        <div>
                            <img class="col-md-2 col-lg-1" src="../assets/ico/phone.png" width="20px">
                            <p class="col-9 col-lg-10">Phone: 123456789012 </p>
                        </div>
                        <div>
                            <img class="col-md-2 col-lg-1" src="../assets/ico/about-sm.png">
                            <p class="col-9 col-lg-10">Skype: Lorem_ipsum</p>
                        </div>
                        <div>
                            <img class="col-md-2 col-lg-1" src="../assets/ico/contact-sm.png">
                            <p class="col-9 col-lg-10">Email: quas_sunt_culpa.com </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="container copyright">
            <div class="row">
                <p class="col-sm-6 col-mg-7 col-lg-4 ">Copyright 2012 Andia - All rights reserved. Template by Azmind.</p>
                <span class="col-sm-5 col-md-4 col-lg-3">
                    <a href="#"><img class="col-sm-1" src="../assets/img/social-icons/email.png"></a>
                    <a href="#"><img class="col-sm-1" src="../assets/img/social-icons/facebook.png"></a>
                    <a href="#"><img class="col-sm-1" src="../assets/img/social-icons/skype.png"></a>
                    <a href="#"><img class="col-sm-1" src="../assets/img/social-icons/twitter.png"></a>
                </span>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
    
}
</script>

<style >
    #footer{
    background-color: rgb(240, 240, 240);
    box-shadow: inset rgb(177, 177, 177) 0px 0px 7px 0px;
    margin: 50px 0 0 0;
}

#footer .row{
    justify-content: center;
}
.footer{
    display: inline-block;
    margin: 0;
    padding: 30px 20px 0 20px;
    
}
.footer h4{
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing:-1px;
    opacity: 0.8;
}
#footer .contact img{
    display: inline-block;
    padding-top: 4px;
    vertical-align:top;
    opacity: 0.5;
}
#footer p{
    color: #0000008a;
    font-size: 0.8em;
    line-height: 200%;
}
#footer .contact p{
    display: inline-block;
    
}
#footer a{
    text-decoration: none;
    color: #9d426b;
    font-size: 0.9em;
}
#footer .copyright{
    margin-top: 50px;
    border-top: rgba(0, 0, 0, 0.144) 2px dotted;
}
.copyright .row{
    justify-content: space-around;
}
.copyright p{
    text-align: start;
    padding: 20px 0 0 10px;
}
.copyright span{
    text-align: end;
    margin: 10px 0 10px 0;
    overflow: hidden;
}
.copyright img{
    margin-top: -30px;
    transition: margin 0.3s linear;
}
.copyright img:hover{
    margin-bottom: -75px;
}

</style>