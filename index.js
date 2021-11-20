const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());


const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("conectado " + socket.id);
  socket.emit("newMessage", "hello world");
});

const port = 4000;
const host = "137.184.64.67";

server.listen(port, host, () => {
  console.log(`Server listening http://${host}:${port}`);
});