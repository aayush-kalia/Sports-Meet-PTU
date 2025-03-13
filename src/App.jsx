import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SportsApp from "./SportsApp";
import Homepage from "./Homepage-info";
import ButtonsPage from "./afterLogin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sportsApp" element={<ButtonsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
