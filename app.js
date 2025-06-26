import { Riddle } from "./classes/Riddle.js";
import r1 from "./riddles/r1.js";

const rid = new Riddle(r1.id, r1.name, r1.taskDescription, r1.correctAnswer);
rid.ask();