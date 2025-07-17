const URL = "http://localhost:3100/riddles";
let ALLRIDDLES = [];

async function getRiddels() {
  const response = await fetch(URL);
  ALLRIDDLES = await response.json();
}

async function addRiddleApi(newRiddle) {
  const response = await fetch(URL + "/addRiddle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRiddle),
  });
  const data = await response.json();
  console.log(data);
}

async function updateRiddleApi(riddle) {
  try {
    const response = await fetch(URL + "/updateRiddle", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
  const response = await fetch(URL + "/deleteRiddle", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: idRiddle }),
  });
  const data = await response.json();
  console.log(data);
}

export {
  ALLRIDDLES,
  getRiddels,
  addRiddleApi,
  deleteRiddleApi,
  updateRiddleApi,
};
