import rl from "readline-sync";

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
  const listOfFilds = [
    "level",
    "name",
    "timeLimit",
    "hint",
    "taskDescription",
    "correctAnswer",
  ];
  console.log(
    "Enter the riddle chenge (level / name / timeLimit / hint / taskDescription / correctAnswer) :"
  );
  let choice = rl.question();
  while (!listOfFilds.includes(choice)) {
    console.log("Invalid selection");
    choice = rl.question(
      "Please select again level / name / timeLimit / hint / taskDescription / correctAnswer\n"
    );
  }
  return choice;
}

function CreateRiddleObj() {
  const riddleObj = {
    id: 0,
    level: checkLevelSelction(),
    name: rl.question("Enter name of the riddle: "),
    timeLimit: rl.question("Enter time limit of the riddle: "),
    taskDescription: rl.question("Enter the riddle: "),
    hint: rl.question("Enter hint of the riddle: "),
    correctAnswer: rl.question("Enter the answer of the riddle: "),
  };
  return riddleObj;
}

function changeFromUserToRiddle(riddle) {
  let isExit = false;
  while (!isExit) {
    console.log("What do you want to change?");
    const input = checkUpdateSelction();
    let newContent;
    if (input === "level") {
      newContent = checkLevelSelction();
    } else {
      newContent = rl.question("Insert the new content: ");
    }
    riddle[input] = newContent;
    const mroeChenge = rl
      .question("Do you want to make more changes? (y/n) ")
      .toLowerCase();
    if (mroeChenge === "n") {
      isExit = true;
    }
  }
  return riddle;
}

export {
  changeFromUserToRiddle,
  checkLevelSelction,
  checkUpdateSelction,
  CreateRiddleObj,
};
