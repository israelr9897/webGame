const URL = "http://localhost:3100/players";
let ALLPLAYERS = [];

async function getPlayersApi() {
  const response = await fetch(URL);
  return await response.json();
}

async function getPlayerByIDApi(id) {
  const response = await fetch(`${URL}/${id}`);
  const player = await response.json();
  return player;
}

async function addPlayerApi(newPlayer) {
  const response = await fetch(URL + "/addPlayer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlayer),
  });
  const data = await response.json();
  console.log(data);
}

async function updatePlayerApi(player) {
  const response = await fetch(`${URL}/${player.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
  console.log(await response.json());
}

console.log(await getPlayersApi());
await updatePlayerApi({ id: 1, username: "israel", best_time: 6 });
console.log(await getPlayersApi());
// console.log(await getPlayerByID(1));
// await addPlayerApi({ username: "moshe" });
// console.log(ALLPLAYERS);
// console.log(await getPlayerByID(2));

export { getPlayersApi, getPlayerByIDApi, addPlayerApi };
