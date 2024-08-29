const { Joke } = import("../models")

const readJoke = async(req, res) => {
  try {
    const joke = await Joke.findById(req.params.id)
    res.status(200).json(joke)
  }
  catch (error){ res.status(500).json({ message: "Erreur, la blague n'a pas été trouvée !" }) }
  
}

export default readJoke