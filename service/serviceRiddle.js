import rl from "readline-sync";
import { writeRiddleInDB, readFileToRiddles } from "../db/DALriddles.js";

let ALLRIDDLES = [];

async function createAllReddles() {
  ALLRIDDLES = await readFileToRiddles();
}

async function serviceCreateRiddle(){
  const ridlle = CreateRiddleObj();
  ridlle.id = ALLRIDDLES.length + 1;
  ALLRIDDLES.push(ridlle);
  await writeRiddleInDB(ALLRIDDLES);
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

async function PrintAllRiddles(){
  console.log(ALLRIDDLES);
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

async function updateRiddle() {
  console.log(ALLRIDDLES);
  const id = Number(rl.question("Enter the riddle ID. "));
  ALLRIDDLES.forEach(riddle => {
    if(riddle.id === id){
      console.log(riddle);
      riddle = changeFromUserToRiddle(riddle);
    }
  });
  writeRiddleInDB(ALLRIDDLES);
}

async function deleteRiddle() {
  console.log(ALLRIDDLES);
  const id = Number(rl.question("Enter the riddle ID. "));
  ALLRIDDLES.forEach(riddle => {
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
    ALLRIDDLES = ALLRIDDLES.filter(riddle => riddle.id !== id);
    writeRiddleInDB(ALLRIDDLES);
  }
}

export {createAllReddles, ALLRIDDLES, checkLevelSelction, serviceCreateRiddle, PrintAllRiddles, updateRiddle, deleteRiddle};
