const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "ClassFourn",
    {
      class_Id: {
        type: DataTypes.INTEGER,
        referrences: {
          model: "Class",
          key: "id",
        },
      },
      fourn_Id: {
        type: DataTypes.INTEGER,
        referrences: {
          model: "Fourn",
          key: "id",
        },
      },
      quantité: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
