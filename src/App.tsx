import { Route, Routes } from "react-router";
import "./App.css";
import WelcomePage from "./pages/WelcomPage";
import HomePage from "./pages/HomePage";
import PlayGamePage from "./pages/PlayGamePage";
import LoginPage from "./pages/AuthPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import Footer from "./compes/Footer";
import Header from "./compes/header";
import "./styles/header.css";
import "./styles/footer.css";
import UserContext from "./context/userContext";

export default function App() {
  return (
    <>
      <UserContext>
      <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/play-game" element={<PlayGamePage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </UserContext>
      <Footer />
    </>
  );
}
