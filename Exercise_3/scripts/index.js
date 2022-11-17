const numFromUser = document.getElementById("numFromUser");
const tBody = document.getElementById("tBody");
const btn = document.getElementById("btn");
btn.addEventListener("click", displayInfo);

function displayInfo() {
  const userNum = numFromUser.value;

  fetch("https://www.swapi.tech/api/people/" + userNum)
    .then((response) => response.json())
    .then((data) => {
            let row = tBody.insertRow(-1);

            let cell1 = row.insertCell(0);
            cell1.innerText = data.result.properties.name;

            let cell2 = row.insertCell(1);
            cell2.innerText = data.result.properties.height;

            let cell3 = row.insertCell(2);
            cell3.innerText = data.result.properties.birth_year;

            let cell4 = row.insertCell(3);
            const a = document.createElement("a");
            let link = document.createTextNode(data.result.properties.homeworld)
            a.appendChild(link);
            a.innerText = "HomeWorld";
            a.href = data.result.properties.homeworld;
            a.taget = "_blank";
            cell4.appendChild(a);
    });
}