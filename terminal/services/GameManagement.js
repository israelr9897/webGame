import {
  addRiddle,
  deleteRiddle,
  PrintAllRiddles,
  updateRiddle,
} from "./serviceRiddle.js";
import rl from "readline-sync";
import { game, stGame, endGame } from "./serviceGame.js";
import { printMenuAdmin, printMenuUser } from "../utilis/prints.js";
import { Player } from "../classes/Player.js";
import { getPlayersApi } from "../client/playerApi.js";
import { printAllPlayers, printFiveWinPlayers } from "./servicePlayer.js";

export async function guest() {
  console.log("---------- Welcome to the game ----------\n");
  const name = rl.question("Enter your name: ");
  await game(new Player(0, name));
  console.log("Good By");
}

export async function User(user) {
  while (true) {
    printMenuUser();
    const choice = rl.question("");
    switch (choice) {
      case "1":
        const player = await stGame(user);
        await game(player);
        await endGame(player);
        break;

      case "2":
        await addRiddle();
        break;

      case "3":
        await PrintAllRiddles();
        break;

      case "0":
        console.log("GoodBy");
        return;
    }
  }
}

export async function admin(admin) {
  while (true) {
    printMenuAdmin();
    const choice = rl.question("");
    switch (choice) {
      case "1":
        const player = await stGame(admin);
        await game(player);
        await endGame(player);
        break;

      case "2":
        await addRiddle();
        break;

      case "3":
        await PrintAllRiddles();
        break;

      case "4":
        await updateRiddle();
        break;

      case "5":
        await deleteRiddle();
        break;

      case "6":
        await printAllPlayers()
        break;

      case "7":
        await printFiveWinPlayers();
        break;

      case "0":
        console.log("GoodBy");
        return;
    }
  }
}
