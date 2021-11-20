const { CONNECTED, SEND_MESSAGE, DISCONNECT } = require("../../config/constants");

module.exports.onConnection = (ws, socket) => {

  console.log("UserConnected ID: " + socket.id);

  socket.emit(CONNECTED, JSON.stringify({msg: 'Usuário conectado', currentId: socket.id}));

  socket.on(SEND_MESSAGE, data => {
    console.log(data);
    // socket.emit("new_message", JSON.stringify({msg: "Recebi sua mensagem", currentId: socket.id}));
  });

  socket.on(DISCONNECT, socket => {
    console.log(`disconnect ${socket.id}`);
  });

  /*
  io.on("connection", (socket) => {
    console.log("conectado " + socket.id);
    socket.emit("new_message", JSON.stringify({msg: 'Hello World', currentId: socket.id}));

    socket.on("join", data => {
      console.log(data);
      socket.emit("new_message", JSON.stringify({msg: "Recebi sua mensagem", currentId: socket.id}));
    });

    socket.on("disconnect", socket => {
      console.log(`disconnect ${socket.id} due to ${reason}`);
    })
  });*/

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
};