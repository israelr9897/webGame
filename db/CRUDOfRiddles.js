import fs from "fs/promises";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, './players.txt');

async function readFile() {
  try {
    const riddles = await fs.readFile(filePath, "utf-8");
    return JSON.parse(riddles);
  } catch (err) {
    console.log("read file error massege: " + err.message);
  }
}

async function writeRiddleInDB(data) {
  try {
    fs.writeFile(filePath, JSON.stringify(data), "utf-8", (err) => {});
    console.log("added riddle to db");
  } catch (err) {
    console.log("CreateRiddle error massege: " + err);
  }
}

export { readFile, writeRiddleInDB };
