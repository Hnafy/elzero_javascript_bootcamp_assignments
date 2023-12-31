
let USD = document.getElementsByTagName("input")[0]

function test(){
    let EGY = USD.value * 15.6
    document.getElementsByTagName("div")[0].innerHTML=`{${USD.value}} USD Dollar = {${EGY.toFixed(2)}} Egyptian Pound`
}
USD.addEventListener("change",test)
USD.addEventListener("keyup",test)
