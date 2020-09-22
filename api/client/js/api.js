async function getApi(url) {
    try {
        const res = await fetch(url);
        const json = await res.json();
        json.map(el => {
            console.log(el.user)
        })

    } catch (error) {
        console.error(error);
    }
}
getApi("http://localhost:3000");
