import rl from "readline-sync";

class Riddle{
    totalTime;
    constructor(riddle){
        this.id = riddle.id;
        this.level = riddle.level;
        this.timeLimit = riddle.timeLimit,
        this.hint = riddle.hint;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
    }
    ask = function (player){
        let answer = "";
        console.log("Riddle number - " + this.id);
        console.log("Level - " + this.level + "\n");
        let isHint = 0;
        while(!(answer === this.correctAnswer)){
            console.log(this.taskDescription);
            isHint = this.printHint();
            answer = rl.question("Enter your answer - "); 
            if(answer === this.correctAnswer){
                console.log(`\nWell done ${player.name}, correct answer!!!\n`);
            }
            else{
                console.log("\nIncorrect answer, please try again.\n");
            }
        }
        return isHint;
    }
    startAsk = function (player){
        const startTime = Date.now();
        const isHint = this.ask(player);
        let endTime = Date.now() ;
        if((endTime - startTime) / 1000 > this.timeLimit){
            console.log("Too slow! 5 seconds penalty applied.");
            endTime += 5000;
        }
        if(isHint){
            endTime += 10000;
        }
        player.recordTime(startTime, endTime);
    }
    printHint(){
        let choice = " ";
        do{
            choice = rl.question("Do you want a hint? (y/n) ").toLowerCase();
        }while(choice !== "y" && choice !== "n")
        if(choice === "y"){
            console.log(this.hint);
            return 1;
        }
        return 0;
    }
}

export{
    Riddle
}