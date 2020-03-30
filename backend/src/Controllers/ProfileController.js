const connection = require("../database/connection");

module.exports = {
  //index para listar os casos especificos de uma ong
  async index(req, res) {
    const ong_id = req.headers.authorization; //recebendo id da ong

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
