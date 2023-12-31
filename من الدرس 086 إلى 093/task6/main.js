let numCreate = document.querySelector("input[name=elements]")
let textCreate = document.querySelector("input[name=texts]")
let select = document.getElementsByTagName("select")
let submitBtn = document.querySelector("input[name=create]")
let result = document.querySelector(".results")

submitBtn.onclick=function (e){
    result.innerHTML = '';
    for (let i=0;i<numCreate.value;i++){
        let repeat = document.createElement("div")
        repeat.className="box"
        result.appendChild(repeat)
        repeat.id = `id-${i}`
        let text = document.createTextNode(textCreate.value)
        repeat.appendChild(text)
    }
    e.preventDefault();
}