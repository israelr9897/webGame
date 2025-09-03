import { Link } from "react-router";
import "../styles/PlayGame.css";
// import arrow from "../assets/arrow.png";
import arrow from "../assets/arrow2.png";
import home from "../assets/home.png";
import { useState } from "react";
import Game from "./Game";

export default function ContentPlayGame() {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  return !isPlay? (
    <div className="ContentPlayGame">
      <p>Ready to Play?</p>
      <Link className="btn-play-game" to="" onClick={() => setIsPlay(true)}>
        <p>Start Game</p>
        <img className="img-arrow" src={arrow} alt="" />
      </Link>
      <Link className="btn-play-game" to="/home">
        <p>Back to Home</p>
        <img className="img-home" src={home} alt="" />
      </Link>
    </div>
  ): <Game/>;
}
