// 1. Endpoints pour l'authentification des parents
// POST /api/auth/signup : Inscription d’un nouveau parent.;(yes)
// POST /api/auth/login : Connexion d’un parent.(yes)
// POST /api/auth/logout : Déconnexion du parent.(yes)

// 2. Endpoints pour les établissements
// GET /api/etablissements/ : Récupère la liste des établissements.(yes)
// GET /api/etablissements/details/: Récupère les détails d'un établissement spécifique (par exemple, nom et adresse).(yes)
// POST /api/etablissements : Crée un nouvel établissement (à utiliser avec des droits admin).
// PUT /api/etablissements/
// : Met à jour un établissement existant.
// DELETE /api/etablissements/
// : Supprime un établissement.

// 3. Endpoints pour les classes
// GET /api/etablissements/
// /classes : Récupère toutes les classes d’un établissement.
// GET /api/etablissements/
// /classes/
// : Récupère les détails d’une classe spécifique.
// POST /api/etablissements/
// /classes : Crée une nouvelle classe pour un établissement.
// PUT /api/etablissements/
// /classes/
// : Met à jour une classe spécifique.
// DELETE /api/etablissements/
// /classes/
// : Supprime une classe.

// 4. Endpoints pour les fournitures scolaires
// GET /api/classes/
// /fournitures : Récupère la liste des fournitures pour une classe spécifique.
// POST /api/classes/
// /fournitures : Ajoute un nouvel article de fourniture à la liste d’une classe.
// PUT /api/classes/
// /fournitures/
// : Modifie un article de fourniture spécifique.
// DELETE /api/classes/
// /fournitures/
// : Supprime un article de fourniture de la liste.

// 5. Endpoints pour les notifications (optionnel)
// GET /api/notifications : Récupère les notifications liées aux fournitures.
// POST /api/notifications : Crée une nouvelle notification (par exemple, lorsqu'une fourniture est ajoutée ou modifiée).