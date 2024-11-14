const { User } = require("../db/sequelize");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const privateKey = require("../auth/privateKey");
const blackList = require("../auth/blacklist");

exports.signup = async (req, res) => {
  try {
    const { username, numero, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    User.create({ ...req.body, password: hash }).then((user) => {
      res.json({ user });
    });
  } catch (error) {
    const message =
      "Impossible de crée l'utilisateur, Réessayez dans un instant";
    res.status(500).json({ data: error });
  }
};

exports.login = async (req, res) => {
  const { numero, password } = req.body;
  User.findOne({ where: { numero: req.body.numero } })
    .then((user) => {
      if (!user) {
        const message = "Utilisateur non inscrit, Veillez vous inscrit";
        return res.json({ message });
      }
       bcrypt
        .compare(req.body.password, user.password)
        .then((isValidePassword) => {
          if (!isValidePassword) {
            const message = "Mot de pass incorrect";
             res.status(401).json({ message });
          }
        });
      const token = jsonwebtoken.sign({ userId: user.id }, privateKey, {
        expiresIn: "1h",
      });
      return res.json({ user, token });
    })
    .catch((err) => {
      const message = "Impossible de se connectez, Réessayez dans un instant";
      res.status(500).json({ err, message });
    });
};

exports.logout = async (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(400).send("Token manquant");

  blackList.push(token);
  console.log(blackList);

  res.send("Déconnexion réussie");
};
