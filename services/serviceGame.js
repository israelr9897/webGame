import rl from "readline-sync";
import {
  checkLevelSelction,
  initObjRiddle,
} from "./serviceRiddle.js";
import { getPlayerObj, isLowerTime, updatePlayer } from "./servicePlayer.js";

async function stGame(user) {
  console.log("---------- Welcome to the game ----------\n");
  const player = getPlayerObj(user);
  return player;
}

async function game(player) {
  console.log("Hello ", player?.username || "");
  let level = checkLevelSelction();
  console.log("\nLet's get started.");

  while (true) {
    const listOfRiddles = await initObjRiddle(level);
    listOfRiddles.forEach((riddle) => riddle.startAsk(player));
    const choice = rl
      .question("Would you like to continue to another level? (y/n)")
      .toLowerCase();
    if (choice === "n") {
      break;
    }
    console.log("Choose difficulty: easy / medium / hard:\n");
    level = checkLevelSelction();
  }

  console.log("We're done, well done Aniat for all the riddels!\n");
}

async function endGame(player) {
  player.showStats();
  player = isLowerTime(player);
  await updatePlayer(player);
}

export { game, stGame, endGame};
