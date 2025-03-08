import { useState } from "react";
import "./SportsApp.css";

function SportsApp() {
  const [selectedEvent, setSelectedEvent] = useState({});
  const events = [
    "100m Race",
    "200m Race",
    "400m Race",
    "Long Jump",
    "High Jump",
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
        <h2 className="welcome-text">Welcome to the Sports Meet</h2>
      </div>

      {/* Events Section */}
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event}</h3>
            <select onChange={(e) => handleEventChange(event, e.target.value)}>
              <option value="">Select Event</option>
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
