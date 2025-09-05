import { Link } from "react-router";
import "../styles/auth.css";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [isExist, setIsExist] = useState<boolean>(true);
  return isExist ? (
    <div className="contentLogin">
      <div className="toRegister">
        <p>First time here?</p>
        <Link
          to=""
          onClick={() => {
            setIsExist(false);
          }}
        >
          Create an Account.
        </Link>
      </div>
      <SignIn />
    </div>
  ) : (
    <div className="contentLogin">
      <SignUp />
    </div>
  );
}
