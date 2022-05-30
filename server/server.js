const express = require("express");
const server = express();
const routes = require("./routes/index");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lucakail:theevilz4204@cluster0.c0gud.mongodb.net/Cluster0?retryWrites=true&w=majority")
    .then(() => { console.log("db connection sucessful") })
    .catch((err) => {
        console.log(err);
    })

server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://wordleunlimited-byluca.web.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

server.use("/", routes);

server.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
})


server.listen(8001, (req, res) => {
    console.log("Server running on port 8001")
})