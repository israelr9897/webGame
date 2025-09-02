import { Link } from "react-router";
import imgLogo from "../assets/play-btn.png";

export default function BtnPlay() {
  return (
    <>
      <Link to="/play-game" className="BtnPlay btn-conetne-home">
        <img src={imgLogo} alt="" />
        <p>Play Game</p>
      </Link>
    </>
  );
}
