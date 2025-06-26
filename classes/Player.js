import { question } from "readline-sync";

function returnStringOfTime(time){
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${hours}:${minutes}:${seconds}`;
} 

class Player{
    times = [];
    constructor(name){
        this.name = name;
    }
    recordTime = function(start, end){
        const gap = end - start;
        console.log(returnStringOfTime(gap));
        this.times.push({gap : gap, gapInString : returnStringOfTime(gap)});
        console.log(this.times);
    }
    showStats = function(){
        let total = 0;
        this.times.forEach(time => {
            total += time.gap;
        });
        const average = total / this.times.length;
        console.log("total: " + total);
        console.log("average: " + average);
    }
}

const myPlayer = new Player("israel");
const st = Date.now();
question("dfg");
const end = Date.now()
myPlayer.recordTime(st , end);
myPlayer.showStats();

export{
    Player
}