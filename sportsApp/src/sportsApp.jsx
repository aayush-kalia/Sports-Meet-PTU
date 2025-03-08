import { useState } from "react";
import "./SportsApp.css";
const collegeName = "GGI Khanna"; // Etho fetch kar laiyo

function SportsApp() {
  const [selectedEvent, setSelectedEvent] = useState({});
  const events = [
    "100m Race",
    "200m Race",
    "400m Race",
    "800m Race",
    "1500m Race",
    "5000m Race",
    "10000m Race",
    "110m Hurdles",
    "400m Hurdles",
    "Long Jump",
    "Triple Jump",
    "High Jump",
    "Shot Put",
    "Discuss Throw",
    "Javelin Throw",
    "Hammer Throw",
    "4x100m Relay",
    "4x400m Relay",
  ];

  const handleEventChange = (eventName, value) => {
    setSelectedEvent((prev) => ({
      ...prev,
      [eventName]: value,
    }));
  };

  return (
    <div className="sports-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="college-name">College Name</div>
        <div className="nav-buttons">
          <button className="support-btn">Support</button>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Background Image Section */}
      <div className="background">
        <h2 className="welcome-text">Welcome to Sports Meet, {collegeName}</h2>
      </div>

      {/* Events Section */}
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3 className="event-title">{event}</h3>
            <select
              className="dropdown"
              onChange={(e) => handleEventChange(event, e.target.value)}
            >
              <option value="">Select Athlete</option>
              <option value="Athlete1">Athlete 1</option>
              <option value="Athlete2">Athlete 2</option>
            </select>

            {/* Athlete Form */}
            {selectedEvent[event] && (
              <div className="athlete-form">
                <h4>{selectedEvent[event]}</h4>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="URN" />
                <input type="date" placeholder="Date of Birth" />
                <input type="file" accept="image/*" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsApp;
