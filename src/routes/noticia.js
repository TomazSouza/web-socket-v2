module.exports = function(app) {

  app.post("/noticia/salvar", (req, res) => {
    app.webSocket.emit("updated", "salvo com sucesso");
    res.send("Recebido")
  });

};