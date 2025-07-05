import { welcome } from "../app.js";
import { PrintAllRiddles, serviceCreateRiddle, updateRiddle } from "./serviceRiddle.js";

const path = "../db/riddles.txt";

function MannegerGame(choice) {
  switch (choice) {
    case "1":
      welcome();
      break;

    case "2":
      serviceCreateRiddle(path);
      break;

    case "3":
      PrintAllRiddles(path);
      break;

    case "4":
      updateRiddle(path);
      break;
  }
}

export { MannegerGame}