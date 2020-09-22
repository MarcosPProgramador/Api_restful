const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

app.get("/", function () {
    try {
    } catch (error) {}
});
app.listen(4567);
