module.exports = (ws, socket) => {

  const createOrder = function(payload) {
    console.log(payload);
  }

  const readOrder = function(orderId, callback) {
    console.log(orderId);
    console.log(callback);
  }

  socket.on("order:create", createOrder);
  socket.on("order:read", readOrder);
};