import { login, Registration } from "../services/serviceLogin.js";

const URL = "http://127.0.0.1:3100/auth";
export let TOKEN;

export async function loginApi(player) {
  const response = await fetch(URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
  TOKEN = response.headers.get("authorization");
  const data = await response.json();
  console.log(data.msg);
  return data.Player;
}

export async function signupUserApi(newPlayer) {
  const response = await fetch(URL + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN,
    },
    body: JSON.stringify(newPlayer),
  });
  const data = await response.json();
  console.log(data);
  if (response.status === 406) return 0;
  return 1;
}
