import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtenir le chemin du répertoire du fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le dossier contenant les images
const imagesFolder = path.join(__dirname, "../static/assets");

// Récupérer les fichiers d'images et créer le JSON
const generateJSON = async () => {
  try {
    const folders = fs.readdirSync(imagesFolder);
    const photos = [];

    for (const folder of folders) {
      const folderPath = path.join(imagesFolder, folder);

      // Vérifie si c'est un répertoire
      if (fs.statSync(folderPath).isDirectory()) {
        const files = fs.readdirSync(folderPath);

        for (const file of files) {
          const photo = {
            name: file,
            folder: folder,
            alt: file.split(".")[0].replace(/-/g, " ")
          };
          photos.push(photo);
        }
      }
    }

    // Écrire le fichier JSON
    fs.writeFileSync(path.join(imagesFolder, "photos.json"), JSON.stringify(photos, null, 2));

    console.log("Fichier photos.json généré avec succès !");
  } catch (error) {
    console.error("Erreur lors de la génération du fichier JSON :", error);
  }
};

// Exécuter la fonction
generateJSON();
