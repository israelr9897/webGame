import { useEffect, useState } from "react";
import { getRiddelsApi } from "./API/riddleApi";
import "../styles/game.css";

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
  const handleInputClick = () => {
    if (answer === data![index].correctAnswer) {
      if (index + 1 === data?.length) {
        setMsg("You have successfully completed all the questions.")
        return;
      }
      setIndex((prev) => prev + 1);
      setMsg("");
      setAnswer("");
    } else setMsg("Incorrect answer, Try again!");
  };
  const [index, setIndex] = useState<number>(0);
  const [msg, setMsg] = useState<string>();
  const [answer, setAnswer] = useState<string>();
  const [data, setData] = useState<Array<RidlleObj>>();
  useEffect(() => {
    const getData = async () => {
      setData(await getRiddelsApi());
    };
    getData();
  }, []);
  return (
    data && (
      <div className="content-ridlle">
        <h1 className="question">{data[index].taskDescription}</h1>
        <input
          className="inp-answer"
          type="text"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <div className="btn-answer" onClick={handleInputClick}>
          Submit answer
        </div>
        {msg && <p className="answer-msg">{msg}</p>}
      </div>
    )
  );
}
