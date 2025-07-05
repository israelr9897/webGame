import fs from "fs/promises";

async function readFile(path) {
  try {
    const riddles = await fs.readFile(path, "utf-8");
    return JSON.parse(riddles);
  } catch (err) {
    console.log("read file error massege: " + err.message);
  }
}

async function writeRiddleInDB(path, data) {
  try {
    fs.writeFile(path, JSON.stringify(data), "utf-8", (err) => {});
    console.log("added riddle to db");
  } catch (err) {
    console.log("CreateRiddle error massege: " + err);
  }
}

export { readFile, writeRiddleInDB };
