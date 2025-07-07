import rl from "readline-sync";
import { printMenu } from "./utilis/prints.js";
import { createAllReddles, checkLevelSelction, ALLRIDDLES } from "./service/serviceRiddle.js";
import { initObjRiddle, welcome, MannegerGame } from "./service/serviceGame.js";
import { isLowerTime, updateDataToPlayer} from "./service/servicePlayer.js";
import { createPlayer } from "./db/DALplayer.js";


async function flowGame() {
  let player = await welcome()
  await createAllReddles();
  let level = checkLevelSelction();
  console.log("\nLet's get started.");
  while (true) {
    const listOfRiddles = initObjRiddle(level);
    console.log( listOfRiddles);
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

function startGame() {
  printMenu();
  const choice = rl.question("");
  MannegerGame(choice);
}

startGame();

export { flowGame };
