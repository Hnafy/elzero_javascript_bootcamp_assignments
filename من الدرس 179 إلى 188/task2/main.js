fetch("article.json").then((resolveValue) => {
    let myData = resolveValue.json()
    return myData
}).then((data) => {
    data.length = 5
    let mainData = data;
    for (let i = 0; i < mainData.length; i++) {
        let markup = `
                    <div>
                        <h3>${mainData[i].title}</h3>
                        <p>${mainData[i].description}</p>
                    </div>
                    `;
        document.body.innerHTML += markup;
    }
}).catch((rejectValue) => console.log(Error("No Data Found")))