import { Player } from "../classes/Player.js";
import {
  getFiveWinPlayersApi,
  getPlayersApi,
  updatePlayerApi,
} from "../client/playerApi.js";

function returnStringOfTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60));
  return `${hours}:${minutes}:${seconds}`;
}

async function getPlayerObj(user) {
  const player = new Player(user.id, user.username, user.lowestTime);
  console.log(
    `Hi ${player.username}, Your record so far is - ${returnStringOfTime(
      player.lowestTime
    )} seconds`
  );
  return player;
}

async function updatePlayer(player) {
  await updatePlayerApi(player);
}

function isLowerTime(player) {
  console.log(player.lowestTime);
  console.log(player.average);
  if (player.lowestTime === 0 || player.average < player.lowestTime) {
    player.lowestTime = player.average;
    console.log(`\nGreat job, ${player.username}!`);
    console.log("Your time: " + returnStringOfTime(player.lowestTime));
    console.log("New record! Time updated.");
  }
  return player;
}

async function printFiveWinPlayers() {
  const data = await getFiveWinPlayersApi();
  const newData = data.map((d) => ({
    id: d.id,
    username: d.username,
    lowestTime: returnStringOfTime(d.lowestTime),
  }));
  console.table(newData);
}

async function printAllPlayers() {
  const data = await getPlayersApi();
  const newData = data.map((d) => ({
    id: d.id,
    username: d.username,
    lowestTime: returnStringOfTime(d.lowestTime),
  }));
  console.table(newData);
}

export {
  returnStringOfTime,
  getPlayerObj,
  isLowerTime,
  updatePlayer,
  printAllPlayers,
  printFiveWinPlayers,
};
