import { TOKEN } from "./signApi.js";
const URL = "http://127.0.0.1:3100/players";

async function getFiveWinPlayersApi() {
  const response = await fetch(URL + "/fivewin", {
    headers: {
      authorization: TOKEN,
    },
  });
  return await response.json();
}
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
  getFiveWinPlayersApi,
  getPlayerByIDApi,
  updatePlayerApi,
};
