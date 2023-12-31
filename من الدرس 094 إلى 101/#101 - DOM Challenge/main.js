// create elements
// elements of head
let container=document.createElement("div")
let head=document.createElement("div")
let logo=document.createElement("div")
let ul=document.createElement("ul")
// elements of content
let content=document.createElement("div")
// elements of footer
let footer=document.createElement("div")

// add loop
var text = ["Home", "About", "Services", "Content"];
for(let i = 0; i < text.length; i++) {
    var li=document.createElement("li")
    var a=document.createElement("a")
    a.innerHTML = text[i];
    a.style.cssText = "color: black; text-decoration: none; margin-left: 10px; position: relative;";
    ul.append(li)
    li.append(a)
}

var count = 1
for(let i = 0; i < 15; i++) {
    var box=document.createElement("div")
    var div=document.createElement("div")
    var p=document.createElement("p")
    div.innerHTML = count++;
    p.innerHTML = "predict"
    box.style.cssText = "background-color: white; padding: 10px;max-height:90px; font-size: 25px; display: flex; flex-direction: column; align-content: center; align-items: center;";
    p.style.cssText = "color: #ddd;";
    content.append(box)
    box.append(div)
    box.append(p)
}

// add content text
logo.innerHTML="Elzero"

footer.innerHTML="Copy Right 2021"

// built in tree of elements
// container tree
container.append(head)
head.append(logo)
logo.after(ul)
// content tree
container.append(content)
// footer tree
container.append(footer)
// add all tree in body
document.body.append(container)

// add style
// head style
document.body.style.cssText = "margin: 0;padding: 0;font-family: Arial, Helvetica, sans-serif;"
head.style.cssText = "display: flex; justify-content: space-between; width: 98%; margin: 0 auto;";
logo.style.cssText = "color: #178C66;font-size: 50px;font-weight: bold;";
ul.style.cssText = "list-style: none; display: flex; align-items: center; font-size: 25px;";
// content style
content.style.cssText = "background-color: #eee; padding: 5px; display: grid; grid-template-columns: auto auto auto; gap: 5px;";
// footer style
footer.style.cssText = "display: flex; justify-content: center; align-items: center; background-color: #178C66;font-size:20px; color: white;height: 57px;";

