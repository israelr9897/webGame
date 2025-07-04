import rl from "readline-sync";
import { writeRiddleInDB, readFile } from "../db/ReadAndWrite.js";

async function serviceCreateRiddle(path){
  let allRiddels = await readFile(path);
  const ridlle = CreateRiddleObj();
  ridlle.id = allRiddels.length + 1;
  allRiddels.push(ridlle);
  await writeRiddleInDB(path, allRiddels);
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
function checkUpdateSelction() {
  const listOfFilds = ["level","name","timeLimit","hint","taskDescription","correctAnswer"];
  console.log("Enter the riddle chenge (level / name / timeLimit / hint / taskDescription / correctAnswer) :");
  let choice = rl.question().toLowerCase();
  while (!listOfFilds.includes(choice)) {
    console.log("Invalid selection");
    choice = rl.question("Please select again level / name / timeLimit / hint / taskDescription / correctAnswer\n").toLowerCase();
  }
  return choice;
}

function CreateRiddleObj() {
  const riddleObj = {
    "id" : 0,
    "level": checkLevelSelction(),
    "name": rl.question("Enter name of the riddle: "),
    "timeLimit": rl.question("Enter time limit of the riddle: "),
    "taskDescription": rl.question("Enter the riddle: "),
    "hint": rl.question("Enter hint of the riddle: "),
    "correctAnswer": rl.question("Enter the answer of the riddle: "),
  };
  return riddleObj;
}

async function PrintAllRiddles(path){
  console.log(await readFile(path));
}

function changeFromUserToRiddle(riddle){
  let isExit = false;
  while(!isExit){
    console.log("What do you want to change?");
    const input = checkUpdateSelction();
    const newContent = rl.question("Insert the new content: ");
    riddle[input] = newContent;
    const mroeChenge = rl.question("Do you want to make more changes? (y/n) ").toLowerCase();
    if(mroeChenge === "n"){
      isExit = true;
    }
  }
  console.log("Changes saved successfully");
}

async function updateRiddle(path) {
  let allRiddels = await readFile(path);
  console.log(allRiddels);
  const id = Number(rl.question("Enter the riddle ID. "));
  allRiddels.forEach(riddle => {
    if(riddle.id === id){
      console.log(riddle);
      riddle = changeFromUserToRiddle(riddle);
    }
  });
  writeRiddleInDB(path, allRiddels);
}

async function deleteRiddle(path) {
  let allRiddels = await readFile(path);
  console.log(allRiddels);
  const id = Number(rl.question("Enter the riddle ID. "));
  allRiddels.forEach(riddle => {
    if(riddle.id === id){
      console.log(riddle);
    }
  });
  const input = rl.question("Are you sure you want to delete? (y/n) : ").toLowerCase();
  if(input === "n"){
    console.log("Good by");
    return;
  }
  else if(input === "y"){
    allRiddels = allRiddels.filter(riddle => riddle.id !== id);
    writeRiddleInDB(path,allRiddels);
  }
}

export {checkLevelSelction, serviceCreateRiddle, PrintAllRiddles, updateRiddle, deleteRiddle };
