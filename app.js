function changeBackground() {
    var userColor = prompt("Enter Color");
    var element = document.getElementById("color-div");
    element.style.backgroundColor=userColor;
}

function changeTextColor() {
    var userColor = prompt("Enter Color");
    var element = document.getElementById("color-div");
    element.style.color=userColor;
}

function showImg() {
    var bike_img = document.getElementById("car-img");
    bike_img.src = "https://o.remove.bg/downloads/8d0527a4-62a6-49b0-8c6f-9d542166374e/819BqQXz8IL._AC_SL1500_-removebg-preview.png";
    bike_img.style.width = "500px";
}

function ChangeSize(howMuch) {
    var bike_img = document.getElementById("car-img");
    bike_img.style.width = howMuch;
}

function hideImg() {
    var bike_img = document.getElementById("car-img");
    bike_img.src = "";
}

function bulbToggler( id , element  ){
    if(id == 1){
        element.src = "./images/Bulb-on.png";
    }else{
        element.src = "./images/Bulb-off.png";
    }
}

function turnOn(element) {
    var img = document.getElementById('bulb-img');
    img.src = "./images/Bulb-on.png";
    element.innerHTML = "Double Clcik to Turn Off The Bulb"
}

function turnOff(element) {
    var img = document.getElementById('bulb-img');
    img.src = "./images/Bulb-off.png";
    element.innerHTML = "Clcik to Turn on The Bulb"
}

function para_1() {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    alert("You can Enter colours in #HEXCODE, RGBa  & By Names ")
    var userColor1 = prompt("Enter Colour 1");
    var userColor2 = prompt("Enter Colour 2");
    var userColor3 = prompt("Enter Colour 3");
    var userColor4 = prompt("Enter Colour 4");

    p1.style.color=userColor1;
    p2.style.color=userColor2;
    p3.style.color=userColor3;
    p4.style.color=userColor4;
}

function para_2() {
    var p5 = document.getElementById("p5");
    var p7 = document.getElementById("p7");
    alert("You can Enter colours in #HEXCODE, RGBa  & By Names ")
    var userColor1 = prompt("Enter Colour 1");
    var userColor3 = prompt("Enter Colour 3");

    p5.style.color=userColor1;
    p7.style.color=userColor3;
}