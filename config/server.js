const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const { WEB_SOCKET } = require("../config/constants");

const app = express();
const server = http.createServer(app);

app.use(cors());

app.set(WEB_SOCKET, new Server(server, {
  allowEIO3: true
}));

module.exports = {app, server};