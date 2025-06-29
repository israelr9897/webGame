import rl from "readline-sync";
import { Riddle } from "./classes/Riddle.js";
import { Player } from "./classes/Player.js";
import riddles from "./riddles/riddels.js";


function welcome(){
    console.log("---------- Welcome to the game ----------\n");
    const name = rl.question("What your name?  ");
    const level = rl.question("Choose difficulty: easy / medium / hard:")
    const player = new Player(name, level);
    flowGame(player);
}

function flowGame(player){    
    console.log("\nLet's get started.");
    while(true){
        const listOfRiddles = initObjRiddle(player.level);
        listOfRiddles.forEach(riddle => riddle.startAsk(player));
        const choice = rl.question("Would you like to continue to another level? (y/n)").toLowerCase();
        if(choice === "n"){
            break;
        }
        player.level = rl.question("Choose difficulty: easy / medium / hard:")
    }
    console.log("We're done, well done Aniat for all the riddels!\n");
    player.showStats();
}

function initObjRiddle(level){
    switch(level){
        case "easy":
            return riddles.map(riddle => {if(riddle.level === "easy") {return new Riddle(riddle)}}).filter(ridlle => ridlle);
            
        case "medium":
            return riddles.map(riddle => {if(riddle.level === "medium") {return new Riddle(riddle)}}).filter(ridlle => ridlle);
            
        case "hard":
        return riddles.map(riddle => {if(riddle.level === "hard") {return new Riddle(riddle)}}).filter(ridlle => ridlle);
    }
}
welcome();
