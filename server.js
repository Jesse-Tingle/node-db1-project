const express = require("express");

const db = require("./data/dbConfig.js");

const accountsRoute = require("./accountsRouter");

const server = express();

server.use(express.json());
server.use("/api/accounts", accountsRoute);

server.get("/", (req, res) => {
	res.send(`<h2>Yeah! It works!</h2>`);
});

module.exports = server;
