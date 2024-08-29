import express from 'express';
import randomJoke from "../controllers/JokeRandomController"; // Assurez-vous que le chemin est correct

const router = express.Router();

// Définition de la route pour obtenir une blague aléatoire
router.get('/random-joke', randomJoke);

export default router;
