import { useState } from 'react';

function AllJokes() {
  const [All, setAll] = useState("");

  const fetchAllJokes = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/readAllJoke"); 
      const data = await response.json();
      setAll(data);
    } catch (error) {
      setAll("Erreur lors de la récupération des blagues.");
    }
  };

  return (
    <form className="d-flex justify-content-center my-5">
      <button type="submit" className="btn btn-dark mx-1" onClick={fetchAllJokes}>
        Voir toutes les blagues
      </button>
      <textarea
        style={{ width: "500px" }}
        value={All}
        readOnly
      />
    </form>
  );
}

export default AllJokes;
