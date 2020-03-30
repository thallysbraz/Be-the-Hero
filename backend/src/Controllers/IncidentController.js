const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  //index para listar todos os incidents
  async index(req, res) {
    try {
      //buscando no banco todos os incidents
      const incidents = await connection("incidents").select("*");

      //retornando ao front
      return res.json(incidents);
    } catch (error) {
      return res.json(error);
    }
  },

  //store para criar incidents
  async store(req, res) {
    try {
      const { title, description, value } = req.body;
      const ong_id = req.headers.authorization;

      const [id] = await connection("incidents").insert({
        title,
        description,
        value,
        ong_id
      });

      return res.json({ id });
    } catch (error) {
      return res.json(error);
    }
  }
};
