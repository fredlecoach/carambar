// Assurez-vous que le chemin pointe correctement vers le fichier Header.js
import Header from "../models/Header";
import RandomJokes from "../models/VueRandom"
import AllJokes from "../models/VueAll";


function App() {
  return (
    <>
      <Header />
      <RandomJokes />
      <AllJokes />
    </>
  );
}

export default App;