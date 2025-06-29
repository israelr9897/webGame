import rl from "readline-sync";
import { Riddle } from "./classes/Riddle.js";
import { Player } from "./classes/Player.js";
import riddels from "./riddles/riddels.js";


function welcome(){
    console.log("---------- Welcome to the game ----------\n");
    const name = rl.question("What your name?  ");
    const player = new Player(name);
    flowGame(player);
}

function flowGame(player){
    console.log("\nLet's get started.");
    while(player.level <= 5){
        const riddle = initObjRiddle(player.level);
        riddle.steartAsk(player);
        player.level++;
    }
    console.log("We're done, well done Aniat for all the riddels!\n");
    player.showStats();
}

function initObjRiddle(level){
    switch(level){
        case 1:
            return new Riddle(riddels.rr1);
        
        case 2:
            return new Riddle(riddels.rr2);

        case 3:
            return new Riddle(riddels.rr3);

        case 4:
            return new Riddle(riddels.rr4);

        case 5:
            return new Riddle(riddels.rr5);
    }
}
welcome();
