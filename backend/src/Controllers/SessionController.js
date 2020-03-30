const connection = require("../database/connection");

module.exports = {
  //store para criar a sessão
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    //verificando se a ong existe
    if (!ong) {
      return res.status(400).json({ error: "No ONG foung with this ID" });
    }

    return res.json(ong);
  }
};
