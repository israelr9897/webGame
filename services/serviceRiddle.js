import rl from "readline-sync";
import { Riddle } from "../classes/Riddle.js";
import {
  addRiddleApi,
  deleteRiddleApi,
  getRiddelsApi,
  updateRiddleApi,
} from "../client/riddleApi.js";
import {
  changeFromUserToRiddle,
  checkLevelSelction,
  CreateRiddleObj,
} from "../utilis/functions.js";

async function PrintAllRiddles() {
  const riddles = await getRiddelsApi();
  console.table(riddles);
}

async function addRiddle() {
  const newRiddle = CreateRiddleObj();
  await addRiddleApi(newRiddle);
}

async function updateRiddle() {
  const riddles = await getRiddelsApi();
  console.log(riddles);
  const id = rl.question("Enter the riddle ID. ");
  let riddle = riddles.find((r) => r._id === id);
  if (riddle) {
    const newRiddle = changeFromUserToRiddle(riddle);
    await updateRiddleApi(newRiddle);
    return;
  }
  console.log("The ID you selected does not exist.");
}

async function deleteRiddle() {
  const riddles = await getRiddelsApi();
  console.log(riddles);
  const id = rl.question("Enter the riddle ID. ");
  riddles.forEach((riddle) => {
    if (riddle._id === id) {
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
    await deleteRiddleApi(id);
  }
}

async function initObjRiddle(level) {
  const riddles = await getRiddelsApi();
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

export {
  addRiddle,
  checkLevelSelction,
  PrintAllRiddles,
  updateRiddle,
  deleteRiddle,
  initObjRiddle,
  CreateRiddleObj,
};
