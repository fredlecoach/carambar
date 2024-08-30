import express from 'express';
import randomJoke from "../controllers/JokeRandomController";
import readAllJoke from '../controllers/JokeReadAllController'; 
import selectJokeById from '../controllers/JokeSelectByIdController'; 
import addJoke from '../controllers/JokeAddController'; 

const router = express.Router();

// Route pour obtenir une blague aléatoire
router.get('/random-joke', randomJoke);

// Route pour lire toutes les blagues 
router.get('/read-all-joke', readAllJoke);

// Route pour sélectionner une blague par ID 
router.get('/select-joke/:id', selectJokeById);

// Route pour ajouter une blague 
router.post('/add-joke', addJoke);

export default router;
