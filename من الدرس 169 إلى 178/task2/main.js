let myRequest = new XMLHttpRequest();
myRequest.open("GET","articles.json");
myRequest.send();
myRequest.onloadend= function (){
    if (myRequest.readyState === 4 && myRequest.status === 200){
        console.log("JSON Object Content Here");
    }
    console.log("Data Loaded");
}
