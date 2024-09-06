import express from 'express'; // Framework qui permet de créer le server et de gérer les requêtes HTTPS
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Appeler correctement dotenv.config()
import router from './backend/router.js';

// Initialisation du Server (API)
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes de base
app.use(router);

app.listen(port, () => {
    console.log(`Le serveur démarré est à l'écoute sur http://localhost:${port}`);
});