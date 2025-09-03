import { useState } from "react";
import "../styles/auth.css";
import { signupUserApi } from "./API/client";

export default function SignUp() {
  async function handleClick() {
    const isTrue = await signupUserApi({
      hash_password: password!,
      username: userName!,
    });
    console.log(isTrue);
    if (isTrue) window.location.reload();
    else alert("Registration failed");
  }

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <div className="input">
        <label htmlFor="inp-user-name">Enter Full name:</label>
        <input
          className="inp-userName"
          id="inp-user-name"
          type="text"
          placeholder="Full Name"
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
      <div className="btn-enter" onClick={handleClick}>
        Enter
      </div>
    </div>
    // </div>
  );
}
