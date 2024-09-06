// Définis et gère les routes BACKEND de notre projet:

import express from 'express';
import cors from 'cors';

const router = express.Router();

// Route pour tester la communication:
router.get('/', (req, res) => {
    res.send('Bonjour, le serveur Express est en fonction !')
});

export default router;