const { Class } = require("../db/sequelize");
const { Fourn } = require("../db/sequelize");

exports.allClasses = async (req, res) => {
  await Class.findAll()
    .then((classes) => {
      if (!classes) {
        return "Aucune classe trouver";
      }
      return res.json({ classes });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
};

exports.allClassesDetails = async (req, res) => {
  await Class.findAll({ include: [{ model: Fourn, attributes: ["nom"] }] })
    .then((classes) => {
      if (!classes) {
        return "Aucune classe trouver";
      }
      return res.json({ classes });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
};
