import { Link } from "react-router";
import imgLogo from "../assets/logo.png";
import "../styles/welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <img className="img-welcome" src={imgLogo} alt="logo" />
      <Link to="/home" className="link-enter">Enter</Link>
    </div>
  );
}
