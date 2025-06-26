import rl from "readline-sync";

class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask = function (){
        console.log("Level - " + this.name);
        console.log(this.taskDescription);
        let answer = Number(rl.question("enter your answer")); 
        console.log(answer == this.orrectAnswer);

    }
}

export{
    Riddle
}