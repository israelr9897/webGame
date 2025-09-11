import "../styles/home.css";
import imgLogo from "../assets/text.png";
import BtnPlay from "./BtnPlay";
import BtnLogin from "./BtnLogin";
import BtnLeaderboard from "./BtnLeaderboard";

export default function ContentHome() {
  return (
    <div className="Content-home">
      <div className="text">
        <img className="logo-home" src={imgLogo}></img>
        <p>Challenge your brain with math riddles</p>
      </div>
      <div className="buttons">
        <BtnPlay />
        <BtnLogin />
        <BtnLeaderboard />
      </div>
    </div>
  );
}
