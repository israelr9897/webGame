import fs from "fs/promises";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, './players.txt');


async function createPlayer(players) {
    try{
        fs.writeFile(filePath, JSON.stringify(players), (err)=>{})
    }catch(err){
        console.log("create player error massegs: " + err);
        return null;
    }
}

async function readFileToPlayers(){
    try{
        const players = await fs.readFile(filePath, "utf-8");
        return JSON.parse(players);
    }catch(err){
        console.log("read players error massegs: " + err);
        return null;
    }
}

export { createPlayer, readFileToPlayers}