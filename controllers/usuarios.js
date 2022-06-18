const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "no name", apikey } = req.query;
  res.json({
    msg: "get API - controller",
    q,
    nombre,
    apikey,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    msg: "post API",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    ok: true,
    msg: "delete API",
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put API",
    id,
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    ok: true,
    msg: "patch API",
  });
};
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
  usuariosPatch,
};
