import express from 'express';
import router from './routeApi'; // Assurez-vous que le chemin est correct

const app = express();

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Utilisation des routes définies dans randomAPi.js
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app