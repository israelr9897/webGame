import { useEffect, useState } from "react";
import { getRiddelsApi } from "./API/riddleApi";
import "../styles/game.css"

type RidlleObj = {
  correctAnswer: string;
  hint: string;
  level: string;
  name: string;
  taskDescription: string;
  timeLimit: string;
  _id: string;
};

export default function Game() {

  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState<Array<RidlleObj>>();
  useEffect(() => {
    async function getData() {
      setData(await getRiddelsApi());
    }
    getData();
  }, []);
  return (
    <div className="content-ridlle">
      <h1 className="question">{data![index].taskDescription}</h1>
      <input className="inp-answer" type="text" placeholder="Type your answer here..."/>
      <div className="btn-answer"></div>
    </div>
  );
}
