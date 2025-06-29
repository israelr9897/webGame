import rl from "readline-sync";

class Riddle{
    constructor(riddle){
        this.id = riddle.id;
        this.level = riddle.level;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
    }
    ask = function (player){
        let answer = "";
        console.log("Riddle number - " + this.id);
        console.log("Level - " + this.level + "\n");
        while(!(answer === this.correctAnswer)){
            console.log(this.taskDescription);
            answer = rl.question("Enter your answer - "); 
            if(answer === this.correctAnswer){
                console.log(`\nWell done ${player.name}, correct answer!!!\n`);
            }
            else{
                console.log("\nIncorrect answer, please try again.\n");
            }
        }
    }
    startAsk = function (player){
        const startTime = Date.now();
        this.ask(player);
        const endTime = Date.now() ;
        player.recordTime(startTime, endTime);
    }
}

export{
    Riddle
}