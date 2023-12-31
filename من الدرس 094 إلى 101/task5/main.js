let el = document.body.children

for (let i=0;i<el.length;i++){
    el[i].onclick =function(){
        console.log(`This Is ${el[i].nodeName}`)
    }
}

