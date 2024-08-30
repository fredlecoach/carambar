import Header from "../models/Header";
import RandomJokes from "../models/VueRandom";
import AllJokes from "../models/VueAll";
import background from "../assets/toys-shells-bright-background.jpg";
import SelectJoke from "../models/SelectJokes";
import AddJoke from "../models/AddJoke";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          minHeight: "100vh", 
        }}
      >
        <Header />
        <RandomJokes />
        <AllJokes />
        <SelectJoke />
        <AddJoke />
      </div>
    </>
  );
}

export default App;