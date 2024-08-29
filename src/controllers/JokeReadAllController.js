const Joke = import ("../models")

const readAllJoke = async (req, res)=>{
  try {
    const jokes = await Joke.findAll()
    res.status(200).json(jokes)
  }
  catch (error){ res.status(500).json( {message : "Erreur, blagues non trouvées"})}
}

export default readAllJoke