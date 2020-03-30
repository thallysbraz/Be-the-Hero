const express = require("express");
require("dotenv/config");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001; //porta do server rodar

app.use(cors()); //aceita requisições
app.use(express.json()); //config para usar json
app.use(routes); //app usar as rotas

app.listen(PORT, () => {
  console.log("server rodando na porta " + PORT);
});
