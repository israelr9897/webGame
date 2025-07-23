import rl from "readline-sync";
import { addPlayerApi, loginApi } from "../client/playerApi.js";
import { guest, User, admin } from "./GameManagement.js";
import { printLogin } from "../utilis/prints.js";

export async function welcome() {
  printLogin();
  await MenagerLogin();
}

export async function MenagerLogin() {
  const input = rl.question();
  switch (input) {
    case "1":
      const user = await login();
      if (user.role === "user") User(user);
      if (user.role === "admin") admin(user);
      break;

    case "2":
      await Registration();
      await login();
      break;

    case "3":
      guest();
      break;
  }
}

export async function login() {
  const user = {
    id: rl.question("\nEnter your ID: "),
    password: rl.question("Enter your password: "),
  };
  return await loginApi(user);
}

export async function Registration() {
  const newUser = {
    username: rl.question("Enter Your name: "),
    hash_password: rl.question("Enter password: "),
  };
  const id = await addPlayerApi(newUser);
  console.log("Your ID - ", id);
}

