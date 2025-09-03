const URL = "http://127.0.0.1:3100/auth";
export let TOKEN: string;

type Player = {
  username: string;
  password: string;
};
type NewPlayer = {
  username: string;
  hash_password: string;
};

export async function loginApi(player: Player) {
  console.log("apl loginApi");
  const response = await fetch(URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
  TOKEN = response.headers.get("authorization")!;
  const data = await response.json();
  console.log("data msg: ", data.msg);
  console.log("data: ", data);
  if (!data.Player) {
    return false;
  }
  return true;
}

export async function signupUserApi(newPlayer: NewPlayer) {
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
  if (response.status === 406) return false;
  return true;
}