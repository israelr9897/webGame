import { returnStringOfTime } from "../service/servicePlayer.js";

class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  times = [];
  lowestTime = {};

  recordTime = function (start, end) {
    const gap = end - start;
    this.times.push({gap : gap, gapInString : returnStringOfTime(gap)});
  };

  showStats = function () {
    let total = 0;
    this.times.forEach((time) => {
      total += time.gap;
    });
    const average = total / this.times.length;
    this.lowestTime = {time : average, timeOfStr: returnStringOfTime(average)};
    console.log("total time: " + returnStringOfTime(total));
    console.log("average time: " + returnStringOfTime(average));
  };
}

export { Player };
