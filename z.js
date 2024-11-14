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

  // Ajouter le reste des associations ici
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
];

for (const { class_Id, etablissements } of sampleClassEtablissements) {
  console.log({ class_Id, etablissements });
}
