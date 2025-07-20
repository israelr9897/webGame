import rl from "readline-sync";
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
import { printMenu } from "../utilis/prints.js";

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

async function MannegerGame() {
  while (true) {
    printMenu();
    const choice = rl.question("");
    switch (choice) {
      case "1":
        flowGame();
        break;

      case "2":
        await addRiddle();
        break;

      case "3":
        await PrintAllRiddles();
        break;

      case "4":
        await updateRiddle();
        break;

      case "5":
        await deleteRiddle();
        break;

      case "0":
        console.log("GoodBy");
        return;
    }
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
