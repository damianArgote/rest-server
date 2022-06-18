const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //middlewares
    this.middlewares();
    //rutas
    this.routes();
  }

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
    this.app.use(cors());
    //lectura parseo body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor funcionando");
    });
  }
}

module.exports = Server;
