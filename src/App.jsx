import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SportsApp from "./SportsApp";
import Homepage from "./Homepage-info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sportsApp" element={<SportsApp />} />
      </Routes>
    </Router>
  );
}

export default App;
