import { useState } from 'react';

function RandomJokes() {
  const [joke, setJoke] = useState("");

  const fetchRandomJoke = async (e) => {
    e.preventDefault();
    try {
      // Récupérer la blague aléatoire avec fetch
      const response = await fetch("/api/v1/random-joke");
      const data = await response.json();
      setJoke(data.setup + " " + data.punchline);
    } catch (error) {
      setJoke("Erreur lors de la récupération de la blague.");
    }
  };

  return (
    <form className="d-flex justify-content-center">
      <button type="submit" className='btn btn-dark mx-1' onClick={fetchRandomJoke}>Générer une blague</button>
      <textarea style={{ width: "500px" }} id="JokeRandom" value={joke} readOnly />
    </form>
  );
}

export default RandomJokes;
