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
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          minHeight: "100vh", 
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