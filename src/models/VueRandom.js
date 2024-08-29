import { useState } from 'react';

function RandomJokes() {
  const [joke, setJoke] = useState("");

  const fetchRandomJoke = async (e) => {
    e.preventDefault();
    try {
      // on récupère la blague avec fetch
      const response = await fetch("/api/random-joke");
      const data = await response.json();
      setJoke(data.setup + " " + data.punchline);
    } catch (error) {
      setJoke("Erreur lors de la récupération de la blague.");
    }
  };

  return (
    <form className="d-flex justify-content-center">
      <button type="submit" className='btn btn-warning mx-1' onClick={fetchRandomJoke}>Générer une blague</button>
      <textarea style={{ width: "500px" }} id="JokeRandom" value={joke} readOnly />
    </form>
  );
}

export default RandomJokes;
