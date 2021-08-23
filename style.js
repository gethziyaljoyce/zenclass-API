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

// let a=function userName(event){
//     const uname=event.target.value;
//     return uname;
// }
// let a = function myFunction() {
//     var x = document.getElementById("myInput").value;
//     return x;
// }

// let b = function myPic() {
//     var y = document.getElementById("myInput1").value;
//     return y;
// }
// let b=function userPic(event){
//    const upic=event.target.value;
//   return upic;
// }

async function addData() {
    var a = document.getElementById("myInput").value;
    var b = document.getElementById("myInput1").value;
    fetch("https://611f264a9771bf001785c738.mockapi.io/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: `${a}`,
            avatar: `${b}`
            // craetedAt : new Date().toISOString()
        })
    })
        .then((data) => data.json())
        .then(user => getData());
}


