import { TOKEN } from "./playerApi.js";
const URL = "https://riddlesserver.onrender.com/riddles";

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