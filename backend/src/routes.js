const express = require("express");
const routes = express.Router();

//Controllers
const OngController = require("./Controllers/OngController");
const IncidentController = require("./Controllers/IncidentController");

//Rotas de ongs
routes.get("/ongs", OngController.index); //Listar todas as ong
routes.post("/ongs", OngController.store); //Cadastrar uma ong

//Rota de incidents
routes.get("/incidents", IncidentController.index); //Listar todos os incidents
routes.post("/incidents", IncidentController.store); //Cadastrar um incident

module.exports = routes;
