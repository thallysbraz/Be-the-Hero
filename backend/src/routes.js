const express = require("express");

const routes = express.Router();

routes.get("/", async (req, res) => {
  return res.json({ msg: "ok, true" });
});

routes.get("/user", async (req, res) => {
  return res.json({ msg: "ok, novo user" });
});

module.exports = routes;
