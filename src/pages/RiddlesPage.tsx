import Riddles from "../compes/Riddles";
import "../styles/riddles.css";
import { userContext } from "../context/userContext";
import { useContext } from "react";

export default function RiddlesPage() {
  const user = useContext(userContext);
  const IsAllowed = user?.user.role === "user" || user?.user.role === "admin";
  return (
    <div className="contentRiddles">
      {IsAllowed ? <Riddles /> : <h1 className="error">404 Page not found</h1>}
    </div>
  );
}
