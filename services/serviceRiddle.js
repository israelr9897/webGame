import rl from "readline-sync";
import { Riddle } from "../classes/Riddle.js";
import {
  ALLRIDDLES,
  addRiddleApi,
  deleteRiddleApi,
  pdateRiddleApi,
} from "./apiClient.js";
import {
  changeFromUserToRiddle,
  checkLevelSelction,
  checkUpdateSelction,
  CreateRiddleObj,
} from "./utilis/functions.js";

function addRiddleApi() {
  const newRiddle = CreateRiddleObj();
  addRiddleApi(newRiddle);
}

async function updateRiddle() {
  console.log(ALLRIDDLES);
  const id = Number(rl.question("Enter the riddle ID. "));
  let riddle = ALLRIDDLES.find((r) => r.id === id);
  if (riddle) {
    const newRiddle = changeFromUserToRiddle(riddle);
    Object.assign(riddle, newRiddle);
    await updateRiddleApi(riddle);
    return;
  }
  console.log("The ID you selected does not exist.");
}

async function deleteRiddle() {
  console.log(ALLRIDDLES);
  const id = Number(rl.question("Enter the riddle ID. "));
  ALLRIDDLES.forEach((riddle) => {
    if (riddle.id === id) {
      console.log(riddle);
    }
  });
  const input = rl
    .question("Are you sure you want to delete? (y/n) : ")
    .toLowerCase();
  if (input === "n") {
    console.log("Good by");
    return;
  } else if (input === "y") {
    ALLRIDDLES = ALLRIDDLES.filter((riddle) => riddle.id !== id);
    deleteRiddleApi(id);
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

export {
  addRiddleApi as addRiddle,
  ALLRIDDLES,
  checkLevelSelction,
  PrintAllRiddles,
  updateRiddle,
  deleteRiddle,
  initObjRiddle,
  CreateRiddleObj,
};
