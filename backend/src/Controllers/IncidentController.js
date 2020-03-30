const connection = require("../database/connection");

module.exports = {
  //index para listar todos os incidents
  async index(req, res) {
    try {
      const { page = 1 } = req.query;
      //buscando no banco todos os incidents
      const incidents = await connection("incidents")
        .limit(5)
        .offset((page - 1) * 5)
        .select("*");

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
  },

  //delete para deletar um incident
  async delete(req, res) {
    try {
      const { id } = req.params;
      const ong_id = req.headers.authorization;

      const incident = await connection("incidents")
        .where("id", id)
        .select("ong_id")
        .first();

      if (incident !== ong_id) {
        return res.status(401).json({ error: "Operation not permitted" });
      }
      await connection("incidents")
        .where("id", id)
        .delete();
      console.log("deu certo");
      return res.status(204).send();
    } catch (error) {
      return res.json(error);
    }
  }
};
