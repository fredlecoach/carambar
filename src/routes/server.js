import express from 'express';
import router from './routeApi'; 

const app = express();

// gérer les requêtes JSON
app.use(express.json());

// Utilisation des routes définies dans routeAPi.js
app.use('/api/v1', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

