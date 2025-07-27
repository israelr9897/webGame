import { TOKEN } from "./signApi.js";

const URL = "http://127.0.0.1:3100/riddles";

async function getRiddelsApi() {
  const response = await fetch(URL, {
    headers: {
      authorization: TOKEN,
      password: "9897"
    },
  });
  const data = await response.json();
  return data;
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
  try {
    const response = await fetch(URL + "/deleteRiddle/" + idRiddle, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: TOKEN,
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("delete ", error);
  }
}

export { getRiddelsApi, addRiddleApi, deleteRiddleApi, updateRiddleApi };
