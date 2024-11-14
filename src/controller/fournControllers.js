const { Fourn } = require("../db/sequelize");
const { Class } = require("../db/sequelize");


exports.allFounrs = async (req, res) => {
  await Fourn.findAll({ include: [{ model: Class, attributes: ["niveau"] }] })
    .then((fourn) => {
      res.json({ data: fourn });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
