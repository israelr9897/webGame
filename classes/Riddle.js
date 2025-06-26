import rl from "readline-sync";

class Riddle{
    constructor(riddle){
        this.id = riddle.id;
        this.name = riddle.name;
        this.taskDescription = riddle.taskDescription;
        this.correctAnswer = riddle.correctAnswer;
    }
    ask = function (player){
        let answer = "";
        const startTime = Date.now();
        console.log("Riddle number - " + this.id);
        console.log("Level - " + this.name + "\n");
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
        const endTime = Date.now() ;
        player.recordTime(startTime, endTime);
    }
}

export{
    Riddle
}