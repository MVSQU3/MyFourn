const { Etabl } = require("../db/sequelize");
const { Class } = require("../db/sequelize");

// controllers /api/etablissements/

exports.AllEtabl = async (req, res) => {
  await Etabl.findAll()
    .then((etabl) => {
      if (!etabl) {
        return "Aucun etablissement trouver";
      }
      return res.json({ établissements: etabl });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
};

// controllers /api/etablissements/details

exports.AllEtablDetails = async (req, res) => {
  await Etabl.findAll({ include: [{ model: Class, attributes: ["niveau"] }] })
    .then((etabl) => {
      if (!etabl) {
        return "Aucun etablissement trouver";
      }
      return res.json({ établissements: etabl });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
};
