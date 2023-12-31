let div = document.createElement("div")
document.body.append(div)

div.innerHTML=10

setInterval(run,1000)
function run(){
    if(div.innerHTML>0){
        div.innerHTML-=1
    }else{
        clearInterval()
    }
}