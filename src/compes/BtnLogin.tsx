import { Link } from "react-router";
import imgLogo from "../assets/login-btn.png";

export default function BtnLogin() {
  return (
    <>
      <Link to="/login" className="BtnLogin btn-conetne-home">
        <img src={imgLogo} alt="" />
        <p>Login</p>
      </Link>
    </>
  );
}
