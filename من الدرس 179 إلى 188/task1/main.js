const getData = (articleFile) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            }else{
                reject(Error("No Data Found"));
            }
        }
        myRequest.open("GET", articleFile);
        myRequest.send();
    });
}

getData("article.json").then((resolveValue) => {
    resolveValue.length = 5
    return resolveValue
}).then((resolveValue) => {
    let mainData = resolveValue;
    for (let i = 0; i < mainData.length; i++) {
        let markup = `
                <div>
                    <h3>${mainData[i].title}</h3>
                    <p>${mainData[i].description}</p>
                </div>
                `;
        document.body.innerHTML += markup;
    }
}).catch((rejectValue) => {
    console.log(rejectValue)
})