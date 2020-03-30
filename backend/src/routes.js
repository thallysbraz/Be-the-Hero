const express = require("express");
const routes = express.Router();

//Controllers
const OngController = require("./Controllers/OngController");
const IncidentController = require("./Controllers/IncidentController");
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");

//Rotas de login
routes.post("/session", SessionController.store); //Rota para fazer o login

//Rotas de ongs
routes.get("/ongs", OngController.index); //Listar todas as ong
routes.post("/ongs", OngController.store); //Cadastrar uma ong

//Rota de incidents
routes.get("/incidents", IncidentController.index); //Listar todos os incidents
routes.post("/incidents", IncidentController.store); //Cadastrar um incident
routes.delete("/incidents/:id", IncidentController.delete); //Deletar um incident

//Rota de profile
routes.get("/profile", ProfileController.index); //Listar os casos de uma ong especifica

module.exports = routes;
