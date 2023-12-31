let fonts = document.querySelector("#fonts")
let color = document.querySelector("#color")
let size = document.querySelector("#size")

// generating option for size select
for (let i=16;i<=30;i++){
    option = document.createElement("option");
    option.innerHTML= i+"px"
    size.append(option)
}

// return value on local storage
if (window.localStorage.length > 0){
    fonts.value=window.localStorage.getItem("font-family");
    document.body.style.fontFamily +=  window.localStorage.getItem("font-family");

    color.value=window.localStorage.getItem("color");
    document.body.style.color += window.localStorage.getItem("color");

    size.value=window.localStorage.getItem("size");
    document.body.style.fontSize += window.localStorage.getItem("size");
}

// change style body
fonts.onchange =function(){
    document.body.style.cssText +=`font-family: ${this.value}`;
    window.localStorage.setItem("font-family",this.value);
}

color.onchange =function(){
    document.body.style.cssText +=`color: ${this.value};`;
    window.localStorage.setItem("color",this.value);
}

size.onchange =function(){
    document.body.style.cssText +=`font-size: ${this.value};`;
    window.localStorage.setItem("size",this.value);
}