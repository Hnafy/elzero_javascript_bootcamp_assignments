let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].category = "All";
            let markup = `
            <div id="data">
                <div>
                    <h2>${mainData[i].title}</h2>
                    <p>${mainData[i].body}</p>
                    <p>Author: ${mainData[i].author}</p>
                    <p>Category: ${mainData[i].category}</p>
                </div>
            </div>
            `;
            document.body.innerHTML += markup;
        }
        let UpdatedData = JSON.stringify(mainData);
        console.log(UpdatedData);
    }
}
