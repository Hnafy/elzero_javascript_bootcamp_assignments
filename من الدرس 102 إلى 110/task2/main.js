let popUp = document.querySelector(".pop-up");
let close = document.querySelector(".close");

window.onload=setTimeout(function(){
    popUp.style.cssText = "display: block;";
},5000)

close.onclick=function(){
    popUp.style.cssText = "display: none;";
}