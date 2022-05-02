const express = require("express");

const app = express();

app.use(express.static("build/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html")
})

app.listen(3000, () => {
    console.log("Server has started");
})