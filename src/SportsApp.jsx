import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SportsApp.css";

const collegeName = "GGI Khanna"; // Etho fetch kar laiyo

function SportsApp() {
  const [selectedEvent, setSelectedEvent] = useState({});
  const [athleteData, setAthleteData] = useState({});
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
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const handleEventChange = (eventName, value) => {
    setSelectedEvent((prev) => ({
      ...prev,
      [eventName]: value,
    }));
    setAthleteData((prev) => ({
      ...prev,
      [eventName]: { ...prev[eventName], athlete: value },
    }));
  };
  const handleAthleteDataChange = (eventName, field, value) => {
    setAthleteData((prev) => ({
      ...prev,
      [eventName]: {
        ...prev[eventName],
        [field]: value,
      },
    }));
  };
  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSubmit = () => {
    for (let event of events) {
      if (
        selectedEvent[event] &&
        athleteData[event] &&
        athleteData[event].dob
      ) {
        const age = calculateAge(athleteData[event].dob);
        if (age > 25) {
          alert(
            `The athlete for ${event} is ${age} years old, which is over the allowed age of 25. Please correct the Date of Birth.`
          );
          return;
        }
      }
    }
    alert("Form Submitted!");
  };
  return (
    <div className="sports-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="college-name">College Name</div>
        <div className="nav-buttons">
          <button className="support-btn">Support</button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="background">
        <h2 className="welcome-text">Welcome to Sports Meet, {collegeName}</h2>
      </div>

      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-title">{event}</div>
            <select
              className="dropdown"
              onChange={(e) => handleEventChange(event, e.target.value)}
              value={selectedEvent[event] || ""}
            >
              <option value="">Select Athlete</option>
              <option value="Athlete 1">Athlete 1</option>
              <option value="Athlete 2">Athlete 2</option>
            </select>

            {selectedEvent[event] && (
              <div className="athlete-form">
                <h4>{selectedEvent[event]}</h4>
                <input
                  type="text"
                  placeholder="Name"
                  value={athleteData[event]?.name || ""}
                  onChange={(e) =>
                    handleAthleteDataChange(event, "name", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="URN"
                  value={athleteData[event]?.urn || ""}
                  onChange={(e) =>
                    handleAthleteDataChange(event, "urn", e.target.value)
                  }
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={athleteData[event]?.dob || ""}
                  onChange={(e) =>
                    handleAthleteDataChange(event, "dob", e.target.value)
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleAthleteDataChange(event, "idCard", e.target.files[0])
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="submit-container">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default SportsApp;
