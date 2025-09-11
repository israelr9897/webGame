import { useContext, useEffect, useState } from "react";
import { getRiddelsApi } from "./API/riddleApi";
import "../styles/riddles.css";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";
import { userContext } from "../context/userContext";
import AddRiddle from "./AddRiddle";

type RidlleObj = {
  correctAnswer: string;
  hint: string;
  level: string;
  name: string;
  taskDescription: string;
  timeLimit: string;
  _id: string;
};

type Key =
  | "correctAnswer"
  | "hint"
  | "level"
  | "name"
  | "taskDescription"
  | "timeLimit"
  | "_id";

export default function Riddles() {
  const user = useContext(userContext);
  const role = user?.user.role;
  const [data, setData] = useState<Array<RidlleObj>>();
  const [add, setAdd] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      setData(await getRiddelsApi());
    };
    getData();
  }, []);
  console.log(add)
  return (
    data && (
      <div className="table">
        <tr className="head-table">
          {/* <th>ID</th> */}
          <th>Level</th>
          <th>Name</th>
          <th>Time limit</th>
          <th>Hint</th>
          <th>Question</th>
          <th>Answer</th>
          {role === "admin" && <th></th>}{" "}
        </tr>
        {data?.map((riddle) => (
          <tr className="content-table">
            {Object.keys(riddle).map((key) => (
              <th>{riddle[key as Key]}</th>
            ))}
            {role === "admin" && (
              <div className="u-d">
                <img className="icon" src={editIcon} />
                <img className="icon" src={deleteIcon} />
              </div>
            )}
          </tr>
        ))}
        <div className="btn">
          <div className="btn-add" onClick={() => setAdd(true)}>Add Riddle</div>
        </div>
        {add && <div>
          <AddRiddle/>
          </div>}
      </div>
    )
  );
}
