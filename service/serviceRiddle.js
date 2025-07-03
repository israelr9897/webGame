import rl from "readline-sync";
import { CreateRiddleInDB, readFile } from "../db/createRiddle.js";

async function serviceCreateRiddle(path){
  let allRiddels = await readFile(path);
  const ridlle = CreateRiddleObj();
  ridlle.id = allRiddels.length + 1;
  allRiddels.push(ridlle);
  await CreateRiddleInDB(path, allRiddels);
}

function checkLevelSelction() {
  const listOfLevels = ["easy", "medium", "hard"];
  console.log("Enter the riddle level (easy / medium / hard):  ");
  let choice = rl.question().toLowerCase();
  while (!listOfLevels.includes(choice)) {
    console.log("Invalid selection");
    choice = rl
      .question("Please select again easy / medium / hard\n")
      .toLowerCase();
  }
  return choice;
}

function CreateRiddleObj() {
  const riddleObj = {
    "id" : 0,
    "level": checkLevelSelction(),
    "name": rl.question("Enter name of the riddle: "),
    "timeLimit": Number(rl.question("Enter time limit of the riddle: ")),
    "taskDescription": rl.question("Enter the riddle: "),
    "hint": rl.question("Enter hint of the riddle: "),
    "correctAnswer": rl.question("Enter the answer of the riddle: "),
  };
  return riddleObj;
}

// async function addNewRiddleToRiddels(riddle) {
//   try {
//     let riddels = await readFile(path);
//     riddle.id = riddels.length + 1;
//     riddels.push(riddle);
//     return riddels;
//   } catch (error) {
//     console.log("addNewRiddleToRiddels error massege: " + error.massege);
//   }
// }
export {checkLevelSelction, serviceCreateRiddle };
