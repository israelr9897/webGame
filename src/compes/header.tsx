import { Link } from "react-router";
import "../styles/header.css";
import home from "../assets/home.png";

export default function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/home" className="home-header">
        <img className="img-home" src={home} alt="home" />
          <p>Home</p>
        </Link>
        <div className="role-head">role</div>
      </div>
      <div className="theme">Theme</div>
    </div>
  );
}
