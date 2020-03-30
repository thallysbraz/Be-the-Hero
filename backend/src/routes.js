const express = require("express");
const routes = express.Router();

//Controllers
const OngController = require("./Controllers/OngController");

//Rotas de ongs
routes.get("/ongs", OngController.index); // Listar todas as ong
routes.post("/ongs", OngController.store); // Cadastrar uma ong

module.exports = routes;
