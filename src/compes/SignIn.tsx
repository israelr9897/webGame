import { useState } from "react";
import { useNavigate } from "react-router";
import { loginApi } from "./API/client";
import "../styles/auth.css"

export default function SignIn() {
  async function handleClick() {
    const isExist = await loginApi({
      username: userName!,
      password: password!,
    });
    if (isExist) navigate("/userMenu");
    else alert("The username or password are incorrect");
  }
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <div className="input">
        <label htmlFor="inp-user-name">Enter user name:</label>
        <input
          className="inp-userName"
          id="inp-user-name"
          type="text"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="inp-password">Enter Password:</label>
        <input
          className="inp-password"
          id="inp-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="btn-enter" onClick={handleClick}>Enter</div>
    </div>
  );
}
