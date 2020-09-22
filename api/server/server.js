const cors = require("cors");
const express = require("express");
const app = express();
const data = require("./data");

app.use(cors());

app.get("/", (req, res) => {
    return res.json(data);
});

app.listen(3000);
