import rl from "readline-sync";
import { getRiddels } from "./apiClient.js";
import {
  addRiddle,
  deleteRiddle,
  PrintAllRiddles,
  checkLevelSelction,
  updateRiddle,
  initObjRiddle,
} from "./serviceRiddle.js";
import {
  getPlayerObj,
  isLowerTime,
  updateDataToPlayer,
} from "./servicePlayer.js";
import { createPlayer } from "../db/DALplayer.js";

async function flowGame() {
  let player = await welcome();
  let level = checkLevelSelction();
  console.log("\nLet's get started.");
  while (true) {
    const listOfRiddles = initObjRiddle(level);
    console.log(listOfRiddles);
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
  player.showStats();
  player = isLowerTime(player);
  const players = await updateDataToPlayer(player);
  await createPlayer(players);
}

async function MannegerGame(choice) {
  await getRiddels();
  switch (choice) {
    case "1":
      flowGame();
      break;

    case "2":
      addRiddle();
      break;

    case "3":
      PrintAllRiddles();
      break;

    case "4":
      updateRiddle();
      break;

    case "5":
      deleteRiddle();
      break;
  }
}

async function welcome() {
  const name = "";
  console.log("---------- Welcome to the game ----------\n");
  const id = rl.question("Enter your ID, Or Enter 00 To register: ");
  const player = await getPlayerObj(id);
  return player;
}

export { initObjRiddle, MannegerGame, welcome };
