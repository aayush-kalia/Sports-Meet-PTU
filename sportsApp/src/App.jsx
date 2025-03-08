import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SportsApp from "./sportsApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sportsApp" element={<SportsApp />} />
      </Routes>
    </Router>
  );
}

export default App;
