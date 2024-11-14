const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const etablModel = require("../models/etablissement");
const classModel = require("../models/class");
const classEtablModel = require("../models/classEtabl");
const fournModel = require("../models/fourn");
const classFounrModel = require("../models/classFourn");
const { School } = require("./Schools");
const { Users } = require("./Users");
const { Classes } = require("./Class");

const sequelize = new Sequelize("Schooldb", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

const User = userModel(sequelize);
const Etabl = etablModel(sequelize);
const Class = classModel(sequelize);
const ClassEtabl = classEtablModel(sequelize);
const Fourn = fournModel(sequelize);
const ClassFounr = classFounrModel(sequelize);

// Associations
Etabl.belongsToMany(Class, {
  through: ClassEtabl,
  foreignKey: "Etablissement_Id",
  onDelete: "CASCADE",
});
Class.belongsToMany(Etabl, {
  through: ClassEtabl,
  foreignKey: "class_Id",
  onDelete: "CASCADE",
});
Fourn.belongsToMany(Class, {
  through: ClassFounr,
  foreignKey: "fourn_Id",
  onDelete: "CASCADE",
});
Class.belongsToMany(Fourn, {
  through: ClassFounr,
  foreignKey: "class_Id",
  onDelete: "CASCADE",
});

const sampleFournitures = [
  { id: 1, nom: "Cahier" },
  { id: 2, nom: "Crayons" },
  { id: 3, nom: "Gomme" },
  { id: 4, nom: "Règle" },
  { id: 5, nom: "Feuilles de papier" },
  { id: 6, nom: "Trieur" },
  { id: 7, nom: "Stylo bleu" },
  { id: 8, nom: "Stylo rouge" },
  { id: 9, nom: "Calculatrice" },
  { id: 10, nom: "Dictionnaire" },
  { id: 11, nom: "Livre de français" },
  { id: 12, nom: "Livre de mathématiques" },
  { id: 13, nom: "Livre d'histoire-géographie" },
];

const sampleClassEtablissements = [
  { class_Id: 1, etablissements: [2, 4, 5, 7, 9, 10, 13, 14, 16, 17, 18, 20] },
  { class_Id: 2, etablissements: [2, 4, 5, 7, 9, 10, 13, 14, 16, 17, 18, 20] },
  { class_Id: 3, etablissements: [2, 4, 5, 7, 9, 10, 13, 14, 16, 17, 18, 20] },
  { class_Id: 4, etablissements: [2, 4, 5, 7, 9, 10, 13, 14, 16, 17, 18, 20] },
  { class_Id: 5, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 6, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 7, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 8, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 9, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 10, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 11, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 12, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 13, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
  { class_Id: 14, etablissements: [1, 3, 6, 8, 11, 12, 15, 19] },
];

const sampleClassFournitures = [
  { class_Id: 1, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 2, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 3, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 4, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 5, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 6, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 7, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 8, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 9, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 10, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 11, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 12, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 13, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
  { class_Id: 14, fournitures: [1, 9, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13] },
];

const InitDb = async () => {
  await sequelize.authenticate();
  console.log("db connecté à la base de donnée");

  await sequelize.sync({ force: true });
  console.log("Synchronisation des models à la db réussie");

  for (const users of Users) {
    const hash = await bcrypt.hash(users.password, 10);
    await User.create({ ...users, password: hash }).then((user) => {
      console.log(user.toJSON());
    });
  }

  for (const schools of School) {
    await Etabl.create({ ...schools });
  }

  for (const classes of Classes) {
    await Class.create({ ...classes });
  }

  for (const fourn of sampleFournitures) {
    await Fourn.create(fourn);
  }

  for (const { class_Id, etablissements } of sampleClassEtablissements) {
    for (const etablId of etablissements) {
      await ClassEtabl.create({ class_Id, Etablissement_Id: etablId });
    }
  }

  for (const { class_Id, fournitures } of sampleClassFournitures) {
    for (const fourn_Id of fournitures) {
      await ClassFounr.create({ class_Id, fourn_Id, quantité: 1 });
    }
  }
};

module.exports = { InitDb, sequelize, User, Etabl, Class, Fourn };
