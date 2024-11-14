const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "classEtabl",
    {
      class_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Classes",
          key: "id",
        },
      },
      Etablissement_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Etablissements",
          key: "id",
        },
      },
    },
    {
      timestamps: false
    }
  );
};
