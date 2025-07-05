import { question } from "readline-sync";

function returnStringOfTime(time){
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${hours}:${minutes}:${seconds}`;
} 

class Player{
    times = [];
    constructor(name, level){
        this.name = name
        this.level = level;
    }
    recordTime = function(start, end){
        this.times.push(end - start);
    }
    showStats = function(){
        let total = 0;
        this.times.forEach(time => {
            total += time;
        });
        const average = total / this.times.length;
        console.log("total time: " + returnStringOfTime(total));
        console.log("average time: " + returnStringOfTime(average));
    }
}

export{
    Player
}

