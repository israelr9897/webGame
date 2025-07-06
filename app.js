import rl from "readline-sync";
import { printMenu } from "./utilis/prints.js";
import { checkLevelSelction } from "./service/serviceRiddle.js";
import { initObjRiddle, welcome, MannegerGame } from "./service/serviceGame.js";
import { createPlayer } from "./db/CRUDOfPlayer.js";


async function flowGame() {
  const player = await welcome()
  let level = checkLevelSelction();
  console.log("\nLet's get started.");
  while (true) {
    const listOfRiddles = initObjRiddle(level);
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
  await createPlayer(player);
}

function startGame() {
  printMenu();
  const choice = rl.question("");
  MannegerGame(choice);
}

startGame();

export { flowGame };
