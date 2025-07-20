const URL = "http://localhost:3100/players";
let ALLPLAYERS = [];

async function getPlayers() {
  const response = await fetch(URL);
  ALLPLAYERS = await response.json();
}

async function getPlayerByID(id) {
  const response = await fetch(`${URL}/${id}`)
  const player = await response.json()
  return player;
}

// await getPlayers()
// console.log(ALLPLAYERS);
// console.log(await getPlayerByID(2));

export {
  ALLPLAYERS,
  getPlayers,
  getPlayerByID
}