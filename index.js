const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
//app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {allowEIO3: true});

io.on("connection", (socket) => {
  console.log("conectado " + socket.id);
  socket.emit("new_message", JSON.stringify({msg: 'Hello World', currentId: socket.id}));

 socket.on("join", data => {
	console.log(data);
	socket.emit("new_message", JSON.stringify({msg: "Recebi sua mensagem", currentId: socket.id}));
 });
});

/*
const ws = io.of("/swift");

ws.on("connect", socket => {
	console.log("conectado " + socket.id);
	socket.emit("new_message", JSON.stringify({msg: 'Hello world'}));
	

	socket.on("join", data => {
		console.log(data);
		socket.emit("new_message", JSON.stringify({msg: 'Hello world'}));
	}); 
}); */

const port = 4000;
const host = "137.184.64.67";

server.listen(port, host, () => {
  console.log(`Server listening http://${host}:${port}`);
});
