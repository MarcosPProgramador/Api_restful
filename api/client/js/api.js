const con = document.getElementById("con");
async function getApi(url) {
    try {
        const response = await fetch(url);
        const datas = await response.json();
        show(datas);
    } catch (error) {
        console.error(error);
    }
}
function show(datas) {
    let res = "";

    datas.map((data) => {
        res += `<div class="box">
                    <div class="bx">
                        <span>ID: </span> ${data.id}
                    </div>
                    <div class="bx">
                        <span>Username: </span> ${data.name + data.username}
                    </div>
                    <div class="bx">
                        <span>Email: </span> ${data.email}
                    </div>
                    <div class="bx">
                        <span>Street: </span> ${data.address.street}
                    </div>
                    <div class="bx">
                        <span>City: </span> ${data.address.city}
                    </div>
                    <div class="bx">
                        <span>Phone: </span> ${data.phone}
                    </div>

                </div>
        `;
    });
    con.innerHTML = res
}
// function createEl(el, cl) {
//     // select element and insert class
//     return (document.createElement(el).className = cl);
// }

getApi("http://localhost:3000");
