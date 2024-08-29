import Header from "../models/Header";
import RandomJokes from "../models/VueRandom";
import AllJokes from "../models/VueAll";
import background from "../assets/toys-shells-bright-background.jpg";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Optionnel : pour couvrir tout le div
          backgroundPosition: "center", // Optionnel : pour centrer l'image
          minHeight: "100vh", // Optionnel : pour s'assurer que le div couvre toute la hauteur de la page
        }}
      >
        <Header />
        <RandomJokes />
        <AllJokes />
      </div>
    </>
  );
}

export default App;