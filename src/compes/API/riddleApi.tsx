import { TOKEN } from "./playerApi.js";
const URL = "http://127.0.0.1:3100/riddles";

export async function getRiddelsApi() {
  const response = await fetch(URL, {
    headers: {
      authorization: TOKEN,
      password: "9897"
    },
  });
  const data = await response.json();
  return data;
}