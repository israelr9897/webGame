import "../styles/home.css";
import imgLogo from "../assets/logo.png";
import BtnPlay from "./BtnPlay";
import BtnLogin from "./BtnLogin";
import BtnLeaderboard from "./BtnLeaderboard";

export default function ContentHome() {
  return (
    <div className="Content-home">
      <img className="logo-home" src={imgLogo}></img>
      <div className="buttons">
      <BtnPlay />
      <BtnLogin />
      <BtnLeaderboard />
      </div>
    </div>
  );
}
