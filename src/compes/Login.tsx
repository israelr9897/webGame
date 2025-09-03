import { Link } from "react-router";
import "../styles/login.css";
import { useState } from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="toRregister">
        <p>First time here?</p>
        <a href="">Create an Account.</a>
      </div>
      <div className="signIn">
        <h1>Sign In</h1>
        <label htmlFor="inp-user-name">Enter User Name</label>
        <input className="inp-user-name" id="inp-user-name" type="text" />
        <label htmlFor="inp-password">Enter Password</label>
        <input className="inp-password" id="inp-password" type="text" />
        <Link to="">Enter</Link>
      </div>
    </div>
  );
}
