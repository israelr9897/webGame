import rl from "readline-sync";
import { Player } from "../classes/Player.js";
import { createPlayer , read} from "../db/CRUDOfPlayer.js";

function returnStringOfTime(time){
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${hours}:${minutes}:${seconds}`;
} 

async function getPlayerObj(id) {
    let player = await searchAndGetPlayerByID(id);
    if(!player){
        console.log("The userName isn't find");
        const name = rl.question("What your name?  ");
        player = new Player(0, name);
        createPlayer(player)
    }
    return player;
}

async function searchAndGetPlayerByID(id) {
    try {
        const players = await read();
        for (const player of players) {
            if(player.id === Number(id)){
                return new Player(player.id, player.name)
            }
        }
        return false;
    }catch(err){
        console.log("search and get player error massegs: " + err);
    }
}

export {returnStringOfTime, getPlayerObj}