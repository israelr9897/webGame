import rl from "readline-sync";
import { Player } from "../classes/Player.js";
import { readFileToPlayers } from "../db/DALplayer.js";
import { ALLPLAYERS, getPlayerByID } from "../client/playerApi.js";

function returnStringOfTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60));
  return `${hours}:${minutes}:${seconds}`;
}

async function getPlayerObj(id) {
  // let player = await searchAndGetPlayerByID(id);
  if (!player) {
    console.log("The userName isn't find");
    const name = rl.question("What your name?  ");
    player = new Player(0, name);
  }
  return player;
}

async function searchAndGetPlayerByID(id) {
  try {
    const player = await getPlayerByID(id);
    if (player) {
      return new Player(player.id, player.name, player.lowestTime);
    }
    return false;
  } catch (err) {
    console.log("search and get player error massegs: " + err);
  }
}

async function updateDataToPlayer(player) {
  let players = await readFileToPlayers();
  if (player.id === 0) {
    player.id = players.length + 1;
    players.push(player);
    return players;
  }
  players.forEach((p) => {
    if (p.id === player.id) {
      p.lowestTime = player.lowestTime;
    }
  });
  return players;
}

function isLowerTime(player) {
  if (
    player.lowestTime === undefined ||
    player.average < player.lowestTime.time
  ) {
    player.lowestTime = {
      time: player.average,
      timeOfStr: returnStringOfTime(player.average),
    };
    console.log(`\nGreat job, ${player.name}!`);
    console.log("Your time: " + player.lowestTime.timeOfStr);
    console.log("New record! Time updated.");
  }
  return player;
}

export { returnStringOfTime, getPlayerObj, isLowerTime, updateDataToPlayer };
