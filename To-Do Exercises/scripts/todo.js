const idNum = document.getElementById("idNum");
const displayArea = document.getElementById("messageArea");
const btn = document.getElementById("btn");
btn.addEventListener("click", displayData);

function displayData() {
displayArea.innerHTML = "";
const userId = idNum.value;

  fetch("https://jsonplaceholder.typicode.com/todos/" + userId)
    .then((response) => response.json())
    .then((data) => {
        let title = document.createElement("h5");
        title.innerHTML = `Title: ${data.title}`;
        let statusOf = document.createElement("p");
        if (data.completed == true) {
            statusOf.innnerText = 'Status: completed';
        } else {
            statusOf.innerText = 'Status: NOT completed';
        }
        displayArea.appendChild(title);
        displayArea.appendChild(statusOf);
    });
}
