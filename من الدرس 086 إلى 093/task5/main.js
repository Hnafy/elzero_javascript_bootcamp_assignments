myImg = document.getElementsByTagName("img")

for (let i=0;i<myImg.length;i++){
    if (myImg[i].hasAttribute("alt") === true){
        myImg[i].setAttribute("alt","Old")
    }else{
        myImg[i].setAttribute("alt","Elzero New")
    }
}