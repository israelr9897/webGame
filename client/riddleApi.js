import { TOKEN } from "./playerApi.js";

const URL = "http://localhost:3100/riddles";

async function getRiddels() {
  const response = await fetch(URL, {
    headers: {
      authorization: TOKEN,
    },
  });
  return await response.json();
}

async function addRiddleApi(newRiddle) {
  const response = await fetch(URL + "/addRiddle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN,
    },
    body: JSON.stringify(newRiddle),
  });
  const data = await response.json();
  console.log(data);
}

async function updateRiddleApi(riddle) {
  try {
    const response = await fetch(URL + "/updateRiddle/" + riddle._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: TOKEN,
      },
      body: JSON.stringify(riddle),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteRiddleApi(idRiddle) {
  const response = await fetch(URL + "/deleteRiddle/" + idRiddle, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN,
    },
  });
  const data = await response.json();
  console.log(data);
}

export { getRiddels, addRiddleApi, deleteRiddleApi, updateRiddleApi };
