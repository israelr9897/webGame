function printMenuAdmin() {
  console.log("\nWhat do you want to do?");
  console.log("1. Play the game");
  console.log("2. Create a new riddle");
  console.log("3. Read all riddles");
  console.log("4. Update an existing riddle");
  console.log("5. Delete a riddle");
  console.log("6. View leaderboard");
  console.log("0. Exit");
}
function printMenuUser() {
  console.log("\nWhat do you want to do?");
  console.log("1. Play the game");
  console.log("2. Create a new riddle");
  console.log("3. Read all riddles");
  console.log("0. Exit");
}

function printLogin() {
  console.log("\n--- Wolcome ---");
  console.log("1. Registered? login ");
  console.log("2. Register ");
  console.log("3. Play as guest ");
}

export { printMenuAdmin, printLogin, printMenuUser};
