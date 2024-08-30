import { useState } from "react";

function SelectJoke () {

  const [Select, setSelect] = useState("")

  const fetchSelectJoke = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/select-joke");
      const data = await response.json();
      setSelect(data.setup + " " + data.punchline);
    } catch (error) {
      setSelect("Erreur lors de la récupération de la blague.");
    }
  };

  return (
    <form className="d-flex justify-content-center">
      <button type="submit" className="btn btn-dark mx-1" onClick={fetchSelectJoke}>
        Choisir une blague
      </button>
      <textarea style={{ width: "500px" }} id="JokeRandom" value={Select} readOnly />
    </form>
  );
}

export default SelectJoke;
