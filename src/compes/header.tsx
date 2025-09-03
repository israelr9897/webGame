import { Link } from "react-router";
import "../styles/header.css";
import home from "../assets/home.png";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function Header() {
  const user = useContext(userContext)
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/home" className="home-header">
        <img className="img-home" src={home} alt="home" />
          <p>Home</p>
        </Link>
        <div className="userName-head">{user?.userName}</div>
      </div>
      <div className="theme">Theme</div>
    </div>
  );
}
