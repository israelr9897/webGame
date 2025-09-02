import { Link } from "react-router";
import imgLogo from "../assets/leaderboard-btn.png";

export default function BtnLeaderboard() {
  return (
    <>
      <Link to="/leaderboard" className="BtnLeaderboard btn-conetne-home">
        <img src={imgLogo} alt="" />
        <p>Leaderboard</p>
      </Link>
    </>
  );
}
