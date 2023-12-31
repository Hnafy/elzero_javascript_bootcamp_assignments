let div = document.createElement("div")
document.body.append(div)

div.innerHTML=10

setInterval(run,1000)
function run(){
    if(div.innerHTML>0){
        div.innerHTML-=1
    }if (div.innerHTML==5) {
        window.open("https://Elzero.org", "_blank", "height=570,width=520");
    }else{
        clearInterval()
    }
}