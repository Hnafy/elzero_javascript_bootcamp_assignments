let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].category = "All";
            console.log(mainData);
        }
        let UpdatedData = JSON.stringify(mainData);
        console.log(UpdatedData);
    }
}