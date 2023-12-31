x = document.getElementsByTagName("img");
for (let i=0;i<x.length;i++){
    x[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    x[i].setAttribute("alt","Elzero Logo")
}
document.body.style.backgroundColor="red"