const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const { data } = await axios("http://jsonplaceholder.typicode.com/users");
        return res.json(data);

    } catch (error) {
        console.error(error)
    }
});

app.listen(3000);



