const express = require("express");
const router = express.Router();
const { auth } = require("../auth/auth");
const userControllers = require("../controller/userControllers");
const etablControllers = require("../controller/etablControllers");
const classControllers = require("../controller/classControllers");
const fournControllers = require("../controller/fournControllers");

// Endpoints pour l'authentification
router.post("/api/auth/signup", userControllers.signup);
router.post("/api/auth/login", userControllers.login);
router.post("/api/auth/logout", userControllers.logout);

// Endpoints pour les établissements
router.get("/api/etablissements/", auth, etablControllers.AllEtabl);
router.get("/api/etablissements/details", etablControllers.AllEtablDetails);
router.post("/api/etablissements");
router.put("/api/etablissements/:id");
router.delete("/api/etablissements/:id");

// Endpoints pour les classes
router.get("/api/etablissements/classes/", classControllers.allClasses);
router.get(
  "/api/etablissements/classes/details",
  classControllers.allClassesDetails
);
router.post("/api/etablissements/classes");
router.put("/api/etablissements/classes/");
router.delete("/api/etablissements/classes/");

// Endpoints pour les fournitures scolaires
router.get("/api/classes/fournitures", fournControllers.allFounrs);
router.post("/api/classes/fournitures");
router.put("/api/classes/fournitures/");
router.delete(" /api/classes/fournitures/");

// Endpoints pour les notifications (optionnel)
router.get("/api/notifications");
router.post("/api/notifications");

module.exports = router;
