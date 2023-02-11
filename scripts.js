let header = document.getElementById("header");
let sliderButtonLeft = document.querySelector(".slider-button-left");
let sliderButtonRight = document.querySelector(".slider-button-right");
let slides = document.querySelectorAll(".slide");
let smallImgs = document.querySelectorAll(".sm-img");
let homePageZoom = document.querySelectorAll(".zoom");
let homePageZoomButton = document.querySelectorAll(".zoom-button");
let homePageRemoveZoom = document.querySelectorAll(".remove-zoom");
let backdrop = document.getElementById("backdrop");
let portfolioButtonAll = document.querySelector(".portfolio-button-all");
let portfolioButtonWeb = document.querySelector(".portfolio-button-web");
let portfolioButtonLogo = document.querySelector(".portfolio-button-logo");
let portfolioButtonPrint = document.querySelector(".portfolio-button-print");
let filterWeb = document.querySelectorAll(".web");
let filterLogo = document.querySelectorAll(".logo");
let filterPrint = document.querySelectorAll(".print");
let testimonial = document.querySelectorAll(".testimonial");
let testimonialButtons = document.querySelectorAll(".buttons");
let benefits = document.querySelectorAll(".benefits div p");
let slideArr = [];
let smallImgsArr = [];
let homePageZoomArr = [];
let homePageZoomButtonArr = [];
let homePageRemoveZoomArr = [];
let testiArr = [];
let testiButtArr = [];
let benefArr = [];
let count = 0;
let homeZoomCount = 0;
let testiCount = 0;
let limit = 120;

for (let slide of slides) {
  slideArr.push(slide);
}
for (let smallImg of smallImgs) {
  smallImgsArr.push(smallImg);
}
for (let zoomer of homePageZoom) {
  homePageZoomArr.push(zoomer);
}
for (let zoomerButton of homePageZoomButton) {
  homePageZoomButtonArr.push(zoomerButton);
}
for (let zoomerRemove of homePageRemoveZoom) {
  homePageRemoveZoomArr.push(zoomerRemove);
}
for (let testi of testimonial) {
  testiArr.push(testi);
}
for (let testiButt of testimonialButtons) {
  testiButtArr.push(testiButt);
}
for (let benefit of benefits) {
  benefArr.push(benefit);
  let cont = benefit.innerHTML.split("");
  let newCont = cont.slice(0, limit);
  benefit.innerHTML = newCont.join("") + " et...";
}

function headerClick() {
  header.classList.toggle("button-click");
  sliderButtonLeft.classList.toggle("slider-buttons-move");
  sliderButtonRight.classList.toggle("slider-buttons-move");
}

function toggleFunc(mass, scount, tclass) {
  mass[scount].classList.toggle(`${tclass}`);
}

function sliderLeftButton() {
  toggleFunc(smallImgsArr, count, "slider-this-simg");
  toggleFunc(slideArr, count, "slider-this-bimg");
  if (count == 0) {
    count = 3;
    toggleFunc(slideArr, count, "slider-this-bimg");
  } else {
    count -= 1;
    toggleFunc(slideArr, count, "slider-this-bimg");
  }
  toggleFunc(smallImgsArr, count, "slider-this-simg");
}

function sliderRightButton() {
  toggleFunc(smallImgsArr, count, "slider-this-simg");
  toggleFunc(slideArr, count, "slider-this-bimg");
  if (count == 3) {
    count = 0;
    toggleFunc(slideArr, count, "slider-this-bimg");
  } else {
    count += 1;
    toggleFunc(slideArr, count, "slider-this-bimg");
  }
  toggleFunc(smallImgsArr, count, "slider-this-simg");
}

function smallImgClick(element) {
  for (let i = 0; i < smallImgsArr.length; i++) {
    if (smallImgsArr[i] == element) {
      toggleFunc(smallImgsArr, count, "slider-this-simg");
      toggleFunc(slideArr, count, "slider-this-bimg");
      count = i;
      toggleFunc(smallImgsArr, count, "slider-this-simg");
      toggleFunc(slideArr, count, "slider-this-bimg");
    }
  }
}

function zoom(element) {
  for (let i = 0; i < homePageZoomButtonArr.length; i++) {
    if (homePageZoomButtonArr[i] == element) {
      homeZoomCount = i;
      toggleFunc(homePageZoomArr, homeZoomCount, "zoom-this");
      backdrop.classList.toggle("backdrop");
    }
  }
}
function removezoom(element) {
  for (let i = 0; i < homePageRemoveZoomArr.length; i++) {
    if (homePageRemoveZoomArr[i] == element) {
      homeZoomCount = i;
      toggleFunc(homePageZoomArr, homeZoomCount, "zoom-this");
      backdrop.classList.toggle("backdrop");
    }
  }
}

function filter(type) {
  if (type == "all") {
    portfolioButtonAll.classList.add("portfolio-button-this");
    portfolioButtonWeb.classList.remove("portfolio-button-this");
    portfolioButtonLogo.classList.remove("portfolio-button-this");
    portfolioButtonPrint.classList.remove("portfolio-button-this");
    for (web of filterWeb) {
      web.classList.remove("inviz");
    }
    for (logo of filterLogo) {
      logo.classList.remove("inviz");
    }
    for (prints of filterPrint) {
      prints.classList.remove("inviz");
    }
  }
  if (type == "web") {
    portfolioButtonAll.classList.remove("portfolio-button-this");
    portfolioButtonWeb.classList.add("portfolio-button-this");
    portfolioButtonLogo.classList.remove("portfolio-button-this");
    portfolioButtonPrint.classList.remove("portfolio-button-this");
    for (web of filterWeb) {
      web.classList.remove("inviz");
    }
    for (logo of filterLogo) {
      logo.classList.add("inviz");
    }
    for (prints of filterPrint) {
      prints.classList.add("inviz");
    }
  }
  if (type == "logo") {
    portfolioButtonAll.classList.remove("portfolio-button-this");
    portfolioButtonWeb.classList.remove("portfolio-button-this");
    portfolioButtonLogo.classList.add("portfolio-button-this");
    portfolioButtonPrint.classList.remove("portfolio-button-this");
    for (web of filterWeb) {
      web.classList.add("inviz");
    }
    for (logo of filterLogo) {
      logo.classList.remove("inviz");
    }
    for (prints of filterPrint) {
      prints.classList.add("inviz");
    }
  }
  if (type == "print") {
    portfolioButtonAll.classList.remove("portfolio-button-this");
    portfolioButtonWeb.classList.remove("portfolio-button-this");
    portfolioButtonLogo.classList.remove("portfolio-button-this");
    portfolioButtonPrint.classList.add("portfolio-button-this");
    for (web of filterWeb) {
      web.classList.add("inviz");
    }
    for (logo of filterLogo) {
      logo.classList.add("inviz");
    }
    for (prints of filterPrint) {
      prints.classList.remove("inviz");
    }
  }
}

function testimonials(element) {
  for (let i = 0; i < testiButtArr.length; i++) {
    if (testiButtArr[i] == element) {
      toggleFunc(testiButtArr, testiCount, "buttons-this");
      toggleFunc(testiArr, testiCount, "testi-this");
      testiCount = i;
      toggleFunc(testiButtArr, testiCount, "buttons-this");
      toggleFunc(testiArr, testiCount, "testi-this");
    }
  }
}
