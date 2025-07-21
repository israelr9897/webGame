const URL = "http://localhost:3100/players";

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
  try {
    console.log(player.lowestTime);
    console.log(player.id);
    const response = await fetch(`${URL}/${player.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time: player.lowestTime }),
    });
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}

export { getPlayersApi, getPlayerByIDApi, addPlayerApi, updatePlayerApi };
