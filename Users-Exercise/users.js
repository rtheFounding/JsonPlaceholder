const table = document.getElementById("tableBody");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let row = table.insertRow(-1);

            let cell1 = row.insertCell(0);
            cell1.innerText = data[i].name;

            let cell2 = row.insertCell(1);
            cell2.innerText = data[i].username;

            let cell3 = row.insertCell(2);
            cell3.innerText = data[i].email;

            let cell4 = row.insertCell(3);
            cell4.innerText = data[i].address.street + ", " + data[i].address.city + ", " + data[i].address.zipcode;

            let cell5 = row.insertCell(4);
            cell5.innerText = data[i].phone;

            let cell6 = row.insertCell(5);
            cell6.innerText = data[i].website;
        }
})