import { Link, useNavigate } from "react-router";
import "../styles/header.css";
import home from "../assets/home.png";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function Header() {
  const user = useContext(userContext);
  const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate("/riddles")
  // }
  return (
    <div className="header">
      <div className="left-header">
        <Link to="/home" className="home-header">
          <img className="img-home" src={home} alt="home" />
          <p>Home</p>
        </Link>
        <div className="userName-head">{user?.user.username}</div>
      </div>
      <div className="right-header">
        {user?.user.role && <div className="all-riddles" onClick={() => navigate("/riddles")}>All-Riddles</div>}
        <div className="theme">Theme</div>
      </div>
    </div>
  );
}
