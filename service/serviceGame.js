import rl from "readline-sync";
import { flowGame } from "../app.js";
import {
  ALLRIDDLES,
  deleteRiddle,
  PrintAllRiddles,
  serviceCreateRiddle,
  updateRiddle,
} from "./serviceRiddle.js";
import { getPlayerObj } from "./servicePlayer.js";
import { Riddle } from "../classes/Riddle.js";


function initObjRiddle(level) {
  let listOfRiddles = [];
  // console.log(ALLRIDDLES);
  switch (level) {
    case "easy":
      listOfRiddles = ALLRIDDLES.map((riddle) => {
        if (riddle.level === "easy") {
          return new Riddle(riddle);
        }
      }).filter((ridlle) => ridlle);
      return listOfRiddles;

    case "medium":
      listOfRiddles = ALLRIDDLES.map((riddle) => {
        if (riddle.level === "medium") {
          return new Riddle(riddle);
        }
      }).filter((ridlle) => ridlle);
      return listOfRiddles;

    case "hard":
      listOfRiddles = ALLRIDDLES.map((riddle) => {
        if (riddle.level === "hard") {
          return new Riddle(riddle);
        }
      }).filter((ridlle) => ridlle);
      return listOfRiddles;
  }
}

function MannegerGame(choice) {
  switch (choice) {
    case "1":
      flowGame();
      break;

    case "2":
      serviceCreateRiddle();
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
