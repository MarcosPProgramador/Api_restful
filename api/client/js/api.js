async function getApi(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        show(data);
    } catch (error) {
        console.error(error);
    }
}
getApi("http://localhost:3000");

function show(datas) {
    const con = document.getElementById("con");
    let box = "";
    datas.map((data) => {
        box += `
        <div class="box">
            <div class="box-name"> ${data.name}</div>
            <div class="box-email">${data.email}</div>
        </div>`;
    });
    con.innerHTML = box;
}
