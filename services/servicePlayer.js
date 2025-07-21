import rl from "readline-sync";
import { Player } from "../classes/Player.js";
import { readFileToPlayers } from "../db/DALplayer.js";
import {
  addPlayerApi,
  getPlayerByIDApi,
  updatePlayerApi,
} from "../client/playerApi.js";

function returnStringOfTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60));
  return `${hours}:${minutes}:${seconds}`;
}

async function getPlayerObj(id) {
  let player = await searchAndGetPlayerByID(id);
  if (!player) {
    console.log("The userName isn't find");
    const name = rl.question("What your name?  ");
    await addPlayerApi({ username: name });
    player = new Player(0, name);
  }
  return player;
}

async function searchAndGetPlayerByID(id) {
  try {
    const player = (await getPlayerByIDApi(id))[0];
    if (player) {
      return new Player(player.id, player.username, player.lowestTime);
    }
    return false;
  } catch (err) {
    console.log("search and get player error massegs: " + err);
  }
}

async function updatePlayer(player) {
  await updatePlayerApi(player);
}

function isLowerTime(player) {
  if (player.lowestTime === 0 || player.average < player.lowestTime.time) {
    player.lowestTime = player.average;
    console.log(`\nGreat job, ${player.username}!`);
    console.log("Your time: " + returnStringOfTime(player.lowestTime));
    console.log("New record! Time updated.");
  }
  return player;
}

export { returnStringOfTime, getPlayerObj, isLowerTime, updatePlayer };
