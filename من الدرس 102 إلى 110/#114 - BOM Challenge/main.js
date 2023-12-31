let input = document.querySelector(".input");
let addTask = document.querySelector(".add");
let container = document.querySelector(".tasks");

addTask.addEventListener("click", add);

// Iterate through all items in Local Storage
for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i);
    let storedData = JSON.parse(localStorage.getItem(key));

    // Create elements for the task display
    let item = document.createElement("div");
    let span = document.createElement("span");
    let del = document.createElement("button");

    // Assign the task content to the span
    span.textContent = storedData.title;

    // Set up the delete button
    del.innerHTML = "Delete";
    del.onclick = function () {
        // Remove the task from the DOM
        item.remove();
        
        // Remove the task from Local Storage using the dynamic key
        window.localStorage.removeItem(key);
    };

    // Append elements to the container
    item.classList.add("items");
    item.append(span);
    item.append(del);
    container.append(item);
}

function add() {
    if (input.value) {
        // Generate a dynamic key based on the current timestamp
        let key = {
            "id":Date.now(),
            "title":input.value,
        }
        
        let obj = JSON.stringify(key)

        // Store the task in Local Storage with the dynamic key
        window.localStorage.setItem(`tasks${Date.now()}`, obj);

        // Create elements for the task display
        let item = document.createElement("div");
        let span = document.createElement("span");
        let del = document.createElement("button");

        // Assign the task content to the span
        span.textContent = input.value;

        // Set up the delete button
        del.innerHTML = "Delete";
        del.onclick = function () {
            // Remove the task from the DOM
            item.remove();
            
            // Remove the task from Local Storage using the dynamic key
            window.localStorage.removeItem(key);
        };

        // Append elements to the container
        item.classList.add("items");
        item.append(span);
        item.append(del);
        container.append(item);
    }

    // Clear the input value after adding a task
    input.value = "";
}
