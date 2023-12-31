let addClass = document.querySelector(".classes-to-add");
let remClass = document.querySelector(".classes-to-remove");
let curEle = document.querySelector("div[title = Current]");
let classesList = document.querySelector(".classes-list div");

function base(){
    if (curEle.classList.value === "") {
        classesList.innerHTML = "No Classes To Show";
    } else {
        curEle.classList.value.split(" ").sort().map(function(el){
            let myClasses = document.createElement("span");
            myClasses.innerHTML = el;
            classesList.append(myClasses);
        });
    }
}base();

addClass.onblur = function(){
    const wordsAdd = addClass.value.trim().toLowerCase().split(" ");
    wordsAdd.forEach(function(el) {
        curEle.classList.add(el)
    });
    addClass.value = "";
    classesList.innerHTML = "";
    base();
}

remClass.onblur = function(){
    const wordsRem = remClass.value.trim().toLowerCase().split(" ");
    wordsRem.forEach(function(el) {
        curEle.classList.remove(el)
    });
    remClass.value = "";
    classesList.innerHTML = "";
    base();
}
