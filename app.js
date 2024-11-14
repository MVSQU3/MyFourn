const express = require("express");
const app = express();
// synchronisation de la base de donnée
const sequelize = require("./src/db/sequelize");
sequelize.InitDb();

// Initialisation des routes
const router = require("./src/routes/routes");

// middleware
app.use(express.json());
app.use(router);

const port = 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
