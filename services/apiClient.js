const URL = "http://localhost:3100";
let ALLRIDDLES = [];

async function getRiddels() {
  const response = await fetch(URL + "/riddles");
  ALLRIDDLES = await response.json();
}

async function addRiddleApi(newRiddle) {
  const response = await fetch(URL + "/riddles/addRiddle", {
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
    const response = await fetch(URL + "/riddles/updateRiddle", {
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
  const response = await fetch(URL + "/riddles/deleteRiddle", {
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
