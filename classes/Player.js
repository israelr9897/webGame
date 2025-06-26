import { question } from "readline-sync";

function returnStringOfTime(time){
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${hours}:${minutes}:${seconds}`;
} 

class Player{
    level = 1;
    times = [];
    constructor(name){
        this.name = name;
    }
    recordTime = function(start, end){
        const gap = end - start;
        this.times.push({gap : gap, gapInString : returnStringOfTime(gap)});
    }
    showStats = function(){
        let total = 0;
        this.times.forEach(time => {
            total += time.gap;
        });
        const average = total / this.times.length;
        console.log("total time: " + returnStringOfTime(total));
        console.log("average time: " + returnStringOfTime(average));
    }
}

export{
    Player
}