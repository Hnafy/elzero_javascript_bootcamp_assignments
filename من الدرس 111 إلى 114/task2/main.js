let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let select = document.getElementById("select");

text1.addEventListener("blur",submit)
text2.addEventListener("blur",submit)
text3.addEventListener("blur",submit)
select.addEventListener("change",submit)

if(window.sessionStorage.length > 0){
    text1.value = window.sessionStorage.getItem("input1")
    text2.value = window.sessionStorage.getItem("input2")
    text3.value = window.sessionStorage.getItem("input3")
    select.value = window.sessionStorage.getItem("select")
}

function submit(){
    if(text1.value){
        window.sessionStorage.setItem("input1",text1.value)
    }
    if(text2.value){
        window.sessionStorage.setItem("input2",text2.value)
    }
    if(text3.value){
        window.sessionStorage.setItem("input3",text3.value)
    }
    if(select.value){
        window.sessionStorage.setItem("select",select.value)
    }
}
