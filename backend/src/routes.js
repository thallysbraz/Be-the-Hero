const express = require("express");
const crypto = require("crypto");

const routes = express.Router();

const connection = require("./database/connection");

routes.get("/", async (req, res) => {
  return res.json({ msg: "ok, true" });
});

routes.post("/ongs", async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body; //recebendo os dados

  //gerando id da ong
  const id = crypto.randomBytes(4).toString("HEX");

  const ong = await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });
  return res.json(ong.id);
});

module.exports = routes;
