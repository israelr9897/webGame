import { useEffect, useState } from "react";
import { getRiddelsApi } from "./API/riddleApi";
import "../styles/riddles.css";

type RidlleObj = {
  correctAnswer: string;
  hint: string;
  level: string;
  name: string;
  taskDescription: string;
  timeLimit: string;
  _id: string;
};

export default function Riddles() {
  const [data, setData] = useState<Array<RidlleObj>>();
  useEffect(() => {
    const getData = async () => {
      setData(await getRiddelsApi());
    };
    getData();
  }, []);
  return (
    <div className="table">
      <tr className="head-table">
        <th>ID</th>
        <th>Name</th>
        <th>Question</th>
        <th>Answer</th>
        <th>Hint</th>
        <th>Level</th>
        <th>Time limit</th>
      </tr>
      {
        data?.map((riddle) => (
          <tr className="content-table">
            {Object.keys(riddle).map((key) => (
              <th>{riddle[key]}</th>
            ))}
          </tr>
        ))
      }
    </div>
  );
}
