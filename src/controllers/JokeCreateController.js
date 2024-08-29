const { Joke } = import('../models');

// créer une blague et l'exporter
createJoke = async (req, res) => {
    try {
        const joke = await Joke.create({ content: req.body.content });
        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la blague.' });
    }
};

export default createJoke