let element = document.querySelector(".our-element")
element.nextElementSibling.remove()

let start = document.createElement("div");
start.className = "start";
start.title="Start Element";
start.setAttribute('data-value', 'Start');
start.innerHTML="Start";

element.before(start)

let end = document.createElement("div");
end.className = "end";
end.title="End Element";
end.setAttribute('data-value', 'End');
end.innerHTML="End";

element.after(end)