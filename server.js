import { Sequelize } from "sequelize"; // ORM (Object-Relational Mapping) qui simplifie les interactions avec la bdd sans écrire de requêtes SQL
import express from 'express'; // Framework qui permet de créer le server et de gérer les requêtes HTTPS
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Appeler dotenv.config() pour qu'il fonctionne au demarrage du server
import router from './backend/router.js';
import sequelize from './db.config.js';

let DB = sequelize;

// Initialisation du Server (API)
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router de base
app.use(router);

// Test si le server démarre avec la bdd
DB.authenticate()
    .then(() => {
        console.log('Vous êtes bien connecté à la BDD');
        app.listen(port, () => {
            console.log(`Le serveur est démarré et écoute sur http://localhost:${port}`);
        });
    })
    .catch(err => console.log('Database sequelize Error', err));
