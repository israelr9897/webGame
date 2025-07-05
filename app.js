import rl from "readline-sync";
import { Riddle } from "./classes/Riddle.js";
import { Player } from "./classes/Player.js";
import riddles from "./riddles/riddels.js";
import { printMenu } from "./utilis/prints.js";
import { checkLevelSelction } from "./service/serviceRiddle.js";
import { MannegerGame } from "./service/serviceGame.js";

function welcome() {
  console.log("---------- Welcome to the game ----------\n");
  const name = rl.question("What your name?  ");
  const level = checkLevelSelction();
  const player = new Player(name, level);
  flowGame(player);
}

function flowGame(player) {
  console.log("\nLet's get started.");
  while (true) {
    const listOfRiddles = initObjRiddle(player.level);
    listOfRiddles.forEach((riddle) => riddle.startAsk(player));
    const choice = rl
      .question("Would you like to continue to another level? (y/n)")
      .toLowerCase();
    if (choice === "n") {
      break;
    }
    console.log("Choose difficulty: easy / medium / hard:\n");
    player.level = checkLevelSelction();
  }
  console.log("We're done, well done Aniat for all the riddels!\n");
  player.showStats();
}

function initObjRiddle(level) {
  let listOfRiddles = [];
  switch (level) {
    case "easy":
      listOfRiddles = riddles
        .map((riddle) => {
          if (riddle.level === "easy") {
            return new Riddle(riddle);
          }
        })
        .filter((ridlle) => ridlle);
      return listOfRiddles;

    case "medium":
      listOfRiddles = riddles
        .map((riddle) => {
          if (riddle.level === "medium") {
            return new Riddle(riddle);
          }
        })
        .filter((ridlle) => ridlle);
      return listOfRiddles;

    case "hard":
      listOfRiddles = riddles
        .map((riddle) => {
          if (riddle.level === "hard") {
            return new Riddle(riddle);
          }
        })
        .filter((ridlle) => ridlle);
      return listOfRiddles;
  }
}

function startGame() {
  printMenu();
  const choice = rl.question("");
  MannegerGame(choice);
}

startGame();

export { welcome };
