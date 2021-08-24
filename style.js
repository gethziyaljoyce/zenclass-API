async function getData() {
    const data = await fetch("https://611f264a9771bf001785c738.mockapi.io/users", { method: "GET" });
    const users = await data.json();
    console.log(users);
    document.querySelector(".user-data").innerHTML = ``;
    users.forEach((user) => { createData(user) });
}


function createData({ avatar, name, createdAt, id }) {
    const info = document.createElement("div");
    info.setAttribute("class", "container");
    info.innerHTML = `
    <div class="pic">
    <img class="avatar" src=${avatar} width=60rem height=60rem/>
    </div>
    <div class="details">
    <h3>${name}</h3>
    <p>${new Date(createdAt).toDateString()}</p>
    <button onclick="deleteData(${id})">Delete</button>
    <button onclick="editData(${id})">Edit</button>
    </div>
    </div>
    `;
    document.querySelector(".user-data").append(info);

}
getData();

async function deleteData(id) {
    const data = await fetch("https://611f264a9771bf001785c738.mockapi.io/users/" + id, { method: "DELETE" });
    const user = await data.json();
    console.log(user);
    getData();
}


async function addData() {
    var a = document.getElementById("myInput").value;
    var b = document.getElementById("myInput1").value;
    await fetch("https://611f264a9771bf001785c738.mockapi.io/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: a,
            avatar: b,
            craetedAt: new Date().toISOString()
        })
    })
    getData();
}


async function editData(id) {
    const data = await fetch("https://611f264a9771bf001785c738.mockapi.io/users/" + id, { method: "GET" });
    const users = await data.json();
    console.log(users.name);
    console.log(users.avatar);
    console.log(users.id);
    document.getElementById("myEditInput").value=users.name;
    document.getElementById("myEditInput1").value=users.avatar;
    document.getElementById("myEditInput2").value=users.id;
}
async function editedNewData(){
    var a = document.getElementById("myEditInput").value;
    var b = document.getElementById("myEditInput1").value;
    var id = document.getElementById("myEditInput2").value;
    await fetch("https://611f264a9771bf001785c738.mockapi.io/users/" +id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: a,
            avatar: b,
            craetedAt: new Date().toISOString()
        })
    })
    getData();

}
