import { welcome } from "../app.js";
import { serviceCreateRiddle } from "./serviceRiddle.js";

function MannegerGame(choice) {
  switch (choice) {
    case "1":
      welcome();
      break;

    case "2":
      serviceCreateRiddle("../db/riddels.txt");
      break;
  }
}

export { MannegerGame}