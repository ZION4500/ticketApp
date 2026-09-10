
const http = require("http");

const express = require("express");

const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const server = createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to the  Cinevo");
});


const movies = require("./models/movies.js");
 
const seats = require("./models/seats.js")

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})