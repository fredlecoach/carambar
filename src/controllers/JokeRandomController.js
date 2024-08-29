import Jokes from "../models/Data"

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * Jokes.length);
  console.log('Blague aléatoire:', Jokes[randomIndex]);
  return Jokes[randomIndex];
}

const randomJoke = (req, res) => {
  const random = getRandomJoke();
  res.json(random);
};

export default randomJoke;
