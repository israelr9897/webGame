import rl from "readline-sync";
import { guest, User, admin } from "./GameManagement.js";
import { printLogin } from "../utilis/prints.js";
import { signupUserApi, loginApi } from "../client/signApi.js";

export async function welcome() {
  printLogin();
  await MenagerLogin();
}

export async function MenagerLogin() {
  const input = rl.question();
  switch (input) {
    case "1":
      await login();
      break;

    case "2":
      await Registration();
      break;

    case "3":
      guest();
      break;
  }
}

export async function login() {
  try {
    const usernsmeAndPass = {
      username: rl.question("\nEnter your userName: "),
      password: rl.question("Enter your password: ", { hideEchoBack: true }),
    };
    const user = await loginApi(usernsmeAndPass);
    if (user) {
      if (user.role === "user") await User(user);
      if (user.role === "admin") await admin(user);
    } else {
      console.log("Incorrect ID and/or password.");
      await login();
    }
  } catch (error) {
    console.log("login massage error: ", error);
  }
}

export async function Registration() {
  try {
    const newUser = {
      username: rl.question("Enter Your name: "),
      hash_password: rl.question("Enter password: "),
    };
    const isTrue = await signupUserApi(newUser);
    if (!isTrue) {
      Registration();
    } else {
      await login();
    }
  } catch (error) {
    console.log("Registration massage error: ", error);
  }
}
