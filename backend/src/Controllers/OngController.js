const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  //store para criar ong
  async store(req, res) {
    try {
      const { name, email, whatsapp, city, uf } = req.body; //recebendo os dados

      //gerando id da ong
      const id = crypto.randomBytes(4).toString("HEX");

      await connection("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return res.json({ id });
    } catch (error) {
      return res.json(error);
    }
  },

  //index para listar ongs cadastradas
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  }
};
