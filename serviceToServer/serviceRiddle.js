import rl from "readline-sync";
import { writeRiddleInDB, readFileToRiddles } from "../db/DALriddles.js";
import {Riddle} from "../classes/Riddle.js";

const URL = "http://localhost:3100";
let ALLRIDDLES = [];

async function getRiddels() {
  ALLRIDDLES = ((await fetch(URL + "/riddle")).json());
  console.log(await ALLRIDDLES);
}

// async function serviceCreateRiddle(){
//   const ridlle = CreateRiddleObj();
//   ridlle.id = ALLRIDDLES.length + 1;
//   ALLRIDDLES.push(ridlle);
//   await writeRiddleInDB(ALLRIDDLES);
// }

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
  const riddles = ((await fetch(URL + "/riddle")).json());
  console.log(await riddles);
}

async function addRiddle(newRiddle) {
  const da = ((await fetch(URL + "/riddles/addRiddle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify(newRiddle),
    })).text());
    console.log(await da);
}

async function updateRiddleToServer(riddle) {
  fetch(URL + "/riddles/updateRiddle")
  const da = ((await fetch(URL + "/riddles/updateRiddle", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify(riddle),
  })).text());
  console.log(await da);
}
// addRiddle(CreateRiddleObj());
// PrintAllRiddles()
updateRiddle();
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
  return riddle;
}

async function updateRiddle() {
  await getRiddels()
  const id = Number(rl.question("Enter the riddle ID. "));
  ALLRIDDLES.forEach(riddle => {
    if(riddle.id === id){
      console.log(riddle);
      riddle = changeFromUserToRiddle(riddle);
      updateRiddleToServer(riddle);
    }
  });
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

function initObjRiddle(level) {
  let listOfRiddles = [];
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


export {getRiddels, ALLRIDDLES, checkLevelSelction, PrintAllRiddles, updateRiddle, deleteRiddle, initObjRiddle};
