import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { loginApi} from "./API/playerApi";
import "../styles/auth.css";
import { userContext, type User } from "../context/userContext";

function saveOnLocalStorge(player:User){
  localStorage.setItem("user", JSON.stringify(player))
}

export default function SignIn() {
  const user = useContext(userContext);
  async function handleClick() {
    const player:User | false = await loginApi({
      username: userName!,
      password: password!,
    });
    // console.log(player)
    if (player) {
      saveOnLocalStorge(player)
      setMsg("✅ Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      user?.setUser(player)
    } else setMsg("❌ The username or password are incorrect");
  }
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [msg, setMsg] = useState<string | null>();
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
      <div className="btn-enter" onClick={handleClick}>
        Enter
      </div>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
