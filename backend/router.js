// Définis et gère les routes BACKEND de notre projet:

import express from 'express';
import cors from 'cors';

const router = express.Router();

// Route pour tester la communication:
router.get('/', (req, res) => {
    res.send('Bonjour, le serveur Express est en fonction !')
});

// Future route 404
router.get('*', (req, res) => {
    res.send('Va navi, trouve notre jeune amis, il ne me reste plus beaucoup de temps!')
});

export default router;