const URL = "http://localhost:3100/players";
export let TOKEN;

async function getPlayersApi() {
  const response = await fetch(URL, {
    headers: {
      authorization: TOKEN,
    },
  });
  return await response.json();
}

async function getPlayerByIDApi(id) {
  const response = await fetch(`${URL}/${id}`, {
    headers: {
      authorization: TOKEN,
    },
  });
  const player = await response.json();
  return player;
}

async function loginApi(player) {
  const response = await fetch(URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN,
    },
    body: JSON.stringify(player),
  });
  TOKEN = response.headers.get("authorization");
  const data = await response.json();
  console.log(data.msg);
  return data.Player;
}

async function addPlayerApi(newPlayer) {
  const response = await fetch(URL + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN,
    },
    body: JSON.stringify(newPlayer),
  });
  const data = await response.json();
  console.log(data.msg);
  return data.plId;
}

async function updatePlayerApi(player) {
  try {
    const response = await fetch(`${URL}/${player.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: TOKEN,
      },
      body: JSON.stringify({ time: player.lowestTime }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export {
  getPlayersApi,
  getPlayerByIDApi,
  addPlayerApi,
  updatePlayerApi,
  loginApi,
};
