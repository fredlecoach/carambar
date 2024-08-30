import { useState } from 'react';

function AddJoke() {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const pushJoke = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/add-joke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content })
      });

      if (response.ok) {
        // const data = await response.json();
        setMessage("Blague ajoutée avec succès !");
        setContent("");  // Réinitialiser le champ de texte après l'ajout
      } else {
        setMessage("Erreur lors de l'ajout de la blague.");
      }
    } catch (error) {
      setMessage("Erreur lors de l'ajout de la blague.");
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center ">
      <form onSubmit={pushJoke} className="w-50">
        <div className="form-group">
          <label htmlFor="jokeContent" >Ajouter une nouvelle blague :</label>
          <textarea
            id="jokeContent"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Écrivez votre blague ici..."
            rows="3"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark mt-2">
          Ajouter la blague
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default AddJoke;
