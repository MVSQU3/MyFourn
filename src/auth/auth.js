const jwt = require("jsonwebtoken");
const privateKey = require("./privateKey");
const blackList = require("./blacklist");

exports.auth = (req, res, next) => {
  const HeadersAuthorization = req.headers.authorization;

  if (!HeadersAuthorization) {
    const message = "Vous avez pas fournit de jeton d'authentification";
    return res.json({ message });
  }

  const token = HeadersAuthorization.split(" ")[1];
  jwt.verify(token, privateKey, (error, decodeToken) => {
    if (error) {
      const message =
        "L'utilisateur n'est pas autoriser a accéder a cette resource";
      return res.json({ message });
    }
    const userId = decodeToken.userId;
    if (req.body.userId && req.body.userId == !userId) {
      const message = "L'identifiant de l'utilisateur n'est pas valide";
      return res.json({ message });
    } else {
      next();
    }
  });
};

exports.deAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).send("Accès non autorisé");

  if (blackList.includes(token)) return res.status(403).send("Token révoqué");

  jwt.verify(token, privateKey, (err, user) => {
    if (err) return res.status(403).send("Token non valide");
    req.user = user;
    next();
  });
};
