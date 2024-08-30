import express from 'express';
import randomJoke from "../controllers/JokeRandomController";
import readAllJoke from '../controllers/JokeReadAllController';


const router = express.Router();

// Définition de la route pour obtenir une blague aléatoire
router.get('/random-joke', randomJoke);

// route pour lire toutes les blagues
router.get('/read-all-joke', readAllJoke);

// selectionner une blague
router.get('/select-joke/:id', selectJokeById); 

// ajouter une blague
router.get('/add-joke', AddJoke)

export default router;
