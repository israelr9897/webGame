import { returnStringOfTime } from "../serviceToServer/servicePlayer.js";

class Player {
  times = [];
  lowestTime;
  average = 0;
  
  constructor(id, name, lowestTime) {
    this.id = id;
    this.name = name;
    this.lowestTime = lowestTime;
  }


  recordTime = function (start, end) {
    const gap = end - start;
    this.times.push({gap : gap, gapInString : returnStringOfTime(gap)});
  };

  showStats = function () {
    let total = 0;
    this.times.forEach((time) => {
      total += time.gap;
    });
    this.average = total / this.times.length;
    console.log("total time: " + returnStringOfTime(total));
    console.log("average time: " + returnStringOfTime(this.average));
  };
}

export { Player };
