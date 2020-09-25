const con = o("#con");
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
    datas.map((data) => {
        const arr = [
            "ID: " + data.id,
            "Name: " + data.name,
            "Username: " + data.username,
            "Email: " + data.email,
            "Street: " + data.address.street,
            "City: " + data.address.city,
            "Phone: " + data.phone,
        ];
        for (let ct of arr) {
            iteratorArr(ct);
        }
    });

    function iteratorArr(ct) {
        const newLocal = "div";
        const newLocal_1 = "box";
        const box = create(newLocal, newLocal_1);
        box.textContent = ct;

        //  Container
        //          Box
        append(con, box);
    }
}
// factory functions / desing pattern
function create(e, c) {
    const l = document.createElement(e);
    l.className = c;
    return l;
}
function append(c, b) {
    return c.appendChild(b);
}
function o(e) {
    return document.querySelector(e);
}
// api
getApi("http://localhost:3000");
