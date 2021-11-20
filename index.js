const { app, server } = require('./config/server');
const managerMessage = require("./src/routes/managerMessage");
const { WEB_SOCKET, CONNECTION } = require('./config/constants');

const io = app.get(WEB_SOCKET);

io.on(CONNECTION, socket => {
  managerMessage.onConnection(io, socket);
});

const port = 4000;
//const host = "137.184.64.67";
const host = "127.0.0.1"

server.listen(port, host, () => {
  console.log(`Server listening http://${host}:${port}`);
});
